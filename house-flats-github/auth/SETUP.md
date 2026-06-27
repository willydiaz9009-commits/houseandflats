# House & Flats — Cuentas de usuario (Supabase)

Cuentas de usuario con email + OAuth (Google / GitHub) y alojamientos
guardados que viajan contigo entre dispositivos.

**Ya está integrado en el sitio.** El cliente de auth se carga en `index.html`,
el header muestra **Iniciar sesión / Mi cuenta**, y el corazón **Guardar** de las
tarjetas y de la ficha está conectado. Solo falta **un paso real**: crear tu
proyecto Supabase y pegar la URL + anon key.

> **Modo demo:** mientras no configures Supabase, el sitio funciona igual. El
> botón de login lleva a `auth/login.html`, que muestra un aviso de "modo demo",
> y los favoritos se guardan en este navegador (localStorage). En cuanto
> configures las claves, los favoritos empiezan a sincronizarse con la cuenta.

---

## 1. Crea un proyecto de Supabase para House & Flats

- En el dashboard de Supabase, **New project**. Nómbralo p. ej. `house-and-flats`.
- Elige una región cercana a tus usuarios (p. ej. `eu-west` para España) y una
  contraseña de base de datos fuerte (guárdala en privado: no se pega en el código).
- Espera a que termine de aprovisionarse.

> No reutilices proyectos de otros negocios; crea uno dedicado a House & Flats.

## 2. Ejecuta la migración

Aplica `supabase/migrations/0001_auth_profiles_saved.sql`:

- **SQL Editor (lo más fácil):** abre **SQL Editor → New query**, pega el
  contenido del archivo y pulsa **Run**. Es idempotente, así que puedes
  re-ejecutarlo sin problema.
- **CLI:** `supabase link --project-ref <tu-ref>` y luego `supabase db push`.

Esto crea `profiles` y `saved_listings`, el trigger `handle_new_user()`
(crea el perfil al registrarse) y **Row Level Security**, para que cada
usuario solo vea sus propias filas.

## 3. Pon la URL del proyecto + la anon key en el frontend

En el dashboard: **Project Settings → API**. Copia **Project URL** y la clave
**anon / public** (también llamada *publishable key*).

Tienes **dos formas** de configurarlo (elige una):

### Opción A — `auth/config.js` (recomendada, sin tocar el HTML)

Copia la plantilla y rellénala:

```bash
cp auth/config.example.js auth/config.js
```

```js
// auth/config.js
window.HF_SUPABASE = {
  url: 'https://TU-PROYECTO.supabase.co',
  anonKey: 'TU-ANON-KEY'
};
```

`index.html`, `auth/login.html` y `auth/account.html` cargan `auth/config.js`
automáticamente. Si el archivo no existe, el **404 es inofensivo** y el sitio
sigue en modo demo. Una sola configuración sirve para todas las páginas.

### Opción B — directamente en el HTML

En cada página hay un bloque `window.HF_SUPABASE` **comentado**. Descoméntalo y
rellénalo con tus valores (en `index.html`, `auth/login.html` y
`auth/account.html`).

### Sobre las claves

- La **anon key es pública y segura** en el navegador: RLS protege los datos.
- **Nunca** uses ni pegues la **`service_role`** key (ni la contraseña de la BD,
  ni los secretos de OAuth) en ningún archivo del frontend. La `service_role`
  salta RLS y solo debe vivir en el servidor.
- `auth/config.js` puede subirse al repo sin riesgo (solo lleva la anon key). Si
  prefieres no versionarlo, añade `auth/config.js` a tu `.gitignore`.

## 4. Habilita los proveedores Google y GitHub

En **Authentication → Providers**:

- **Google:** crea credenciales OAuth en Google Cloud Console (pantalla de
  consentimiento + cliente de tipo *Web application*). Pega **Client ID** y
  **Client secret** en Supabase y habilita el proveedor.
- **GitHub:** crea una OAuth App en github.com → Settings → Developer settings →
  OAuth Apps. Pega **Client ID** y **Client secret** en Supabase y habilítalo.
- En la URL de callback de cada proveedor, usa el valor que Supabase muestra en
  esa pantalla (tipo `https://TU-PROYECTO.supabase.co/auth/v1/callback`). Los
  secretos los añades **tú en el dashboard**; nunca van en este repo.

## 5. Añade las URLs de redirección / del sitio

En **Authentication → URL Configuration**:

- **Site URL:** la raíz de tu sitio desplegado, p. ej. tu dominio de
  **Cloudflare Pages** (`https://houseandflats.pages.dev`) o tu dominio propio.
- **Redirect URLs:** añade las páginas de login y cuenta desplegadas:
  - `https://houseandflats.pages.dev/auth/login.html`
  - `https://houseandflats.pages.dev/auth/account.html`
  - (y cualquier dominio de preview/staging que uses)

> ⚠️ **OAuth requiere que el sitio esté servido por https.** No funcionará al
> abrir el archivo desde el disco (`file://…`). Usa la URL desplegada (o un
> servidor local, p. ej. `npx serve`) para probar Google/GitHub. El
> email/contraseña funciona igual una vez configuradas las claves.

---

## Cómo funcionan los favoritos

- **Sin sesión (o en modo demo):** el ♡ guarda en `localStorage` de este
  navegador. La primera vez aparece una invitación suave a crear cuenta para
  llevar los favoritos a cualquier dispositivo.
- **Con sesión:** el ♡ usa `HFAuth.saveListing` / `unsaveListing` /
  `listSaved` (Supabase). Al iniciar sesión se **fusiona** lo guardado en local
  con lo de la nube, así no se pierde nada.
- El estado se refleja en los corazones de las tarjetas, en la ficha y en el
  contador del header.

## Prueba rápida

1. Despliega el sitio (o levanta un servidor http) y abre `/auth/login.html`.
2. Crea una cuenta con email/contraseña → confirma por correo si tienes la
   confirmación activa → aterrizas en `/auth/account.html` con tu correo.
3. Prueba **Continuar con Google** / **GitHub** → vuelve a la página de cuenta.
4. En la home, guarda un alojamiento con el ♡ → aparece en **Tus alojamientos
   guardados** y otro usuario no puede verlo (RLS).

## Archivos de esta función

- `auth/supabase-client.js` — inicializa supabase-js (CDN) y expone
  `window.HFAuth`. Es un no-op seguro cuando no está configurado.
- `auth/config.example.js` — plantilla de configuración (cópiala a `config.js`).
- `auth/login.html` — login / registro (email + Google + GitHub).
- `auth/account.html` — panel de cuenta + alojamientos guardados + cerrar sesión.
- `supabase/migrations/0001_auth_profiles_saved.sql` — esquema + RLS.
- En `index.html` / `app.js`: header de cuenta, contador de favoritos y la
  lógica de guardado (`window.HFFav`), que sincroniza local ↔ Supabase.
