const listings = [
  {id:'palermo',title:'Studio Palermo Soho',city:'Buenos Aires',country:'Argentina',neighborhood:'Palermo Soho',price:540,currency:'USD',aprobado:true,lat:-34.5889,lng:-58.4306,availability:'Disponible desde agosto 2026',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Ideal estudiantes',image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80'},
  {id:'retiro',title:'Habitación Retiro',city:'Buenos Aires',country:'Argentina',neighborhood:'Retiro',price:380,currency:'USD',aprobado:true,lat:-34.5928,lng:-58.3744,availability:'Disponible ahora',type:'Habitación privada',features:['WiFi','Servicios incluidos','Zona segura'],profile:'Ideal nómadas',image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'},
  {id:'providencia',title:'Loft Providencia',city:'Santiago',country:'Chile',neighborhood:'Providencia',price:620,currency:'USD',aprobado:true,lat:-33.4263,lng:-70.6113,availability:'Disponible desde julio 2026',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Popular',image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80'},
  {id:'condes',title:'Studio Las Condes',city:'Santiago',country:'Chile',neighborhood:'Las Condes',price:690,currency:'USD',aprobado:true,lat:-33.4089,lng:-70.5672,availability:'Últimas fechas',type:'Departamento completo',features:['Seguridad','WiFi','Amoblado'],profile:'Verificado',image:'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=900&q=80'},
  {id:'malasana',title:'Piso Malasaña 2.0',city:'Madrid',country:'España',neighborhood:'Malasaña',price:710,currency:'EUR',aprobado:true,lat:40.4266,lng:-3.7038,availability:'Disponible desde septiembre 2026',type:'Departamento completo',features:['WiFi','Contrato','Cerca del metro'],profile:'Ideal estudiantes',image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80'},
  {id:'chamberi',title:'Habitación Chamberí',city:'Madrid',country:'España',neighborhood:'Chamberí',price:520,currency:'EUR',aprobado:true,lat:40.4363,lng:-3.7039,availability:'Disponible ahora',type:'Habitación privada',features:['WiFi','Servicios incluidos','Zona segura'],profile:'Nuevo',image:'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80'},
  {id:'berlin',title:'Habitación Kreuzberg',city:'Berlín',country:'Alemania',neighborhood:'Kreuzberg',price:640,currency:'EUR',aprobado:true,lat:52.4990,lng:13.4030,availability:'Disponible desde septiembre 2026',type:'Habitación en departamento',features:['WiFi','Amoblado','Cerca del metro'],profile:'Ideal estudiantes',image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80'},
  {id:'london',title:'Studio Shoreditch',city:'Londres',country:'Inglaterra',neighborhood:'Shoreditch',price:1100,currency:'GBP',aprobado:true,lat:51.5265,lng:-0.0780,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Zona segura'],profile:'Popular',image:'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=900&q=80'},
  {id:'lisboa',title:'Studio Alfama',city:'Lisboa',country:'Portugal',neighborhood:'Alfama',price:620,currency:'EUR',aprobado:true,lat:38.7120,lng:-9.1300,availability:'Disponible desde agosto 2026',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Ideal nómadas',image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80'},
  {id:'roma',title:'Habitación Trastevere',city:'Roma',country:'Italia',neighborhood:'Trastevere',price:590,currency:'EUR',aprobado:true,lat:41.8890,lng:12.4690,availability:'Disponible ahora',type:'Habitación privada',features:['WiFi','Servicios incluidos','Zona segura'],profile:'Ideal estudiantes',image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'},
  {id:'paris',title:'Studio Le Marais',city:'París',country:'Francia',neighborhood:'Le Marais',price:980,currency:'EUR',aprobado:true,lat:48.8590,lng:2.3590,availability:'Últimas fechas',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Verificado',image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80'},
  {id:'amsterdam',title:'Habitación Jordaan',city:'Ámsterdam',country:'Holanda',neighborhood:'Jordaan',price:780,currency:'EUR',aprobado:true,lat:52.3740,lng:4.8830,availability:'Disponible desde julio 2026',type:'Habitación en departamento',features:['WiFi','Amoblado','Zona segura'],profile:'Nuevo',image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80'},
  {id:'viena',title:'Studio Neubau',city:'Viena',country:'Austria',neighborhood:'Neubau',price:650,currency:'EUR',aprobado:true,lat:48.2010,lng:16.3490,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Ideal nómadas',image:'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80'},
  {id:'buenos-aires-recoleta-3',title:'Piso luminoso en Recoleta',city:'Buenos Aires',country:'Argentina',neighborhood:'Recoleta',price:520000,currency:'ARS',aprobado:true,lat:-34.5872,lng:-58.3936,availability:'Disponible ahora',type:'1 dormitorio',features:['WiFi','Amoblado','Zona segura','Cerca del metro'],profile:'Pareja',image:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=75'},
  {id:'buenos-aires-san-telmo-4',title:'Monoambiente con encanto en San Telmo',city:'Buenos Aires',country:'Argentina',neighborhood:'San Telmo',price:360000,currency:'ARS',aprobado:true,lat:-34.6210,lng:-58.3720,availability:'Desde septiembre',type:'Studio / monoambiente',features:['WiFi','Servicios incluidos','Contrato flexible'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=75'},
  {id:'buenos-aires-belgrano-5',title:'Habitación en piso compartido en Belgrano',city:'Buenos Aires',country:'Argentina',neighborhood:'Belgrano',price:320000,currency:'ARS',aprobado:true,lat:-34.5620,lng:-58.4560,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Zona segura'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=75'},
  {id:'santiago-nunoa-3',title:'Studio acogedor en Ñuñoa',city:'Santiago',country:'Chile',neighborhood:'Ñuñoa',price:480000,currency:'CLP',aprobado:true,lat:-33.4560,lng:-70.5980,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca de universidad'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=75'},
  {id:'santiago-bellavista-4',title:'Departamento con balcón en Bellavista',city:'Santiago',country:'Chile',neighborhood:'Bellavista',price:620000,currency:'CLP',aprobado:true,lat:-33.4330,lng:-70.6350,availability:'Desde octubre',type:'1 dormitorio',features:['WiFi','Balcón','Cerca del metro','Amoblado'],profile:'Pareja',image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=75'},
  {id:'santiago-lastarria-5',title:'Habitación en piso compartido en Lastarria',city:'Santiago',country:'Chile',neighborhood:'Lastarria',price:380000,currency:'CLP',aprobado:true,lat:-33.4380,lng:-70.6410,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Servicios incluidos','Zona segura'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=75'},
  {id:'madrid-lavapies-3',title:'Studio luminoso en Lavapiés',city:'Madrid',country:'España',neighborhood:'Lavapiés',price:780,currency:'EUR',aprobado:true,lat:40.4090,lng:-3.7010,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=75'},
  {id:'madrid-la-latina-4',title:'Piso acogedor en La Latina',city:'Madrid',country:'España',neighborhood:'La Latina',price:950,currency:'EUR',aprobado:true,lat:40.4110,lng:-3.7110,availability:'Desde septiembre',type:'1 dormitorio',features:['WiFi','Balcón','Zona segura','Amoblado'],profile:'Pareja',image:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=75'},
  {id:'madrid-salamanca-5',title:'Habitación en piso compartido en Salamanca',city:'Madrid',country:'España',neighborhood:'Salamanca',price:620,currency:'EUR',aprobado:true,lat:40.4290,lng:-3.6790,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Servicios incluidos'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=75'},
  {id:'berlin-mitte-2',title:'Studio moderno en Mitte',city:'Berlín',country:'Alemania',neighborhood:'Mitte',price:920,currency:'EUR',aprobado:true,lat:52.5050,lng:13.4100,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=75'},
  {id:'berlin-prenzlauer-berg-3',title:'Piso acogedor en Prenzlauer Berg',city:'Berlín',country:'Alemania',neighborhood:'Prenzlauer Berg',price:1080,currency:'EUR',aprobado:true,lat:52.5070,lng:13.4150,availability:'Desde octubre',type:'1 dormitorio',features:['WiFi','Balcón','Zona segura','Apto mascotas'],profile:'Pareja',image:'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=75'},
  {id:'berlin-neukolln-4',title:'Habitación en piso compartido en Neukölln',city:'Berlín',country:'Alemania',neighborhood:'Neukölln',price:560,currency:'EUR',aprobado:true,lat:52.4810,lng:13.4350,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Contrato flexible'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1494203484021-3c454daf695d?auto=format&fit=crop&w=800&q=75'},
  {id:'berlin-friedrichshain-5',title:'Studio luminoso cerca de Mitte',city:'Berlín',country:'Alemania',neighborhood:'Mitte',price:870,currency:'EUR',aprobado:true,lat:52.4920,lng:13.3940,availability:'Desde septiembre',type:'Studio / monoambiente',features:['WiFi','Amoblado','Lavadora'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=75'},
  {id:'londres-camden-2',title:'Studio en Camden',city:'Londres',country:'Inglaterra',neighborhood:'Camden',price:1450,currency:'GBP',aprobado:true,lat:51.5390,lng:-0.1430,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=75'},
  {id:'londres-notting-hill-3',title:'Piso con encanto en Notting Hill',city:'Londres',country:'Inglaterra',neighborhood:'Notting Hill',price:1700,currency:'GBP',aprobado:true,lat:51.5160,lng:-0.2050,availability:'Desde septiembre',type:'1 dormitorio',features:['WiFi','Balcón','Zona segura','Amoblado'],profile:'Pareja',image:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=75'},
  {id:'londres-hackney-4',title:'Habitación en piso compartido en Hackney',city:'Londres',country:'Inglaterra',neighborhood:'Hackney',price:850,currency:'GBP',aprobado:true,lat:51.5450,lng:-0.0550,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Contrato flexible'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=75'},
  {id:'londres-camden-5',title:'Studio luminoso cerca de Camden',city:'Londres',country:'Inglaterra',neighborhood:'Camden',price:750,currency:'GBP',aprobado:true,lat:51.5300,lng:-0.1350,availability:'Desde octubre',type:'Habitación en piso compartido',features:['WiFi','Servicios incluidos','Zona segura'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=75'},
  {id:'lisboa-baixa-2',title:'Studio luminoso en Baixa',city:'Lisboa',country:'Portugal',neighborhood:'Baixa',price:720,currency:'EUR',aprobado:true,lat:38.7110,lng:-9.1390,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=75'},
  {id:'lisboa-bairro-alto-3',title:'Piso acogedor en Bairro Alto',city:'Lisboa',country:'Portugal',neighborhood:'Bairro Alto',price:880,currency:'EUR',aprobado:true,lat:38.7130,lng:-9.1460,availability:'Desde septiembre',type:'1 dormitorio',features:['WiFi','Balcón','Zona segura','Amoblado'],profile:'Pareja',image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=75'},
  {id:'lisboa-principe-real-4',title:'Habitación en piso compartido en Príncipe Real',city:'Lisboa',country:'Portugal',neighborhood:'Príncipe Real',price:540,currency:'EUR',aprobado:true,lat:38.7180,lng:-9.1510,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Servicios incluidos'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=75'},
  {id:'lisboa-alfama-5',title:'Studio con vistas en Alfama',city:'Lisboa',country:'Portugal',neighborhood:'Alfama',price:760,currency:'EUR',aprobado:true,lat:38.7140,lng:-9.1270,availability:'Desde octubre',type:'Studio / monoambiente',features:['WiFi','Amoblado','Lavadora'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=75'},
  {id:'roma-monti-2',title:'Studio luminoso en Monti',city:'Roma',country:'Italia',neighborhood:'Monti',price:820,currency:'EUR',aprobado:true,lat:41.8950,lng:12.4920,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=75'},
  {id:'roma-san-lorenzo-3',title:'Habitación en piso compartido en San Lorenzo',city:'Roma',country:'Italia',neighborhood:'San Lorenzo',price:520,currency:'EUR',aprobado:true,lat:41.8990,lng:12.5180,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Contrato flexible'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=75'},
  {id:'roma-testaccio-4',title:'Piso acogedor en Testaccio',city:'Roma',country:'Italia',neighborhood:'Testaccio',price:980,currency:'EUR',aprobado:true,lat:41.8770,lng:12.4750,availability:'Desde septiembre',type:'1 dormitorio',features:['WiFi','Balcón','Zona segura','Amoblado'],profile:'Pareja',image:'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=75'},
  {id:'roma-trastevere-5',title:'Studio con encanto en Trastevere',city:'Roma',country:'Italia',neighborhood:'Trastevere',price:760,currency:'EUR',aprobado:true,lat:41.8830,lng:12.4620,availability:'Desde octubre',type:'Studio / monoambiente',features:['WiFi','Amoblado','Lavadora'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=75'},
  {id:'paris-montmartre-2',title:'Studio con encanto en Montmartre',city:'París',country:'Francia',neighborhood:'Montmartre',price:1050,currency:'EUR',aprobado:true,lat:48.8860,lng:2.3410,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1494203484021-3c454daf695d?auto=format&fit=crop&w=800&q=75'},
  {id:'paris-latin-quarter-3',title:'Habitación en piso compartido en Latin Quarter',city:'París',country:'Francia',neighborhood:'Latin Quarter',price:680,currency:'EUR',aprobado:true,lat:48.8480,lng:2.3470,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Servicios incluidos'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=75'},
  {id:'paris-bastille-4',title:'Piso acogedor en Bastille',city:'París',country:'Francia',neighborhood:'Bastille',price:1280,currency:'EUR',aprobado:true,lat:48.8530,lng:2.3690,availability:'Desde septiembre',type:'1 dormitorio',features:['WiFi','Balcón','Zona segura','Amoblado'],profile:'Pareja',image:'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=800&q=75'},
  {id:'paris-le-marais-5',title:'Studio luminoso cerca de Le Marais',city:'París',country:'Francia',neighborhood:'Le Marais',price:1180,currency:'EUR',aprobado:true,lat:48.8610,lng:2.3620,availability:'Desde octubre',type:'Studio / monoambiente',features:['WiFi','Amoblado','Lavadora'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=75'},
  {id:'amsterdam-de-pijp-2',title:'Studio luminoso en De Pijp',city:'Ámsterdam',country:'Holanda',neighborhood:'De Pijp',price:1150,currency:'EUR',aprobado:true,lat:52.3550,lng:4.8930,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=75'},
  {id:'amsterdam-oud-west-3',title:'Piso acogedor en Oud-West',city:'Ámsterdam',country:'Holanda',neighborhood:'Oud-West',price:1300,currency:'EUR',aprobado:true,lat:52.3650,lng:4.8680,availability:'Desde septiembre',type:'1 dormitorio',features:['WiFi','Balcón','Zona segura','Amoblado'],profile:'Pareja',image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=75'},
  {id:'amsterdam-jordaan-4',title:'Habitación en piso compartido en Jordaan',city:'Ámsterdam',country:'Holanda',neighborhood:'Jordaan',price:720,currency:'EUR',aprobado:true,lat:52.3760,lng:4.8790,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Servicios incluidos'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=75'},
  {id:'amsterdam-de-pijp-5',title:'Studio con encanto cerca de De Pijp',city:'Ámsterdam',country:'Holanda',neighborhood:'De Pijp',price:980,currency:'EUR',aprobado:true,lat:52.3520,lng:4.8910,availability:'Desde octubre',type:'Studio / monoambiente',features:['WiFi','Amoblado','Lavadora'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=75'},
  {id:'viena-leopoldstadt-2',title:'Studio luminoso en Leopoldstadt',city:'Viena',country:'Austria',neighborhood:'Leopoldstadt',price:820,currency:'EUR',aprobado:true,lat:48.2160,lng:16.3960,availability:'Disponible ahora',type:'Studio / monoambiente',features:['WiFi','Amoblado','Cerca del metro'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=75'},
  {id:'viena-mariahilf-3',title:'Piso acogedor en Mariahilf',city:'Viena',country:'Austria',neighborhood:'Mariahilf',price:1080,currency:'EUR',aprobado:true,lat:48.1970,lng:16.3450,availability:'Desde septiembre',type:'1 dormitorio',features:['WiFi','Balcón','Zona segura','Amoblado'],profile:'Pareja',image:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=75'},
  {id:'viena-neubau-4',title:'Habitación en piso compartido en Neubau',city:'Viena',country:'Austria',neighborhood:'Neubau',price:560,currency:'EUR',aprobado:true,lat:48.2030,lng:16.3520,availability:'Disponible ahora',type:'Habitación en piso compartido',features:['WiFi','Cerca de universidad','Contrato flexible'],profile:'Estudiante',image:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=75'},
  {id:'viena-leopoldstadt-5',title:'Studio con encanto cerca de Leopoldstadt',city:'Viena',country:'Austria',neighborhood:'Leopoldstadt',price:740,currency:'EUR',aprobado:true,lat:48.2090,lng:16.3880,availability:'Desde octubre',type:'Studio / monoambiente',features:['WiFi','Amoblado','Lavadora'],profile:'Nómada digital',image:'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=75'}
];

const cityCenters = {
  'Buenos Aires': [-34.5895, -58.4105],
  'Santiago': [-33.4263, -70.5900],
  'Madrid': [40.4266, -3.7038],
  'Berlín': [52.4990, 13.4030],
  'Londres': [51.5265, -0.0780],
  'Lisboa': [38.7120, -9.1300],
  'Roma': [41.8890, 12.4690],
  'París': [48.8590, 2.3590],
  'Ámsterdam': [52.3740, 4.8830],
  'Viena': [48.2010, 16.3490]
};

const exchangeRates = {EUR:1, USD:1.08, GBP:0.86, CLP:1015, ARS:1300};
let selectedCurrency = 'EUR';
let currentCity = 'Madrid';
let currentListingId = null;
function convertPrice(price, from, to){ return Math.round((price/(exchangeRates[from]||1))*(exchangeRates[to]||1)); }
function fmtMoney(v, cur){ const n=(v||0).toLocaleString('es-ES'); return cur==='EUR' ? `€${n}` : cur==='GBP' ? `£${n}` : cur==='CLP' ? `CLP $${n}` : cur==='ARS' ? `ARS $${n}` : `USD ${n}`; }
function money(item){ const v = convertPrice(item.price, item.baseCurrency||item.currency, selectedCurrency); return fmtMoney(v, selectedCurrency); }
window.__setCurrentListing = function(id){ currentListingId = id; };
window.setCurrency = function(c){
  if(!exchangeRates[c]) return;
  selectedCurrency = c;
  renderListings();
  if(map && currentCity){ drawMarkers(currentCity); const f=listings.find(l=>l.city===currentCity); if(f) renderMapCard(f); }
  const lmOv=document.getElementById('lmOv');
  if(lmOv && lmOv.classList.contains('open') && currentListingId && window.openListing) window.openListing(currentListingId);
  const cf=document.querySelector('#leadForm select[name="currency"]'); if(cf) cf.value = c;
};
window.getCurrency = function(){ return selectedCurrency; };
function whatsappUrl(item){return `https://wa.me/13055100028?text=${encodeURIComponent(`Hola House & Flats, me interesa ${item.title} en ${item.neighborhood}, ${item.city} por ${money(item)}/mes. ¿Está disponible?`)}`}

// Friendly, on-brand badge labels (warm, nomad, accompanying tone).
function friendlyBadge(profile){
  const map = {
    'Verificado':'Verificado',
    'Popular':'Popular',
    'Nuevo':'Listo para llegar',
    'Ideal estudiantes':'Ideal estudiantes',
    'Ideal nómadas':'Ideal nómadas',
    'Estudiante':'Ideal estudiantes',
    'Nómada digital':'Ideal nómadas',
    'Pareja':'Listo para llegar'
  };
  return map[profile] || profile;
}
function availabilityBadge(availability){
  const a = (availability||'').toLowerCase();
  if(a.includes('ahora')) return 'Disponible';
  if(a.includes('última') || a.includes('ultima')) return 'Popular';
  return 'Listo para llegar';
}

function renderListings(list){
  const grid = document.getElementById('listingGrid');
  if(!grid) return;
  grid.innerHTML = (list||listings).map(item => `
    <article class="listing-card">
      <button type="button" class="lc-fav" data-fav-id="${item.id}" aria-label="Guardar alojamiento" aria-pressed="false" onclick="toggleFav('${item.id}',event)"><span class="fav-ico">♡</span></button>
      <img src="${item.image}" alt="${item.title}" class="lc-img" style="cursor:pointer" onclick="openListing('${item.id}')">
      <div class="listing-body">
        <div class="badges"><span class="badge">${friendlyBadge(item.profile)}</span><span class="badge">${availabilityBadge(item.availability)}</span></div>
        <h3>${item.title}</h3>
        <p class="meta">${item.neighborhood}, ${item.city}, ${item.country}</p>
        <p class="price">${money(item)}<small>/mes</small></p>
        <p class="meta">${item.type} · ${item.features.join(' · ')}</p>
        <div class="listing-actions"><button type="button" class="btn btn-primary" onclick="openListing('${item.id}')">Ver alojamiento</button><a class="btn btn-ghost" target="_blank" href="${whatsappUrl(item)}">Hablar por WhatsApp</a></div>
      </div>
    </article>`).join('');
  if(window.refreshFavHearts) window.refreshFavHearts();
}

let map, markers = [], selectedId = 'providencia';
function makeIcon(item){
  const active = item.id === selectedId ? 'active' : '';
  // Hook opcional (p. ej. alojamientos.html con gating de match): permite ocultar
  // el precio del pin cuando el usuario aún no completó su solicitud. Si no hay
  // hook (home), se comporta exactamente igual que siempre.
  let inner;
  if(typeof window.__hfPinHtml === 'function'){
    try{ inner = window.__hfPinHtml(item, active); }catch(e){ inner = null; }
  }
  if(inner == null) inner = `<div class="price-pin ${active}">${money(item)}</div>`;
  return L.divIcon({className:'', html:inner, iconSize:[72,34], iconAnchor:[36,17]});
}
function renderMapCard(item){
  const el = document.getElementById('mapCard');
  if(!el) return;
  // Hook opcional para gating (alojamientos.html): si devuelve true, ya pintó la
  // tarjeta del mapa (versión básica/bloqueada) y no seguimos con la normal.
  if(typeof window.__hfMapCard === 'function'){
    try{ if(window.__hfMapCard(item, el) === true) return; }catch(e){}
  }
  el.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="badges"><span class="badge">${item.availability}</span></div>
    <h3>${item.title}</h3>
    <p class="meta">${item.neighborhood}, ${item.city}</p>
    <p class="price">${money(item)}<small>/mes</small></p>
    <p class="meta">${item.type} · ${item.features.join(' · ')}</p>
    <div class="listing-actions"><a class="btn btn-primary" href="#formulario">Ver solicitud</a><a class="btn btn-ghost" target="_blank" href="${whatsappUrl(item)}">WhatsApp</a></div>`;
}
function drawMarkers(city){
  markers.forEach(m => m.remove()); markers=[];
  listings.filter(l=>l.city===city).forEach(item=>{
    const marker = L.marker([item.lat,item.lng],{icon:makeIcon(item)}).addTo(map);
    marker.on('click',()=>{selectedId=item.id;renderMapCard(item);drawMarkers(city);if(window.openListing)window.openListing(item.id);});
    markers.push(marker);
  });
}
function initMap(){
  if(!window.L || !document.getElementById('map')) return;
  const start = 'Madrid';
  map = L.map('map',{scrollWheelZoom:false}).setView(cityCenters[start],12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap'}).addTo(map);
  // Fullscreen control: lets the client expand the map to the full screen.
  (function(){
    if(!document.getElementById('mapFullStyle')){
      const st=document.createElement('style'); st.id='mapFullStyle';
      st.textContent='#map.mapfull{position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;z-index:2000!important;border-radius:0!important;margin:0!important}.map-full-btn{position:absolute;top:12px;right:12px;z-index:1200;background:#fff;border:1px solid rgba(0,0,0,.12);border-radius:10px;padding:8px 12px;font:600 13px/1 Inter,system-ui,sans-serif;color:#3a322c;cursor:pointer;box-shadow:0 6px 18px rgba(60,40,25,.18)}.map-full-btn:hover{background:#fff7f0;color:#e8642a}';
      document.head.appendChild(st);
    }
    const mapEl=document.getElementById('map');
    if(getComputedStyle(mapEl).position==='static') mapEl.style.position='relative';
    const btn=document.createElement('button'); btn.type='button'; btn.className='map-full-btn'; btn.innerHTML='⛶ Pantalla completa';
    const setFull=function(full){
      mapEl.classList.toggle('mapfull',full);
      btn.innerHTML=full?'✕ Cerrar':'⛶ Pantalla completa';
      document.body.style.overflow=full?'hidden':'';
      setTimeout(()=>{try{map.invalidateSize();}catch(e){}},120);
    };
    btn.onclick=function(ev){ ev.stopPropagation(); setFull(!mapEl.classList.contains('mapfull')); };
    document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&mapEl.classList.contains('mapfull')) setFull(false); });
    mapEl.appendChild(btn);
  })();
  const tabs = document.getElementById('mapTabs');
  if(tabs){
    tabs.innerHTML = Object.keys(cityCenters).map(c=>`<button class="${c===start?'active':''}" data-city="${c}">${c}</button>`).join('');
    tabs.addEventListener('click',e=>{
      if(e.target.tagName !== 'BUTTON') return;
      document.querySelectorAll('#mapTabs button').forEach(b=>b.classList.remove('active'));
      e.target.classList.add('active');
      const city = e.target.dataset.city;
      map.setView(cityCenters[city],12);
      const first = listings.find(l=>l.city===city); if(first){selectedId=first.id; renderMapCard(first);} drawMarkers(city);
    });
  }
  const f0 = listings.find(l=>l.city===start); if(f0){selectedId=f0.id; renderMapCard(f0);}
  drawMarkers(start);
  setTimeout(()=>{try{map.invalidateSize();}catch(e){}},250);
  // Hook opcional: avisa a la página (p. ej. alojamientos.html) que el mapa ya está
  // listo, para que aplique su gating de match. No afecta a la home.
  if(typeof window.__hfOnMapReady === 'function'){ try{ window.__hfOnMapReady(); }catch(e){} }
}
// Acceso de solo lectura al mapa para páginas con gating (no usado por la home).
window.__hfGetMap = function(){ return map; };
window.__hfRedrawCity = function(city){ try{ drawMarkers(city); }catch(e){} };
window.goCity = function(city){
  if(!map || !cityCenters[city]) return;
  map.setView(cityCenters[city],12);
  const f = listings.find(l=>l.city===city); if(f){selectedId=f.id; renderMapCard(f);}
  drawMarkers(city);
  const items = listings.filter(l=>l.city===city); if(items.length) renderListings(items);
};
window.goCountry = function(country, mainCity){
  if(!map) return;
  const items = listings.filter(l=>l.country===country);
  markers.forEach(m=>m.remove()); markers=[];
  items.forEach(item=>{
    const mk = L.marker([item.lat,item.lng],{icon:makeIcon(item)}).addTo(map);
    mk.on('click',()=>{ selectedId=item.id; renderMapCard(item); if(window.openListing)window.openListing(item.id); });
    markers.push(mk);
  });
  if(items.length>1){ try{ map.fitBounds(items.map(i=>[i.lat,i.lng]),{padding:[60,60],maxZoom:13}); }catch(e){} }
  else if(items.length===1){ map.setView([items[0].lat,items[0].lng],12); }
  else if(mainCity && cityCenters[mainCity]){ map.setView(cityCenters[mainCity],11); }
  if(items[0]){ selectedId=items[0].id; renderMapCard(items[0]); currentCity=items[0].city; }
  renderListings(items.length ? items : []);
  setTimeout(()=>{ try{ map.invalidateSize(); }catch(e){} },150);
};

function scoreLead(lead, item){
  let score = 50;
  if(lead.destinationCity === item.city) score += 25;
  if(Number(lead.budgetMax) >= item.price) score += 18; else score -= Math.min(18, (item.price - Number(lead.budgetMax))/10);
  if(item.type.toLowerCase().includes((lead.housingType||'').split(' ')[0].toLowerCase())) score += 10;
  const prefText = (lead.preferences||[]).join(' ').toLowerCase();
  item.features.forEach(f=>{ if(prefText.includes(f.toLowerCase().split(' ')[0])) score += 4; });
  if((lead.urgency||'').includes('urgente') && item.availability.toLowerCase().includes('ahora')) score += 8;
  return Math.max(40, Math.min(99, Math.round(score)));
}
// Mapa ciudad -> país para derivar el destino (el wizard pide ciudad, no país).
const CITY_TO_COUNTRY = {
  'Buenos Aires':'Argentina','Córdoba':'Argentina','Mendoza':'Argentina','Bariloche':'Argentina','La Plata':'Argentina','Mar del Plata':'Argentina','Salta':'Argentina','Neuquén':'Argentina',
  'Santiago':'Chile','Valparaíso':'Chile','Viña del Mar':'Chile','Concepción':'Chile','Puerto Montt':'Chile','Pucón':'Chile','Villarrica':'Chile',
  'Madrid':'España','Barcelona':'España','Valencia':'España','Sevilla':'España','Málaga':'España','Bilbao':'España','San Sebastián':'España','Granada':'España',
  'Roma':'Italia','Milán':'Italia','Florencia':'Italia','Turín':'Italia','Bolonia':'Italia',
  'Berlín':'Alemania','Fráncfort':'Alemania','Múnich':'Alemania','Düsseldorf':'Alemania','Stuttgart':'Alemania',
  'París':'Francia','Lille':'Francia','Burdeos':'Francia','Toulouse':'Francia',
  'Ámsterdam':'Países Bajos','La Haya':'Países Bajos',
  'Viena':'Austria','Graz':'Austria',
  'Londres':'Inglaterra',
  'Lisboa':'Portugal','Coímbra':'Portugal','Oporto':'Portugal',
  'Montevideo':'Uruguay','Punta del Este':'Uruguay'
};

/* Lee el formulario (wizard de 5 pasos) y normaliza los campos a la forma que
 * esperan scoreLead/recReason/saveLeadToAccount/sophiFromForm. Los selects por
 * pills/cards escriben en inputs ocultos con name=, así que FormData los captura. */
function getLeadData(form){
  const data = Object.fromEntries(new FormData(form).entries());
  // Preferencias: el wizard usa "zonas preferidas" como señal para el scoring.
  const zones = (data.preferredZone||'').split(',').map(s=>s.trim()).filter(Boolean);
  const legacyPrefs = Array.from(form.querySelectorAll('input[name="preferences"]:checked')).map(i=>i.value);
  data.preferences = legacyPrefs.length ? legacyPrefs : zones;
  // WhatsApp = código de país + teléfono (la lógica antigua y el copy lo usan).
  if(!data.whatsapp){ data.whatsapp = [data.dialCode, data.phone].filter(Boolean).join(' ').trim(); }
  // País de destino derivado de la ciudad (el wizard ya no lo pide aparte).
  if(!data.destinationCountry && data.destinationCity){ data.destinationCountry = CITY_TO_COUNTRY[data.destinationCity] || ''; }
  // Presupuesto numérico saneado.
  if(data.budgetMax!=null) data.budgetMax = String(data.budgetMax).replace(/[^\d.]/g,'') || data.budgetMax;
  const mc = form.querySelector('input[name="marketingConsent"]');
  data.marketingConsent = mc ? mc.checked : true;
  data.createdAt = new Date().toISOString();
  data.status = 'Nuevo';
  return data;
}
function recReason(lead, item){
  const r = [];
  r.push(Number(lead.budgetMax) >= item.price ? 'dentro del presupuesto' : 'algo sobre el presupuesto');
  if(lead.destinationCity === item.city) r.push('en la ciudad que buscas');
  const zone = (lead.preferredZone||'').toLowerCase();
  if(zone && zone.split(/[ ,]+/).some(z=>z && item.neighborhood.toLowerCase().includes(z))) r.push('en tu zona preferida');
  if((item.type||'').toLowerCase().includes((lead.housingType||'').split(' ')[0].toLowerCase())) r.push('del tipo que pediste');
  const prefs = (lead.preferences||[]).join(' ').toLowerCase();
  const matched = item.features.filter(f=>prefs.includes(f.toLowerCase().split(' ')[0]));
  if(matched.length) r.push(matched.join(', ').toLowerCase());
  r.push(item.availability.toLowerCase());
  return r.slice(0,4).join(' · ');
}
/* Busca en la base de datos las opciones que REALMENTE coinciden con el lead:
 * 1) por ciudad de destino (o, si no hay coincidencia exacta, por país),
 * 2) dentro del presupuesto convertido a la moneda del lead (con tolerancia),
 * y las ordena con scoreLead (mejor primero). Devuelve TODAS las coincidencias
 * (no recorta), para poder mostrarlas en lotes de 3 con "Ver 3 más".
 * Si no hay coincidencias reales (p. ej. presupuesto imposible), devuelve []. */
function findMatchingListings(lead){
  const cur = lead.currency || selectedCurrency || 'EUR';
  const budget = Number(lead.budgetMax) || 0;
  const tol = budget ? budget * 0.10 : 0; // tolerancia ~10% para no descartar por poco
  const city = lead.destinationCity || '';
  const country = lead.destinationCountry || CITY_TO_COUNTRY[city] || '';
  // Universo: SOLO alojamientos aprobados (Sophi nunca recomienda no aprobados).
  const approved = listings.filter(l => l.aprobado !== false);
  // misma ciudad; si no hay nada, mismo país.
  let pool = approved.filter(l => city && l.city === city);
  if(!pool.length && country) pool = approved.filter(l => l.country === country);
  if(!pool.length) return [];
  // Filtro por presupuesto (precio convertido a la moneda del lead).
  const within = pool.filter(l => {
    const conv = convertPrice(l.price, l.currency, cur);
    return !budget || conv <= (budget + tol);
  });
  if(!within.length) return [];
  // Ranking: mejor match primero. Devuelve el array COMPLETO (sin recortar).
  return within
    .map(l => ({...l, score: scoreLead(lead, l), convPrice: convertPrice(l.price, l.currency, cur)}))
    .sort((a,b) => b.score - a.score);
}

/* ===== Resultados del wizard por lotes de 3 =====================================
 * Estado a nivel de módulo: el array completo de coincidencias y cuántas ya se
 * mostraron. renderWizResults() arranca el flujo; renderWizBatch() añade el
 * siguiente lote (hasta 3) y gestiona el botón "Ver 3 más" / la nota de cierre. */
const WIZ_BATCH = 3;
let _wizMatches = [];   // matches que se muestran como tarjetas normales (ya sin los 3 tiers)
let _wizShown = 0;
let _wizLead = null;

/* Convierte el score interno de scoreLead (~40–99) en un chip ~/100 acotado a 60–99,
 * para que el cliente siempre vea una afinidad alta y comparable entre tarjetas. */
function wizScoreChip(r){
  const s = (r && typeof r.score === 'number') ? r.score : 60;
  return Math.max(60, Math.min(99, Math.round(s)));
}

/* Reasons de una línea por tier (curaduría de Sophi). */
const WIZ_TIER_REASON = {
  economica:  'Menos metros, mejor precio.',
  equilibrada:'Mejor balance entre zona, presupuesto y llegada.',
  premium:    'Más privacidad y comodidad para tu etapa.'
};
const WIZ_TIER_TAG = { economica:'ECONÓMICA', equilibrada:'EQUILIBRADA', premium:'PREMIUM' };

/* Construye hasta 3 tiers comparables a partir de las coincidencias (ya rankeadas
 * por score). En la moneda del lead se ordena por precio convertido:
 *   - ECONÓMICA  = la más barata.
 *   - PREMIUM    = la más cara dentro del presupuesto (la tolerancia ya la aplicó
 *                  findMatchingListings, así que el universo entero es válido).
 *   - EQUILIBRADA= la de mejor score ENTRE medias, marcada como Recomendada.
 * Dedupe por id: si solo hay 2 distintas, devuelve 2; si solo 1, esa va como Recomendada. */
function buildWizTiers(matches){
  const list = (matches||[]).slice();
  if(!list.length) return { tiers: [], rest: [] };

  // Orden por precio convertido (asc). convPrice lo añade findMatchingListings;
  // si faltara, recurrimos a money() vía el precio convertido on the fly.
  const cur = (_wizLead && _wizLead.currency) || selectedCurrency || 'EUR';
  const priceOf = r => (typeof r.convPrice === 'number') ? r.convPrice : convertPrice(r.price, r.currency, cur);
  const byPrice = list.slice().sort((a,b)=> priceOf(a) - priceOf(b));

  // Un solo match: va como Recomendada (equilibrada).
  if(byPrice.length === 1){
    return { tiers: [{ tier:'equilibrada', recommended:true, item: byPrice[0] }], rest: [] };
  }

  const cheapest = byPrice[0];
  const priciest = byPrice[byPrice.length - 1];

  // Solo 2 distintas: económica + premium (premium = la más cara como Recomendada).
  if(byPrice.length === 2){
    return {
      tiers: [
        { tier:'economica', recommended:false, item: cheapest },
        { tier:'premium',   recommended:true,  item: priciest }
      ],
      rest: []
    };
  }

  // 3+: el "medio" es el de mejor score que NO sea la más barata ni la más cara.
  const usedIds = new Set([cheapest.id, priciest.id]);
  const middlePool = list.filter(r => !usedIds.has(r.id)); // list viene rankeada por score
  const middle = middlePool.length ? middlePool[0] : null;

  const tiers = [
    { tier:'economica',  recommended:false, item: cheapest },
    { tier:'equilibrada',recommended:true,  item: middle || cheapest },
    { tier:'premium',    recommended:false, item: priciest }
  ];

  // Resto: todo lo que no entró en los 3 tiers (por id), preservando el orden por score.
  const tierIds = new Set(tiers.map(t => t.item.id));
  const rest = list.filter(r => !tierIds.has(r.id));
  return { tiers, rest };
}

/* Tarjeta de un tier comparable: tag del tier, foto, título, barrio·ciudad,
 * precio con money(), chip de afinidad (~/100), reason de una línea y acciones.
 * La tarjeta Recomendada (equilibrada / único match) se resalta con badge naranja. */
function wizTierCard(t){
  const r = t.item;
  const rec = !!t.recommended;
  const tag = WIZ_TIER_TAG[t.tier] || '';
  const reason = WIZ_TIER_REASON[t.tier] || '';
  const chip = wizScoreChip(r);
  const cardStyle = rec
    ? 'border:2px solid #e8642a;box-shadow:0 14px 38px rgba(232,100,42,.22);transform:translateY(-4px)'
    : 'border:1px solid rgba(0,0,0,.10);box-shadow:0 8px 22px rgba(60,40,25,.10)';
  return `
      <article class="wd-tier${rec?' wd-tier-rec':''}" role="button" tabindex="0" onclick="openListing('${r.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openListing('${r.id}')}" style="position:relative;display:flex;flex-direction:column;border-radius:16px;overflow:hidden;background:#fff;cursor:pointer;${cardStyle}">
        ${rec ? '<span style="position:absolute;top:12px;left:12px;z-index:2;background:#e8642a;color:#fff;font:700 11px/1 Inter,system-ui,sans-serif;letter-spacing:.04em;padding:6px 10px;border-radius:999px;box-shadow:0 4px 12px rgba(232,100,42,.35)">★ Recomendada</span>' : ''}
        <div class="wd-tier-img" style="position:relative;height:150px;background:#f3ede7 center/cover no-repeat;background-image:url('${r.image}')">
          <span style="position:absolute;bottom:10px;left:10px;background:rgba(33,27,22,.82);color:#fff;font:700 10px/1 Inter,system-ui,sans-serif;letter-spacing:.08em;padding:6px 9px;border-radius:8px">${tag}</span>
        </div>
        <div class="wd-tier-bd" style="padding:14px 14px 16px;display:flex;flex-direction:column;gap:6px;flex:1">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
            <h5 style="margin:0;font:700 15px/1.25 Inter,system-ui,sans-serif;color:#211b16">${r.title}</h5>
            <span title="Afinidad" style="flex:none;background:#fff2ea;color:#e8642a;font:700 12px/1 Inter,system-ui,sans-serif;padding:6px 9px;border-radius:999px;border:1px solid rgba(232,100,42,.30)">${chip}<small style="font-weight:600;opacity:.7">/100</small></span>
          </div>
          <p style="margin:0;font:500 13px/1.3 Inter,system-ui,sans-serif;color:#6b6058">${r.neighborhood} · ${r.city}</p>
          <p style="margin:2px 0 0;font:800 19px/1 Inter,system-ui,sans-serif;color:#211b16">${money(r)}<small style="font:600 12px/1 Inter,system-ui,sans-serif;color:#8a7f76"> /mes</small></p>
          <p style="margin:4px 0 8px;font:500 12.5px/1.35 Inter,system-ui,sans-serif;color:#8a7f76">${reason}</p>
          <div class="wd-opt-actions" style="margin-top:auto;display:flex;gap:8px">
            <button type="button" class="wd-btn wd-btn-primary" style="flex:1" onclick="event.stopPropagation();openListing('${r.id}')">Ver alojamiento</button>
            <a class="wd-btn wd-btn-ghost" target="_blank" rel="noopener" href="${whatsappUrl(r)}" onclick="event.stopPropagation()">WhatsApp</a>
          </div>
        </div>
      </article>`;
}

/* Construye la tarjeta de una opción (foto, badge, título, barrio·ciudad,
 * precio con money(), "Ver alojamiento" y "WhatsApp"). */
function wizOptCard(r){
  return `
      <article class="wd-opt" role="button" tabindex="0" onclick="openListing('${r.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openListing('${r.id}')}">
        <div class="wd-opt-img" style="background-image:url('${r.image}')">
          <span class="wd-opt-badge">${friendlyBadge(r.profile)}</span>
        </div>
        <div class="wd-opt-bd">
          <h5>${r.title}</h5>
          <p class="wd-opt-loc">${r.neighborhood} · ${r.city}</p>
          <p class="wd-opt-price">${money(r)}<small>/mes</small></p>
          <div class="wd-opt-actions">
            <button type="button" class="wd-btn wd-btn-primary" onclick="event.stopPropagation();openListing('${r.id}')">Ver alojamiento</button>
            <a class="wd-btn wd-btn-ghost" target="_blank" rel="noopener" href="${whatsappUrl(r)}" onclick="event.stopPropagation()">WhatsApp</a>
          </div>
        </div>
      </article>`;
}

/* Pinta los resultados de Emilia dentro de la tarjeta de agradecimiento (#wizDone):
 * inicializa el estado por lotes y muestra el primer lote (o el mensaje cálido). */
function renderWizResults(lead, matches){
  const host = document.getElementById('wizResults');
  if(!host) return;
  _wizLead = lead;
  const all = Array.isArray(matches) ? matches : [];
  _wizShown = 0;

  // Sin coincidencias: mensaje cálido + WhatsApp (sin "ver más").
  if(!all.length){
    _wizMatches = [];
    const waText = `Hola House & Flats, completé mi solicitud para ${lead.destinationCity||lead.destinationCountry||''} con presupuesto máximo ${lead.currency||''} ${lead.budgetMax||''}. ¿Me ayudan a encontrar opciones a mi medida?`;
    host.innerHTML = `
      <div class="wd-nomatch">
        <p class="wd-nomatch-tx">Por ahora no tenemos una coincidencia exacta para tu búsqueda, pero nuestro equipo y Sophi siguen buscando. Te contactamos por WhatsApp con opciones a tu medida.</p>
        <a class="wd-btn wd-btn-primary wd-btn-lg" target="_blank" rel="noopener" href="https://wa.me/13055100028?text=${encodeURIComponent(waText)}">💬 Hablar por WhatsApp</a>
      </div>`;
    return;
  }

  // Hay coincidencias: construir hasta 3 tiers comparables (Económica / Equilibrada
  // [Recomendada] / Premium). El resto queda para "Ver más opciones" en lotes.
  const { tiers, rest } = buildWizTiers(all);
  _wizMatches = rest; // las tarjetas normales solo muestran lo que NO entró en los tiers

  host.innerHTML = `
    <h4 class="wd-results-h">Sophi te preparó 3 caminos comparables</h4>
    <div class="wd-tiers" id="wizTiers" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;align-items:stretch;margin-top:8px">
      ${tiers.map(wizTierCard).join('')}
    </div>
    <div class="wd-opts" id="wizOpts" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:16px"></div>
    <div class="wd-results-more" id="wizMore" style="margin-top:16px"></div>`;
  renderWizMore();
}

/* Gestiona la zona de acciones tras los 3 tiers: si quedan coincidencias fuera de
 * los tiers, muestra "Ver más opciones" (revela en lotes de 3 como tarjetas
 * normales); cuando ya no quedan, muestra la nota de cierre + WhatsApp. */
function renderWizMore(){
  const more = document.getElementById('wizMore');
  if(!more) return;
  if(_wizShown < _wizMatches.length){
    more.innerHTML = `<button type="button" class="wd-btn wd-btn-ghost wd-btn-lg" id="wizMoreBtn">Ver más opciones</button>`;
    const btn = document.getElementById('wizMoreBtn');
    if(btn) btn.addEventListener('click', renderWizBatch);
  } else {
    const lead = _wizLead || {};
    const waText = `Hola House & Flats, completé mi solicitud para ${lead.destinationCity||lead.destinationCountry||''} con presupuesto máximo ${lead.currency||''} ${lead.budgetMax||''}. Vi todas las opciones disponibles y me gustaría que me contacten con nuevas opciones a mi medida.`;
    more.innerHTML = `
      <div class="wd-results-end">
        <p class="wd-nomatch-tx">Estas son todas las opciones que tenemos ahora para tu búsqueda. Si ninguna te convence, te contactamos por WhatsApp con nuevas opciones a tu medida.</p>
        <a class="wd-btn wd-btn-primary wd-btn-lg" target="_blank" rel="noopener" href="https://wa.me/13055100028?text=${encodeURIComponent(waText)}">💬 Hablar por WhatsApp</a>
      </div>`;
  }
}

/* Añade el siguiente lote (hasta 3) sin borrar los anteriores y refresca el
 * botón "Ver 3 más" o, si ya no quedan, la nota de cierre + WhatsApp. */
function renderWizBatch(){
  const opts = document.getElementById('wizOpts');
  const more = document.getElementById('wizMore');
  if(!opts || !more) return;

  const next = _wizMatches.slice(_wizShown, _wizShown + WIZ_BATCH);
  opts.insertAdjacentHTML('beforeend', next.map(wizOptCard).join(''));
  _wizShown += next.length;

  // Refresca el botón "Ver más opciones" o la nota de cierre + WhatsApp.
  renderWizMore();
}

function handleLeadSubmit(e){
  e.preventDefault();
  const lead = getLeadData(e.currentTarget);
  // Emilia busca en la base de datos las opciones que coinciden de verdad.
  const matches = findMatchingListings(lead);
  // recs: top global para Sophi/panel clásico (siempre algo que mostrar en chat).
  const recs = (matches.length ? matches : listings.filter(l=>l.aprobado!==false).map(item=>({...item,score:scoreLead(lead,item)})).sort((a,b)=>b.score-a.score)).slice(0,3);
  lead.leadScore = recs.length ? recs[0].score : 0;
  // Pinta los resultados reales dentro de la tarjeta de agradecimiento.
  renderWizResults(lead, matches);
  const existing = JSON.parse(localStorage.getItem('hf_leads')||'[]');
  existing.unshift(lead);
  localStorage.setItem('hf_leads', JSON.stringify(existing));
  document.getElementById('leadSummary').textContent = `Solicitud recibida. Nuestro equipo revisará tu información y te enviará opciones compatibles para que puedas decidir con más confianza. Mientras tanto, según tu destino ${lead.destinationCity}, presupuesto ${lead.currency} ${lead.budgetMax} y forma de vivir, estas opciones encajan con lo que buscas:`;
  document.getElementById('recommendations').innerHTML = recs.map((r,i)=>`<article class="rec-card"><div class="badges"><span class="badge">Compatible</span></div><h4>${i+1}. ${r.title}</h4><p class="price">${money(r)}<small>/mes</small></p><small>${r.neighborhood}, ${r.city}.</small><p class="rec-why">${recReason(lead,r)}</p><a class="btn btn-ghost" style="margin-top:10px;width:100%" target="_blank" href="${whatsappUrl(r)}">WhatsApp</a></article>`).join('');
  const optsText = recs.map((r,i)=>`${i+1}) ${r.title} (${r.neighborhood}, ${r.city}) ${money(r)}/mes`).join(' | ');
  const sendMsg = `Hola House & Flats, completé mi solicitud para ${lead.destinationCity} con presupuesto máximo ${lead.currency} ${lead.budgetMax}. Me interesan estas opciones: ${optsText}. ¿Me confirman disponibilidad?`;
  let sendBtn = document.getElementById('sendOptionsBtn');
  if(!sendBtn){
    sendBtn = document.createElement('a');
    sendBtn.id = 'sendOptionsBtn'; sendBtn.className = 'btn btn-primary'; sendBtn.target = '_blank';
    sendBtn.style.marginTop = '18px'; sendBtn.textContent = 'Enviar opciones por WhatsApp';
    document.getElementById('recommendationPanel').appendChild(sendBtn);
  }
  sendBtn.href = `https://wa.me/13055100028?text=${encodeURIComponent(sendMsg)}`;
  document.getElementById('recommendationPanel').hidden = false;
  document.getElementById('recommendationPanel').scrollIntoView({behavior:'smooth',block:'center'});
  if(window.sophiFromForm) window.sophiFromForm(lead, matches);
  // Si hay sesión real, guardamos también la solicitud en la cuenta del cliente.
  // Es una mejora: nunca debe bloquear ni romper el envío (todo en try/catch).
  saveLeadToAccount(lead);
}

/* Guarda la solicitud en la cuenta del usuario cuando hay sesión.
 * Si no hay sesión, invita suavemente a crear una cuenta (sin bloquear). */
function saveLeadToAccount(lead){
  try{
    if(!(window.HFAuth && window.HFAuth.configured)) return; // modo demo: nada que hacer
    if(typeof window.HFAuth.getUser !== 'function') return;
    window.HFAuth.getUser().then(function(user){
      if(!user){
        // No logueado: nota amable, una sola vez por sesión de navegador.
        try{
          if(!sessionStorage.getItem('hf_solicitud_nudge')){
            sessionStorage.setItem('hf_solicitud_nudge','1');
            if(window.hfSolicitudNudge) window.hfSolicitudNudge();
          }
        }catch(e){}
        return;
      }
      try{
        var fechas = [lead.arrivalDate, lead.departureDate].filter(Boolean).join(' → ');
        window.HFAuth.saveRequest({
          destino: lead.destinationCountry || '',
          ciudad: lead.destinationCity || '',
          fechas: fechas,
          presupuesto: (lead.currency ? lead.currency + ' ' : '') + (lead.budgetMax || ''),
          perfil: lead.profileType || '',
          tipo: lead.housingType || '',
          moneda: lead.currency || '',
          mensaje: lead.notes || '',
          payload: lead
        });
      }catch(e){}
    }).catch(function(){});
  }catch(e){}
}
window.__listings = listings;
window.__convert = convertPrice;
window.__money = money;
window.__scoreLead = scoreLead;

/* =========================================================================
 * HFFav — favoritos / "Guardar"
 * Siempre guarda en localStorage para que funcione sin cuenta (y en modo demo).
 * Cuando hay sesión (HFAuth configurado + usuario), espeja en Supabase:
 *   - al iniciar sesión, fusiona lo local con lo de la nube
 *   - cada guardar/quitar se refleja en ambos sitios
 * Notifica a los suscriptores para repintar los corazones.
 * ========================================================================= */
window.HFFav = (function(){
  var LS_KEY = 'hf_saved';
  var set = new Set();      // ids guardados (string)
  var subs = [];            // callbacks de cambio
  var loggedIn = false;     // hay usuario autenticado
  var merged = false;       // ya fusionamos local<->nube esta sesión

  function readLS(){
    try{ return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); }
    catch(e){ return []; }
  }
  function writeLS(){
    try{ localStorage.setItem(LS_KEY, JSON.stringify(Array.from(set))); }
    catch(e){}
  }
  function notify(){
    subs.forEach(function(cb){ try{ cb(); }catch(e){} });
  }

  // Cargar estado inicial desde localStorage.
  readLS().forEach(function(id){ set.add(String(id)); });

  function isSaved(id){ return set.has(String(id)); }
  function getAll(){ return Array.from(set); }
  function count(){ return set.size; }
  function onChange(cb){ if(typeof cb==='function'){ subs.push(cb); cb(); } }

  function hasAuth(){
    return !!(window.HFAuth && window.HFAuth.configured && loggedIn);
  }

  function add(id){
    id = String(id);
    if(set.has(id)) return;
    set.add(id); writeLS(); notify();
    if(hasAuth() && window.HFAuth.saveListing){
      try{ window.HFAuth.saveListing(id); }catch(e){}
    }
  }
  function remove(id){
    id = String(id);
    if(!set.has(id)) return;
    set.delete(id); writeLS(); notify();
    if(hasAuth() && window.HFAuth.unsaveListing){
      try{ window.HFAuth.unsaveListing(id); }catch(e){}
    }
  }
  function toggle(id){
    id = String(id);
    if(set.has(id)){ remove(id); return false; }
    add(id); return true;
  }

  // Fusiona lo local con lo de la nube una vez por sesión iniciada.
  function syncWithCloud(){
    if(merged || !hasAuth() || !window.HFAuth.listSaved) return;
    merged = true;
    var localIds = Array.from(set);
    window.HFAuth.listSaved().then(function(rows){
      var cloud = new Set();
      (rows||[]).forEach(function(r){ if(r && r.listing_id!=null) cloud.add(String(r.listing_id)); });
      // Sube lo que está en local pero no en la nube.
      localIds.forEach(function(id){
        if(!cloud.has(id) && window.HFAuth.saveListing){
          try{ window.HFAuth.saveListing(id); }catch(e){}
        }
        cloud.add(id);
      });
      // El conjunto final es la unión.
      set = cloud;
      writeLS(); notify();
    }).catch(function(){});
  }

  // Reaccionar a cambios de sesión (si HFAuth está disponible).
  function bindAuth(){
    if(!window.HFAuth || !window.HFAuth.onAuthChange) return;
    window.HFAuth.onAuthChange(function(user){
      var was = loggedIn;
      loggedIn = !!user;
      if(loggedIn && !was){ merged = false; syncWithCloud(); }
      if(!loggedIn){ merged = false; }
      notify();
    });
  }
  if(document.readyState!=='loading') bindAuth();
  else document.addEventListener('DOMContentLoaded', bindAuth);

  return { isSaved:isSaved, getAll:getAll, count:count, toggle:toggle,
           add:add, remove:remove, onChange:onChange, loggedIn:function(){return loggedIn;} };
})();

// Toggle global usado por los corazones de las tarjetas / ficha.
window.toggleFav = function(id, ev){
  if(ev && ev.stopPropagation) ev.stopPropagation();
  var nowSaved = window.HFFav.toggle(id);
  // Si guarda sin sesión, invita suavemente a crear una cuenta (una vez por sesión de navegador).
  if(nowSaved && !window.HFFav.loggedIn() && !sessionStorage.getItem('hf_fav_nudge')){
    try{ sessionStorage.setItem('hf_fav_nudge','1'); }catch(e){}
    if(window.hfFavNudge) window.hfFavNudge();
  }
  return nowSaved;
};

document.addEventListener('DOMContentLoaded',()=>{
  renderListings(); initMap();
  // El formulario (wizard) solo existe en la home: enlazar de forma null-safe
  // para que esta misma app.js funcione también en alojamientos.html (sin #leadForm).
  const lf = document.getElementById('leadForm');
  if(lf) lf.addEventListener('submit',handleLeadSubmit);
  // Repintar corazones de las tarjetas cuando cambian los favoritos.
  if(window.HFFav) window.HFFav.onChange(refreshFavHearts);
});

// Refleja el estado guardado en los corazones visibles.
function refreshFavHearts(){
  document.querySelectorAll('[data-fav-id]').forEach(function(elx){
    var saved = window.HFFav && window.HFFav.isSaved(elx.getAttribute('data-fav-id'));
    elx.classList.toggle('is-saved', !!saved);
    var ico = elx.querySelector('.fav-ico') || elx;
    if(ico) ico.textContent = saved ? '♥' : '♡';
    var lbl = elx.querySelector('.lm-fav-label');
    if(lbl){
      var t = (window.__t ? window.__t(saved ? 'saved' : 'save') : (saved ? 'Guardado' : 'Guardar'));
      lbl.textContent = t;
    }
    elx.setAttribute('aria-pressed', saved ? 'true' : 'false');
  });
}
window.refreshFavHearts = refreshFavHearts;

/* =========================================================
   SHARED MOBILE NAV TOGGLE
   Idempotent: binds burgers (.hf-burger[data-mnav]) to their
   overlay (#<target>). Safe to call multiple times.
   ========================================================= */
(function(){
  if(window.__hfMnavInit) return; window.__hfMnavInit = true;
  function closeMenu(panel, burger){
    if(!panel) return;
    panel.classList.remove('open');
    document.body.classList.remove('hf-mnav-lock');
    if(burger){ burger.setAttribute('aria-expanded','false'); }
  }
  function openMenu(panel, burger){
    if(!panel) return;
    panel.classList.add('open');
    document.body.classList.add('hf-mnav-lock');
    if(burger){ burger.setAttribute('aria-expanded','true'); }
    var first = panel.querySelector('a,button');
    if(first){ try{ first.focus({preventScroll:true}); }catch(e){ first.focus(); } }
  }
  function bind(){
    document.querySelectorAll('.hf-burger[data-mnav]').forEach(function(burger){
      if(burger.__hfBound) return; burger.__hfBound = true;
      var panel = document.getElementById(burger.getAttribute('data-mnav'));
      if(!panel) return;
      burger.setAttribute('aria-expanded','false');
      burger.addEventListener('click', function(){
        if(panel.classList.contains('open')) closeMenu(panel, burger);
        else openMenu(panel, burger);
      });
      panel.addEventListener('click', function(ev){
        var t = ev.target;
        if(t.closest('.hf-mnav-backdrop') || t.closest('[data-mnav-close]') || t.closest('a')){
          closeMenu(panel, burger);
        }
      });
    });
  }
  document.addEventListener('keydown', function(ev){
    if(ev.key !== 'Escape') return;
    document.querySelectorAll('.hf-mnav.open').forEach(function(panel){
      var burger = document.querySelector('.hf-burger[data-mnav="'+panel.id+'"]');
      panel.classList.remove('open');
      document.body.classList.remove('hf-mnav-lock');
      if(burger){ burger.setAttribute('aria-expanded','false'); burger.focus(); }
    });
  });
  window.addEventListener('resize', function(){
    if(window.innerWidth > 1024){
      document.querySelectorAll('.hf-mnav.open').forEach(function(panel){
        var burger = document.querySelector('.hf-burger[data-mnav="'+panel.id+'"]');
        panel.classList.remove('open');
        document.body.classList.remove('hf-mnav-lock');
        if(burger) burger.setAttribute('aria-expanded','false');
      });
    }
  });
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
  window.HFMnav = { bind: bind };
})();
