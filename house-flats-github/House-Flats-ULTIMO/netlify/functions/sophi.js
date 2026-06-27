// Sophi AI proxy — Netlify Function.
// SECURITY: the Anthropic API key is read from an environment variable.
// NEVER hardcode it here or in the frontend. In Netlify:
//   Site settings -> Environment variables -> add ANTHROPIC_API_KEY
// (Optional later: add a vision/voice provider key the same way.)

const HF = require('../../hf-cerebro.js');

// Pick a localized string from a {es,en,pt,fr,de,nl} map, falling back to es/en.
function loc(map, lang) {
  if (!map) return '';
  return map[lang] || map.es || map.en || '';
}

// Build the system prompt FROM the cerebro so Sophi answers as House & Flats's
// own assistant. Listings are capped so the prompt never grows too large.
function buildSystem(language, destination, currency, dbListings) {
  var L = language || 'es';

  var benefits = (HF.benefits || [])
    .map(function (b) { return '- ' + loc(b.title, L) + ': ' + loc(b.desc, L); })
    .join('\n');

  var steps = (HF.howItWorks || [])
    .map(function (s) { return s.step + ') ' + loc(s.text, L); })
    .join(' ');

  var countries = (HF.countries || [])
    .map(function (c) { return c.name + ' (' + (c.cities || []).join(', ') + ')'; })
    .join('; ');

  var zones = Object.keys(HF.zones || {})
    .map(function (city) {
      var z = (HF.zones[city] || [])
        .map(function (n) { return n.name + ' — ' + loc(n.vibe, L === 'es' ? 'es' : 'en'); })
        .join('; ');
      return city + ': ' + z;
    })
    .join('\n');

  var faqs = (HF.faqs || [])
    .map(function (f) { return 'P: ' + loc(f.q, L) + '\nR: ' + loc(f.a, L); })
    .join('\n');

  // Prefer the listings sent by the live frontend; fall back to the cerebro DB.
  var listings = (Array.isArray(dbListings) && dbListings.length) ? dbListings : (HF.listings || []);
  var listingsJson = JSON.stringify(listings).slice(0, 7000);

  return [
    'Eres Sophi, la asistente oficial de ' + HF.brand.name + ' (' + HF.brand.instagram + '), ' +
      'alojamiento temporal verificado para estudiantes y nómadas digitales.',
    'IMPORTANTE: el nombre de la marca es exactamente "' + HF.brand.name + '". Nunca lo cambies (no uses "360", "AI" ni "Hub").',
    '',
    'MISIÓN: ' + loc(HF.brand.mission, L),
    '',
    'IDIOMA: responde SIEMPRE en el idioma del usuario (código: ' + L + '), aunque el destino sea otro país.',
    'CONTEXTO: destino seleccionado = ' + destination + '; moneda seleccionada = ' + currency +
      '. Los precios pueden mostrarse en EUR/USD/GBP con conversión aproximada; los importes son demostrativos.',
    '',
    'BENEFICIOS:\n' + benefits,
    '',
    'CÓMO FUNCIONA: ' + steps,
    '',
    'VERIFICACIÓN: ' + loc(HF.verification, L),
    'PAGOS: ' + loc(HF.payment, L),
    'CANCELACIÓN: ' + loc(HF.cancellation, L),
    '',
    'PAÍSES Y CIUDADES: ' + countries,
    '',
    'ZONAS / BARRIOS (nivel zona, nunca direcciones exactas):\n' + zones,
    '',
    'PREGUNTAS FRECUENTES:\n' + faqs,
    '',
    'REGLAS:',
    '- Recomienda ÚNICAMENTE alojamientos presentes en la base de datos siguiente. No inventes alojamientos.',
    '- Respeta el presupuesto del usuario; si una opción lo supera, dilo CLARAMENTE.',
    '- Responde preguntas sobre zonas/barrios y puedes comparar apartamentos y dar tu opinión honesta.',
    '- Puedes describir imágenes de alojamientos que te envíen y buscar opciones parecidas dentro de la base.',
    '- Para reservar/contactar, deriva a WhatsApp.',
    '- Aclara que los alojamientos son demostrativos. NUNCA reveles datos internos (CRM, leads, panel admin).',
    '',
    'TONO: ' + loc(HF.tone, L),
    '',
    'BASE DE DATOS DE ALOJAMIENTOS (JSON):',
    listingsJson
  ].join('\n');
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return { statusCode: 200, body: JSON.stringify({ reply: null, note: 'No ANTHROPIC_API_KEY set' }) };

  let body;
  try { body = JSON.parse(event.body || '{}'); } catch (e) { return { statusCode: 400, body: 'Bad JSON' }; }

  const { message = 'Hola', language = 'es', destination = 'España', currency = 'EUR', image, listings = [] } = body;

  const system = buildSystem(language, destination, currency, listings);

  const content = [];
  if (image && image.data) {
    content.push({ type: 'image', source: { type: 'base64', media_type: image.media_type || 'image/jpeg', data: image.data } });
  }
  content.push({ type: 'text', text: message });

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-latest',
        max_tokens: 600,
        system,
        messages: [{ role: 'user', content }]
      })
    });
    const data = await res.json();
    const reply = (data && data.content && data.content[0] && data.content[0].text) || null;
    return { statusCode: 200, headers: { 'content-type': 'application/json' }, body: JSON.stringify({ reply }) };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ reply: null, error: String(e) }) };
  }
};
