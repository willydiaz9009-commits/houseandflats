/* ============================================================================
 * HF_CEREBRO — House & Flats knowledge base ("cerebro") for Sophi.
 * UMD: works in the browser (window.HF_CEREBRO) and in Node (module.exports).
 * Single source of truth for brand facts, benefits, zones, FAQs and the
 * demonstrative listings DB. Built ONLY from the real site data (app.js +
 * index.html). Never invent listings or expose internal CRM/leads/admin data.
 * ==========================================================================*/
(function (root) {
  var HF_CEREBRO = {

    negocio: {
      incluye: {
        items: ['WiFi', 'Amueblado', 'Limpieza', 'Servicios/facturas'],
        es: 'Los alojamientos suelen incluir WiFi, vienen amueblados, con limpieza y con servicios/facturas (luz, agua, gas) incluidos.',
        en: 'Listings usually include WiFi, come furnished, with cleaning and with utilities/bills (electricity, water, gas) included.',
        pt: 'Os alojamentos costumam incluir WiFi, vêm mobilados, com limpeza e com serviços/contas (luz, água, gás) incluídos.',
        fr: 'Les logements incluent généralement le WiFi, sont meublés, avec ménage et charges (électricité, eau, gaz) comprises.',
        de: 'Die Unterkünfte beinhalten meist WLAN, sind möbliert, mit Reinigung und mit Nebenkosten (Strom, Wasser, Gas) inklusive.',
        nl: 'Woningen bevatten meestal WiFi, zijn gemeubileerd, met schoonmaak en met nutsvoorzieningen (elektriciteit, water, gas) inbegrepen.'
      },
      estanciaMinima: {
        valor: '1 mes',
        es: 'La estancia mínima habitual es de 1 mes.',
        en: 'The usual minimum stay is 1 month.',
        pt: 'A estadia mínima habitual é de 1 mês.',
        fr: 'La durée minimale de séjour habituelle est d’un mois.',
        de: 'Der übliche Mindestaufenthalt beträgt 1 Monat.',
        nl: 'De gebruikelijke minimale verblijfsduur is 1 maand.'
      },
      reserva: {
        es: 'Se reserva con una seña al confirmar para asegurar el lugar; sin grandes pagos por adelantado. El cierre se coordina con el equipo por WhatsApp.',
        en: 'You book with a small deposit on confirmation to secure the place; no large upfront payments. The team coordinates the closing on WhatsApp.',
        pt: 'Reserva-se com um sinal ao confirmar para garantir o lugar; sem grandes pagamentos antecipados. A equipa coordena o fecho por WhatsApp.',
        fr: 'On réserve avec un acompte à la confirmation pour garantir le logement ; sans gros paiements à l’avance. L’équipe finalise par WhatsApp.',
        de: 'Gebucht wird mit einer kleinen Anzahlung bei Bestätigung, um den Platz zu sichern; ohne große Vorauszahlungen. Das Team koordiniert den Abschluss per WhatsApp.',
        nl: 'Je boekt met een kleine aanbetaling bij bevestiging om de plek te reserveren; zonder grote vooruitbetalingen. Het team regelt de afronding via WhatsApp.'
      },
      contacto: {
        principal: 'WhatsApp',
        instagram: '@houseandflats',
        es: 'El canal principal de contacto y cierre es WhatsApp. También están en Instagram (@houseandflats).',
        en: 'The main contact and closing channel is WhatsApp. They are also on Instagram (@houseandflats).',
        pt: 'O principal canal de contacto e fecho é o WhatsApp. Também estão no Instagram (@houseandflats).',
        fr: 'Le principal canal de contact et de finalisation est WhatsApp. Ils sont aussi sur Instagram (@houseandflats).',
        de: 'Der wichtigste Kontakt- und Abschlusskanal ist WhatsApp. Sie sind auch auf Instagram (@houseandflats).',
        nl: 'Het belangrijkste contact- en afsluitkanaal is WhatsApp. Ze zijn ook op Instagram (@houseandflats).'
      }
    },

    brand: {
      name: 'House & Flats',
      instagram: '@houseandflats',
      tagline: {
        es: 'Encuentra tu alojamiento temporal antes de viajar.',
        en: 'Find your temporary home before you travel.',
        pt: 'Encontra o teu alojamento temporário antes de viajares.',
        fr: 'Trouve ton logement temporaire avant de partir.',
        de: 'Finde deine Unterkunft auf Zeit, bevor du reist.',
        nl: 'Vind je tijdelijke woning voordat je reist.'
      },
      mission: {
        es: 'Ayudar a estudiantes y nómadas digitales a conseguir alojamiento temporal verificado, sin pagos por adelantado y con acompañamiento humano, antes de llegar a destino.',
        en: 'Help students and digital nomads secure verified temporary housing, with no upfront payment and real human support, before they arrive.',
        pt: 'Ajudar estudantes e nómadas digitais a conseguir alojamento temporário verificado, sem pagamentos antecipados e com acompanhamento humano, antes de chegar.',
        fr: 'Aider les étudiants et nomades numériques à trouver un logement temporaire vérifié, sans paiement à l’avance et avec un accompagnement humain, avant leur arrivée.',
        de: 'Studierenden und digitalen Nomaden helfen, geprüfte Unterkünfte auf Zeit ohne Vorauszahlung und mit menschlicher Betreuung zu finden, bevor sie ankommen.',
        nl: 'Studenten en digitale nomaden helpen geverifieerde tijdelijke woonruimte te vinden, zonder vooruitbetaling en met echte menselijke begeleiding, vóór aankomst.'
      },
      oneLiner: {
        es: 'House & Flats: alojamiento temporal verificado para estudiantes y nómadas, sin pagos por adelantado.',
        en: 'House & Flats: verified temporary housing for students and nomads, with no upfront payment.',
        pt: 'House & Flats: alojamento temporário verificado para estudantes e nómadas, sem pagamentos antecipados.',
        fr: 'House & Flats : logement temporaire vérifié pour étudiants et nomades, sans paiement à l’avance.',
        de: 'House & Flats: geprüfte Unterkünfte auf Zeit für Studierende und Nomaden, ohne Vorauszahlung.',
        nl: 'House & Flats: geverifieerde tijdelijke woningen voor studenten en nomaden, zonder vooruitbetaling.'
      }
    },

    benefits: [
      {
        icon: '🛡️',
        title: {
          es: 'Alojamientos verificados',
          en: 'Verified listings',
          pt: 'Alojamentos verificados',
          fr: 'Logements vérifiés',
          de: 'Geprüfte Unterkünfte',
          nl: 'Geverifieerde accommodaties'
        },
        desc: {
          es: 'Cada alojamiento se revisa: ubicación real, fotos coherentes y anfitrión de confianza antes de mostrártelo.',
          en: 'Every listing is reviewed: real location, consistent photos and a trusted host before we show it to you.',
          pt: 'Cada alojamento é revisto: localização real, fotos coerentes e anfitrião de confiança antes de te mostrarmos.',
          fr: 'Chaque logement est vérifié : emplacement réel, photos cohérentes et hôte de confiance avant de te le proposer.',
          de: 'Jede Unterkunft wird geprüft: echter Standort, stimmige Fotos und vertrauenswürdiger Gastgeber, bevor wir sie dir zeigen.',
          nl: 'Elke woning wordt gecontroleerd: echte locatie, kloppende foto’s en een betrouwbare host voordat we hem tonen.'
        }
      },
      {
        icon: '💳',
        title: {
          es: 'Sin pagos por adelantado',
          en: 'No upfront payment',
          pt: 'Sem pagamentos antecipados',
          fr: 'Sans paiement à l’avance',
          de: 'Keine Vorauszahlung',
          nl: 'Geen vooruitbetaling'
        },
        desc: {
          es: 'No pides ni pagas dinero por adelantado para reservar: coordinas con el anfitrión y avanzas con transparencia.',
          en: 'You don’t pay any money upfront to reserve: you coordinate with the host and move forward transparently.',
          pt: 'Não pagas dinheiro antecipado para reservar: combinas com o anfitrião e avanças com transparência.',
          fr: 'Tu ne paies rien à l’avance pour réserver : tu te coordonnes avec l’hôte et avances en toute transparence.',
          de: 'Du zahlst nichts im Voraus, um zu reservieren: Du stimmst dich mit dem Gastgeber ab und gehst transparent vor.',
          nl: 'Je betaalt niets vooraf om te reserveren: je stemt af met de host en gaat transparant verder.'
        }
      },
      {
        icon: '💬',
        title: {
          es: 'Atención personalizada',
          en: 'Personalized attention',
          pt: 'Atendimento personalizado',
          fr: 'Accompagnement personnalisé',
          de: 'Persönliche Betreuung',
          nl: 'Persoonlijke aandacht'
        },
        desc: {
          es: 'Sophi y el equipo te recomiendan opciones según tu destino, presupuesto y perfil, y coordinas todo por WhatsApp.',
          en: 'Sophi and the team recommend options for your destination, budget and profile, and you coordinate everything by WhatsApp.',
          pt: 'A Sophi e a equipa recomendam opções para o teu destino, orçamento e perfil, e combinas tudo por WhatsApp.',
          fr: 'Sophi et l’équipe te recommandent des options selon ta destination, ton budget et ton profil, et tu coordonnes tout par WhatsApp.',
          de: 'Sophi und das Team empfehlen Optionen passend zu Ziel, Budget und Profil, und du regelst alles per WhatsApp.',
          nl: 'Sophi en het team bevelen opties aan voor je bestemming, budget en profiel, en je regelt alles via WhatsApp.'
        }
      },
      {
        icon: '🔄',
        title: {
          es: 'Cancelación flexible',
          en: 'Flexible cancellation',
          pt: 'Cancelamento flexível',
          fr: 'Annulation flexible',
          de: 'Flexible Stornierung',
          nl: 'Flexibele annulering'
        },
        desc: {
          es: 'Si tus planes cambian, hablas con nosotros: buscamos flexibilidad para cancelar o ajustar sin complicaciones.',
          en: 'If your plans change, you talk to us: we look for flexibility to cancel or adjust without hassle.',
          pt: 'Se os teus planos mudarem, falas connosco: procuramos flexibilidade para cancelar ou ajustar sem complicações.',
          fr: 'Si tes plans changent, tu nous en parles : on cherche de la flexibilité pour annuler ou ajuster sans complications.',
          de: 'Ändern sich deine Pläne, sprichst du mit uns: Wir suchen Flexibilität, um unkompliziert zu stornieren oder anzupassen.',
          nl: 'Veranderen je plannen, dan overleg je met ons: we zoeken flexibiliteit om zonder gedoe te annuleren of aan te passen.'
        }
      }
    ],

    howItWorks: [
      {
        step: 1,
        text: {
          es: 'Completa tu solicitud: cuéntanos destino, fechas, presupuesto y tipo de alojamiento que necesitas.',
          en: 'Fill in your request: tell us your destination, dates, budget and the type of housing you need.',
          pt: 'Preenche o teu pedido: diz-nos destino, datas, orçamento e o tipo de alojamento que precisas.',
          fr: 'Remplis ta demande : indique destination, dates, budget et le type de logement souhaité.',
          de: 'Fülle deine Anfrage aus: Nenne uns Ziel, Daten, Budget und die gewünschte Unterkunftsart.',
          nl: 'Vul je aanvraag in: vertel ons je bestemming, data, budget en het type woning dat je zoekt.'
        }
      },
      {
        step: 2,
        text: {
          es: 'Sophi y el equipo te recomiendan alojamientos verificados que se ajustan a tus preferencias.',
          en: 'Sophi and the team recommend verified listings that match your preferences.',
          pt: 'A Sophi e a equipa recomendam alojamentos verificados que combinam contigo.',
          fr: 'Sophi et l’équipe te recommandent des logements vérifiés adaptés à tes préférences.',
          de: 'Sophi und das Team empfehlen geprüfte Unterkünfte, die zu deinen Wünschen passen.',
          nl: 'Sophi en het team bevelen geverifieerde accommodaties aan die bij je voorkeuren passen.'
        }
      },
      {
        step: 3,
        text: {
          es: 'Coordinas por WhatsApp: hablas con el anfitrión, resuelves dudas y aseguras tu alojamiento.',
          en: 'Coordinate by WhatsApp: talk to the host, clear up doubts and secure your home.',
          pt: 'Combinas por WhatsApp: falas com o anfitrião, tiras dúvidas e garantes o teu alojamento.',
          fr: 'Tu coordonnes par WhatsApp : tu parles à l’hôte, lèves tes doutes et sécurises ton logement.',
          de: 'Du regelst per WhatsApp: Du sprichst mit dem Gastgeber, klärst Fragen und sicherst deine Unterkunft.',
          nl: 'Je regelt het via WhatsApp: je praat met de host, stelt vragen en zekert je woning.'
        }
      },
      {
        step: 4,
        text: {
          es: 'Reservas sin pagos por adelantado: avanzas con transparencia y con cancelación flexible.',
          en: 'Reserve with no upfront payment: you move forward transparently and with flexible cancellation.',
          pt: 'Reservas sem pagamentos antecipados: avanças com transparência e cancelamento flexível.',
          fr: 'Tu réserves sans paiement à l’avance : tu avances en transparence et avec annulation flexible.',
          de: 'Du reservierst ohne Vorauszahlung: transparent und mit flexibler Stornierung.',
          nl: 'Je reserveert zonder vooruitbetaling: transparant en met flexibele annulering.'
        }
      }
    ],

    verification: {
      es: 'Antes de mostrar un alojamiento revisamos la ubicación, la coherencia de las fotos y la confianza del anfitrión, para que solo veas opciones reales y bien ubicadas.',
      en: 'Before we show a listing we review its location, photo consistency and host trustworthiness, so you only see real, well-located options.',
      pt: 'Antes de mostrar um alojamento, revemos a localização, a coerência das fotos e a confiança do anfitrião, para que só vejas opções reais e bem localizadas.',
      fr: 'Avant de proposer un logement, nous vérifions l’emplacement, la cohérence des photos et la fiabilité de l’hôte, pour que tu ne voies que des options réelles et bien situées.',
      de: 'Bevor wir eine Unterkunft zeigen, prüfen wir Standort, Stimmigkeit der Fotos und Vertrauenswürdigkeit des Gastgebers, damit du nur echte, gut gelegene Optionen siehst.',
      nl: 'Voordat we een woning tonen, controleren we de locatie, de consistentie van de foto’s en de betrouwbaarheid van de host, zodat je alleen echte, goed gelegen opties ziet.'
    },

    payment: {
      es: 'No pides ni pagas dinero por adelantado para reservar. El proceso es transparente y todo se coordina directamente con el anfitrión por WhatsApp. (Demo: los importes son demostrativos.)',
      en: 'You don’t pay any money upfront to reserve. The process is transparent and everything is coordinated directly with the host via WhatsApp. (Demo: amounts are illustrative.)',
      pt: 'Não pagas dinheiro antecipado para reservar. O processo é transparente e tudo se combina diretamente com o anfitrião por WhatsApp. (Demo: os valores são demonstrativos.)',
      fr: 'Tu ne paies rien à l’avance pour réserver. Le processus est transparent et tout se coordonne directement avec l’hôte via WhatsApp. (Démo : les montants sont indicatifs.)',
      de: 'Du zahlst nichts im Voraus, um zu reservieren. Der Ablauf ist transparent und alles wird direkt mit dem Gastgeber per WhatsApp geregelt. (Demo: Beträge sind beispielhaft.)',
      nl: 'Je betaalt niets vooraf om te reserveren. Het proces is transparant en alles wordt direct met de host via WhatsApp geregeld. (Demo: bedragen zijn illustratief.)'
    },

    cancellation: {
      es: 'La cancelación es flexible: si tus planes cambian, hablas con nosotros y buscamos la mejor solución para cancelar o ajustar tu estadía.',
      en: 'Cancellation is flexible: if your plans change, you talk to us and we find the best way to cancel or adjust your stay.',
      pt: 'O cancelamento é flexível: se os teus planos mudarem, falas connosco e procuramos a melhor solução para cancelar ou ajustar a estadia.',
      fr: 'L’annulation est flexible : si tes plans changent, tu nous contactes et on trouve la meilleure solution pour annuler ou ajuster ton séjour.',
      de: 'Die Stornierung ist flexibel: Ändern sich deine Pläne, kontaktierst du uns und wir finden die beste Lösung zum Stornieren oder Anpassen deines Aufenthalts.',
      nl: 'Annuleren is flexibel: veranderen je plannen, dan neem je contact op en zoeken we de beste oplossing om je verblijf te annuleren of aan te passen.'
    },

    audiences: {
      students: {
        es: 'Estudiantes de intercambio, Erasmus, máster, posgrado o pasantías que necesitan alojamiento cerca de su universidad, con contrato o comprobante y zona segura.',
        en: 'Exchange, Erasmus, master’s, postgrad or internship students who need housing near their university, with a contract or proof of stay and a safe area.',
        pt: 'Estudantes de intercâmbio, Erasmus, mestrado, pós-graduação ou estágios que precisam de alojamento perto da universidade, com contrato e zona segura.',
        fr: 'Étudiants en échange, Erasmus, master, post-grade ou stage qui cherchent un logement près de leur université, avec contrat ou justificatif et quartier sûr.',
        de: 'Austausch-, Erasmus-, Master-, Postgraduierten- oder Praktikumsstudierende, die eine Unterkunft nahe der Uni mit Vertrag/Nachweis und sicherer Lage brauchen.',
        nl: 'Uitwisselings-, Erasmus-, master-, postdoc- of stagestudenten die woonruimte dicht bij hun universiteit zoeken, met contract of bewijs en een veilige buurt.'
      },
      nomads: {
        es: 'Nómadas digitales y profesionales remotos que buscan studios o habitaciones amobladas, con buen WiFi, bien ubicadas y con servicios incluidos, por estadías de un mes o más.',
        en: 'Digital nomads and remote workers looking for furnished studios or rooms, with strong WiFi, great location and bills included, for stays of a month or longer.',
        pt: 'Nómadas digitais e profissionais remotos que procuram studios ou quartos mobilados, com bom WiFi, bem localizados e com serviços incluídos, por estadias de um mês ou mais.',
        fr: 'Nomades numériques et travailleurs à distance cherchant studios ou chambres meublés, bon WiFi, bien situés et charges comprises, pour des séjours d’un mois ou plus.',
        de: 'Digitale Nomaden und Remote-Arbeitende, die möblierte Studios oder Zimmer mit gutem WLAN, guter Lage und inklusiven Nebenkosten für Aufenthalte ab einem Monat suchen.',
        nl: 'Digitale nomaden en remote werkers die op zoek zijn naar gemeubileerde studio’s of kamers, met sterke WiFi, goede ligging en inclusief kosten, voor verblijven van een maand of langer.'
      }
    },

    countries: [
      { code: 'es', name: 'España', cities: ['Madrid'] },
      { code: 'ar', name: 'Argentina', cities: ['Buenos Aires'] },
      { code: 'cl', name: 'Chile', cities: ['Santiago'] },
      { code: 'pt', name: 'Portugal', cities: ['Lisboa'] },
      { code: 'gb', name: 'Inglaterra', cities: ['Londres'] },
      { code: 'de', name: 'Alemania', cities: ['Berlín'] },
      { code: 'fr', name: 'Francia', cities: ['París'] },
      { code: 'nl', name: 'Holanda', cities: ['Ámsterdam'] },
      { code: 'it', name: 'Italia', cities: ['Roma'] },
      { code: 'at', name: 'Austria', cities: ['Viena'] }
    ],

    /* zones: por ciudad → array de barrios con perfil rico (vibe, seguridad,
       transporte, para quién, nivel de precio, universidades/coworking, qué
       hacer). Datos realistas de barrios reales. es+en obligatorios. */
    zones: {
      'Madrid': [
        { name: 'Malasaña', priceLevel: 'medium-high',
          vibe: { es: 'Joven, alternativo y muy vivo: bares, música indie, tiendas vintage y un ambiente bohemio centrado en la plaza del Dos de Mayo.', en: 'Young, alternative and buzzing: bars, indie music, vintage shops and a bohemian vibe around Plaza del Dos de Mayo.' },
          safety: { es: 'Seguro y muy transitado de día y de noche; la animación nocturna puede hacerlo ruidoso.', en: 'Safe and busy day and night; the nightlife can make it noisy.' },
          transport: { es: 'Metro Tribunal y Bilbao (L1, L10, L4); a pie del centro.', en: 'Metro Tribunal and Bilbao (L1, L10, L4); walkable to the center.' },
          suits: { es: 'Estudiantes y nómadas jóvenes que quieren vida social.', en: 'Students and young nomads who want a social scene.' },
          universities: { es: 'Cerca de UCM (campus de varios centros) y academias; varios coworkings.', en: 'Near UCM faculties and academies; several coworkings.' },
          things: { es: 'Salir de cañas por San Vicente Ferrer; tiendas vintage de Fuencarral.', en: 'Bar-hop along San Vicente Ferrer; vintage shopping on Fuencarral.' } },
        { name: 'Lavapiés', priceLevel: 'low-medium',
          vibe: { es: 'Multicultural, castizo y artístico, con murales, teatros alternativos y la mejor comida internacional barata.', en: 'Multicultural, traditional and artsy, with murals, alternative theaters and the best cheap international food.' },
          safety: { es: 'Animado y generalmente seguro; algo más descuidado por zonas, con precaución normal de noche.', en: 'Lively and generally safe; a bit rougher in spots, normal night-time caution advised.' },
          transport: { es: 'Metro Lavapiés y Embajadores (L3, L5); muy céntrico.', en: 'Metro Lavapiés and Embajadores (L3, L5); very central.' },
          suits: { es: 'Estudiantes con presupuesto ajustado y curiosos por la diversidad.', en: 'Budget-minded students and those curious about diversity.' },
          universities: { es: 'Cerca de UNED y del centro; bien conectado a Atocha.', en: 'Near UNED and the center; well linked to Atocha.' },
          things: { es: 'Tabacalera (arte), restaurantes indios de Lavapiés.', en: 'Tabacalera arts center; Indian restaurants of Lavapiés.' } },
        { name: 'Chamberí', priceLevel: 'high',
          vibe: { es: 'Residencial, elegante y tranquilo, con vida de barrio clásica, mercados y terrazas.', en: 'Residential, elegant and calm, with classic neighborhood life, markets and terraces.' },
          safety: { es: 'Muy seguro y familiar.', en: 'Very safe and family-friendly.' },
          transport: { es: 'Metro Iglesia, Bilbao, Quevedo (L1, L4, L5, L7).', en: 'Metro Iglesia, Bilbao, Quevedo (L1, L4, L5, L7).' },
          suits: { es: 'Nómadas y parejas que buscan calma y buena ubicación.', en: 'Nomads and couples who want calm plus a central location.' },
          universities: { es: 'Cerca de la Universidad Antonio de Nebrija y zona de oficinas.', en: 'Near Universidad Antonio de Nebrija and office areas.' },
          things: { es: 'Mercado de Vallehermoso; estación-museo Chamberí.', en: 'Mercado de Vallehermoso; the Chamberí ghost-station museum.' } },
        { name: 'La Latina', priceLevel: 'medium-high',
          vibe: { es: 'Castizo y sociable, famoso por sus tapas y el ambiente de los domingos en torno al Rastro.', en: 'Traditional and sociable, famous for tapas and Sunday vibes around El Rastro.' },
          safety: { es: 'Seguro; muy concurrido los fines de semana.', en: 'Safe; very crowded on weekends.' },
          transport: { es: 'Metro La Latina y Tirso de Molina (L5, L1).', en: 'Metro La Latina and Tirso de Molina (L5, L1).' },
          suits: { es: 'Quien quiere ambiente español auténtico y salir a tapear.', en: 'Those after authentic Spanish atmosphere and tapas.' },
          universities: { es: 'Céntrico, a un paso del centro histórico y de coworkings.', en: 'Central, steps from the historic core and coworkings.' },
          things: { es: 'Tapas en Cava Baja; mercado de El Rastro los domingos.', en: 'Tapas on Cava Baja; El Rastro flea market on Sundays.' } },
        { name: 'Salamanca', priceLevel: 'high',
          vibe: { es: 'Elegante, chic y comercial, el barrio del lujo con boutiques de la Milla de Oro.', en: 'Elegant, chic and upscale, the luxury district with the Golden Mile boutiques.' },
          safety: { es: 'De los más seguros y tranquilos de Madrid.', en: 'One of the safest and calmest areas in Madrid.' },
          transport: { es: 'Metro Serrano, Velázquez, Goya (L2, L4).', en: 'Metro Serrano, Velázquez, Goya (L2, L4).' },
          suits: { es: 'Profesionales y nómadas con mayor presupuesto.', en: 'Professionals and nomads with a higher budget.' },
          universities: { es: 'Cerca de escuelas de negocio y zona de oficinas.', en: 'Near business schools and office areas.' },
          things: { es: 'Compras en Serrano; Museo Lázaro Galdiano.', en: 'Shopping on Serrano; Lázaro Galdiano Museum.' } },
        { name: 'Chueca', priceLevel: 'medium-high',
          vibe: { es: 'Vibrante, abierto y de moda, corazón LGTBIQ+ con cafés de diseño, restaurantes y ocio.', en: 'Vibrant, open and trendy, the LGBTQ+ heart with design cafés, restaurants and nightlife.' },
          safety: { es: 'Seguro y muy animado.', en: 'Safe and very lively.' },
          transport: { es: 'Metro Chueca y Gran Vía (L5, L1, L2).', en: 'Metro Chueca and Gran Vía (L5, L1, L2).' },
          suits: { es: 'Jóvenes, nómadas y comunidad LGTBIQ+.', en: 'Young people, nomads and the LGBTQ+ community.' },
          universities: { es: 'Muy céntrico, cerca de academias y coworkings de Gran Vía.', en: 'Very central, near academies and Gran Vía coworkings.' },
          things: { es: 'Mercado de San Antón; salir por la zona en fiestas.', en: 'Mercado de San Antón; nightlife and Pride celebrations.' } }
      ],
      'Buenos Aires': [
        { name: 'Palermo', priceLevel: 'medium-high',
          vibe: { es: 'El barrio más de moda: cafés de especialidad, tiendas de diseño, parques y vida nocturna (Soho y Hollywood).', en: 'The trendiest barrio: specialty cafés, design shops, parks and nightlife (Soho and Hollywood).' },
          safety: { es: 'De los más seguros y transitados; precaución normal de noche.', en: 'Among the safest and busiest; normal night-time caution.' },
          transport: { es: 'Subte líneas D y B; muchos colectivos.', en: 'Subte lines D and B; many buses.' },
          suits: { es: 'Estudiantes y nómadas digitales que quieren ambiente.', en: 'Students and digital nomads who want atmosphere.' },
          universities: { es: 'Cerca de UADE/UP y muchos coworkings.', en: 'Near UADE/UP and plenty of coworkings.' },
          things: { es: 'Bosques de Palermo; bares de Palermo Soho.', en: 'Bosques de Palermo parks; Palermo Soho bars.' } },
        { name: 'Recoleta', priceLevel: 'high',
          vibe: { es: 'Elegante y europeo, con avenidas amplias, museos y cafés clásicos.', en: 'Elegant and European, with wide avenues, museums and classic cafés.' },
          safety: { es: 'Muy seguro y residencial.', en: 'Very safe and residential.' },
          transport: { es: 'Subte línea H y D cercanas; bien conectado en colectivo.', en: 'Subte lines H and D nearby; well served by bus.' },
          suits: { es: 'Parejas y nómadas que valoran calma y elegancia.', en: 'Couples and nomads who value calm and elegance.' },
          universities: { es: 'Cerca de la UBA (Derecho, Económicas) y centros culturales.', en: 'Near UBA (Law, Economics) and cultural centers.' },
          things: { es: 'Cementerio de la Recoleta; Bellas Artes.', en: 'Recoleta Cemetery; Fine Arts Museum.' } },
        { name: 'San Telmo', priceLevel: 'low-medium',
          vibe: { es: 'Histórico y bohemio, calles empedradas, tango, anticuarios y la feria dominical.', en: 'Historic and bohemian, cobbled streets, tango, antique shops and the Sunday fair.' },
          safety: { es: 'Encantador y turístico; algo más descuidado por zonas, precaución de noche.', en: 'Charming and touristy; a bit rougher in spots, caution at night.' },
          transport: { es: 'Subte línea C y E cercanas.', en: 'Subte lines C and E nearby.' },
          suits: { es: 'Estudiantes con presupuesto y amantes de la cultura.', en: 'Budget students and culture lovers.' },
          universities: { es: 'Cerca del centro y de la UBA; coworkings en la zona.', en: 'Near downtown and UBA; coworkings around.' },
          things: { es: 'Feria de San Telmo (domingos); tango en Plaza Dorrego.', en: 'San Telmo fair (Sundays); tango at Plaza Dorrego.' } },
        { name: 'Belgrano', priceLevel: 'medium-high',
          vibe: { es: 'Residencial, arbolado y tranquilo, con un pequeño Barrio Chino y buenos comercios.', en: 'Residential, leafy and calm, with a small Chinatown and good shops.' },
          safety: { es: 'Muy seguro y familiar.', en: 'Very safe and family-friendly.' },
          transport: { es: 'Subte línea D; tren Mitre.', en: 'Subte line D; Mitre train.' },
          suits: { es: 'Nómadas y parejas que buscan tranquilidad.', en: 'Nomads and couples seeking quiet.' },
          universities: { es: 'Cerca de la Universidad de Belgrano.', en: 'Near Universidad de Belgrano.' },
          things: { es: 'Barrio Chino; Barrancas de Belgrano.', en: 'Chinatown; Barrancas de Belgrano park.' } },
        { name: 'Caballito', priceLevel: 'low-medium',
          vibe: { es: 'Barrio céntrico y de clase media, residencial y con vida de barrio auténtica.', en: 'Central, middle-class barrio, residential with authentic local life.' },
          safety: { es: 'Seguro y tranquilo.', en: 'Safe and quiet.' },
          transport: { es: 'Subte líneas A y E; muy conectado por colectivos.', en: 'Subte lines A and E; well served by buses.' },
          suits: { es: 'Estudiantes y quien busca buena relación precio-ubicación.', en: 'Students and anyone after good value for location.' },
          universities: { es: 'Cerca de varias sedes de la UBA y de la UCA.', en: 'Near several UBA campuses and UCA.' },
          things: { es: 'Parque Centenario y su feria; Av. Rivadavia.', en: 'Parque Centenario and its fair; Av. Rivadavia.' } },
        { name: 'Villa Crespo', priceLevel: 'low-medium',
          vibe: { es: 'Alternativo y en auge, pegado a Palermo pero más económico, con outlets y bares.', en: 'Up-and-coming and alternative, next to Palermo but cheaper, with outlets and bars.' },
          safety: { es: 'Seguro y transitado.', en: 'Safe and busy.' },
          transport: { es: 'Subte línea B; muchos colectivos.', en: 'Subte line B; many buses.' },
          suits: { es: 'Jóvenes y nómadas que quieren ambiente sin pagar Palermo.', en: 'Young people and nomads who want the vibe without Palermo prices.' },
          universities: { es: 'Cerca de coworkings y a un paso de Palermo.', en: 'Near coworkings and steps from Palermo.' },
          things: { es: 'Outlets de la Av. Córdoba; bares de moda.', en: 'Av. Córdoba outlets; trendy bars.' } }
      ],
      'Santiago': [
        { name: 'Providencia', priceLevel: 'medium-high',
          vibe: { es: 'Moderno, verde y dinámico, con cafés, comercio y oficinas; favorito de nómadas.', en: 'Modern, green and dynamic, with cafés, shopping and offices; a nomad favorite.' },
          safety: { es: 'De los más seguros de Santiago.', en: 'One of the safest areas in Santiago.' },
          transport: { es: 'Metro L1 (Manuel Montt, Pedro de Valdivia, Los Leones).', en: 'Metro L1 (Manuel Montt, Pedro de Valdivia, Los Leones).' },
          suits: { es: 'Nómadas digitales y profesionales remotos.', en: 'Digital nomads and remote professionals.' },
          universities: { es: 'Cerca de la PUC (campus San Joaquín por L4/L5) y muchos coworkings.', en: 'Near PUC and lots of coworkings.' },
          things: { es: 'Barrio Italia cercano; cerro San Cristóbal.', en: 'Nearby Barrio Italia; San Cristóbal hill.' } },
        { name: 'Ñuñoa', priceLevel: 'medium',
          vibe: { es: 'Universitario y relajado, con plazas, vida de barrio y ambiente joven.', en: 'University-driven and relaxed, with squares, local life and a young vibe.' },
          safety: { es: 'Seguro y tranquilo.', en: 'Safe and quiet.' },
          transport: { es: 'Metro L3 (Plaza Egaña, Chile-España) y L6.', en: 'Metro L3 (Plaza Egaña, Chile-España) and L6.' },
          suits: { es: 'Estudiantes y parejas jóvenes.', en: 'Students and young couples.' },
          universities: { es: 'Cerca de la Universidad de Chile (Juan Gómez Millas) y UMCE.', en: 'Near Universidad de Chile (Juan Gómez Millas) and UMCE.' },
          things: { es: 'Plaza Ñuñoa y sus bares; Estadio Nacional.', en: 'Plaza Ñuñoa bars; Estadio Nacional.' } },
        { name: 'Las Condes', priceLevel: 'high',
          vibe: { es: 'Zona financiera y residencial de alto nivel ("Sanhattan"), segura y bien servida.', en: 'Upscale financial and residential district ("Sanhattan"), safe and well-served.' },
          safety: { es: 'Muy seguro.', en: 'Very safe.' },
          transport: { es: 'Metro L1 (El Golf, Tobalaba, Escuela Militar).', en: 'Metro L1 (El Golf, Tobalaba, Escuela Militar).' },
          suits: { es: 'Profesionales y nómadas con presupuesto, estadías de trabajo.', en: 'Professionals and nomads with budget, work stays.' },
          universities: { es: 'Cerca de la UDD y de muchos coworkings corporativos.', en: 'Near UDD and many corporate coworkings.' },
          things: { es: 'Costanera Center; parque Araucano.', en: 'Costanera Center; Araucano park.' } },
        { name: 'Bellavista', priceLevel: 'medium',
          vibe: { es: 'Bohemio y nocturno, el "barrio bohemio" con murales, bares y vida cultural.', en: 'Bohemian and nocturnal, the classic "bohemian quarter" with murals, bars and culture.' },
          safety: { es: 'Animado; precaución normal de noche por la zona de fiesta.', en: 'Lively; normal caution at night in the party area.' },
          transport: { es: 'Metro L5 (Baquedano) y cercano a L1.', en: 'Metro L5 (Baquedano) and close to L1.' },
          suits: { es: 'Estudiantes y jóvenes que buscan vida nocturna.', en: 'Students and young people after nightlife.' },
          universities: { es: 'Cerca de la Universidad San Sebastián y de la PUC (Casa Central).', en: 'Near Universidad San Sebastián and PUC Casa Central.' },
          things: { es: 'La Chascona (casa de Neruda); subir al San Cristóbal.', en: 'La Chascona (Neruda house); San Cristóbal hill.' } },
        { name: 'Lastarria', priceLevel: 'high',
          vibe: { es: 'Elegante y cultural, con cafés, librerías, museos y un aire europeo.', en: 'Elegant and cultural, with cafés, bookshops, museums and a European feel.' },
          safety: { es: 'Seguro y muy transitado.', en: 'Safe and well-frequented.' },
          transport: { es: 'Metro L1 (Universidad Católica) y L5 (Baquedano).', en: 'Metro L1 (Universidad Católica) and L5 (Baquedano).' },
          suits: { es: 'Parejas y nómadas que valoran cultura y centralidad.', en: 'Couples and nomads valuing culture and a central spot.' },
          universities: { es: 'Junto a la PUC (Casa Central) y centros culturales.', en: 'Next to PUC Casa Central and cultural centers.' },
          things: { es: 'GAM y Bellas Artes; cerro Santa Lucía.', en: 'GAM and Fine Arts; Santa Lucía hill.' } },
        { name: 'Barrio Italia', priceLevel: 'medium-high',
          vibe: { es: 'Encantador y de diseño, con tiendas de decoración, anticuarios, cafés y patios.', en: 'Charming and design-led, with décor shops, antiques, cafés and patios.' },
          safety: { es: 'Seguro y agradable.', en: 'Safe and pleasant.' },
          transport: { es: 'Metro L5 (Santa Isabel) y L3.', en: 'Metro L5 (Santa Isabel) and L3.' },
          suits: { es: 'Nómadas creativos y parejas.', en: 'Creative nomads and couples.' },
          universities: { es: 'Entre Providencia y Ñuñoa; coworkings cercanos.', en: 'Between Providencia and Ñuñoa; coworkings nearby.' },
          things: { es: 'Pasajes de tiendas y cafés; ferias de diseño.', en: 'Shop-and-café passages; design fairs.' } }
      ],
      'Lisboa': [
        { name: 'Alfama', priceLevel: 'medium',
          vibe: { es: 'Histórico y con encanto, el barrio más antiguo: calles empedradas, fado y vistas al Tajo.', en: 'Historic and charming, the oldest quarter: cobbled streets, fado and Tagus views.' },
          safety: { es: 'Seguro y turístico; calles empinadas y laberínticas.', en: 'Safe and touristy; steep, maze-like streets.' },
          transport: { es: 'Tranvía 28; metro Santa Apolónia (L azul) cercano.', en: 'Tram 28; metro Santa Apolónia (blue line) nearby.' },
          suits: { es: 'Parejas y nómadas que aman el ambiente tradicional.', en: 'Couples and nomads who love a traditional atmosphere.' },
          universities: { es: 'Cerca del centro; coworkings junto al río.', en: 'Near the center; riverside coworkings.' },
          things: { es: 'Castillo de San Jorge; casas de fado.', en: 'São Jorge Castle; fado houses.' } },
        { name: 'Baixa', priceLevel: 'medium-high',
          vibe: { es: 'Céntrico y elegante, con plazas monumentales, comercios y mucho movimiento.', en: 'Central and elegant, with grand squares, shops and lots of bustle.' },
          safety: { es: 'Seguro y muy transitado.', en: 'Safe and very busy.' },
          transport: { es: 'Metro Baixa-Chiado y Rossio (L azul/verde).', en: 'Metro Baixa-Chiado and Rossio (blue/green lines).' },
          suits: { es: 'Nómadas que quieren estar en pleno centro.', en: 'Nomads who want to be right in the center.' },
          universities: { es: 'Cerca de centros y coworkings; muy conectado.', en: 'Near centers and coworkings; very connected.' },
          things: { es: 'Plaza del Comercio; elevador de Santa Justa.', en: 'Praça do Comércio; Santa Justa lift.' } },
        { name: 'Bairro Alto', priceLevel: 'medium',
          vibe: { es: 'Bohemio de día y epicentro de la noche, con bares pequeños y mucha marcha.', en: 'Bohemian by day and the nightlife epicenter, with tiny bars and a big party scene.' },
          safety: { es: 'Seguro; ruidoso y muy concurrido de noche.', en: 'Safe; noisy and crowded at night.' },
          transport: { es: 'Funicular da Glória; metro Baixa-Chiado cercano.', en: 'Glória funicular; metro Baixa-Chiado nearby.' },
          suits: { es: 'Estudiantes y jóvenes que buscan vida nocturna.', en: 'Students and young people seeking nightlife.' },
          universities: { es: 'Cerca de bellas artes y coworkings del Chiado.', en: 'Near fine-arts schools and Chiado coworkings.' },
          things: { es: 'Mirador de San Pedro de Alcântara; bares de noche.', en: 'São Pedro de Alcântara viewpoint; night bars.' } },
        { name: 'Príncipe Real', priceLevel: 'high',
          vibe: { es: 'Chic y tranquilo, con tiendas de diseño, jardines y buenos cafés; ambiente LGTBIQ+.', en: 'Chic and calm, with design shops, gardens and good cafés; an LGBTQ+ scene.' },
          safety: { es: 'Muy seguro.', en: 'Very safe.' },
          transport: { es: 'Metro Rato (L amarilla); a pie del centro.', en: 'Metro Rato (yellow line); walkable to the center.' },
          suits: { es: 'Parejas y nómadas con presupuesto que valoran el diseño.', en: 'Couples and nomads with budget who value design.' },
          universities: { es: 'Cerca de coworkings boutique; bien ubicado.', en: 'Near boutique coworkings; well located.' },
          things: { es: 'Jardín del Príncipe Real; tiendas de Embaixada.', en: 'Príncipe Real garden; Embaixada concept shops.' } },
        { name: 'Graça', priceLevel: 'low-medium',
          vibe: { es: 'Auténtico y local, con miradores espectaculares y un ambiente de barrio tranquilo.', en: 'Authentic and local, with spectacular viewpoints and a calm neighborhood feel.' },
          safety: { es: 'Seguro y residencial.', en: 'Safe and residential.' },
          transport: { es: 'Tranvía 28 y 12; un poco alejado del metro.', en: 'Trams 28 and 12; a bit far from the metro.' },
          suits: { es: 'Nómadas y estudiantes que buscan calma y buen precio.', en: 'Nomads and students seeking calm and good value.' },
          universities: { es: 'Cerca de Alfama y del centro.', en: 'Near Alfama and the center.' },
          things: { es: 'Miradores da Graça y Senhora do Monte.', en: 'Graça and Senhora do Monte viewpoints.' } }
      ],
      'Londres': [
        { name: 'Camden', priceLevel: 'medium-high',
          vibe: { es: 'Alternativo y musical, famoso por su mercado, la música en vivo y el ambiente joven.', en: 'Alternative and musical, famous for its market, live music and young crowd.' },
          safety: { es: 'Seguro y muy concurrido; vigilar las pertenencias en el mercado.', en: 'Safe and very busy; watch your belongings in the market.' },
          transport: { es: 'Tube Camden Town (Northern line); buena conexión.', en: 'Tube Camden Town (Northern line); well connected.' },
          suits: { es: 'Estudiantes y jóvenes que buscan ambiente.', en: 'Students and young people after atmosphere.' },
          universities: { es: 'Cerca de UCL y de coworkings de Kings Cross.', en: 'Near UCL and Kings Cross coworkings.' },
          things: { es: 'Camden Market; conciertos en pubs y salas.', en: 'Camden Market; gigs in pubs and venues.' } },
        { name: 'Shoreditch', priceLevel: 'high',
          vibe: { es: 'Trendy y tecnológico, con startups, arte urbano, mercados y vida nocturna.', en: 'Trendy and tech-driven, with startups, street art, markets and nightlife.' },
          safety: { es: 'Seguro y muy animado.', en: 'Safe and very lively.' },
          transport: { es: 'Overground Shoreditch High St; tube Old Street (Northern).', en: 'Overground Shoreditch High St; tube Old Street (Northern).' },
          suits: { es: 'Nómadas digitales y creativos.', en: 'Digital nomads and creatives.' },
          universities: { es: '"Silicon Roundabout": muchísimos coworkings; cerca de City Uni.', en: '"Silicon Roundabout": tons of coworkings; near City University.' },
          things: { es: 'Brick Lane y Boxpark; arte urbano.', en: 'Brick Lane and Boxpark; street art.' } },
        { name: 'Notting Hill', priceLevel: 'high',
          vibe: { es: 'Encantador y elegante, con casas de colores, boutiques y el famoso mercado.', en: 'Charming and elegant, with colorful houses, boutiques and the famous market.' },
          safety: { es: 'Muy seguro y residencial.', en: 'Very safe and residential.' },
          transport: { es: 'Tube Notting Hill Gate (Central, District, Circle).', en: 'Tube Notting Hill Gate (Central, District, Circle).' },
          suits: { es: 'Parejas y nómadas con presupuesto.', en: 'Couples and nomads with budget.' },
          universities: { es: 'Cerca de Imperial (South Kensington) por la Central line.', en: 'Near Imperial (South Kensington) via the Central line.' },
          things: { es: 'Portobello Road Market; Carnaval de Notting Hill.', en: 'Portobello Road Market; Notting Hill Carnival.' } },
        { name: 'Hackney', priceLevel: 'medium',
          vibe: { es: 'Hipster y diverso, con parques, mercados independientes y escena creativa.', en: 'Hipster and diverse, with parks, independent markets and a creative scene.' },
          safety: { es: 'Mayormente seguro; varía por zonas, precaución de noche.', en: 'Mostly safe; varies by area, caution at night.' },
          transport: { es: 'Overground (Hackney Central, Dalston).', en: 'Overground (Hackney Central, Dalston).' },
          suits: { es: 'Estudiantes y nómadas creativos con presupuesto medio.', en: 'Students and creative nomads on a mid budget.' },
          universities: { es: 'Coworkings en Dalston; cerca de Shoreditch.', en: 'Coworkings in Dalston; near Shoreditch.' },
          things: { es: 'London Fields y Broadway Market.', en: 'London Fields and Broadway Market.' } },
        { name: 'Greenwich', priceLevel: 'medium',
          vibe: { es: 'Histórico y verde, junto al río, con su parque, observatorio y mercado.', en: 'Historic and green, by the river, with its park, observatory and market.' },
          safety: { es: 'Seguro y familiar.', en: 'Safe and family-friendly.' },
          transport: { es: 'DLR y tren; un poco alejado del centro.', en: 'DLR and rail; a bit far from the center.' },
          suits: { es: 'Estudiantes y parejas que buscan calma.', en: 'Students and couples seeking calm.' },
          universities: { es: 'Sede de la University of Greenwich.', en: 'Home to the University of Greenwich.' },
          things: { es: 'Meridiano de Greenwich; Cutty Sark.', en: 'Greenwich Meridian; the Cutty Sark.' } }
      ],
      'Berlín': [
        { name: 'Kreuzberg', priceLevel: 'medium',
          vibe: { es: 'Creativo y multicultural, con arte urbano, cafés, vida nocturna y espíritu alternativo.', en: 'Creative and multicultural, with street art, cafés, nightlife and an alternative spirit.' },
          safety: { es: 'Mayormente seguro; algo más vivido por zonas, precaución de noche.', en: 'Mostly safe; grittier in spots, caution at night.' },
          transport: { es: 'U-Bahn U1, U8 (Kottbusser Tor, Görlitzer Bahnhof).', en: 'U-Bahn U1, U8 (Kottbusser Tor, Görlitzer Bahnhof).' },
          suits: { es: 'Estudiantes y nómadas jóvenes alternativos.', en: 'Students and young alternative nomads.' },
          universities: { es: 'Cerca de coworkings; bien conectado con TU Berlin.', en: 'Near coworkings; well linked to TU Berlin.' },
          things: { es: 'East Side Gallery; mercado turco junto al canal.', en: 'East Side Gallery; Turkish market by the canal.' } },
        { name: 'Mitte', priceLevel: 'high',
          vibe: { es: 'Céntrico e histórico, con museos, galerías y los grandes monumentos.', en: 'Central and historic, with museums, galleries and the major landmarks.' },
          safety: { es: 'Muy seguro y turístico.', en: 'Very safe and touristy.' },
          transport: { es: 'U-Bahn y S-Bahn (Alexanderplatz, Hbf); excelente conexión.', en: 'U-Bahn and S-Bahn (Alexanderplatz, Hbf); excellent links.' },
          suits: { es: 'Nómadas y profesionales que quieren centralidad.', en: 'Nomads and professionals who want centrality.' },
          universities: { es: 'Cerca de la Humboldt-Universität y muchos coworkings.', en: 'Near Humboldt-Universität and many coworkings.' },
          things: { es: 'Isla de los Museos; Puerta de Brandeburgo.', en: 'Museum Island; Brandenburg Gate.' } },
        { name: 'Prenzlauer Berg', priceLevel: 'high',
          vibe: { es: 'Tranquilo y encantador, con edificios clásicos, cafés, parques y vida familiar.', en: 'Calm and charming, with classic buildings, cafés, parks and family life.' },
          safety: { es: 'Muy seguro.', en: 'Very safe.' },
          transport: { es: 'U2 (Eberswalder Str.) y tranvía M10.', en: 'U2 (Eberswalder Str.) and tram M10.' },
          suits: { es: 'Parejas, familias y nómadas que valoran calma.', en: 'Couples, families and nomads who value calm.' },
          universities: { es: 'Bien conectado con el centro; coworkings cercanos.', en: 'Well connected to the center; coworkings nearby.' },
          things: { es: 'Mercado de los domingos en Mauerpark; Kollwitzplatz.', en: 'Sunday market at Mauerpark; Kollwitzplatz.' } },
        { name: 'Neukölln', priceLevel: 'low-medium',
          vibe: { es: 'Joven, multicultural y en auge, con bares de moda y ambiente internacional.', en: 'Young, multicultural and up-and-coming, with trendy bars and an international vibe.' },
          safety: { es: 'Mayormente seguro; varía por zonas, precaución de noche.', en: 'Mostly safe; varies by area, caution at night.' },
          transport: { es: 'U7, U8 (Hermannplatz, Rathaus Neukölln).', en: 'U7, U8 (Hermannplatz, Rathaus Neukölln).' },
          suits: { es: 'Estudiantes y nómadas con presupuesto ajustado.', en: 'Students and nomads on a tight budget.' },
          universities: { es: 'Cerca de coworkings; conexión con campus por U-Bahn.', en: 'Near coworkings; campus links by U-Bahn.' },
          things: { es: 'Parque Tempelhofer Feld; bares de Weserstraße.', en: 'Tempelhofer Feld park; Weserstraße bars.' } },
        { name: 'Friedrichshain', priceLevel: 'medium',
          vibe: { es: 'Alternativo y festivo, con clubes famosos, arte urbano y ambiente estudiantil.', en: 'Alternative and party-driven, with famous clubs, street art and a student vibe.' },
          safety: { es: 'Seguro; muy animado de noche por la zona de clubes.', en: 'Safe; very lively at night in the club area.' },
          transport: { es: 'U5 y S-Bahn (Warschauer Str., Ostkreuz).', en: 'U5 and S-Bahn (Warschauer Str., Ostkreuz).' },
          suits: { es: 'Estudiantes y nómadas que buscan vida nocturna.', en: 'Students and nomads after nightlife.' },
          universities: { es: 'Coworkings cercanos; bien conectado.', en: 'Coworkings nearby; well connected.' },
          things: { es: 'Berghain y clubes; Boxhagener Platz y su feria.', en: 'Berghain and clubs; Boxhagener Platz and its market.' } }
      ],
      'París': [
        { name: 'Le Marais', priceLevel: 'high',
          vibe: { es: 'Histórico y de moda, con galerías, boutiques, cafés y ambiente LGTBIQ+; muy bien ubicado.', en: 'Historic and fashionable, with galleries, boutiques, cafés and an LGBTQ+ scene; very central.' },
          safety: { es: 'Seguro y muy transitado.', en: 'Safe and busy.' },
          transport: { es: 'Métro Saint-Paul (L1), Hôtel de Ville (L1, L11).', en: 'Métro Saint-Paul (L1), Hôtel de Ville (L1, L11).' },
          suits: { es: 'Nómadas y parejas con presupuesto que valoran la centralidad.', en: 'Nomads and couples with budget who value centrality.' },
          universities: { es: 'Cerca del centro y de coworkings.', en: 'Near the center and coworkings.' },
          things: { es: 'Place des Vosges; museo Picasso.', en: 'Place des Vosges; Picasso Museum.' } },
        { name: 'Montmartre', priceLevel: 'medium-high',
          vibe: { es: 'Pintoresco y artístico, con calles empinadas, plazas de pintores y vistas de la ciudad.', en: 'Picturesque and artistic, with steep streets, painters\' squares and city views.' },
          safety: { es: 'Seguro y turístico; precaución cerca de Pigalle de noche.', en: 'Safe and touristy; caution near Pigalle at night.' },
          transport: { es: 'Métro Abbesses (L12), Anvers (L2).', en: 'Métro Abbesses (L12), Anvers (L2).' },
          suits: { es: 'Parejas y nómadas que buscan encanto.', en: 'Couples and nomads after charm.' },
          universities: { es: 'Algo alejado de campus; bien conectado por métro.', en: 'A bit far from campuses; well linked by métro.' },
          things: { es: 'Basílica del Sacré-Cœur; Place du Tertre.', en: 'Sacré-Cœur basilica; Place du Tertre.' } },
        { name: 'Quartier Latin', priceLevel: 'high',
          vibe: { es: 'Universitario y clásico, librerías, cafés históricos y mucha vida estudiantil.', en: 'Classic university quarter with bookshops, historic cafés and student life.' },
          safety: { es: 'Seguro y muy transitado.', en: 'Safe and busy.' },
          transport: { es: 'Métro Cluny-La Sorbonne (L10), RER B Luxembourg.', en: 'Métro Cluny-La Sorbonne (L10), RER B Luxembourg.' },
          suits: { es: 'Estudiantes, sobre todo de intercambio.', en: 'Students, especially exchange students.' },
          universities: { es: 'Corazón de la Sorbonne y otras facultades.', en: 'Heart of the Sorbonne and other faculties.' },
          things: { es: 'Jardín de Luxemburgo; Panteón.', en: 'Luxembourg Gardens; the Panthéon.' } },
        { name: 'Bastille', priceLevel: 'medium-high',
          vibe: { es: 'Animado y festivo, con bares, ambiente joven y vida nocturna.', en: 'Lively and party-friendly, with bars, a young crowd and nightlife.' },
          safety: { es: 'Seguro; muy concurrido de noche.', en: 'Safe; very busy at night.' },
          transport: { es: 'Métro Bastille (L1, L5, L8).', en: 'Métro Bastille (L1, L5, L8).' },
          suits: { es: 'Estudiantes y nómadas jóvenes.', en: 'Students and young nomads.' },
          universities: { es: 'Bien conectado; coworkings cercanos.', en: 'Well connected; coworkings nearby.' },
          things: { es: 'Marché d\'Aligre; Coulée verte (paseo elevado).', en: 'Marché d\'Aligre; the Coulée verte elevated walk.' } },
        { name: 'Canal Saint-Martin', priceLevel: 'medium-high',
          vibe: { es: 'Joven, relajado y creativo, con cafés junto al canal y picnics al atardecer.', en: 'Young, relaxed and creative, with canal-side cafés and sunset picnics.' },
          safety: { es: 'Seguro y popular.', en: 'Safe and popular.' },
          transport: { es: 'Métro Jacques Bonsergent (L5), République (L3, L5, L8, L9, L11).', en: 'Métro Jacques Bonsergent (L5), République (L3, L5, L8, L9, L11).' },
          suits: { es: 'Nómadas digitales y creativos.', en: 'Digital nomads and creatives.' },
          universities: { es: 'Muchos coworkings y cafés de trabajo.', en: 'Plenty of coworkings and work-friendly cafés.' },
          things: { es: 'Paseo por el canal; tiendas independientes.', en: 'Canal-side stroll; independent shops.' } }
      ],
      'Roma': [
        { name: 'Trastevere', priceLevel: 'medium-high',
          vibe: { es: 'Pintoresco y animado, con callejuelas medievales, trattorias y vida nocturna; favorito de estudiantes.', en: 'Picturesque and lively, with medieval lanes, trattorias and nightlife; a student favorite.' },
          safety: { es: 'Seguro; ruidoso y concurrido de noche.', en: 'Safe; noisy and crowded at night.' },
          transport: { es: 'Tranvía 8; estación Trastevere; un poco alejado del metro.', en: 'Tram 8; Trastevere station; a bit far from the metro.' },
          suits: { es: 'Estudiantes y jóvenes que quieren ambiente.', en: 'Students and young people who want atmosphere.' },
          universities: { es: 'Cerca de campus de John Cabot y de la Sapienza por tranvía.', en: 'Near John Cabot campus and Sapienza by tram.' },
          things: { es: 'Piazza Santa Maria; aperitivos y cenas en trattorias.', en: 'Piazza Santa Maria; aperitivo and trattoria dinners.' } },
        { name: 'Monti', priceLevel: 'high',
          vibe: { es: 'Bohemio y céntrico, junto al Coliseo, con tiendas vintage y enotecas.', en: 'Bohemian and central, next to the Colosseum, with vintage shops and wine bars.' },
          safety: { es: 'Seguro y muy transitado.', en: 'Safe and busy.' },
          transport: { es: 'Metro Cavour (línea B).', en: 'Metro Cavour (line B).' },
          suits: { es: 'Parejas y nómadas que valoran centralidad y encanto.', en: 'Couples and nomads valuing centrality and charm.' },
          universities: { es: 'Céntrico; coworkings cercanos.', en: 'Central; coworkings nearby.' },
          things: { es: 'Mercado vintage de Monti; aperitivo en sus plazas.', en: 'Monti vintage market; aperitivo in its squares.' } },
        { name: 'San Lorenzo', priceLevel: 'low-medium',
          vibe: { es: 'Universitario y alternativo, económico, con arte urbano y mucha vida nocturna.', en: 'University-driven and alternative, affordable, with street art and lively nights.' },
          safety: { es: 'Mayormente seguro; algo más descuidado, precaución de noche.', en: 'Mostly safe; a bit rough, caution at night.' },
          transport: { es: 'Tranvía 3 y 19; junto a Termini.', en: 'Trams 3 and 19; next to Termini.' },
          suits: { es: 'Estudiantes con presupuesto ajustado.', en: 'Students on a tight budget.' },
          universities: { es: 'Pegado a La Sapienza (mayor universidad de Roma).', en: 'Right next to La Sapienza (Rome\'s largest university).' },
          things: { es: 'Bares y pizzerías; arte urbano.', en: 'Bars and pizzerias; street art.' } },
        { name: 'Testaccio', priceLevel: 'medium',
          vibe: { es: 'Auténtico y gastronómico, cuna de la cocina romana, con mercado y vida local.', en: 'Authentic and food-focused, the cradle of Roman cuisine, with a market and local life.' },
          safety: { es: 'Seguro y residencial.', en: 'Safe and residential.' },
          transport: { es: 'Metro Piramide (línea B).', en: 'Metro Piramide (line B).' },
          suits: { es: 'Nómadas y parejas amantes de la comida.', en: 'Food-loving nomads and couples.' },
          universities: { es: 'Bien conectado; cerca del centro.', en: 'Well connected; near the center.' },
          things: { es: 'Mercado de Testaccio; trattorias tradicionales.', en: 'Testaccio Market; traditional trattorias.' } },
        { name: 'Prati', priceLevel: 'high',
          vibe: { es: 'Elegante y residencial, con avenidas amplias, compras y buenos restaurantes.', en: 'Elegant and residential, with wide avenues, shopping and good restaurants.' },
          safety: { es: 'Muy seguro.', en: 'Very safe.' },
          transport: { es: 'Metro Lepanto y Ottaviano (línea A).', en: 'Metro Lepanto and Ottaviano (line A).' },
          suits: { es: 'Profesionales y nómadas con presupuesto.', en: 'Professionals and nomads with budget.' },
          universities: { es: 'Cerca del Vaticano; coworkings y oficinas.', en: 'Near the Vatican; coworkings and offices.' },
          things: { es: 'Compras en Via Cola di Rienzo; cerca de San Pedro.', en: 'Shopping on Via Cola di Rienzo; near St. Peter\'s.' } }
      ],
      'Ámsterdam': [
        { name: 'Jordaan', priceLevel: 'high',
          vibe: { es: 'Encantador y tranquilo, con canales, galerías, cafés "bruin" y mercados; muy bien valorado.', en: 'Charming and quiet, with canals, galleries, "brown cafés" and markets; highly rated.' },
          safety: { es: 'Muy seguro.', en: 'Very safe.' },
          transport: { es: 'Tranvías 13, 17; a pie del centro.', en: 'Trams 13, 17; walkable to the center.' },
          suits: { es: 'Parejas y nómadas que valoran calma y encanto.', en: 'Couples and nomads who value calm and charm.' },
          universities: { es: 'Cerca del centro y de coworkings.', en: 'Near the center and coworkings.' },
          things: { es: 'Mercado Noordermarkt; canales y cafés.', en: 'Noordermarkt market; canals and cafés.' } },
        { name: 'De Pijp', priceLevel: 'medium-high',
          vibe: { es: 'Joven, multicultural y animado, con el mercado Albert Cuyp y muchos cafés y bares.', en: 'Young, multicultural and lively, with the Albert Cuyp market and lots of cafés and bars.' },
          safety: { es: 'Seguro y muy transitado.', en: 'Safe and busy.' },
          transport: { es: 'Metro 52 (De Pijp); tranvías.', en: 'Metro 52 (De Pijp); trams.' },
          suits: { es: 'Estudiantes y nómadas jóvenes.', en: 'Students and young nomads.' },
          universities: { es: 'Bien conectado con la UvA; coworkings cercanos.', en: 'Well connected to UvA; coworkings nearby.' },
          things: { es: 'Mercado Albert Cuyp; parque Sarphatipark.', en: 'Albert Cuyp Market; Sarphatipark.' } },
        { name: 'Oud-West', priceLevel: 'medium-high',
          vibe: { es: 'Residencial y de moda, con vida de barrio, tiendas y el food hall De Hallen.', en: 'Residential and trendy, with local life, shops and the De Hallen food hall.' },
          safety: { es: 'Muy seguro.', en: 'Very safe.' },
          transport: { es: 'Tranvías 1, 17; junto al Vondelpark.', en: 'Trams 1, 17; next to Vondelpark.' },
          suits: { es: 'Nómadas y parejas que buscan equilibrio calma-ciudad.', en: 'Nomads and couples after a calm-yet-central balance.' },
          universities: { es: 'Cerca de la UvA; coworkings de De Hallen.', en: 'Near UvA; coworkings at De Hallen.' },
          things: { es: 'Vondelpark; food hall De Hallen.', en: 'Vondelpark; De Hallen food hall.' } },
        { name: 'Oost', priceLevel: 'medium',
          vibe: { es: 'Diverso y en auge, con parques, ambiente internacional y precios algo mejores.', en: 'Diverse and up-and-coming, with parks, an international vibe and slightly better prices.' },
          safety: { es: 'Mayormente seguro.', en: 'Mostly safe.' },
          transport: { es: 'Metro 51/53/54; tranvías.', en: 'Metro 51/53/54; trams.' },
          suits: { es: 'Estudiantes y nómadas con presupuesto medio.', en: 'Students and nomads on a mid budget.' },
          universities: { es: 'Cerca de Amsterdam Science Park (UvA) y coworkings.', en: 'Near Amsterdam Science Park (UvA) and coworkings.' },
          things: { es: 'Oosterpark; Dappermarkt y Javastraat.', en: 'Oosterpark; Dappermarkt and Javastraat.' } }
      ],
      'Viena': [
        { name: 'Neubau', priceLevel: 'medium-high',
          vibe: { es: 'Creativo y céntrico, con tiendas de diseño, cafés, galerías y ambiente joven.', en: 'Creative and central, with design shops, cafés, galleries and a young vibe.' },
          safety: { es: 'Muy seguro.', en: 'Very safe.' },
          transport: { es: 'U-Bahn U3 (Neubaugasse, Zieglergasse).', en: 'U-Bahn U3 (Neubaugasse, Zieglergasse).' },
          suits: { es: 'Nómadas creativos y estudiantes.', en: 'Creative nomads and students.' },
          universities: { es: 'Cerca del MuseumsQuartier y de coworkings.', en: 'Near the MuseumsQuartier and coworkings.' },
          things: { es: 'Tiendas de Spittelberg; cafés de Neubaugasse.', en: 'Spittelberg shops; Neubaugasse cafés.' } },
        { name: 'Leopoldstadt', priceLevel: 'medium',
          vibe: { es: 'Verde y tranquilo, junto al Prater y el Danubio, diverso y en auge.', en: 'Green and calm, by the Prater and the Danube, diverse and up-and-coming.' },
          safety: { es: 'Seguro.', en: 'Safe.' },
          transport: { es: 'U-Bahn U1, U2 (Praterstern); muy conectado.', en: 'U-Bahn U1, U2 (Praterstern); very connected.' },
          suits: { es: 'Estudiantes y nómadas que buscan precio y verde.', en: 'Students and nomads after value and greenery.' },
          universities: { es: 'Sede de la WU (Universidad de Economía) y campus moderno.', en: 'Home to WU (Vienna University of Economics) and its modern campus.' },
          things: { es: 'Parque del Prater y su noria; orillas del Danubio.', en: 'Prater park and its Ferris wheel; Danube banks.' } },
        { name: 'Mariahilf', priceLevel: 'medium-high',
          vibe: { es: 'Comercial y animado, con la calle Mariahilfer Straße y mucha vida.', en: 'Commercial and lively, with the Mariahilfer Straße shopping street and plenty of buzz.' },
          safety: { es: 'Muy seguro y transitado.', en: 'Very safe and busy.' },
          transport: { es: 'U-Bahn U3, U6 (Westbahnhof); excelente conexión.', en: 'U-Bahn U3, U6 (Westbahnhof); excellent links.' },
          suits: { es: 'Nómadas y estudiantes que quieren todo a mano.', en: 'Nomads and students who want everything at hand.' },
          universities: { es: 'Bien conectado con campus; coworkings cercanos.', en: 'Well connected to campuses; coworkings nearby.' },
          things: { es: 'Compras en Mariahilfer Straße; Haus des Meeres.', en: 'Shopping on Mariahilfer Straße; Haus des Meeres.' } },
        { name: 'Josefstadt', priceLevel: 'high',
          vibe: { es: 'Elegante y tranquilo, el distrito más pequeño, con teatros, cafés y aire clásico.', en: 'Elegant and calm, the smallest district, with theaters, cafés and a classic feel.' },
          safety: { es: 'Muy seguro y residencial.', en: 'Very safe and residential.' },
          transport: { es: 'U-Bahn U2 (Rathaus) cercano; tranvías.', en: 'U-Bahn U2 (Rathaus) nearby; trams.' },
          suits: { es: 'Parejas y nómadas que valoran calma y elegancia.', en: 'Couples and nomads who value calm and elegance.' },
          universities: { es: 'Cerca de la Universidad de Viena y del Rathaus.', en: 'Near the University of Vienna and the Rathaus.' },
          things: { es: 'Theater in der Josefstadt; cafés clásicos.', en: 'Theater in der Josefstadt; classic cafés.' } }
      ]
    },

    listings: [
      { id: 'palermo', title: 'Studio Palermo Soho', city: 'Buenos Aires', country: 'Argentina', neighborhood: 'Palermo Soho', price: 540, currency: 'USD', type: 'Studio / monoambiente', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Ideal estudiantes' },
      { id: 'retiro', title: 'Habitación Retiro', city: 'Buenos Aires', country: 'Argentina', neighborhood: 'Retiro', price: 380, currency: 'USD', type: 'Habitación privada', features: ['WiFi', 'Servicios incluidos', 'Zona segura'], profile: 'Ideal nómadas' },
      { id: 'providencia', title: 'Loft Providencia', city: 'Santiago', country: 'Chile', neighborhood: 'Providencia', price: 620, currency: 'USD', type: 'Studio / monoambiente', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Popular' },
      { id: 'condes', title: 'Studio Las Condes', city: 'Santiago', country: 'Chile', neighborhood: 'Las Condes', price: 690, currency: 'USD', type: 'Departamento completo', features: ['Seguridad', 'WiFi', 'Amoblado'], profile: 'Verificado' },
      { id: 'malasana', title: 'Piso Malasaña 2.0', city: 'Madrid', country: 'España', neighborhood: 'Malasaña', price: 710, currency: 'EUR', type: 'Departamento completo', features: ['WiFi', 'Contrato', 'Cerca del metro'], profile: 'Ideal estudiantes' },
      { id: 'chamberi', title: 'Habitación Chamberí', city: 'Madrid', country: 'España', neighborhood: 'Chamberí', price: 520, currency: 'EUR', type: 'Habitación privada', features: ['WiFi', 'Servicios incluidos', 'Zona segura'], profile: 'Nuevo' },
      { id: 'berlin', title: 'Habitación Kreuzberg', city: 'Berlín', country: 'Alemania', neighborhood: 'Kreuzberg', price: 640, currency: 'EUR', type: 'Habitación en departamento', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Ideal estudiantes' },
      { id: 'london', title: 'Studio Shoreditch', city: 'Londres', country: 'Inglaterra', neighborhood: 'Shoreditch', price: 1100, currency: 'GBP', type: 'Studio / monoambiente', features: ['WiFi', 'Amoblado', 'Zona segura'], profile: 'Popular' },
      { id: 'lisboa', title: 'Studio Alfama', city: 'Lisboa', country: 'Portugal', neighborhood: 'Alfama', price: 620, currency: 'EUR', type: 'Studio / monoambiente', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Ideal nómadas' },
      { id: 'roma', title: 'Habitación Trastevere', city: 'Roma', country: 'Italia', neighborhood: 'Trastevere', price: 590, currency: 'EUR', type: 'Habitación privada', features: ['WiFi', 'Servicios incluidos', 'Zona segura'], profile: 'Ideal estudiantes' },
      { id: 'paris', title: 'Studio Le Marais', city: 'París', country: 'Francia', neighborhood: 'Le Marais', price: 980, currency: 'EUR', type: 'Studio / monoambiente', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Verificado' },
      { id: 'amsterdam', title: 'Habitación Jordaan', city: 'Ámsterdam', country: 'Holanda', neighborhood: 'Jordaan', price: 780, currency: 'EUR', type: 'Habitación en departamento', features: ['WiFi', 'Amoblado', 'Zona segura'], profile: 'Nuevo' },
      { id: 'viena', title: 'Studio Neubau', city: 'Viena', country: 'Austria', neighborhood: 'Neubau', price: 650, currency: 'EUR', type: 'Studio / monoambiente', features: ['WiFi', 'Amoblado', 'Cerca del metro'], profile: 'Ideal nómadas' }
    ],

    currencies: {
      supported: ['EUR', 'USD', 'GBP'],
      note: {
        es: 'Los precios pueden mostrarse en EUR, USD o GBP con conversión aproximada en tiempo real. Los importes son demostrativos.',
        en: 'Prices can be shown in EUR, USD or GBP with live-ish conversion. Amounts are illustrative.',
        pt: 'Os preços podem ser mostrados em EUR, USD ou GBP com conversão aproximada em tempo real. Os valores são demonstrativos.',
        fr: 'Les prix peuvent s’afficher en EUR, USD ou GBP avec une conversion quasi en temps réel. Les montants sont indicatifs.',
        de: 'Preise können in EUR, USD oder GBP mit nahezu Echtzeit-Umrechnung angezeigt werden. Die Beträge sind beispielhaft.',
        nl: 'Prijzen kunnen in EUR, USD of GBP worden getoond met bijna realtime omrekening. Bedragen zijn illustratief.'
      }
    },

    /* anfitrion: conocimiento para ANFITRIONES (los que ofrecen/arriendan un
       espacio). Cómo publicar, qué ganan, disponibilidad/calendario, qué pide
       la plantilla, validación, privacidad de la dirección y acompañamiento.
       Voz de marca, breve. es + en. */
    anfitrion: {
      pagina: { es: 'Sé anfitrión', en: 'Become a host', page: 'anfitrion.html' },
      comoPublicar: {
        es: 'Publicar tu espacio es sencillo: entra a la página “Sé anfitrión” y completa la plantilla de anfitrión. Te guiamos paso a paso para presentar tu espacio de la mejor forma, y nuestro equipo te acompaña durante todo el proceso.',
        en: 'Listing your space is simple: go to the “Become a host” page and fill in the host template. We guide you step by step to present your place at its best, and our team supports you through the whole process.'
      },
      queGana: {
        es: 'Como anfitrión recibes solicitudes más claras y perfiles ya filtrados (estudiantes y nómadas verificados), lo que significa menos mensajes sueltos y menos vueltas. Tu espacio se presenta mejor, llega a la persona adecuada y tienes más posibilidades de ocuparlo, con el acompañamiento de House & Flats.',
        en: 'As a host you get clearer requests and pre-filtered profiles (verified students and nomads), which means fewer scattered messages and less back-and-forth. Your space is presented better, reaches the right person and you have a higher chance of filling it, with House & Flats by your side.'
      },
      disponibilidad: {
        es: 'Tú decides la disponibilidad. Puedes ofrecer tu espacio todo el año, por fechas concretas o solo por temporadas; bloquear las fechas que no quieras; y fijar estancia mínima y máxima y el aviso previo que prefieras. El calendario es tuyo.',
        en: 'You decide availability. You can offer your space all year, on specific dates or only by season; block the dates you don’t want; and set a minimum and maximum stay and the notice period you prefer. The calendar is yours.'
      },
      plantilla: {
        es: 'La plantilla de anfitrión pide: tus datos como anfitrión, la ubicación con su zona, el tipo de espacio, el precio y las condiciones, los servicios que incluye, fotos, el perfil de huésped ideal y tu disponibilidad. Con eso armamos una presentación clara y atractiva.',
        en: 'The host template asks for: your host details, the location with its zone, the type of space, the price and conditions, the services included, photos, the ideal guest profile and your availability. With that we build a clear, attractive presentation.'
      },
      validacion: {
        es: 'Antes de mostrar tu espacio, House & Flats lo revisa y valida para asegurar que la información es coherente y de confianza. Así tu alojamiento llega con respaldo y genera más seguridad en quien lo busca.',
        en: 'Before showing your space, House & Flats reviews and validates it to make sure the information is consistent and trustworthy. That way your listing arrives with backing and inspires more confidence in guests.'
      },
      privacidad: {
        es: 'Tu dirección exacta nunca se muestra públicamente: solo se indica la zona o el barrio. Compartimos la ubicación precisa únicamente cuando ya hay una coordinación seria con un huésped.',
        en: 'Your exact address is never shown publicly: only the zone or neighborhood is indicated. We share the precise location only once there’s serious coordination with a guest.'
      },
      acompanamiento: {
        es: 'No estás solo: te acompañamos al publicar, al recibir solicitudes y al coordinar la reserva por WhatsApp, para que ofrecer tu espacio sea fácil y tranquilo.',
        en: 'You’re not on your own: we support you when you publish, when requests come in and when coordinating the booking on WhatsApp, so offering your space is easy and stress-free.'
      },
      empezar: {
        es: 'Empezar es muy fácil 🙂 Entra a la página “Sé anfitrión”, cuéntanos sobre tu espacio en la plantilla y nosotros nos encargamos del resto: lo presentamos bien y lo validamos antes de mostrarlo. No necesitas experiencia previa.\nCuando quieras, das el primer paso en anfitrion.html.',
        en: 'Getting started is really easy 🙂 Go to the “Become a host” page, tell us about your space in the template and we take care of the rest: we present it well and validate it before showing it. No prior experience needed.\nWhenever you like, take the first step at anfitrion.html.'
      },
      queNecesito: {
        es: 'Para publicar solo necesitas lo básico: unas fotos de tu espacio, su zona (no la dirección exacta), el tipo de espacio, el precio que quieres y los servicios que incluye. Con eso ya armamos una presentación clara y atractiva.\nTe guiamos paso a paso en anfitrion.html.',
        en: 'To list you only need the basics: a few photos of your space, its zone (not the exact address), the type of space, the price you want and the services included. With that we build a clear, attractive presentation.\nWe guide you step by step at anfitrion.html.'
      },
      cuantoTarda: {
        es: 'Una vez completas la plantilla, revisamos y validamos tu espacio en poco tiempo; en cuanto está listo, empieza a llegar a huéspedes verificados. Te avisamos en cada paso para que no estés pendiente.\nPuedes empezar hoy en anfitrion.html.',
        en: 'Once you fill in the template, we review and validate your space quickly; as soon as it’s ready, it starts reaching verified guests. We keep you posted at every step so you don’t have to chase it.\nYou can start today at anfitrion.html.'
      },
      editar: {
        es: 'Claro que sí: puedes editar tu espacio cuando quieras —precio, fotos, servicios, disponibilidad o el perfil de huésped ideal—. Tú tienes el control y nosotros te ayudamos a mantenerlo al día.\nGestiona todo desde anfitrion.html.',
        en: 'Of course: you can edit your space whenever you want —price, photos, services, availability or the ideal guest profile—. You’re in control and we help you keep it up to date.\nManage everything from anfitrion.html.'
      },
      precio: {
        es: 'El precio lo pones tú: conoces tu espacio mejor que nadie. Si quieres, te damos una referencia orientativa según la zona y el tipo de espacio para que encuentres un precio justo y competitivo.\nLo defines a tu manera en anfitrion.html.',
        en: 'You set the price: nobody knows your space better than you. If you’d like, we give you an indicative reference by zone and type of space so you land on a fair, competitive price.\nYou define it your way at anfitrion.html.'
      },
      ganancia: {
        es: 'Lo que cobras por tu espacio es tuyo: tú fijas el precio. House & Flats es el intermediario que te conecta con huéspedes verificados y te acompaña en el proceso; los importes de la demo son demostrativos. Si tienes dudas sobre condiciones, lo vemos contigo con total transparencia por WhatsApp.\nEmpieza en anfitrion.html.',
        en: 'What you charge for your space is yours: you set the price. House & Flats is the intermediary that connects you with verified guests and supports you through the process; demo amounts are illustrative. If you have questions about terms, we go through them with you transparently on WhatsApp.\nStart at anfitrion.html.'
      },
      pago: {
        es: 'El pago y el cierre se coordinan de forma directa y transparente con el huésped, con nuestro acompañamiento por WhatsApp. Nada de grandes adelantos ni vueltas raras: todo claro desde el principio.\nTe explicamos el detalle al publicar en anfitrion.html.',
        en: 'Payment and closing are coordinated directly and transparently with the guest, with our support on WhatsApp. No big upfront payments or odd back-and-forth: everything is clear from the start.\nWe walk you through the detail when you publish at anfitrion.html.'
      },
      elegirHuesped: {
        es: 'Tú decides a quién recibes: puedes describir tu huésped ideal y, como te llegan perfiles ya filtrados (estudiantes y nómadas verificados), eliges con tranquilidad. Si una solicitud no encaja, no hay problema en decir que no.\nDefine tu huésped ideal en anfitrion.html.',
        en: 'You decide who you host: you can describe your ideal guest and, since you receive pre-filtered profiles (verified students and nomads), you choose with peace of mind. If a request doesn’t fit, saying no is totally fine.\nDefine your ideal guest at anfitrion.html.'
      },
      tipoHuesped: {
        es: 'Recibes sobre todo estudiantes (intercambio, Erasmus, máster, prácticas) y nómadas digitales o profesionales remotos, por estadías de un mes o más. Son perfiles que valoran un espacio cuidado y una convivencia tranquila.\nCuéntanos tu huésped ideal en anfitrion.html.',
        en: 'You mainly host students (exchange, Erasmus, master’s, internships) and digital nomads or remote workers, for stays of a month or more. These are profiles that value a well-kept space and a calm stay.\nTell us your ideal guest at anfitrion.html.'
      },
      validarHuesped: {
        es: 'A cada huésped lo conocemos antes: trabajamos con perfiles verificados (estudiantes y nómadas) y filtramos las solicitudes para que te lleguen personas serias. Así recibes a alguien de confianza, no a un desconocido cualquiera.\nEmpieza con tranquilidad en anfitrion.html.',
        en: 'We get to know each guest first: we work with verified profiles (students and nomads) and filter requests so serious people reach you. That way you welcome someone trustworthy, not just any stranger.\nStart with peace of mind at anfitrion.html.'
      },
      danos: {
        es: 'Lo entendemos, es una duda normal. Trabajamos solo con huéspedes verificados y acordamos condiciones claras (incluida una seña/garantía) antes de la llegada, y te acompañamos por WhatsApp si surge cualquier inconveniente. Nunca estás solo ante un problema.\nLo coordinamos contigo desde anfitrion.html.',
        en: 'We get it, that’s a normal worry. We work only with verified guests and agree on clear terms (including a deposit/guarantee) before arrival, and we support you on WhatsApp if anything comes up. You’re never alone facing a problem.\nWe coordinate it with you from anfitrion.html.'
      },
      dejarOfrecer: {
        es: 'Tú tienes el control: puedes pausar o dejar de ofrecer tu espacio cuando quieras, sin ataduras. Solo bloqueas tu calendario o nos avisas y listo.\nGestiona tu disponibilidad en anfitrion.html.',
        en: 'You’re in control: you can pause or stop offering your space whenever you want, no strings attached. Just block your calendar or let us know and that’s it.\nManage your availability at anfitrion.html.'
      }
    },

    faqs: [
      {
        q: { es: '¿Cómo publico mi espacio? / Soy anfitrión', en: 'How do I publish my space? / I’m a host', pt: 'Como publico o meu espaço? / Sou anfitrião', fr: 'Comment publier mon espace ? / Je suis hôte', de: 'Wie veröffentliche ich meinen Raum? / Ich bin Gastgeber', nl: 'Hoe publiceer ik mijn ruimte? / Ik ben host' },
        a: { es: 'Entra a la página “Sé anfitrión” y completa la plantilla de anfitrión: datos, ubicación con zona, tipo de espacio, precio y condiciones, servicios, fotos, perfil de huésped ideal y disponibilidad. Te guiamos paso a paso y House & Flats valida tu espacio antes de mostrarlo.', en: 'Go to the “Become a host” page and fill in the host template: your details, location with zone, type of space, price and conditions, services, photos, ideal guest profile and availability. We guide you step by step and House & Flats validates your space before showing it.', pt: 'Entra na página “Sê anfitrião” e preenche a plantilla de anfitrião: dados, localização com zona, tipo de espaço, preço e condições, serviços, fotos, perfil de hóspede ideal e disponibilidade. Guiamos-te passo a passo e a House & Flats valida o teu espaço antes de o mostrar.', fr: 'Va sur la page « Devenir hôte » et remplis le modèle d’hôte : tes infos, l’emplacement avec sa zone, le type d’espace, le prix et les conditions, les services, des photos, le profil de voyageur idéal et ta disponibilité. On te guide pas à pas et House & Flats valide ton espace avant de l’afficher.', de: 'Geh auf die Seite „Gastgeber werden“ und fülle die Gastgeber-Vorlage aus: Daten, Standort mit Zone, Art des Raums, Preis und Bedingungen, Services, Fotos, ideales Gästeprofil und Verfügbarkeit. Wir führen dich Schritt für Schritt und House & Flats prüft deinen Raum, bevor er gezeigt wird.', nl: 'Ga naar de pagina “Word host” en vul de hostsjabloon in: gegevens, locatie met zone, type ruimte, prijs en voorwaarden, diensten, foto’s, ideaal gastprofiel en beschikbaarheid. We begeleiden je stap voor stap en House & Flats valideert je ruimte voordat die wordt getoond.' }
      },
      {
        q: { es: '¿Qué gano como anfitrión?', en: 'What do I gain as a host?', pt: 'O que ganho como anfitrião?', fr: 'Qu’est-ce que je gagne en tant qu’hôte ?', de: 'Was habe ich als Gastgeber davon?', nl: 'Wat win ik als host?' },
        a: { es: 'Solicitudes más claras y perfiles ya filtrados (estudiantes y nómadas verificados), menos mensajes sueltos, una mejor presentación de tu espacio y más posibilidades de ocuparlo, todo con el acompañamiento de House & Flats.', en: 'Clearer requests and pre-filtered profiles (verified students and nomads), fewer scattered messages, a better presentation of your space and a higher chance of filling it, all with House & Flats by your side.', pt: 'Pedidos mais claros e perfis já filtrados (estudantes e nómadas verificados), menos mensagens soltas, melhor apresentação do teu espaço e mais hipóteses de o ocupar, tudo com o acompanhamento da House & Flats.', fr: 'Des demandes plus claires et des profils déjà filtrés (étudiants et nomades vérifiés), moins de messages dispersés, une meilleure présentation de ton espace et plus de chances de le remplir, le tout accompagné par House & Flats.', de: 'Klarere Anfragen und vorgefilterte Profile (geprüfte Studierende und Nomaden), weniger verstreute Nachrichten, eine bessere Präsentation deines Raums und höhere Chancen, ihn zu belegen — alles mit House & Flats an deiner Seite.', nl: 'Duidelijkere aanvragen en vooraf gefilterde profielen (geverifieerde studenten en nomaden), minder losse berichten, een betere presentatie van je ruimte en meer kans om die te vullen, alles met House & Flats aan je zijde.' }
      },
      {
        q: { es: '¿Puedo ofrecer mi espacio solo por temporadas?', en: 'Can I offer my space by season only?', pt: 'Posso oferecer o meu espaço só por temporadas?', fr: 'Puis-je proposer mon espace seulement par saisons ?', de: 'Kann ich meinen Raum nur saisonal anbieten?', nl: 'Kan ik mijn ruimte alleen per seizoen aanbieden?' },
        a: { es: 'Sí. Tú decides la disponibilidad: todo el año, por fechas concretas o solo por temporadas. Puedes bloquear fechas, fijar estancia mínima y máxima y el aviso previo que prefieras. El calendario es tuyo.', en: 'Yes. You decide availability: all year, on specific dates or by season only. You can block dates, set a minimum and maximum stay and the notice period you prefer. The calendar is yours.', pt: 'Sim. Tu decides a disponibilidade: todo o ano, por datas concretas ou só por temporadas. Podes bloquear datas, definir estadia mínima e máxima e o aviso prévio que preferires. O calendário é teu.', fr: 'Oui. Tu décides de la disponibilité : toute l’année, à des dates précises ou par saisons seulement. Tu peux bloquer des dates, fixer un séjour minimum et maximum et le préavis que tu veux. Le calendrier est à toi.', de: 'Ja. Du bestimmst die Verfügbarkeit: ganzjährig, an bestimmten Daten oder nur saisonal. Du kannst Daten sperren, Mindest- und Höchstaufenthalt und die gewünschte Vorlaufzeit festlegen. Der Kalender gehört dir.', nl: 'Ja. Jij bepaalt de beschikbaarheid: het hele jaar, op specifieke data of alleen per seizoen. Je kunt data blokkeren, een minimum- en maximumverblijf en de gewenste aankondigingstermijn instellen. De kalender is van jou.' }
      },
      {
        q: { es: '¿House & Flats valida mi alojamiento?', en: 'Does House & Flats validate my listing?', pt: 'A House & Flats valida o meu alojamento?', fr: 'House & Flats valide-t-il mon logement ?', de: 'Prüft House & Flats meine Unterkunft?', nl: 'Valideert House & Flats mijn woning?' },
        a: { es: 'Sí. Antes de mostrar tu espacio lo revisamos y validamos para asegurar que la información es coherente y de confianza. Así tu alojamiento llega con respaldo y da más seguridad a quien lo busca.', en: 'Yes. Before showing your space we review and validate it to ensure the information is consistent and trustworthy. That way your listing arrives with backing and gives more confidence to guests.', pt: 'Sim. Antes de mostrar o teu espaço revemo-lo e validamo-lo para garantir que a informação é coerente e de confiança. Assim o teu alojamento chega com respaldo e dá mais segurança a quem o procura.', fr: 'Oui. Avant d’afficher ton espace, nous le vérifions et le validons pour garantir des informations cohérentes et fiables. Ainsi ton logement arrive avec une caution et inspire plus de confiance.', de: 'Ja. Bevor wir deinen Raum zeigen, prüfen und validieren wir ihn, damit die Informationen stimmig und vertrauenswürdig sind. So kommt deine Unterkunft mit Rückhalt und schafft mehr Vertrauen.', nl: 'Ja. Voordat we je ruimte tonen, controleren en valideren we die om te zorgen dat de informatie consistent en betrouwbaar is. Zo komt je woning met onderbouwing en geeft die meer vertrouwen.' }
      },
      {
        q: { es: '¿Se muestra mi dirección exacta?', en: 'Is my exact address shown?', pt: 'A minha morada exata é mostrada?', fr: 'Mon adresse exacte est-elle affichée ?', de: 'Wird meine genaue Adresse angezeigt?', nl: 'Wordt mijn exacte adres getoond?' },
        a: { es: 'No. Tu dirección exacta nunca se muestra públicamente: solo se indica la zona o el barrio. La ubicación precisa se comparte únicamente cuando ya hay una coordinación seria con un huésped.', en: 'No. Your exact address is never shown publicly: only the zone or neighborhood is indicated. The precise location is shared only when there’s serious coordination with a guest.', pt: 'Não. A tua morada exata nunca é mostrada publicamente: só se indica a zona ou o bairro. A localização precisa é partilhada apenas quando já há uma coordenação séria com um hóspede.', fr: 'Non. Ton adresse exacte n’est jamais affichée publiquement : seule la zone ou le quartier est indiqué. L’emplacement précis n’est partagé que lorsqu’il y a une coordination sérieuse avec un voyageur.', de: 'Nein. Deine genaue Adresse wird nie öffentlich gezeigt: Es wird nur die Zone oder das Viertel angegeben. Der genaue Standort wird erst geteilt, wenn es eine ernsthafte Abstimmung mit einem Gast gibt.', nl: 'Nee. Je exacte adres wordt nooit openbaar getoond: alleen de zone of buurt wordt aangegeven. De precieze locatie wordt pas gedeeld als er serieuze coördinatie met een gast is.' }
      },
      {
        q: { es: '¿Es seguro? ¿Los alojamientos están verificados?', en: 'Is it safe? Are the listings verified?', pt: 'É seguro? Os alojamentos são verificados?', fr: 'Est-ce sûr ? Les logements sont-ils vérifiés ?', de: 'Ist es sicher? Sind die Unterkünfte geprüft?', nl: 'Is het veilig? Zijn de woningen geverifieerd?' },
        a: { es: 'Sí. Revisamos ubicación, fotos y anfitrión antes de mostrarte cada alojamiento, así solo ves opciones reales y bien ubicadas.', en: 'Yes. We review location, photos and host before showing you each listing, so you only see real, well-located options.', pt: 'Sim. Revemos localização, fotos e anfitrião antes de mostrar cada alojamento, por isso só vês opções reais e bem localizadas.', fr: 'Oui. Nous vérifions l’emplacement, les photos et l’hôte avant de te montrer chaque logement, pour que tu ne voies que des options réelles et bien situées.', de: 'Ja. Wir prüfen Standort, Fotos und Gastgeber, bevor wir dir eine Unterkunft zeigen, sodass du nur echte, gut gelegene Optionen siehst.', nl: 'Ja. We controleren locatie, foto’s en host voordat we een woning tonen, dus je ziet alleen echte, goed gelegen opties.' }
      },
      {
        q: { es: '¿Tengo que pagar por adelantado?', en: 'Do I have to pay upfront?', pt: 'Tenho de pagar antecipadamente?', fr: 'Dois-je payer à l’avance ?', de: 'Muss ich im Voraus zahlen?', nl: 'Moet ik vooraf betalen?' },
        a: { es: 'No. No pides ni pagas dinero por adelantado para reservar; coordinas con el anfitrión y avanzas con transparencia.', en: 'No. You don’t pay any money upfront to reserve; you coordinate with the host and move forward transparently.', pt: 'Não. Não pagas dinheiro antecipado para reservar; combinas com o anfitrião e avanças com transparência.', fr: 'Non. Tu ne paies rien à l’avance pour réserver ; tu te coordonnes avec l’hôte et avances en transparence.', de: 'Nein. Du zahlst nichts im Voraus, um zu reservieren; du stimmst dich mit dem Gastgeber ab und gehst transparent vor.', nl: 'Nee. Je betaalt niets vooraf om te reserveren; je stemt af met de host en gaat transparant verder.' }
      },
      {
        q: { es: '¿Cómo reservo un alojamiento?', en: 'How do I reserve a place?', pt: 'Como reservo um alojamento?', fr: 'Comment réserver un logement ?', de: 'Wie reserviere ich eine Unterkunft?', nl: 'Hoe reserveer ik een woning?' },
        a: { es: 'Completas la solicitud con tu destino y preferencias, recibes opciones recomendadas y coordinas por WhatsApp con el anfitrión para asegurar tu fecha.', en: 'You fill in the request with your destination and preferences, receive recommended options and coordinate by WhatsApp with the host to secure your date.', pt: 'Preenches o pedido com o teu destino e preferências, recebes opções recomendadas e combinas por WhatsApp com o anfitrião para garantir a data.', fr: 'Tu remplis la demande avec ta destination et tes préférences, reçois des options recommandées et coordonnes par WhatsApp avec l’hôte pour sécuriser ta date.', de: 'Du füllst die Anfrage mit Ziel und Wünschen aus, erhältst empfohlene Optionen und regelst per WhatsApp mit dem Gastgeber, um deinen Termin zu sichern.', nl: 'Je vult de aanvraag in met je bestemming en voorkeuren, ontvangt aanbevolen opties en regelt via WhatsApp met de host om je datum te zekeren.' }
      },
      {
        q: { es: '¿Puedo cancelar?', en: 'Can I cancel?', pt: 'Posso cancelar?', fr: 'Puis-je annuler ?', de: 'Kann ich stornieren?', nl: 'Kan ik annuleren?' },
        a: { es: 'Sí, la cancelación es flexible. Si tus planes cambian, hablas con nosotros y buscamos la mejor solución para cancelar o ajustar tu estadía.', en: 'Yes, cancellation is flexible. If your plans change, talk to us and we’ll find the best way to cancel or adjust your stay.', pt: 'Sim, o cancelamento é flexível. Se os teus planos mudarem, falas connosco e procuramos a melhor solução para cancelar ou ajustar a estadia.', fr: 'Oui, l’annulation est flexible. Si tes plans changent, contacte-nous et on trouve la meilleure solution pour annuler ou ajuster ton séjour.', de: 'Ja, die Stornierung ist flexibel. Ändern sich deine Pläne, sprich mit uns und wir finden die beste Lösung zum Stornieren oder Anpassen.', nl: 'Ja, annuleren is flexibel. Veranderen je plannen, neem dan contact op en we vinden de beste oplossing om te annuleren of aan te passen.' }
      },
      {
        q: { es: '¿En qué ciudades hay alojamientos?', en: 'Which cities do you cover?', pt: 'Em que cidades há alojamentos?', fr: 'Dans quelles villes y a-t-il des logements ?', de: 'In welchen Städten gibt es Unterkünfte?', nl: 'In welke steden zijn er woningen?' },
        a: { es: 'En esta demo: Madrid, Buenos Aires, Santiago, Lisboa, Londres, Berlín, París, Ámsterdam, Roma y Viena.', en: 'In this demo: Madrid, Buenos Aires, Santiago, Lisbon, London, Berlin, Paris, Amsterdam, Rome and Vienna.', pt: 'Nesta demo: Madrid, Buenos Aires, Santiago, Lisboa, Londres, Berlim, Paris, Amesterdão, Roma e Viena.', fr: 'Dans cette démo : Madrid, Buenos Aires, Santiago, Lisbonne, Londres, Berlin, Paris, Amsterdam, Rome et Vienne.', de: 'In dieser Demo: Madrid, Buenos Aires, Santiago, Lissabon, London, Berlin, Paris, Amsterdam, Rom und Wien.', nl: 'In deze demo: Madrid, Buenos Aires, Santiago, Lissabon, Londen, Berlijn, Parijs, Amsterdam, Rome en Wenen.' }
      },
      {
        q: { es: '¿Es para estudiantes o para nómadas?', en: 'Is it for students or nomads?', pt: 'É para estudantes ou nómadas?', fr: 'Est-ce pour étudiants ou nomades ?', de: 'Ist es für Studierende oder Nomaden?', nl: 'Is het voor studenten of nomaden?' },
        a: { es: 'Para ambos. Trabajamos con estudiantes (intercambio, Erasmus, máster, pasantías) y con nómadas digitales y profesionales remotos.', en: 'For both. We work with students (exchange, Erasmus, master’s, internships) and with digital nomads and remote workers.', pt: 'Para ambos. Trabalhamos com estudantes (intercâmbio, Erasmus, mestrado, estágios) e com nómadas digitais e profissionais remotos.', fr: 'Pour les deux. Nous travaillons avec des étudiants (échange, Erasmus, master, stages) et des nomades numériques et travailleurs à distance.', de: 'Für beide. Wir arbeiten mit Studierenden (Austausch, Erasmus, Master, Praktika) und mit digitalen Nomaden und Remote-Arbeitenden.', nl: 'Voor beide. We werken met studenten (uitwisseling, Erasmus, master, stages) en met digitale nomaden en remote werkers.' }
      },
      {
        q: { es: '¿Cuánto tiempo puedo quedarme?', en: 'How long can I stay?', pt: 'Quanto tempo posso ficar?', fr: 'Combien de temps puis-je rester ?', de: 'Wie lange kann ich bleiben?', nl: 'Hoe lang kan ik blijven?' },
        a: { es: 'Son estadías temporales con un mínimo de un mes; puedes quedarte varios meses según el alojamiento y tu plan.', en: 'These are temporary stays with a one-month minimum; you can stay several months depending on the listing and your plan.', pt: 'São estadias temporárias com mínimo de um mês; podes ficar vários meses conforme o alojamento e o teu plano.', fr: 'Ce sont des séjours temporaires d’un mois minimum ; tu peux rester plusieurs mois selon le logement et ton projet.', de: 'Es sind temporäre Aufenthalte ab einem Monat; je nach Unterkunft und Plan kannst du mehrere Monate bleiben.', nl: 'Het zijn tijdelijke verblijven van minimaal één maand; je kunt meerdere maanden blijven, afhankelijk van de woning en je plan.' }
      },
      {
        q: { es: '¿Los servicios están incluidos?', en: 'Are bills included?', pt: 'Os serviços estão incluídos?', fr: 'Les charges sont-elles incluses ?', de: 'Sind die Nebenkosten inklusive?', nl: 'Zijn de kosten inclusief?' },
        a: { es: 'Depende del alojamiento. Muchos incluyen servicios y WiFi (lo verás en sus características). Si te interesa uno, confirmamos los detalles por WhatsApp.', en: 'It depends on the listing. Many include bills and WiFi (shown in their features). If one interests you, we confirm the details by WhatsApp.', pt: 'Depende do alojamento. Muitos incluem serviços e WiFi (verás nas características). Se te interessar, confirmamos os detalhes por WhatsApp.', fr: 'Cela dépend du logement. Beaucoup incluent les charges et le WiFi (indiqué dans les caractéristiques). Si l’un t’intéresse, on confirme les détails par WhatsApp.', de: 'Das hängt von der Unterkunft ab. Viele enthalten Nebenkosten und WLAN (siehe Ausstattung). Bei Interesse klären wir die Details per WhatsApp.', nl: 'Dat hangt van de woning af. Veel woningen zijn inclusief kosten en WiFi (zie de kenmerken). Bij interesse bevestigen we de details via WhatsApp.' }
      },
      {
        q: { es: '¿Cómo recomienda Sophi los alojamientos?', en: 'How does Sophi recommend listings?', pt: 'Como é que a Sophi recomenda alojamentos?', fr: 'Comment Sophi recommande-t-elle les logements ?', de: 'Wie empfiehlt Sophi Unterkünfte?', nl: 'Hoe beveelt Sophi woningen aan?' },
        a: { es: 'Sophi cruza tu destino, presupuesto, tipo de alojamiento y preferencias con la base verificada y te propone solo opciones reales; si algo supera tu presupuesto, te lo dice con claridad.', en: 'Sophi matches your destination, budget, housing type and preferences against the verified database and proposes only real options; if something is over budget, she says so clearly.', pt: 'A Sophi cruza o teu destino, orçamento, tipo de alojamento e preferências com a base verificada e propõe só opções reais; se algo ultrapassar o orçamento, diz claramente.', fr: 'Sophi croise ta destination, ton budget, ton type de logement et tes préférences avec la base vérifiée et ne propose que des options réelles ; si quelque chose dépasse ton budget, elle le dit clairement.', de: 'Sophi gleicht Ziel, Budget, Unterkunftsart und Wünsche mit der geprüften Datenbank ab und schlägt nur echte Optionen vor; liegt etwas über dem Budget, sagt sie es klar.', nl: 'Sophi koppelt je bestemming, budget, woningtype en voorkeuren aan de geverifieerde database en stelt alleen echte opties voor; als iets boven budget is, zegt ze dat duidelijk.' }
      },
      {
        q: { es: '¿Las fotos son reales?', en: 'Are the photos real?', pt: 'As fotos são reais?', fr: 'Les photos sont-elles réelles ?', de: 'Sind die Fotos echt?', nl: 'Zijn de foto’s echt?' },
        a: { es: 'En la operación real, las fotos corresponden al alojamiento verificado. En esta demo las imágenes son ilustrativas, pero la lógica es la misma: solo mostramos lo que existe.', en: 'In real operations, photos match the verified listing. In this demo the images are illustrative, but the logic is the same: we only show what exists.', pt: 'Na operação real, as fotos correspondem ao alojamento verificado. Nesta demo as imagens são ilustrativas, mas a lógica é a mesma: só mostramos o que existe.', fr: 'En réel, les photos correspondent au logement vérifié. Dans cette démo les images sont illustratives, mais la logique est la même : on ne montre que ce qui existe.', de: 'Im echten Betrieb entsprechen die Fotos der geprüften Unterkunft. In dieser Demo sind die Bilder illustrativ, aber die Logik ist dieselbe: Wir zeigen nur, was existiert.', nl: 'In de echte werking horen de foto’s bij de geverifieerde woning. In deze demo zijn de beelden illustratief, maar de logica is hetzelfde: we tonen alleen wat bestaat.' }
      },
      {
        q: { es: '¿Cómo los contacto?', en: 'How do I contact you?', pt: 'Como vos contacto?', fr: 'Comment vous contacter ?', de: 'Wie kontaktiere ich euch?', nl: 'Hoe neem ik contact op?' },
        a: { es: 'Por WhatsApp. Completa la solicitud o pídele a Sophi una opción y te pasamos al chat de WhatsApp para coordinar todo directamente.', en: 'Via WhatsApp. Fill in the request or ask Sophi for an option and we move you to WhatsApp chat to coordinate everything directly.', pt: 'Por WhatsApp. Preenche o pedido ou pede uma opção à Sophi e passamos-te para o chat de WhatsApp para combinar tudo diretamente.', fr: 'Par WhatsApp. Remplis la demande ou demande une option à Sophi et on te bascule sur le chat WhatsApp pour tout coordonner directement.', de: 'Per WhatsApp. Fülle die Anfrage aus oder bitte Sophi um eine Option, und wir leiten dich in den WhatsApp-Chat, um alles direkt zu regeln.', nl: 'Via WhatsApp. Vul de aanvraag in of vraag Sophi om een optie en we brengen je naar de WhatsApp-chat om alles direct te regelen.' }
      },
      {
        q: { es: '¿Puedo enviar una foto de un piso que me gusta?', en: 'Can I send a photo of an apartment I like?', pt: 'Posso enviar uma foto de um apartamento que gosto?', fr: 'Puis-je envoyer une photo d’un appartement qui me plaît ?', de: 'Kann ich ein Foto einer Wohnung senden, die mir gefällt?', nl: 'Kan ik een foto sturen van een appartement dat ik leuk vind?' },
        a: { es: 'Sí. Sophi entiende imágenes: descríbele lo que buscas o envía una foto y te ayuda a encontrar opciones parecidas dentro de la base verificada.', en: 'Yes. Sophi understands images: describe what you want or send a photo and she helps you find similar options within the verified database.', pt: 'Sim. A Sophi entende imagens: descreve o que procuras ou envia uma foto e ela ajuda a encontrar opções parecidas na base verificada.', fr: 'Oui. Sophi comprend les images : décris ce que tu cherches ou envoie une photo et elle t’aide à trouver des options similaires dans la base vérifiée.', de: 'Ja. Sophi versteht Bilder: Beschreibe, was du suchst, oder sende ein Foto, und sie hilft dir, ähnliche Optionen in der geprüften Datenbank zu finden.', nl: 'Ja. Sophi begrijpt afbeeldingen: beschrijf wat je zoekt of stuur een foto en ze helpt je vergelijkbare opties te vinden in de geverifieerde database.' }
      },
      {
        q: { es: '¿Quién es Sophi?', en: 'Who is Sophi?', pt: 'Quem é a Sophi?', fr: 'Qui est Sophi ?', de: 'Wer ist Sophi?', nl: 'Wie is Sophi?' },
        a: { es: 'Sophi es la asistente con IA de House & Flats. Conoce todo sobre la marca —destinos, precios, zonas, reserva y acompañamiento— y resuelve tus dudas al instante por texto, imagen o voz, en varios idiomas. Cuando hace falta una persona, te conecta con el equipo por WhatsApp sin que pierdas el hilo.', en: 'Sophi is the House & Flats AI assistant. She knows everything about the brand —destinations, prices, areas, booking and support— and resolves your doubts instantly by text, image or voice, in several languages. When a human is needed, she connects you with the team on WhatsApp without losing the thread.', pt: 'A Sophi é a assistente com IA da House & Flats. Sabe tudo sobre a marca —destinos, preços, zonas, reserva e acompanhamento— e resolve as tuas dúvidas ao instante por texto, imagem ou voz, em vários idiomas. Quando é preciso uma pessoa, liga-te à equipa por WhatsApp sem perderes o fio.', fr: 'Sophi est l’assistante IA de House & Flats. Elle sait tout sur la marque —destinations, prix, quartiers, réservation et accompagnement— et résout tes doutes instantanément par texte, image ou voix, en plusieurs langues. Si une personne est nécessaire, elle te met en relation avec l’équipe sur WhatsApp sans perdre le fil.', de: 'Sophi ist die KI-Assistentin von House & Flats. Sie weiß alles über die Marke —Ziele, Preise, Viertel, Buchung und Betreuung— und löst deine Fragen sofort per Text, Bild oder Sprache, in mehreren Sprachen. Wenn ein Mensch nötig ist, verbindet sie dich per WhatsApp mit dem Team, ohne den Faden zu verlieren.', nl: 'Sophi is de AI-assistent van House & Flats. Ze weet alles over het merk —bestemmingen, prijzen, buurten, boeken en begeleiding— en lost je vragen direct op via tekst, beeld of spraak, in meerdere talen. Als een persoon nodig is, verbindt ze je via WhatsApp met het team zonder de draad kwijt te raken.' }
      },
      {
        q: { es: '¿Cómo me contacto con una persona del equipo?', en: 'How do I reach a person from the team?', pt: 'Como falo com uma pessoa da equipa?', fr: 'Comment joindre une personne de l’équipe ?', de: 'Wie erreiche ich eine Person aus dem Team?', nl: 'Hoe bereik ik iemand van het team?' },
        a: { es: 'Primero te ayuda Sophi: resuelve la mayoría de las dudas al instante. Si necesitas hablar con una persona, el equipo está disponible por WhatsApp (canal principal) y en Instagram como @houseandflats.', en: 'Sophi helps you first: she resolves most questions instantly. If you need to talk to a person, the team is available on WhatsApp (main channel) and on Instagram as @houseandflats.', pt: 'Primeiro ajuda a Sophi: resolve a maioria das dúvidas ao instante. Se precisares de falar com uma pessoa, a equipa está disponível por WhatsApp (canal principal) e no Instagram como @houseandflats.', fr: 'Sophi t’aide d’abord : elle résout la plupart des questions instantanément. Si tu dois parler à une personne, l’équipe est disponible sur WhatsApp (canal principal) et sur Instagram en tant que @houseandflats.', de: 'Zuerst hilft Sophi: Sie löst die meisten Fragen sofort. Wenn du mit einer Person sprechen musst, ist das Team per WhatsApp (Hauptkanal) und auf Instagram als @houseandflats erreichbar.', nl: 'Sophi helpt je eerst: ze lost de meeste vragen direct op. Als je met een persoon wilt praten, is het team beschikbaar via WhatsApp (hoofdkanaal) en op Instagram als @houseandflats.' }
      },
      {
        q: { es: 'No me gustó ninguna opción / ninguna me convence', en: 'I didn’t like any option / none convince me', pt: 'Não gostei de nenhuma opção / nenhuma me convence', fr: 'Aucune option ne m’a plu / aucune ne me convainc', de: 'Mir hat keine Option gefallen / keine überzeugt mich', nl: 'Geen enkele optie beviel me / geen overtuigt me' },
        a: { es: 'Sin problema, ¡para eso estoy! 🙂 Cuéntame qué no encajó (precio, zona, tamaño, estilo) y te busco otras opciones de la selección verificada que vayan más contigo. Esto es un match, así que afinamos hasta dar con tu lugar.\nDime qué cambiarías y seguimos.', en: 'No problem, that’s what I’m here for! 🙂 Tell me what didn’t fit (price, area, size, style) and I’ll find you other options from the verified selection that suit you better. This is a match, so we fine-tune until we hit your place.\nTell me what you’d change and we keep going.', pt: 'Sem problema, é para isso que cá estou! 🙂 Diz-me o que não encaixou (preço, zona, tamanho, estilo) e procuro-te outras opções da seleção verificada mais a teu jeito. Isto é um match, por isso afinamos até dar com o teu lugar.\nDiz-me o que mudarias e seguimos.', fr: 'Pas de souci, c’est pour ça que je suis là ! 🙂 Dis-moi ce qui n’allait pas (prix, quartier, taille, style) et je te trouve d’autres options de la sélection vérifiée qui te correspondent mieux. C’est un match, alors on ajuste jusqu’à trouver ton lieu.\nDis-moi ce que tu changerais et on continue.', de: 'Kein Problem, genau dafür bin ich da! 🙂 Sag mir, was nicht gepasst hat (Preis, Lage, Größe, Stil), und ich suche dir andere Optionen aus der geprüften Auswahl, die besser zu dir passen. Das ist ein Match, also justieren wir, bis dein Ort dabei ist.\nSag mir, was du ändern würdest, und wir machen weiter.', nl: 'Geen probleem, daar ben ik voor! 🙂 Vertel me wat niet klopte (prijs, buurt, grootte, stijl) en ik zoek andere opties uit de geverifieerde selectie die beter bij je passen. Dit is een match, dus we verfijnen tot we jouw plek vinden.\nZeg wat je zou veranderen en we gaan door.' }
      },
      {
        q: { es: 'Quiero algo más barato / más céntrico / más grande', en: 'I want something cheaper / more central / bigger', pt: 'Quero algo mais barato / mais central / maior', fr: 'Je veux quelque chose de moins cher / plus central / plus grand', de: 'Ich möchte etwas günstigeres / zentraleres / größeres', nl: 'Ik wil iets goedkopers / centralers / groters' },
        a: { es: '¡Perfecto, lo ajustamos! 🙂 Dime tu prioridad —precio, ubicación o tamaño— y tu destino, y filtro la selección verificada para acercarte a eso. Si algo se sale del presupuesto, te lo digo con honestidad y te propongo un barrio equivalente más accesible.\nDame el dato y te traigo opciones.', en: 'Perfect, let’s adjust it! 🙂 Tell me your priority —price, location or size— and your destination, and I’ll filter the verified selection toward that. If something is over budget, I’ll tell you honestly and suggest an equivalent, more affordable area.\nGive me the detail and I’ll bring options.', pt: 'Perfeito, ajustamos! 🙂 Diz-me a tua prioridade —preço, localização ou tamanho— e o teu destino, e filtro a seleção verificada nesse sentido. Se algo passar do orçamento, digo-te com honestidade e sugiro um bairro equivalente mais acessível.\nDá-me o dado e trago opções.', fr: 'Parfait, on ajuste ! 🙂 Dis-moi ta priorité —prix, emplacement ou taille— et ta destination, et je filtre la sélection vérifiée dans ce sens. Si quelque chose dépasse le budget, je te le dis honnêtement et propose un quartier équivalent plus abordable.\nDonne-moi l’info et je t’apporte des options.', de: 'Perfekt, das passen wir an! 🙂 Sag mir deine Priorität —Preis, Lage oder Größe— und dein Ziel, und ich filtere die geprüfte Auswahl danach. Liegt etwas über dem Budget, sage ich es ehrlich und schlage ein gleichwertiges, günstigeres Viertel vor.\nGib mir die Info und ich bringe Optionen.', nl: 'Perfect, dat passen we aan! 🙂 Vertel me je prioriteit —prijs, locatie of grootte— en je bestemming, en ik filter de geverifieerde selectie daarop. Als iets boven budget is, zeg ik dat eerlijk en stel ik een gelijkwaardige, betaalbaardere buurt voor.\nGeef me het detail en ik breng opties.' }
      },
      {
        q: { es: 'Puedo cambiar mi presupuesto', en: 'Can I change my budget', pt: 'Posso mudar o meu orçamento', fr: 'Puis-je changer mon budget', de: 'Kann ich mein Budget ändern', nl: 'Kan ik mijn budget aanpassen' },
        a: { es: '¡Claro! Tu presupuesto no es fijo: dime el nuevo monto y la moneda y vuelvo a buscar opciones que encajen. Subirlo un poco a veces abre barrios mejores; bajarlo, también encontramos buenas alternativas. Tú mandas.\nPásame la cifra y seguimos.', en: 'Of course! Your budget isn’t fixed: tell me the new amount and currency and I’ll search again for options that fit. Raising it a bit can open up better areas; lowering it, we still find good alternatives. You’re in charge.\nSend me the figure and we continue.', pt: 'Claro! O teu orçamento não é fixo: diz-me o novo valor e a moeda e procuro outra vez opções que encaixem. Subir um pouco às vezes abre bairros melhores; baixar, também encontramos boas alternativas. Tu mandas.\nPassa-me o valor e seguimos.', fr: 'Bien sûr ! Ton budget n’est pas figé : donne-moi le nouveau montant et la devise et je recherche des options adaptées. L’augmenter un peu ouvre parfois de meilleurs quartiers ; le baisser, on trouve aussi de bonnes alternatives. C’est toi qui décides.\nDonne-moi le chiffre et on continue.', de: 'Klar! Dein Budget ist nicht fix: Nenn mir den neuen Betrag und die Währung und ich suche erneut passende Optionen. Etwas mehr eröffnet manchmal bessere Viertel; weniger, wir finden auch gute Alternativen. Du bestimmst.\nGib mir die Zahl und wir machen weiter.', nl: 'Natuurlijk! Je budget ligt niet vast: geef me het nieuwe bedrag en de valuta en ik zoek opnieuw passende opties. Iets hoger opent soms betere buurten; lager vinden we ook goede alternatieven. Jij beslist.\nGeef me het bedrag en we gaan verder.' }
      },
      {
        q: { es: 'Qué pasa después del match', en: 'What happens after the match', pt: 'O que acontece depois do match', fr: 'Que se passe-t-il après le match', de: 'Was passiert nach dem Match', nl: 'Wat gebeurt er na de match' },
        a: { es: 'Cuando aparece tu match, te conectamos con el anfitrión por WhatsApp para resolver dudas, coordinar el check-in y avanzar con transparencia, sin pagos por adelantado. Te acompañamos antes, durante y después de tu llegada.\nCuando quieras, completa tu solicitud y empezamos.', en: 'When your match appears, we connect you with the host on WhatsApp to clear up doubts, coordinate check-in and move forward transparently, with no upfront payment. We support you before, during and after your arrival.\nWhenever you like, fill in your request and we begin.', pt: 'Quando surge o teu match, ligamos-te ao anfitrião por WhatsApp para tirar dúvidas, combinar o check-in e avançar com transparência, sem pagamentos antecipados. Acompanhamos-te antes, durante e depois da chegada.\nQuando quiseres, preenche o teu pedido e começamos.', fr: 'Quand ton match apparaît, on te met en relation avec l’hôte sur WhatsApp pour lever tes doutes, coordonner l’arrivée et avancer en transparence, sans paiement à l’avance. On t’accompagne avant, pendant et après ton arrivée.\nQuand tu veux, remplis ta demande et on commence.', de: 'Wenn dein Match erscheint, verbinden wir dich per WhatsApp mit dem Gastgeber, um Fragen zu klären, den Check-in abzustimmen und transparent voranzukommen, ohne Vorauszahlung. Wir begleiten dich vor, während und nach der Ankunft.\nWann immer du magst, fülle deine Anfrage aus und wir starten.', nl: 'Als je match verschijnt, verbinden we je via WhatsApp met de host om vragen te beantwoorden, de check-in af te stemmen en transparant verder te gaan, zonder vooruitbetaling. We begeleiden je vóór, tijdens en na je aankomst.\nVul je aanvraag in wanneer je wilt en we beginnen.' }
      },
      {
        q: { es: 'Cómo contacto al anfitrión', en: 'How do I contact the host', pt: 'Como contacto o anfitrião', fr: 'Comment contacter l’hôte', de: 'Wie kontaktiere ich den Gastgeber', nl: 'Hoe neem ik contact op met de host' },
        a: { es: 'No tienes que buscarlo tú: cuando hay un match serio, nosotros te conectamos con el anfitrión por WhatsApp y coordinamos juntos. Así hablas con la persona correcta y con respaldo del equipo.\nCompleta tu solicitud o pídeme una opción y te paso al chat.', en: 'You don’t have to track them down: when there’s a serious match, we connect you with the host on WhatsApp and coordinate together. That way you talk to the right person, backed by the team.\nFill in your request or ask me for an option and I’ll move you to the chat.', pt: 'Não tens de o procurar: quando há um match sério, ligamos-te ao anfitrião por WhatsApp e coordenamos juntos. Assim falas com a pessoa certa e com o apoio da equipa.\nPreenche o teu pedido ou pede-me uma opção e passo-te para o chat.', fr: 'Tu n’as pas à le chercher : quand il y a un match sérieux, on te met en relation avec l’hôte sur WhatsApp et on coordonne ensemble. Ainsi tu parles à la bonne personne, avec le soutien de l’équipe.\nRemplis ta demande ou demande-moi une option et je te bascule sur le chat.', de: 'Du musst ihn nicht selbst suchen: Bei einem ernsthaften Match verbinden wir dich per WhatsApp mit dem Gastgeber und stimmen gemeinsam ab. So sprichst du mit der richtigen Person, mit Rückhalt des Teams.\nFülle deine Anfrage aus oder bitte mich um eine Option, und ich bringe dich in den Chat.', nl: 'Je hoeft hem niet zelf op te sporen: bij een serieuze match verbinden we je via WhatsApp met de host en stemmen we samen af. Zo praat je met de juiste persoon, met steun van het team.\nVul je aanvraag in of vraag me om een optie en ik breng je naar de chat.' }
      },
      {
        q: { es: 'Puedo llevar mascota', en: 'Can I bring a pet', pt: 'Posso levar animal de estimação', fr: 'Puis-je venir avec un animal', de: 'Kann ich ein Haustier mitbringen', nl: 'Mag ik een huisdier meenemen' },
        a: { es: '¡Depende del espacio! Algunos anfitriones aceptan mascotas y otros no. Dime que viajas con tu mascota (y qué tipo) y filtro solo las opciones que sí las admiten, para que ninguno te diga que no a último momento.\nCuéntame y te busco las pet-friendly.', en: 'It depends on the space! Some hosts accept pets and others don’t. Tell me you’re travelling with your pet (and what kind) and I’ll filter only the options that allow them, so none says no at the last minute.\nTell me and I’ll find the pet-friendly ones.', pt: 'Depende do espaço! Alguns anfitriões aceitam animais e outros não. Diz-me que viajas com o teu animal (e que tipo) e filtro só as opções que os admitem, para que nenhum diga que não à última hora.\nConta-me e procuro as pet-friendly.', fr: 'Ça dépend du logement ! Certains hôtes acceptent les animaux, d’autres non. Dis-moi que tu voyages avec ton animal (et lequel) et je filtre uniquement les options qui les acceptent, pour qu’aucune ne dise non au dernier moment.\nDis-moi et je trouve les pet-friendly.', de: 'Das hängt vom Raum ab! Manche Gastgeber akzeptieren Haustiere, andere nicht. Sag mir, dass du mit deinem Haustier reist (und welcher Art), und ich filtere nur die Optionen, die sie erlauben, damit keine im letzten Moment absagt.\nSag Bescheid und ich finde die haustierfreundlichen.', nl: 'Dat hangt van de ruimte af! Sommige hosts accepteren huisdieren, andere niet. Zeg me dat je met je huisdier reist (en welk soort) en ik filter alleen de opties die ze toestaan, zodat geen op het laatste moment nee zegt.\nVertel het me en ik zoek de huisdiervriendelijke.' }
      },
      {
        q: { es: 'Se puede para 2 personas / pareja', en: 'Is it ok for 2 people / a couple', pt: 'Pode ser para 2 pessoas / casal', fr: 'Est-ce possible pour 2 personnes / un couple', de: 'Geht es für 2 Personen / ein Paar', nl: 'Kan het voor 2 personen / een stel' },
        a: { es: '¡Sí! Muchos espacios funcionan genial para dos personas o parejas. Dime tu destino y presupuesto y filtro studios y departamentos pensados para dos, en zonas tranquilas y bien ubicadas.\nCuéntame y te traigo opciones para los dos.', en: 'Yes! Many spaces work great for two people or couples. Tell me your destination and budget and I’ll filter studios and apartments meant for two, in calm, well-located areas.\nTell me and I’ll bring options for both of you.', pt: 'Sim! Muitos espaços funcionam ótimo para duas pessoas ou casais. Diz-me o teu destino e orçamento e filtro studios e apartamentos pensados para dois, em zonas tranquilas e bem localizadas.\nConta-me e trago opções para os dois.', fr: 'Oui ! Beaucoup de logements conviennent très bien à deux personnes ou à un couple. Dis-moi ta destination et ton budget et je filtre studios et appartements pensés pour deux, dans des quartiers calmes et bien situés.\nDis-moi et je t’apporte des options pour vous deux.', de: 'Ja! Viele Räume eignen sich super für zwei Personen oder Paare. Sag mir Ziel und Budget und ich filtere Studios und Wohnungen für zwei, in ruhigen, gut gelegenen Vierteln.\nSag Bescheid und ich bringe Optionen für euch beide.', nl: 'Ja! Veel ruimtes werken prima voor twee personen of stellen. Geef me je bestemming en budget en ik filter studio’s en appartementen voor twee, in rustige, goed gelegen buurten.\nVertel het me en ik breng opties voor jullie twee.' }
      },
      {
        q: { es: 'Hay wifi / escritorio para trabajar', en: 'Is there wifi / a desk to work', pt: 'Há wifi / secretária para trabalhar', fr: 'Y a-t-il du wifi / un bureau pour travailler', de: 'Gibt es WLAN / einen Schreibtisch zum Arbeiten', nl: 'Is er wifi / een bureau om te werken' },
        a: { es: 'Pensando en trabajar remoto, sí: la mayoría de los espacios incluyen WiFi y muchos tienen un rincón o escritorio cómodo para tu día a día. Dime tu destino y filtro las opciones ideales para nómadas, con buen WiFi y zona de trabajo.\nCuéntame y te muestro las mejores para teletrabajar.', en: 'Thinking about remote work, yes: most spaces include WiFi and many have a comfortable corner or desk for your day-to-day. Tell me your destination and I’ll filter the options ideal for nomads, with good WiFi and a work area.\nTell me and I’ll show you the best ones for working from home.', pt: 'A pensar em trabalho remoto, sim: a maioria dos espaços inclui WiFi e muitos têm um canto ou secretária confortável para o teu dia a dia. Diz-me o teu destino e filtro as opções ideais para nómadas, com bom WiFi e zona de trabalho.\nConta-me e mostro-te as melhores para teletrabalhar.', fr: 'Pour le télétravail, oui : la plupart des logements incluent le WiFi et beaucoup ont un coin ou un bureau confortable pour ton quotidien. Dis-moi ta destination et je filtre les options idéales pour nomades, avec bon WiFi et espace de travail.\nDis-moi et je te montre les meilleures pour télétravailler.', de: 'Fürs Remote-Arbeiten, ja: Die meisten Räume haben WLAN und viele eine bequeme Ecke oder einen Schreibtisch für deinen Alltag. Sag mir dein Ziel und ich filtere die idealen Optionen für Nomaden, mit gutem WLAN und Arbeitsbereich.\nSag Bescheid und ich zeige dir die besten zum Homeoffice.', nl: 'Met het oog op remote werken, ja: de meeste ruimtes hebben WiFi en veel hebben een comfortabele hoek of bureau voor je dagelijks gebruik. Geef me je bestemming en ik filter de ideale opties voor nomaden, met goede WiFi en werkplek.\nVertel het me en ik toon je de beste om thuis te werken.' }
      },
      {
        q: { es: 'Puedo extender mi estadía', en: 'Can I extend my stay', pt: 'Posso prolongar a minha estadia', fr: 'Puis-je prolonger mon séjour', de: 'Kann ich meinen Aufenthalt verlängern', nl: 'Kan ik mijn verblijf verlengen' },
        a: { es: '¡Casi siempre sí! Si te quieres quedar más tiempo, hablas con nosotros y lo coordinamos con el anfitrión según su disponibilidad. Cuanto antes lo avises, más fácil es asegurar tu continuidad en el mismo espacio.\nCuando lo tengas claro, te ayudamos a extender.', en: 'Almost always yes! If you want to stay longer, you talk to us and we coordinate it with the host based on their availability. The sooner you flag it, the easier it is to secure your continuity in the same space.\nWhenever you’re sure, we help you extend.', pt: 'Quase sempre sim! Se quiseres ficar mais tempo, falas connosco e coordenamos com o anfitrião conforme a disponibilidade. Quanto antes avisares, mais fácil é garantir a tua continuidade no mesmo espaço.\nQuando tiveres a certeza, ajudamos-te a prolongar.', fr: 'Presque toujours oui ! Si tu veux rester plus longtemps, tu nous en parles et on le coordonne avec l’hôte selon ses disponibilités. Plus tu préviens tôt, plus c’est facile d’assurer ta continuité dans le même logement.\nDès que tu es sûr, on t’aide à prolonger.', de: 'Fast immer ja! Wenn du länger bleiben willst, sprichst du mit uns und wir stimmen es je nach Verfügbarkeit mit dem Gastgeber ab. Je früher du Bescheid gibst, desto leichter lässt sich deine Verlängerung im selben Raum sichern.\nSobald du sicher bist, helfen wir dir beim Verlängern.', nl: 'Bijna altijd wel! Als je langer wilt blijven, overleg je met ons en stemmen we het af met de host op basis van beschikbaarheid. Hoe eerder je het aangeeft, hoe makkelijker je verblijf in dezelfde ruimte te zekeren is.\nZodra je het zeker weet, helpen we je verlengen.' }
      },
      {
        q: { es: 'Hay depósito o garantía / métodos de pago / factura', en: 'Is there a deposit or guarantee / payment methods / invoice', pt: 'Há depósito ou caução / métodos de pagamento / fatura', fr: 'Y a-t-il une caution / moyens de paiement / facture', de: 'Gibt es eine Kaution / Zahlungsarten / Rechnung', nl: 'Is er een borg / betaalmethoden / factuur' },
        a: { es: 'Te lo explico claro: no hay grandes pagos por adelantado. Se reserva con una pequeña seña al confirmar y, según el espacio, puede pedirse una garantía/depósito razonable; el método y el recibo se acuerdan de forma transparente con el anfitrión por WhatsApp. (Demo: los importes son demostrativos.)\nSi te interesa una opción, confirmamos el detalle juntos.', en: 'Let me be clear: no large upfront payments. You book with a small deposit on confirmation and, depending on the space, a reasonable guarantee/deposit may be requested; the method and receipt are agreed transparently with the host on WhatsApp. (Demo: amounts are illustrative.)\nIf an option interests you, we confirm the detail together.', pt: 'Explico-te com clareza: não há grandes pagamentos antecipados. Reserva-se com um pequeno sinal ao confirmar e, conforme o espaço, pode pedir-se uma caução/depósito razoável; o método e o recibo combinam-se com transparência com o anfitrião por WhatsApp. (Demo: os valores são demonstrativos.)\nSe te interessar uma opção, confirmamos o detalhe juntos.', fr: 'Soyons clairs : pas de gros paiements à l’avance. On réserve avec un petit acompte à la confirmation et, selon le logement, une caution/un dépôt raisonnable peut être demandé ; le moyen et le reçu se conviennent en transparence avec l’hôte sur WhatsApp. (Démo : les montants sont indicatifs.)\nSi une option t’intéresse, on confirme le détail ensemble.', de: 'Ganz klar: keine großen Vorauszahlungen. Gebucht wird mit einer kleinen Anzahlung bei Bestätigung und je nach Raum kann eine angemessene Kaution verlangt werden; Methode und Beleg werden transparent mit dem Gastgeber per WhatsApp vereinbart. (Demo: Beträge sind beispielhaft.)\nWenn dich eine Option interessiert, klären wir das Detail gemeinsam.', nl: 'Even duidelijk: geen grote vooruitbetalingen. Je boekt met een kleine aanbetaling bij bevestiging en, afhankelijk van de ruimte, kan een redelijke borg worden gevraagd; de methode en de bon worden transparant met de host via WhatsApp afgesproken. (Demo: bedragen zijn illustratief.)\nAls een optie je interesseert, bevestigen we het detail samen.' }
      },
      {
        q: { es: 'Qué pasa si hay un problema al llegar', en: 'What if there’s a problem on arrival', pt: 'E se houver um problema à chegada', fr: 'Et s’il y a un problème à l’arrivée', de: 'Was, wenn es bei der Ankunft ein Problem gibt', nl: 'Wat als er een probleem is bij aankomst' },
        a: { es: 'Tranquila, no estás sola en esto. Si al llegar algo no coincide con lo acordado, nos avisas y lo resolvemos contigo y con el anfitrión por WhatsApp; por eso revisamos cada espacio antes y buscamos siempre la mejor solución. Te acompañamos también después de tu llegada.\nAnte cualquier duda, aquí estoy.', en: 'Don’t worry, you’re not alone in this. If on arrival something doesn’t match what was agreed, you let us know and we solve it with you and the host on WhatsApp; that’s why we review each space beforehand and always look for the best solution. We support you after arrival too.\nFor anything, I’m right here.', pt: 'Fica tranquila, não estás sozinha nisto. Se à chegada algo não corresponder ao combinado, avisas-nos e resolvemos contigo e com o anfitrião por WhatsApp; por isso revemos cada espaço antes e procuramos sempre a melhor solução. Acompanhamos-te também depois da chegada.\nPara qualquer dúvida, estou aqui.', fr: 'Pas d’inquiétude, tu n’es pas seule. Si à l’arrivée quelque chose ne correspond pas à ce qui était convenu, tu nous préviens et on le règle avec toi et l’hôte sur WhatsApp ; c’est pour ça qu’on vérifie chaque logement avant et qu’on cherche toujours la meilleure solution. On t’accompagne aussi après l’arrivée.\nPour toute question, je suis là.', de: 'Keine Sorge, damit bist du nicht allein. Wenn bei der Ankunft etwas nicht dem Vereinbarten entspricht, sagst du uns Bescheid und wir lösen es mit dir und dem Gastgeber per WhatsApp; deshalb prüfen wir jeden Raum vorher und suchen immer die beste Lösung. Wir begleiten dich auch nach der Ankunft.\nBei allem bin ich für dich da.', nl: 'Geen zorgen, je staat er niet alleen voor. Als bij aankomst iets niet klopt met wat is afgesproken, laat je het ons weten en lossen we het met jou en de host via WhatsApp op; daarom controleren we elke ruimte vooraf en zoeken we altijd de beste oplossing. We begeleiden je ook na aankomst.\nVoor alles ben ik er.' }
      }
    ],

    tone: {
      es: 'Eres Sophi: joven, cercana, cálida y clara, nunca robótica. Acompañas a la persona antes, durante y después de su llegada a destino, como alguien que ya hizo el viaje. Hablas de espacios, alojamientos, opciones y de tu próximo hogar, no como una agencia fría. Responde SIEMPRE en el idioma de la persona, aunque el destino sea otro país. Recomienda solo opciones reales de la selección verificada y avisa con honestidad si algo supera el presupuesto. Explica los barrios (ambiente, seguridad, transporte, para quién, precio, universidades) para que llegue con más confianza. Aclara que los alojamientos son demostrativos. Mantén siempre la confidencialidad de la información interna.',
      en: 'You are Sophi: young, close, warm and clear, never robotic. You accompany the person before, during and after they arrive at their destination, like someone who has already made the journey. You talk about spaces, accommodations, options and your next home, not like a cold agency. ALWAYS reply in the person’s language, even if the destination is another country. Recommend only real options from the verified selection and honestly warn if something is over budget. Explain neighborhoods (vibe, safety, transport, who it suits, price, universities) so they arrive with more confidence. Clarify that listings are demonstrative. Always keep internal information confidential.',
      pt: 'És a Sophi: jovem, próxima, calorosa e clara, nunca robótica. Acompanhas a pessoa antes, durante e depois da chegada ao destino, como quem já fez a viagem. Falas de espaços, alojamentos, opções e do teu próximo lar, não como uma agência fria. Responde SEMPRE no idioma da pessoa, mesmo que o destino seja outro país. Recomenda só opções reais da seleção verificada e avisa com honestidade se algo ultrapassar o orçamento. Explica os bairros (ambiente, segurança, transporte, para quem, preço, universidades) para chegar com mais confiança. Esclarece que os alojamentos são demonstrativos. Mantém sempre a confidencialidade da informação interna.',
      fr: 'Tu es Sophi : jeune, proche, chaleureuse et claire, jamais robotique. Tu accompagnes la personne avant, pendant et après son arrivée à destination, comme quelqu’un qui a déjà fait le voyage. Tu parles d’espaces, de logements, d’options et de ton prochain chez-toi, pas comme une agence froide. Réponds TOUJOURS dans la langue de la personne, même si la destination est un autre pays. Ne recommande que des options réelles de la sélection vérifiée et préviens honnêtement si quelque chose dépasse le budget. Explique les quartiers (ambiance, sécurité, transport, pour qui, prix, universités) pour arriver avec plus de confiance. Précise que les logements sont démonstratifs. Garde toujours confidentielle l’information interne.',
      de: 'Du bist Sophi: jung, nah, herzlich und klar, nie roboterhaft. Du begleitest die Person vor, während und nach ihrer Ankunft am Ziel, wie jemand, der die Reise schon gemacht hat. Du sprichst von Räumen, Unterkünften, Optionen und deinem nächsten Zuhause, nicht wie eine kalte Agentur. Antworte IMMER in der Sprache der Person, auch wenn das Ziel ein anderes Land ist. Empfehle nur echte Optionen aus der geprüften Auswahl und weise ehrlich darauf hin, wenn etwas über dem Budget liegt. Erkläre die Viertel (Atmosphäre, Sicherheit, Verkehr, für wen, Preis, Universitäten), damit man mit mehr Vertrauen ankommt. Stelle klar, dass die Unterkünfte demonstrativ sind. Halte interne Informationen stets vertraulich.',
      nl: 'Jij bent Sophi: jong, dichtbij, warm en helder, nooit robotachtig. Je begeleidt de persoon vóór, tijdens en na de aankomst op de bestemming, als iemand die de reis al heeft gemaakt. Je praat over plekken, accommodaties, opties en je volgende thuis, niet als een kil kantoor. Antwoord ALTIJD in de taal van de persoon, ook als de bestemming een ander land is. Beveel alleen echte opties uit de geverifieerde selectie aan en waarschuw eerlijk als iets boven budget is. Leg de buurten uit (sfeer, veiligheid, vervoer, voor wie, prijs, universiteiten) zodat men met meer vertrouwen aankomt. Maak duidelijk dat de woningen demonstratief zijn. Houd interne informatie altijd vertrouwelijk.'
    },

    brandPhrases: [
      'Vive donde quieras, siéntete en casa.',
      'Te acompañamos en todo tu viaje.',
      'Para quienes hacen del viaje una forma de vivir.',
      'Espacios listos para llegar y vivir.',
      'Tu próximo hogar te está esperando.',
      'Te acompañamos antes, durante y después de tu llegada.'
    ],

    /* reservaDetalle: ampliación de `negocio.reserva`. Requisitos, qué incluye,
       check-in/out, mascotas, estancia mínima y acompañamiento. es + en. */
    reservaDetalle: {
      documentos: {
        es: 'Para reservar normalmente se pide una identificación o pasaporte y, según el alojamiento o el anfitrión, a veces un comprobante de estudios (carta de admisión/matrícula) o de ingresos. Te decimos exactamente qué hace falta para cada opción.',
        en: 'To book we usually ask for an ID or passport and, depending on the listing or host, sometimes proof of studies (admission/enrollment letter) or proof of income. We tell you exactly what each option needs.'
      },
      sena: {
        es: 'Se reserva con una seña al confirmar para asegurar el lugar; sin grandes pagos por adelantado. El cierre se coordina con el equipo por WhatsApp.',
        en: 'You book with a deposit on confirmation to secure the place; no large upfront payments. The closing is coordinated with the team on WhatsApp.'
      },
      incluye: {
        es: 'Lo habitual es que incluya WiFi, mobiliario (amueblado), limpieza y servicios/facturas (luz, agua, gas). Lo confirmamos en las características de cada alojamiento.',
        en: 'Listings usually include WiFi, furniture (furnished), cleaning and utilities/bills (electricity, water, gas). We confirm it in each listing’s features.'
      },
      checkin: {
        es: 'El check-in y el check-out se coordinan contigo y con el anfitrión por WhatsApp, según tu fecha y hora de llegada.',
        en: 'Check-in and check-out are coordinated with you and the host on WhatsApp, based on your arrival date and time.'
      },
      mascotas: {
        es: 'La política de mascotas depende del espacio: algunos las aceptan y otros no. Dinos si viajas con mascota y filtramos las opciones que sí las admiten.',
        en: 'The pet policy depends on the space: some accept pets, others don’t. Tell us if you travel with a pet and we filter the options that allow them.'
      },
      estanciaMinima: {
        es: 'La estancia mínima habitual es de alrededor de 1 mes; puedes quedarte varios meses según el alojamiento.',
        en: 'The usual minimum stay is about 1 month; you can stay several months depending on the listing.'
      },
      acompanamiento: {
        es: 'Te acompañamos antes, durante y después de tu llegada: te ayudamos a elegir, a coordinar el check-in y a resolver dudas una vez instalado.',
        en: 'We support you before, during and after your arrival: we help you choose, coordinate check-in and solve doubts once you’re settled.'
      }
    },

    /* guiaCiudad: guía práctica y ORIENTATIVA por ciudad para estudiantes/nómadas.
       Campos breves, generales, NO asesoría legal/financiera definitiva. es + en.
       Siempre recordar verificar visados/seguros en fuentes oficiales/consulado. */
    guiaCiudad: {
      'Madrid': {
        costoVida: { es: 'Nivel medio-alto. Vida de estudiante aprox. 900–1.300 €/mes (sin contar el alojamiento del todo).', en: 'Medium-high. Student living roughly €900–1,300/month (housing partly aside).' },
        transporte: { es: 'Abono Transportes de la CRTM; conviene sacarlo (hay abono joven muy económico para menores de 26).', en: 'CRTM Abono Transportes; worth getting it (very cheap youth pass for under-26s).' },
        visado: { es: 'Estudiantes de fuera de la UE suelen necesitar visado de estudios; los de la UE no. Orientativo: verifica en el consulado español o fuente oficial.', en: 'Non-EU students usually need a student visa; EU citizens don’t. Indicative: check the Spanish consulate or official source.' },
        seguroSalud: { es: 'Recomendable seguro médico; fuera de la UE suele exigirse para el visado.', en: 'Health insurance recommended; non-EU often need it for the visa.' },
        sim: { es: 'Conviene una SIM/eSIM local prepago (Movistar, Vodafone, Orange).', en: 'Get a local prepaid SIM/eSIM (Movistar, Vodafone, Orange).' },
        banco: { es: 'Muchos usan un neobanco (N26, Revolut) o abren cuenta local.', en: 'Many use a neobank (N26, Revolut) or open a local account.' },
        universidades: { es: 'UCM (Complutense), UAM, UPM y escuelas de negocio (IE).', en: 'UCM (Complutense), UAM, UPM and business schools (IE).' },
        semestre: { es: 'Inicio típico: septiembre y febrero.', en: 'Typical start: September and February.' },
        clima: { es: 'Veranos calurosos y secos; inviernos frescos; primavera/otoño agradables.', en: 'Hot dry summers; cool winters; pleasant spring/autumn.' }
      },
      'Buenos Aires': {
        costoVida: { es: 'Nivel bajo-medio en USD. Vida de estudiante aprox. 400–700 USD/mes (muy variable por inflación).', en: 'Low-medium in USD. Student living roughly USD 400–700/month (very variable due to inflation).' },
        transporte: { es: 'Tarjeta SUBE para subte, colectivos y trenes; conviene sacarla al llegar.', en: 'SUBE card for subway, buses and trains; get it on arrival.' },
        visado: { es: 'Muchos países entran sin visado por turismo; para estudiar conviene visado/residencia estudiantil. Orientativo: verifica con migraciones/consulado.', en: 'Many nationalities enter visa-free as tourists; studying usually needs a student visa/residency. Indicative: check immigration/consulate.' },
        seguroSalud: { es: 'Recomendable un seguro médico internacional.', en: 'International health insurance recommended.' },
        sim: { es: 'SIM prepaga local (Personal, Claro, Movistar).', en: 'Local prepaid SIM (Personal, Claro, Movistar).' },
        banco: { es: 'Suelen usar efectivo/fintech; abrir cuenta local requiere residencia.', en: 'Cash/fintech are common; a local account needs residency.' },
        universidades: { es: 'UBA, UCA, UADE y Universidad de Palermo (UP).', en: 'UBA, UCA, UADE and Universidad de Palermo (UP).' },
        semestre: { es: 'Inicio típico: marzo y agosto.', en: 'Typical start: March and August.' },
        clima: { es: 'Estaciones invertidas: verano dic–feb, invierno jun–ago (templado).', en: 'Reversed seasons: summer Dec–Feb, mild winter Jun–Aug.' }
      },
      'Santiago': {
        costoVida: { es: 'Nivel medio. Vida de estudiante aprox. 600–950 USD/mes.', en: 'Medium. Student living roughly USD 600–950/month.' },
        transporte: { es: 'Tarjeta bip! para Metro y micros (Red); conviene cargarla al llegar.', en: 'bip! card for Metro and buses (Red); top it up on arrival.' },
        visado: { es: 'Para estudiar suele pedirse visa de estudiante; turismo sin visa para muchos países. Orientativo: verifica en consulado/extranjería.', en: 'Studying usually needs a student visa; visa-free tourism for many. Indicative: check consulate/immigration.' },
        seguroSalud: { es: 'Recomendable seguro médico/internacional.', en: 'Health/international insurance recommended.' },
        sim: { es: 'SIM prepago local (Entel, Movistar, WOM).', en: 'Local prepaid SIM (Entel, Movistar, WOM).' },
        banco: { es: 'Cuenta local con RUT; muchos usan fintech (Mercado Pago, Tenpo).', en: 'Local account needs a RUT; many use fintech (Mercado Pago, Tenpo).' },
        universidades: { es: 'PUC (Católica), Universidad de Chile, UDD y USACH.', en: 'PUC (Católica), Universidad de Chile, UDD and USACH.' },
        semestre: { es: 'Inicio típico: marzo y agosto.', en: 'Typical start: March and August.' },
        clima: { es: 'Mediterráneo: verano seco dic–feb, invierno fresco jun–ago.', en: 'Mediterranean: dry summer Dec–Feb, cool winter Jun–Aug.' }
      },
      'Lisboa': {
        costoVida: { es: 'Nivel medio. Vida de estudiante aprox. 700–1.100 €/mes.', en: 'Medium. Student living roughly €700–1,100/month.' },
        transporte: { es: 'Tarjeta Navegante (metro, autobús, tranvía); conviene el abono mensual.', en: 'Navegante card (metro, bus, tram); the monthly pass is worth it.' },
        visado: { es: 'Fuera de la UE suele necesitarse visado de estudios; UE no. Orientativo: verifica en consulado portugués/SEF-AIMA.', en: 'Non-EU usually need a study visa; EU don’t. Indicative: check the Portuguese consulate/AIMA.' },
        seguroSalud: { es: 'Recomendable seguro médico.', en: 'Health insurance recommended.' },
        sim: { es: 'SIM/eSIM prepago local (MEO, NOS, Vodafone).', en: 'Local prepaid SIM/eSIM (MEO, NOS, Vodafone).' },
        banco: { es: 'Neobanco (Revolut, N26) o cuenta local con NIF.', en: 'Neobank (Revolut, N26) or local account with a NIF.' },
        universidades: { es: 'Universidade de Lisboa, NOVA y ISCTE.', en: 'Universidade de Lisboa, NOVA and ISCTE.' },
        semestre: { es: 'Inicio típico: septiembre y febrero.', en: 'Typical start: September and February.' },
        clima: { es: 'Suave: veranos cálidos y soleados, inviernos templados y húmedos.', en: 'Mild: warm sunny summers, mild wet winters.' }
      },
      'Londres': {
        costoVida: { es: 'Nivel alto. Vida de estudiante aprox. 1.300–1.900 £/mes.', en: 'High. Student living roughly £1,300–1,900/month.' },
        transporte: { es: 'Oyster card o pago contactless en TfL; conviene la Oyster al llegar.', en: 'Oyster card or contactless on TfL; get an Oyster on arrival.' },
        visado: { es: 'Casi todos los extranjeros necesitan Student visa para estudiar; turismo varía. Orientativo: verifica en gov.uk/consulado.', en: 'Most foreigners need a Student visa to study; tourism varies. Indicative: check gov.uk/consulate.' },
        seguroSalud: { es: 'Con visado de estudios suele pagarse el IHS para acceder al NHS.', en: 'Student visa usually includes paying the IHS to access the NHS.' },
        sim: { es: 'SIM/eSIM prepago local (giffgaff, EE, Vodafone, Three).', en: 'Local prepaid SIM/eSIM (giffgaff, EE, Vodafone, Three).' },
        banco: { es: 'Neobanco (Monzo, Revolut, Starling) muy común.', en: 'Neobank (Monzo, Revolut, Starling) very common.' },
        universidades: { es: 'UCL, KCL, Imperial, LSE y City, University of London.', en: 'UCL, KCL, Imperial, LSE and City, University of London.' },
        semestre: { es: 'Inicio típico: septiembre/octubre y enero.', en: 'Typical start: September/October and January.' },
        clima: { es: 'Templado y lluvioso todo el año; inviernos grises, veranos suaves.', en: 'Mild and rainy year-round; grey winters, mild summers.' }
      },
      'Berlín': {
        costoVida: { es: 'Nivel medio. Vida de estudiante aprox. 900–1.300 €/mes.', en: 'Medium. Student living roughly €900–1,300/month.' },
        transporte: { es: 'Abono de la BVG (Monatskarte) o Deutschlandticket; conviene el mensual.', en: 'BVG monthly pass or Deutschlandticket; the monthly pass is worth it.' },
        visado: { es: 'Fuera de la UE suele necesitarse visado/permiso de estudios; UE no. Orientativo: verifica en consulado alemán/Ausländerbehörde.', en: 'Non-EU usually need a study visa/permit; EU don’t. Indicative: check the German consulate/Ausländerbehörde.' },
        seguroSalud: { es: 'El seguro de salud (público o privado) suele ser obligatorio para matricularse.', en: 'Health insurance (public or private) is usually required to enroll.' },
        sim: { es: 'SIM/eSIM prepago local (Telekom, Vodafone, O2, Aldi Talk).', en: 'Local prepaid SIM/eSIM (Telekom, Vodafone, O2, Aldi Talk).' },
        banco: { es: 'Neobanco (N26, Revolut) o cuenta local; útil para el Sperrkonto.', en: 'Neobank (N26, Revolut) or local account; handy for the Sperrkonto.' },
        universidades: { es: 'HU Berlin, FU Berlin, TU Berlin y universidades de artes.', en: 'HU Berlin, FU Berlin, TU Berlin and arts universities.' },
        semestre: { es: 'Inicio típico: octubre (invierno) y abril (verano).', en: 'Typical start: October (winter) and April (summer).' },
        clima: { es: 'Continental: inviernos fríos, veranos templados y agradables.', en: 'Continental: cold winters, mild pleasant summers.' }
      },
      'París': {
        costoVida: { es: 'Nivel alto. Vida de estudiante aprox. 1.100–1.700 €/mes.', en: 'High. Student living roughly €1,100–1,700/month.' },
        transporte: { es: 'Navigo (semanal/mensual) o tickets t+; conviene el pase Navigo.', en: 'Navigo (weekly/monthly) or t+ tickets; the Navigo pass is worth it.' },
        visado: { es: 'Fuera de la UE suele necesitarse visado de estudios (VLS-TS); UE no. Orientativo: verifica en Campus France/consulado.', en: 'Non-EU usually need a study visa (VLS-TS); EU don’t. Indicative: check Campus France/consulate.' },
        seguroSalud: { es: 'Los estudiantes suelen inscribirse en la seguridad social y conviene una mutuelle.', en: 'Students usually register with social security; a mutuelle is advisable.' },
        sim: { es: 'SIM/eSIM prepago local (Orange, SFR, Bouygues, Free).', en: 'Local prepaid SIM/eSIM (Orange, SFR, Bouygues, Free).' },
        banco: { es: 'Neobanco (Revolut, N26) o cuenta local para el RIB.', en: 'Neobank (Revolut, N26) or local account for a RIB.' },
        universidades: { es: 'Sorbonne Université, Université Paris Cité, Sciences Po y PSL.', en: 'Sorbonne Université, Université Paris Cité, Sciences Po and PSL.' },
        semestre: { es: 'Inicio típico: septiembre y enero/febrero.', en: 'Typical start: September and January/February.' },
        clima: { es: 'Templado: inviernos fríos y grises, veranos suaves a cálidos.', en: 'Temperate: cold grey winters, mild to warm summers.' }
      },
      'Roma': {
        costoVida: { es: 'Nivel medio. Vida de estudiante aprox. 800–1.200 €/mes.', en: 'Medium. Student living roughly €800–1,200/month.' },
        transporte: { es: 'Abono ATAC (mensual o anual) para metro, bus y tranvía; conviene el mensual.', en: 'ATAC monthly/annual pass for metro, bus and tram; the monthly is worth it.' },
        visado: { es: 'Fuera de la UE suele necesitarse visado de estudios y permesso di soggiorno; UE no. Orientativo: verifica en consulado italiano/Questura.', en: 'Non-EU usually need a study visa and permesso di soggiorno; EU don’t. Indicative: check the Italian consulate/Questura.' },
        seguroSalud: { es: 'Recomendable seguro médico o inscripción al SSN.', en: 'Health insurance or SSN registration recommended.' },
        sim: { es: 'SIM/eSIM prepago local (TIM, Vodafone, WindTre, Iliad).', en: 'Local prepaid SIM/eSIM (TIM, Vodafone, WindTre, Iliad).' },
        banco: { es: 'Neobanco (Revolut, N26) o cuenta local con codice fiscale.', en: 'Neobank (Revolut, N26) or local account with a codice fiscale.' },
        universidades: { es: 'La Sapienza, Roma Tre, Tor Vergata y John Cabot (en inglés).', en: 'La Sapienza, Roma Tre, Tor Vergata and John Cabot (in English).' },
        semestre: { es: 'Inicio típico: septiembre/octubre y febrero/marzo.', en: 'Typical start: September/October and February/March.' },
        clima: { es: 'Mediterráneo: veranos calurosos y secos, inviernos suaves y húmedos.', en: 'Mediterranean: hot dry summers, mild wet winters.' }
      },
      'Ámsterdam': {
        costoVida: { es: 'Nivel alto. Vida de estudiante aprox. 1.100–1.600 €/mes.', en: 'High. Student living roughly €1,100–1,600/month.' },
        transporte: { es: 'OV-chipkaart (o pago contactless) para tranvía, metro y bus; muchos van en bici.', en: 'OV-chipkaart (or contactless) for tram, metro and bus; many cycle.' },
        visado: { es: 'Fuera de la UE suele necesitarse visado/permiso de estudios; UE no. Orientativo: verifica en consulado/IND.', en: 'Non-EU usually need a study visa/permit; EU don’t. Indicative: check the consulate/IND.' },
        seguroSalud: { es: 'Suele exigirse seguro médico; revisa requisitos según tu situación.', en: 'Health insurance is usually required; check requirements for your case.' },
        sim: { es: 'SIM/eSIM prepago local (KPN, Vodafone, Lebara, Lyca).', en: 'Local prepaid SIM/eSIM (KPN, Vodafone, Lebara, Lyca).' },
        banco: { es: 'Neobanco (Revolut, bunq, N26) o cuenta local con BSN.', en: 'Neobank (Revolut, bunq, N26) or local account with a BSN.' },
        universidades: { es: 'UvA (Universiteit van Amsterdam) y VU Amsterdam.', en: 'UvA (University of Amsterdam) and VU Amsterdam.' },
        semestre: { es: 'Inicio típico: septiembre y febrero.', en: 'Typical start: September and February.' },
        clima: { es: 'Templado y húmedo: inviernos fríos y ventosos, veranos suaves.', en: 'Temperate and wet: cold windy winters, mild summers.' }
      },
      'Viena': {
        costoVida: { es: 'Nivel medio-alto. Vida de estudiante aprox. 950–1.400 €/mes.', en: 'Medium-high. Student living roughly €950–1,400/month.' },
        transporte: { es: 'Abono de los Wiener Linien (anual muy económico para estudiantes); conviene sacarlo.', en: 'Wiener Linien pass (very cheap annual student pass); worth getting it.' },
        visado: { es: 'Fuera de la UE suele necesitarse visado/permiso de estudios; UE no. Orientativo: verifica en consulado austríaco/MA 35.', en: 'Non-EU usually need a study visa/permit; EU don’t. Indicative: check the Austrian consulate/MA 35.' },
        seguroSalud: { es: 'Suele exigirse seguro de salud para matricularse o para el permiso.', en: 'Health insurance is usually required to enroll or for the permit.' },
        sim: { es: 'SIM/eSIM prepago local (A1, Magenta, Drei).', en: 'Local prepaid SIM/eSIM (A1, Magenta, Drei).' },
        banco: { es: 'Neobanco (Revolut, N26) o cuenta local.', en: 'Neobank (Revolut, N26) or local account.' },
        universidades: { es: 'Universität Wien, TU Wien y WU (Economía y Empresa).', en: 'University of Vienna, TU Wien and WU (Economics & Business).' },
        semestre: { es: 'Inicio típico: octubre (invierno) y marzo (verano).', en: 'Typical start: October (winter) and March (summer).' },
        clima: { es: 'Continental: inviernos fríos, veranos cálidos y agradables.', en: 'Continental: cold winters, warm pleasant summers.' }
      }
    },

    /* habilidades: capacidades de Sophi (reflejadas como instrucciones en el
       system prompt de la función en vivo). es + en. */
    habilidades: {
      comparar: { es: 'Si mencionas 2-3 alojamientos o pides comparar, te doy pros y contras según tu perfil (estudiante/nómada/pareja) y te recomiendo uno con un motivo.', en: 'If you mention 2-3 listings or ask to compare, I give pros and cons for your profile (student/nomad/couple) and recommend one with a reason.' },
      presupuesto: { es: 'Si una opción se pasa de tu presupuesto te lo digo con claridad y te propongo alternativas más baratas o en un barrio cercano equivalente.', en: 'If an option is over budget I say so clearly and propose cheaper alternatives or an equivalent nearby area.' },
      vision: { es: 'Si mandas una captura de otro anuncio puedo comentar si el precio/zona parece razonable y buscar parecidos en la base; si mandas una foto del estilo que te gusta, sugiero alojamientos similares.', en: 'If you send a screenshot of another listing I can comment whether the price/area seems reasonable and find similar ones in the database; if you send a photo of a style you like, I suggest similar listings.' },
      handoff: { es: 'Puedo armar un resumen de tu búsqueda (destino, fechas, presupuesto, perfil) listo para continuar por WhatsApp, ofrecer agendar una llamada y responder dudas de pago/seña y cancelación.', en: 'I can build a summary of your search (destination, dates, budget, profile) ready to continue on WhatsApp, offer to schedule a call and answer payment/deposit and cancellation questions.' },
      proactiva: { es: 'Retomo lo que pusiste en el formulario y te pregunto lo que falte (destino, fechas, presupuesto, perfil).', en: 'I pick up what you entered in the form and ask for what is missing (destination, dates, budget, profile).' }
    },

    /* guardrails: límites de la información práctica y de privacidad. es + en. */
    guardrails: {
      es: 'La info práctica (costo de vida, visados, transporte, banca, seguros) es ORIENTATIVA; recomienda verificar en fuentes oficiales/consulado. No des asesoría legal ni financiera definitiva. No compartas direcciones exactas (solo zona). Nunca expongas datos internos (CRM/leads/admin). Responde SIEMPRE en el idioma del cliente, con tono cálido, joven, claro y cercano.',
      en: 'Practical info (cost of living, visas, transport, banking, insurance) is INDICATIVE; recommend verifying with official sources/consulate. Do not give definitive legal or financial advice. Do not share exact addresses (zone only). Never expose internal data (CRM/leads/admin). ALWAYS reply in the client’s language, warm, young, clear and close in tone.'
    }
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = HF_CEREBRO;
  if (typeof window !== 'undefined') window.HF_CEREBRO = HF_CEREBRO;
})(typeof self !== 'undefined' ? self : this);
