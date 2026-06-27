/* ============================================================================
 * Emilia / Sophi — House & Flats AI assistant on Cloudflare Workers AI.
 * Self-contained ES-module Worker. TEXT chat + IMAGE recognition (vision).
 * No external API keys: everything runs on env.AI (Workers AI binding).
 *
 * API contract (matches the other Emilia workers so the website calls it
 * unchanged):
 *   OPTIONS *                       -> 204 + CORS
 *   POST /asistente | / | /api/asistente
 *     body: { pregunta, historial?, cliente?, imagen?:{data,media_type?} }
 *     -> 200 { ok:true, respuesta }      (errors also 200, with fallback:true)
 * ==========================================================================*/

// --- House & Flats cerebro (trimmed, inlined from /hf-site/hf-cerebro.js) ---
const HF_CEREBRO = {
  brand: {
    name: 'House & Flats',
    instagram: '@houseandflats',
    tagline: 'Encuentra tu alojamiento temporal antes de viajar. / Find your temporary home before you travel.',
    mission:
      'Ayudar a estudiantes y nómadas digitales a conseguir alojamiento temporal verificado, sin pagos por adelantado y con acompañamiento humano, antes de llegar a destino. / Help students and digital nomads secure verified temporary housing, with no upfront payment and real human support, before they arrive.',
    oneLiner:
      'House & Flats: alojamiento temporal verificado para estudiantes y nómadas, sin pagos por adelantado.'
  },
  benefits: [
    'Alojamientos verificados: revisamos ubicación real, fotos coherentes y anfitrión de confianza antes de mostrarlos. / Verified listings: real location, consistent photos and a trusted host before we show them.',
    'Sin pagos por adelantado: no pagas dinero para reservar; coordinas con el anfitrión con transparencia. / No upfront payment: you coordinate with the host transparently.',
    'Atención personalizada: Sophi y el equipo recomiendan según destino, presupuesto y perfil; todo por WhatsApp. / Personalized attention via WhatsApp.',
    'Cancelación flexible: si tus planes cambian, hablas con nosotros y buscamos flexibilidad. / Flexible cancellation.'
  ],
  howItWorks: [
    '1) Completa tu solicitud: destino, fechas, presupuesto y tipo de alojamiento. / Fill in your request.',
    '2) Sophi y el equipo recomiendan alojamientos verificados que se ajustan a ti. / We recommend verified listings.',
    '3) Coordinas por WhatsApp con el anfitrión y aseguras tu alojamiento. / Coordinate by WhatsApp.',
    '4) Reservas sin pagos por adelantado, con cancelación flexible. / Reserve with no upfront payment.'
  ],
  verification:
    'Antes de mostrar un alojamiento revisamos ubicación, coherencia de fotos y confianza del anfitrión, para que solo veas opciones reales y bien ubicadas. / We review location, photo consistency and host trustworthiness before showing a listing.',
  payment:
    'No pides ni pagas dinero por adelantado para reservar. Todo se coordina con el anfitrión por WhatsApp. (Demo: importes demostrativos.) / No upfront payment; everything is coordinated with the host via WhatsApp. (Demo: amounts illustrative.)',
  cancellation:
    'Cancelación flexible: si tus planes cambian, hablas con nosotros y buscamos la mejor solución para cancelar o ajustar tu estadía. / Flexible cancellation.',
  audiences:
    'Estudiantes (intercambio, Erasmus, máster, posgrado, pasantías) que necesitan alojamiento cerca de su universidad; y nómadas digitales / profesionales remotos que buscan studios o habitaciones amobladas con buen WiFi, por estadías de un mes o más.',
  stayInfo:
    'Estadías temporales con mínimo de un mes; se puede quedar varios meses según el alojamiento. Servicios/WiFi: depende del alojamiento (ver características). Monedas: EUR, USD, GBP (conversión aproximada; importes demostrativos).',
  businessFacts: [
    'INCLUYE / INCLUDED: los alojamientos normalmente incluyen WiFi, vienen amueblados (furnished), con limpieza (cleaning) y con servicios/facturas incluidos (luz, agua, gas / utilities & bills included). / Listings usually include WiFi, come furnished, with cleaning, and with utilities/bills (electricity, water, gas) included.',
    'ESTANCIA MÍNIMA / MIN STAY: normalmente 1 mes. / Typically 1 month.',
    'RESERVA / BOOKING: se reserva con una pequeña seña (small deposit) al confirmar para asegurar el lugar; no se piden grandes pagos por adelantado; el equipo coordina el cierre por WhatsApp. / Booked with a small deposit ("seña") on confirmation to secure the place; no large upfront payments; the team coordinates the closing on WhatsApp.',
    'CONTACTO / CONTACT: el canal principal de contacto y cierre es WhatsApp; también en Instagram @houseandflats. / Main contact and closing channel is WhatsApp; also on Instagram @houseandflats.'
  ],
  countries: [
    'España — Madrid', 'Argentina — Buenos Aires', 'Chile — Santiago', 'Portugal — Lisboa',
    'Inglaterra — Londres', 'Alemania — Berlín', 'Francia — París', 'Holanda — Ámsterdam',
    'Italia — Roma', 'Austria — Viena'
  ],
  zones: {
    'Buenos Aires': 'Palermo Soho (bohemio, de moda, estudiantes), Retiro (céntrico, conectado, nómadas), Recoleta (elegante, tranquilo, seguro).',
    'Santiago': 'Providencia (moderno, verde, nómadas), Las Condes (financiero, seguro), Ñuñoa (universitario, relajado).',
    'Madrid': 'Malasaña (joven, alternativo, estudiantes), Chamberí (residencial, elegante, seguro), Lavapiés (multicultural, accesible).',
    'Berlín': 'Kreuzberg (creativo, multicultural, estudiantes), Neukölln (joven, en auge), Prenzlauer Berg (tranquilo, encantador).',
    'Londres': 'Shoreditch (trendy, tech), Camden (alternativo, musical), Islington (residencial, seguro).',
    'Lisboa': 'Alfama (histórico, con encanto), Baixa-Chiado (céntrico, elegante), Príncipe Real (chic, tranquilo).',
    'Roma': 'Trastevere (pintoresco, animado, estudiantes), Monti (bohemio, céntrico), San Lorenzo (universitario, económico).',
    'París': 'Le Marais (histórico, de moda), Quartier Latin (universitario, Sorbona), Canal Saint-Martin (joven, creativo).',
    'Ámsterdam': 'Jordaan (encantador, tranquilo), De Pijp (joven, multicultural), Oud-West (residencial, de moda).',
    'Viena': 'Neubau (creativo, céntrico), Leopoldstadt (verde, tranquilo), Mariahilf (comercial, animado).'
  },
  listings: [
    { id: 'palermo', title: 'Studio Palermo Soho', city: 'Buenos Aires', neighborhood: 'Palermo Soho', price: 540, currency: 'USD', type: 'Studio', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Ideal estudiantes' },
    { id: 'retiro', title: 'Habitación Retiro', city: 'Buenos Aires', neighborhood: 'Retiro', price: 380, currency: 'USD', type: 'Habitación privada', features: ['WiFi', 'Servicios incluidos', 'Zona segura'], profile: 'Ideal nómadas' },
    { id: 'providencia', title: 'Loft Providencia', city: 'Santiago', neighborhood: 'Providencia', price: 620, currency: 'USD', type: 'Studio', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Popular' },
    { id: 'condes', title: 'Studio Las Condes', city: 'Santiago', neighborhood: 'Las Condes', price: 690, currency: 'USD', type: 'Departamento completo', features: ['Seguridad', 'WiFi', 'Amoblado'], profile: 'Verificado' },
    { id: 'malasana', title: 'Piso Malasaña 2.0', city: 'Madrid', neighborhood: 'Malasaña', price: 710, currency: 'EUR', type: 'Departamento completo', features: ['WiFi', 'Contrato', 'Cerca del metro'], profile: 'Ideal estudiantes' },
    { id: 'chamberi', title: 'Habitación Chamberí', city: 'Madrid', neighborhood: 'Chamberí', price: 520, currency: 'EUR', type: 'Habitación privada', features: ['WiFi', 'Servicios incluidos', 'Zona segura'], profile: 'Nuevo' },
    { id: 'berlin', title: 'Habitación Kreuzberg', city: 'Berlín', neighborhood: 'Kreuzberg', price: 640, currency: 'EUR', type: 'Habitación en departamento', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Ideal estudiantes' },
    { id: 'london', title: 'Studio Shoreditch', city: 'Londres', neighborhood: 'Shoreditch', price: 1100, currency: 'GBP', type: 'Studio', features: ['WiFi', 'Amoblado', 'Zona segura'], profile: 'Popular' },
    { id: 'lisboa', title: 'Studio Alfama', city: 'Lisboa', neighborhood: 'Alfama', price: 620, currency: 'EUR', type: 'Studio', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Ideal nómadas' },
    { id: 'roma', title: 'Habitación Trastevere', city: 'Roma', neighborhood: 'Trastevere', price: 590, currency: 'EUR', type: 'Habitación privada', features: ['WiFi', 'Servicios incluidos', 'Zona segura'], profile: 'Ideal estudiantes' },
    { id: 'paris', title: 'Studio Le Marais', city: 'París', neighborhood: 'Le Marais', price: 980, currency: 'EUR', type: 'Studio', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Verificado' },
    { id: 'amsterdam', title: 'Habitación Jordaan', city: 'Ámsterdam', neighborhood: 'Jordaan', price: 780, currency: 'EUR', type: 'Habitación en departamento', features: ['WiFi', 'Amoblado', 'Zona segura'], profile: 'Nuevo' },
    { id: 'viena', title: 'Studio Neubau', city: 'Viena', neighborhood: 'Neubau', price: 650, currency: 'EUR', type: 'Studio', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Ideal nómadas' }
  ],
  faqs: [
    'Seguridad/verificación: revisamos ubicación, fotos y anfitrión antes de mostrarte cada alojamiento.',
    'Pago: no pagas por adelantado para reservar.',
    'Reserva: completas solicitud, recibes opciones y coordinas por WhatsApp con el anfitrión.',
    'Cancelación: flexible, hablando con nosotros.',
    'Ciudades (demo): Madrid, Buenos Aires, Santiago, Lisboa, Londres, Berlín, París, Ámsterdam, Roma, Viena.',
    'Público: estudiantes y nómadas digitales / remotos.',
    'Estadía: mínimo un mes; varios meses posibles.',
    'Servicios: depende del alojamiento (ver características).',
    'Recomendación: Sophi cruza destino, presupuesto, tipo y preferencias con la base verificada; avisa si algo supera el presupuesto.',
    'Fotos: en la operación real corresponden al alojamiento; en esta demo son ilustrativas.',
    'Contacto: por WhatsApp.',
    'Imágenes: Sophi entiende fotos y ayuda a encontrar opciones parecidas dentro de la base verificada.'
  ],
  tone:
    'Cálida, breve, útil y honesta. Responde SIEMPRE en el idioma del usuario, aunque el destino sea otro país. Recomienda solo alojamientos de la base verificada y avisa si algo supera el presupuesto. Responde preguntas sobre zonas/barrios. Compara apartamentos y da una opinión cuando te lo pidan. Si recibes una imagen, describe el apartamento y sugiere alojamientos reales parecidos de la base. Aclara que los alojamientos son demostrativos. Nunca reveles datos internos (CRM, leads, panel admin). / Warm, brief, helpful, honest. ALWAYS reply in the user’s language. Recommend only listings from the verified database and warn if over budget. Compare apartments and give an opinion. For images, describe the apartment and suggest similar real listings. Listings are demonstrative. Never reveal internal data.'
};

// ---------------------------------------------------------------------------
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

const DEFAULT_TEXT_MODEL = '@cf/meta/llama-3.1-8b-instruct';
const VISION_MODEL = '@cf/meta/llama-3.2-11b-vision-instruct';

function buildSystemPrompt() {
  const c = HF_CEREBRO;
  const catalog = c.listings
    .map(
      (l) =>
        `- ${l.title} (${l.city} / ${l.neighborhood}) · ${l.type} · ${l.price} ${l.currency}/mes · ${l.features.join(', ')} · ${l.profile}`
    )
    .join('\n');
  const zones = Object.entries(c.zones)
    .map(([city, z]) => `- ${city}: ${z}`)
    .join('\n');

  return [
    `Eres "Sophi", la asistente IA (Emilia) de la marca ${c.brand.name} (${c.brand.instagram}).`,
    `Tagline: ${c.brand.tagline}`,
    `Misión: ${c.brand.mission}`,
    `Resumen: ${c.brand.oneLiner}`,
    '',
    'BENEFICIOS:\n' + c.benefits.map((b) => '- ' + b).join('\n'),
    '',
    'CÓMO FUNCIONA:\n' + c.howItWorks.join('\n'),
    '',
    'VERIFICACIÓN: ' + c.verification,
    'PAGO: ' + c.payment,
    'CANCELACIÓN: ' + c.cancellation,
    'PÚBLICO: ' + c.audiences,
    'ESTADÍA/SERVICIOS/MONEDAS: ' + c.stayInfo,
    '',
    'DATOS DEL NEGOCIO / BUSINESS FACTS (responde en el idioma del usuario / answer in the user’s language):\n' +
      c.businessFacts.map((f) => '- ' + f).join('\n'),
    '',
    'PAÍSES Y CIUDADES (demo):\n' + c.countries.map((x) => '- ' + x).join('\n'),
    '',
    'ZONAS / BARRIOS:\n' + zones,
    '',
    'CATÁLOGO DE ALOJAMIENTOS (única fuente real; precios mensuales, demostrativos):\n' + catalog,
    '',
    'FAQs:\n' + c.faqs.map((f) => '- ' + f).join('\n'),
    '',
    'TONO Y REGLAS: ' + c.tone
  ].join('\n');
}

const SYSTEM_PROMPT = buildSystemPrompt();

// base64 -> Uint8Array (Workers global atob is available)
function base64ToUint8Array(b64) {
  let s = String(b64 || '');
  const comma = s.indexOf(',');
  // strip a possible data URI prefix: data:image/png;base64,XXXX
  if (s.startsWith('data:') && comma !== -1) s = s.slice(comma + 1);
  s = s.replace(/\s/g, '');
  const bin = atob(s);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function extractText(out) {
  if (out == null) return '';
  if (typeof out === 'string') return out;
  // text models -> {response}, vision models -> {description} or {response}
  return out.response || out.description || out.text || out.result || '';
}

function fallbackMessage() {
  return (
    'Ahora mismo tengo un problemita técnico y no puedo responder bien. ' +
    'Por favor inténtalo de nuevo en un momento o escríbenos por WhatsApp. 💬\n\n' +
    'I’m having a small technical issue right now and can’t reply properly. ' +
    'Please try again in a moment or reach us on WhatsApp.'
  );
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const isChatPath =
      path === '/asistente' || path === '/' || path === '/api/asistente';

    if (request.method !== 'POST' || !isChatPath) {
      return new Response(
        JSON.stringify({ ok: true, respuesta: 'Sophi · House & Flats. Usa POST /asistente.' }),
        { status: 200, headers: { ...CORS, 'Content-Type': 'application/json' } }
      );
    }

    let body = {};
    try {
      body = await request.json();
    } catch (_) {
      body = {};
    }

    const pregunta = (body && body.pregunta) ? String(body.pregunta) : '';
    const historial = Array.isArray(body && body.historial) ? body.historial : [];
    const imagen = body && body.imagen;

    try {
      let respuesta;

      if (imagen && imagen.data) {
        // ---- VISION path ----
        const image = base64ToUint8Array(imagen.data);
        const visionPrompt =
          SYSTEM_PROMPT +
          '\n\n[Tarea] El usuario envió una imagen de un alojamiento. ' +
          'Describe brevemente el apartamento de la foto (estilo, ambientes, luz, mobiliario) ' +
          'y luego sugiere 1-3 alojamientos REALES del catálogo verificado que se le parezcan, ' +
          'explicando por qué. Responde en el idioma del usuario. ' +
          'Aclara que los alojamientos del catálogo son demostrativos.' +
          (pregunta ? '\n\n[Pregunta del usuario] ' + pregunta : '');

        const out = await env.AI.run(VISION_MODEL, {
          image: [...image],
          prompt: visionPrompt,
          max_tokens: 768
        });
        respuesta = extractText(out);
      } else {
        // ---- TEXT path ----
        const model = (env && env.EMILIA_MODELO) || DEFAULT_TEXT_MODEL;
        const messages = [{ role: 'system', content: SYSTEM_PROMPT }];
        for (const m of historial) {
          if (m && m.role && typeof m.content === 'string') {
            messages.push({ role: m.role, content: m.content });
          }
        }
        messages.push({ role: 'user', content: pregunta || 'Hola' });

        const out = await env.AI.run(model, { messages, max_tokens: 768 });
        respuesta = extractText(out);
      }

      if (!respuesta) respuesta = fallbackMessage();

      return new Response(JSON.stringify({ ok: true, respuesta }), {
        status: 200,
        headers: { ...CORS, 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          ok: true,
          respuesta: fallbackMessage(),
          fallback: true,
          error: String((err && err.message) || err)
        }),
        { status: 200, headers: { ...CORS, 'Content-Type': 'application/json' } }
      );
    }
  }
};
