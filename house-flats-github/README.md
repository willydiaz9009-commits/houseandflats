# House & Flats — Web demo + Sophi (Emilia)

Demo web premium de **House & Flats**: alojamiento temporal verificado para estudiantes y nómadas digitales. Incluye buscador con mapa, fichas de alojamientos, selectores independientes de **destino / idioma / moneda** (6 idiomas, EUR·USD·GBP) y **Sophi**, la asistente IA ("Emilia") con su propio cerebro del negocio.

## Estructura
- `index.html`, `styles.css`, `app.js` — web pública.
- `hf-cerebro.js` — base de conocimiento de Sophi (marca, países, alojamientos, zonas, FAQs en 6 idiomas).
- `proposal.html` — propuesta de negocio (privada, no enlazada en el menú público).
- `admin.html` — panel admin oculto (login demo).
- `auth/` — login y cuentas con **Supabase OAuth** (`login.html`, `account.html`, `supabase-client.js`, `SETUP.md`).
- `supabase/migrations/` — esquema SQL (profiles + saved_listings, RLS).
- `emilia-worker/` — **Cloudflare Worker** "Emilia" (texto + visión por Workers AI, sin claves). Endpoint `POST /asistente`.

## Despliegue
- **Web:** Cloudflare Pages (sube esta carpeta / un zip).
- **Sophi (motor):** desplegar `emilia-worker` (`cd emilia-worker && npx wrangler deploy`) y poner su URL en `window.EMILIA_URL`.
- **Login:** crear proyecto Supabase, correr la migración, completar `HF_SUPABASE` (ver `auth/SETUP.md`).

## Seguridad
Sin claves ni secretos en el código (van en variables de entorno). Sin direcciones exactas de alojamientos (solo zona). Datos de alojamientos demostrativos.
