/* House & Flats — configuración de Supabase (PLANTILLA)
 *
 * CÓMO USAR:
 *   1) Copia este archivo a  auth/config.js
 *   2) Pega la URL de tu proyecto y la anon / publishable key.
 *
 * index.html carga auth/config.js automáticamente (si no existe, el 404 es
 * inofensivo y el sitio sigue en "modo demo"). Así puedes configurar las
 * cuentas SIN editar index.html.
 *
 * La anon key es PÚBLICA y segura para el navegador: las políticas RLS de
 * Supabase protegen los datos. NUNCA pongas aquí la service_role key, la
 * contraseña de la base de datos ni ningún secreto de OAuth.
 */
window.HF_SUPABASE = {
  url: 'https://YOUR-PROJECT.supabase.co',
  anonKey: 'YOUR-ANON-KEY'
};
