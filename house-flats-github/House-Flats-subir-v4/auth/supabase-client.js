/* House & Flats — Supabase Auth client (self-contained)
 *
 * Configure by defining, BEFORE this script loads:
 *   window.HF_SUPABASE = {
 *     url: 'https://YOUR-PROJECT.supabase.co',
 *     anonKey: 'YOUR-ANON-KEY'   // anon / publishable key — public & safe for the browser
 *   };
 *
 * NEVER put the service_role key here. The anon key is the only key the
 * frontend should ever see.
 *
 * If HF_SUPABASE is missing/empty, every helper becomes a graceful no-op so the
 * demo keeps running locally ("modo demo"). Check window.HFAuth.configured.
 *
 * Loads supabase-js v2 from CDN. Exposes helpers on window.HFAuth.
 */
(function () {
  'use strict';

  var CFG = window.HF_SUPABASE || null;
  var CONFIGURED = !!(CFG && CFG.url && CFG.anonKey &&
    CFG.url.indexOf('YOUR-PROJECT') === -1 &&
    CFG.anonKey.indexOf('YOUR-ANON-KEY') === -1);

  var SUPABASE_CDN =
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';

  // Resolve once the client (or null in demo mode) is ready.
  var clientPromise = null;

  function warn(msg) {
    try { console.warn('[HFAuth] ' + msg); } catch (e) {}
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (window.supabase && window.supabase.createClient) return resolve();
      var existing = document.querySelector('script[data-hf-supabase]');
      if (existing) {
        existing.addEventListener('load', function () { resolve(); });
        existing.addEventListener('error', function () { reject(new Error('cdn load failed')); });
        return;
      }
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.setAttribute('data-hf-supabase', '1');
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('cdn load failed')); };
      document.head.appendChild(s);
    });
  }

  function getClient() {
    if (!CONFIGURED) {
      warn('HF_SUPABASE is not configured — running in demo mode (auth disabled).');
      return Promise.resolve(null);
    }
    if (clientPromise) return clientPromise;
    clientPromise = loadScript(SUPABASE_CDN)
      .then(function () {
        if (!window.supabase || !window.supabase.createClient) {
          throw new Error('supabase-js did not load');
        }
        return window.supabase.createClient(CFG.url, CFG.anonKey, {
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
        });
      })
      .catch(function (err) {
        warn('Could not initialize Supabase: ' + err.message);
        return null;
      });
    return clientPromise;
  }

  function redirectTo() {
    // After OAuth, come back to the account page in the same /auth/ folder.
    try {
      return new URL('account.html', window.location.href).href;
    } catch (e) {
      return window.location.origin + '/auth/account.html';
    }
  }

  // ---- Public API -----------------------------------------------------------

  function signUpEmail(email, password, name) {
    return getClient().then(function (c) {
      if (!c) return { data: null, error: { message: 'demo' }, demo: true };
      return c.auth.signUp({
        email: email,
        password: password,
        options: { data: { full_name: name || '' }, emailRedirectTo: redirectTo() }
      });
    });
  }

  function signInEmail(email, password) {
    return getClient().then(function (c) {
      if (!c) return { data: null, error: { message: 'demo' }, demo: true };
      return c.auth.signInWithPassword({ email: email, password: password });
    });
  }

  function signInOAuth(provider) {
    return getClient().then(function (c) {
      if (!c) {
        warn('OAuth requested in demo mode — configure HF_SUPABASE first.');
        return { data: null, error: { message: 'demo' }, demo: true };
      }
      return c.auth.signInWithOAuth({
        provider: provider, // 'google' | 'github'
        options: { redirectTo: redirectTo() }
      });
    });
  }

  function signOut() {
    return getClient().then(function (c) {
      if (!c) return { error: null, demo: true };
      return c.auth.signOut();
    });
  }

  function getUser() {
    return getClient().then(function (c) {
      if (!c) return null;
      return c.auth.getUser().then(function (res) {
        return (res && res.data && res.data.user) ? res.data.user : null;
      });
    });
  }

  function onAuthChange(cb) {
    return getClient().then(function (c) {
      if (!c) { if (typeof cb === 'function') cb(null); return null; }
      // Fire once with the current user, then on every change.
      c.auth.getUser().then(function (res) {
        cb((res && res.data && res.data.user) ? res.data.user : null);
      });
      var sub = c.auth.onAuthStateChange(function (_event, session) {
        cb(session ? session.user : null);
      });
      return sub;
    });
  }

  function saveListing(id) {
    return getClient().then(function (c) {
      if (!c) return { data: null, error: { message: 'demo' }, demo: true };
      return c.auth.getUser().then(function (res) {
        var user = res && res.data && res.data.user;
        if (!user) return { data: null, error: { message: 'not authenticated' } };
        return c.from('saved_listings')
          .upsert({ user_id: user.id, listing_id: String(id) },
                  { onConflict: 'user_id,listing_id' })
          .select();
      });
    });
  }

  function unsaveListing(id) {
    return getClient().then(function (c) {
      if (!c) return { data: null, error: { message: 'demo' }, demo: true };
      return c.auth.getUser().then(function (res) {
        var user = res && res.data && res.data.user;
        if (!user) return { data: null, error: { message: 'not authenticated' } };
        return c.from('saved_listings')
          .delete()
          .eq('user_id', user.id)
          .eq('listing_id', String(id));
      });
    });
  }

  function listSaved() {
    return getClient().then(function (c) {
      if (!c) return [];
      return c.from('saved_listings')
        .select('listing_id, created_at')
        .order('created_at', { ascending: false })
        .then(function (res) {
          return (res && res.data) ? res.data : [];
        });
    });
  }

  // ---- Password recovery ----------------------------------------------------

  function resetRedirectTo() {
    // The reset email links back to /auth/reset.html (same folder as this page).
    try {
      return new URL('reset.html', window.location.href).href;
    } catch (e) {
      return window.location.origin + '/auth/reset.html';
    }
  }

  // Send the "restablecer contraseña" email.
  function resetPassword(email) {
    return getClient().then(function (c) {
      if (!c) return { data: null, error: { message: 'demo' }, demo: true };
      return c.auth.resetPasswordForEmail(email, { redirectTo: resetRedirectTo() });
    }).catch(function (err) {
      return { data: null, error: { message: (err && err.message) || 'reset failed' } };
    });
  }

  // Set a new password (called from reset.html within the recovery session).
  function updatePassword(newPassword) {
    return getClient().then(function (c) {
      if (!c) return { data: null, error: { message: 'demo' }, demo: true };
      return c.auth.updateUser({ password: newPassword });
    }).catch(function (err) {
      return { data: null, error: { message: (err && err.message) || 'update failed' } };
    });
  }

  // ---- Solicitudes (client form submissions) --------------------------------

  // Insert one solicitud for the current user. Demo-safe.
  function saveRequest(data) {
    return getClient().then(function (c) {
      if (!c) return { data: null, error: { message: 'demo' }, demo: true };
      return c.auth.getUser().then(function (res) {
        var user = res && res.data && res.data.user;
        if (!user) return { data: null, error: { message: 'not authenticated' } };
        data = data || {};
        var row = {
          user_id: user.id,
          destino: data.destino != null ? String(data.destino) : null,
          ciudad: data.ciudad != null ? String(data.ciudad) : null,
          fechas: data.fechas != null ? String(data.fechas) : null,
          presupuesto: data.presupuesto != null ? String(data.presupuesto) : null,
          perfil: data.perfil != null ? String(data.perfil) : null,
          tipo: data.tipo != null ? String(data.tipo) : null,
          moneda: data.moneda != null ? String(data.moneda) : null,
          mensaje: data.mensaje != null ? String(data.mensaje) : null,
          payload: data.payload != null ? data.payload : null
        };
        return c.from('solicitudes').insert(row).select();
      });
    }).catch(function (err) {
      return { data: null, error: { message: (err && err.message) || 'save failed' } };
    });
  }

  // List the current user's solicitudes, newest first. Demo-safe.
  function listRequests() {
    return getClient().then(function (c) {
      if (!c) return [];
      return c.from('solicitudes')
        .select('id, destino, ciudad, fechas, presupuesto, perfil, tipo, moneda, mensaje, payload, created_at')
        .order('created_at', { ascending: false })
        .then(function (res) {
          return (res && res.data) ? res.data : [];
        });
    }).catch(function () { return []; });
  }

  window.HFAuth = {
    configured: CONFIGURED,
    getClient: getClient,
    signUpEmail: signUpEmail,
    signInEmail: signInEmail,
    signInOAuth: signInOAuth,
    signOut: signOut,
    getUser: getUser,
    onAuthChange: onAuthChange,
    saveListing: saveListing,
    unsaveListing: unsaveListing,
    listSaved: listSaved,
    resetPassword: resetPassword,
    updatePassword: updatePassword,
    saveRequest: saveRequest,
    listRequests: listRequests
  };

  if (!CONFIGURED) {
    warn('Demo mode active. Define window.HF_SUPABASE { url, anonKey } to enable auth.');
  }
})();
