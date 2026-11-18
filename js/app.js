/**
 * TODO ASADO LOS 3 OSOS - Interactive Digital Menu Application
 * Handles Tabs, Dynamic Rendering, Live Search, Event Quote Calculator & QR Generator
 */

// Contact Information
const CONTACT_CONFIG = {
  phone1: "4441425054",
  phone2: "4442343129",
  whatsappBase1: "https://wa.me/524441425054",
  whatsappBase2: "https://wa.me/524442343129",
  facebook: "https://www.facebook.com/search/top?q=Todo_asado%20Lostresosos",
  instagram: "https://www.instagram.com/todoasado_los3osos/"
};

// 1. DATA: MENÚ DE VENTA (Directa / Regular)
const MENU_VENTA_DATA = [
  {
    id: "v-arrachera",
    category: "paquetes",
    name: "Paquete Arrachera de Res",
    price: 480,
    priceNote: "Se puede pedir 1/4, 1/2 o 3/4",
    badge: "Más Vendido",
    badgeType: "featured",
    description: "Arrachera de res marinada y asada al punto, acompañada de papa asada, salchichón, chorizo argentino, cebolla cambray, chistorra, limón y salsa de molcajete.",
    highlights: ["Papa Asada", "Salchichón", "Chorizo Argentino", "Cebolla Cambray", "Chistorra", "Salsa Molcajete"]
  },
  {
    id: "v-costilla",
    category: "paquetes",
    name: "Paquete Costilla BBQ",
    price: 430,
    priceNote: "Se puede pedir 1/4, 1/2 o 3/4",
    badge: "Especialidad",
    badgeType: "chef",
    description: "Suave y jugosa costilla de puerco bañada en nuestra salsa BBQ artesanal, acompañada de papa asada, salchichón y salsa de molcajete.",
    highlights: ["Costilla Bañada en BBQ", "Papa Asada", "Salchichón", "Salsa de Molcajete"]
  },
  {
    id: "v-discada",
    category: "paquetes",
    name: "Paquete Discada Norteña",
    price: 400,
    priceNote: "Se puede pedir 1/4, 1/2 o 3/4",
    badge: "Sabor Norteño",
    badgeType: "budget",
    description: "Auténtica Discada Norteña con la mejor combinación de carnes y vegetales al disco, acompañada de papa asada, limón y salsa de molcajete.",
    highlights: ["Mix de Carnes y Vegetales", "Papa Asada", "Limón", "Salsa de Molcajete"]
  },
  {
    id: "v-3osos",
    category: "paquetes",
    name: "Paquete 3 Osos (Especial)",
    price: 480,
    priceNote: "Se puede pedir 1/4, 1/2 o 3/4",
    badge: "Firma de la Casa",
    badgeType: "featured",
    description: "El trío estelar: combinación de Arrachera, Costilla BBQ y Discada Norteña. Servido con papa asada, salchichón, chorizo argentino, cebolla cambray, chistorra, limón y salsa de molcajete.",
    highlights: ["Arrachera + Costilla BBQ + Discada", "Chorizo Argentino & Chistorra", "Papa Asada & Guarniciones"]
  },
  {
    id: "v-chamorro",
    category: "paquetes",
    name: "Chamorro de Oso",
    price: 220,
    priceNote: "Pieza completa",
    badge: "Recomendado",
    badgeType: "chef",
    description: "Pieza entera de Chamorro suave y tierno, bañado en salsa BBQ y Miel, acompañada de papa asada, salchichón, chistorra, limón y salsa de molcajete.",
    highlights: ["Glaseado BBQ y Miel", "Papa Asada", "Salchichón & Chistorra", "Salsa de Molcajete"]
  },
  {
    id: "v-alitas",
    category: "antojos",
    name: "Alitas de Pollo (10 pz)",
    price: 100,
    priceNote: "10 piezas",
    badge: "Para Botanear",
    badgeType: "budget",
    description: "10 deliciosas piezas de alitas doradas. Elige tu salsa favorita: BBQ tradicional, Mango Habanero picante o Búfalo clásico.",
    highlights: ["Salsa BBQ", "Salsa Mango Habanero", "Salsa Búfalo"]
  },
  {
    id: "v-burger",
    category: "antojos",
    name: "Hamburguesa Casera 250g",
    price: 100,
    priceNote: "Individual",
    badge: "100% Casera",
    badgeType: "featured",
    description: "250g de carne casera selecta a la parrilla, con piña asada, queso, vegetales frescos (lechuga, jitomate, cebolla) y aderezos especiales.",
    highlights: ["250g Carne Asada", "Piña Asada & Queso", "Vegetales Frescos & Aderezos"]
  },
  {
    id: "v-tortas",
    category: "antojos",
    name: "Tortas Especiales",
    price: 60,
    priceNote: "Por pieza",
    badge: "Antojo Rápido",
    badgeType: "budget",
    description: "Torta grande a elegir entre Arrachera marinada o Discada Norteña, servida con lechuga, cebolla, jitomate y aderezos.",
    highlights: ["A elegir: Arrachera o Discada", "Vegetales Frescos"]
  },
  {
    id: "v-tacos",
    category: "antojos",
    name: "Tacos al Carbón",
    price: 20,
    priceNote: "Por pieza",
    badge: "Al Carbón",
    badgeType: "budget",
    description: "Taco en tortilla caliente con la carne de tu elección: Arrachera, Discada Norteña o Costilla BBQ deshebrada.",
    highlights: ["Arrachera", "Discada", "Costilla"]
  },
  {
    id: "v-papa-asada",
    category: "complementos",
    name: "Orden de Papa Asada",
    price: 40,
    priceNote: "Por orden",
    badge: "Acompañamiento",
    badgeType: "budget",
    description: "Papa asada al carbón preparada con mantequilla, sal y condimentos especiales de la casa.",
    highlights: ["Mantequilla y sazón especial"]
  },
  {
    id: "v-papa-carne",
    category: "complementos",
    name: "Orden de Papa con Carne",
    price: 60,
    priceNote: "Por orden",
    badge: "Favorito",
    badgeType: "featured",
    description: "Papa asada al carbón rellena y coronada con abundante carne asada, mantequilla y aderezos.",
    highlights: ["Cargada con carne asada"]
  }
];

// 2. DATA: MENÚ DE EVENTOS (11 Menús)
const MENU_EVENTOS_DATA = [
  {
    id: "e-1",
    num: "1",
    name: "Menú Hamburguesas Parrilleras",
    category: "hamburguesas",
    priceDisplay: "$110 – $230",
    unit: "por persona",
    basePrice: 110,
    badge: "Parrillada Casual",
    badgeType: "featured",
    description: "Hamburguesas estilo parrillero con carne a las brasas, preparadas al momento para tus invitados con 3 opciones de paquete:",
    variants: [
      { name: "Hamburguesa parrillera sola", price: 110 },
      { name: "Hamburguesa parrillera con papas", price: 160 },
      { name: "Hamburguesa parrillera + Hot-dog + Papas", price: 230 }
    ],
    inclusions: [
      { title: "Servicio al momento", items: ["Carne asada a la parrilla", "Pan artesanal y aderezos", "Vegetales y complementos"] }
    ]
  },
  {
    id: "e-2",
    num: "2",
    name: "Menú Hamburguesas Chicas (Kids / Eventos)",
    category: "hamburguesas",
    priceDisplay: "$70 – $160",
    unit: "por persona",
    basePrice: 70,
    badge: "Económico & Cumpleaños",
    badgeType: "budget",
    description: "Opción ideal para fiestas infantiles, reuniones juveniles o paquetes con mayor rendimiento.",
    variants: [
      { name: "Hamburguesas chicas solas", price: 70 },
      { name: "Hamburguesas chicas con papas", price: 110 },
      { name: "Hamburguesas chicas + Hot-dog + Papas", price: 160 }
    ],
    inclusions: [
      { title: "Servicio", items: ["Hamburguesas tamaño individual", "Papas fritas crujientes (según paquete)", "Hot-dog parrillero (según paquete)"] }
    ]
  },
  {
    id: "e-3",
    num: "3",
    name: "Banquete Picaña Rellena & Lechón a la Estaca",
    category: "cortes",
    priceDisplay: "$580",
    unit: "por persona",
    basePrice: 580,
    badge: "Experiencia Gourmet",
    badgeType: "chef",
    description: "El banquete más exclusivo. La carne se sirve al centro de la mesa en parrillas calientes para conservar su temperatura y jugosidad.",
    inclusions: [
      {
        title: "Entrada",
        items: ["Ensalada de frutos rojos y mix de nueces", "Sopes artesanales"]
      },
      {
        title: "Plato Fuerte (Al centro en parrillas calientes)",
        items: ["Picaña rellena gourmet", "Lechón tradicional a la estaca"]
      },
      {
        title: "Acompañamientos",
        items: ["Guacamole fresco", "Tortillas calientes", "Salsa molcajeteada y salsa piña habanero", "Chistorra y mix de chorizo", "Quesadillas al comal", "Frijoles charros de la casa"]
      }
    ]
  },
  {
    id: "e-4",
    num: "4",
    name: "Presupuesto Texano Smokehouse",
    category: "ahumados",
    priceDisplay: "$530",
    unit: "por persona",
    basePrice: 530,
    badge: "12 Horas de Ahumado",
    badgeType: "featured",
    description: "Auténtico BBQ estilo Texas ahumado lentamente con leña seleccionada durante 12 horas ininterrumpidas.",
    inclusions: [
      {
        title: "Carnes Ahumadas Premium",
        items: ["Brisket ahumado (12 hrs a fuego lento)", "Pulled Pork ahumado (12 hrs)", "Costilla BBQ glaseada"]
      },
      {
        title: "Guarniciones Incluidas",
        items: ["Salsa BBQ de la casa", "Puré de papa cremoso", "Elote amarillo dulce", "Papas a la francesa", "Cuernitos horneados"]
      },
      {
        title: "Postre",
        items: ["Pan de elote artesanal"]
      }
    ]
  },
  {
    id: "e-5",
    num: "5",
    name: "Presupuesto Bufet Hamburguesas, Tortas & Alitas",
    category: "hamburguesas",
    priceDisplay: "$190",
    unit: "por persona",
    basePrice: 190,
    badge: "Buffet Todo Incluido",
    badgeType: "budget",
    description: "Variedad insuperable para que tus invitados disfruten a su gusto: hamburguesas al carbón, tortas norteñas y alitas en salsas.",
    inclusions: [
      {
        title: "Platillos Principales",
        items: [
          "Tortas de Arrachera con vegetales frescos",
          "Tortas de Discada Norteña",
          "Hamburguesas al carbón (vegetales, piña asada, queso, aderezos)",
          "Alitas en 3 salsas (BBQ, Búfalo y Mango Habanero)"
        ]
      },
      {
        title: "Acompañantes",
        items: ["Papa asada al carbón", "Salsa de molcajete", "Salchichón", "Chistorra dorada", "Cebolla caramelizada"]
      }
    ]
  },
  {
    id: "e-6",
    num: "6",
    name: "Parrillada Mexicana Tradicional",
    category: "cortes",
    priceDisplay: "$390",
    unit: "por persona",
    basePrice: 390,
    badge: "Clásico Mexicano",
    badgeType: "featured",
    description: "Tres de los mejores cortes asados a las brasas de carbón acompañados del auténtico sabor norteño y queso fundido.",
    inclusions: [
      {
        title: "Entrada & Postre",
        items: ["Entrada: Empanada argentina dorada", "Postre de la casa"]
      },
      {
        title: "Cortes al Carbón",
        items: ["Arrachera de res marinada", "Aguja Norteña", "T-Bone a la parrilla"]
      },
      {
        title: "Acompañantes",
        items: ["Salchichón parrillero", "Chorizo normal al grill", "Cebollitas asadas", "Salsa de molcajete", "Queso fundido", "Guacamole fresco", "Vegetales asados al grill"]
      }
    ]
  },
  {
    id: "e-7",
    num: "7",
    name: "Cotización Rib Eye Steakhouse",
    category: "cortes",
    priceDisplay: "$380",
    unit: "por persona",
    basePrice: 380,
    badge: "Corte Selecto",
    badgeType: "chef",
    description: "Un servicio distinguido con jugoso corte de Rib Eye servido individualmente con tortillas artesanales de masa azul y verde.",
    inclusions: [
      {
        title: "Entrada",
        items: ["Ensalada fresca con mix de nueces selectas", "Sope especial de res con salsa molcajete"]
      },
      {
        title: "Plato Fuerte",
        items: ["Corte de Rib Eye individual a las brasas", "Elote amarillo a la mantequilla", "Papa asada rellena"]
      },
      {
        title: "Acompañantes & Postre",
        items: ["Guacamole recién hecho", "Vegetales asados", "Salsa molcajeteada y salsa piña habanero", "Tortillas artesanales de maíz azul y verde", "Postre incluido"]
      }
    ]
  },
  {
    id: "e-8",
    num: "8",
    name: "Espadas Brasileñas al Carbón",
    category: "cortes",
    priceDisplay: "$410",
    unit: "por persona",
    basePrice: 410,
    badge: "Estilo Rodizio",
    badgeType: "featured",
    description: "Desfile continuo de espadas con 9 especialidades asadas a fuego vivo directamente en tu evento.",
    inclusions: [
      {
        title: "Entrada",
        items: ["Empanadas Argentinas con ensalada fresca de frutos rojos"]
      },
      {
        title: "Espadas Continuas (9 Especialidades)",
        items: [
          "Picaña de res a la espada",
          "Chistorra asada",
          "Chorizo parrillero",
          "Pollo bañado en BBQ",
          "Piña asada con canela y azúcar",
          "Pan de ajo artesanal",
          "Banderilla parrillera",
          "Lomo a la mostaza",
          "Alitas doradas"
        ]
      }
    ]
  },
  {
    id: "e-9",
    num: "9",
    name: "Barra de Mariscos Frescos",
    category: "mariscos",
    priceDisplay: "$240",
    unit: "por persona",
    basePrice: 240,
    badge: "Fresco del Mar",
    badgeType: "budget",
    description: "Una estación fresca y botanera perfecta para eventos de tarde o maridajes especiales.",
    inclusions: [
      {
        title: "Especialidades de Mariscos",
        items: ["Aguachile Verde botanero", "Aguachile Negro especial", "Ceviche con mayonesa", "Ceviche Natural de pescado"]
      },
      {
        title: "Complementos & Servicio",
        items: ["Tostadas de maíz crujientes", "Galletas saladas", "Limones frescos y salsas botaneras", "Platos y servilletas incluidas"]
      }
    ]
  },
  {
    id: "e-10",
    num: "10",
    name: "Presupuesto Taquiza Tradicional",
    category: "taquizas",
    priceDisplay: "$120",
    unit: "por persona",
    basePrice: 120,
    badge: "Taquiza Popular",
    badgeType: "budget",
    description: "El inigualable sabor de los tacos de trompo y comal servidos calientitos en tu fiesta, con todos los complementos.",
    inclusions: [
      {
        title: "5 Variedades de Tacos",
        items: ["Tacos de Bistec", "Tacos de Pastor adobado", "Tacos de Chorizo", "Tacos de Tripitas doradas", "Tacos Combinados"]
      },
      {
        title: "Salsas & Guarniciones Incluidas",
        items: [
          "Salsa verde molcajeteada",
          "Salsa roja molcajeteada",
          "Cebolla caramelizada al carbón",
          "Chiles güeros asados",
          "Salsa piña con habanero",
          "Nopales asados",
          "Cebolla picada, cilantro y limones"
        ]
      },
      {
        title: "Servicio",
        items: ["Desechables de calidad y servilletas incluidas"]
      }
    ]
  },
  {
    id: "e-11",
    num: "11",
    name: "Presupuesto Taquiza con Quesadillas",
    category: "taquizas",
    priceDisplay: "$140",
    unit: "por persona",
    basePrice: 140,
    badge: "Taquiza con Quesadillas",
    badgeType: "featured",
    description: "Nuestra taquiza más completa con tacos variados más ricas quesadillas de queso derretido en comal.",
    inclusions: [
      {
        title: "Variedades de Tacos y Quesadillas",
        items: [
          "Tacos de Bistec",
          "Tacos de Pastor adobado",
          "Tacos de Chorizo",
          "Tacos de Salchichón",
          "Tacos Combinados",
          "Quesadillas calientitas al comal con queso fundido"
        ]
      },
      {
        title: "Salsas & Guarniciones",
        items: [
          "Salsa verde molcajeteada",
          "Salsa roja molcajeteada",
          "Cebolla caramelizada al carbón",
          "Chiles güeros asados",
          "Salsa piña habanero",
          "Nopales asados",
          "Limones, cilantro y cebolla picada"
        ]
      },
      {
        title: "Servicio",
        items: ["Desechables y servilletas incluidas"]
      }
    ]
  },
  {
    id: "e-12",
    num: "12",
    name: "Banquete de Lechón Completo",
    category: "cortes",
    priceDisplay: "$5,000",
    unit: "pieza completa (aprox.)",
    basePrice: 5000,
    isFixedPrice: true,
    badge: "Especialidad al Fuego",
    badgeType: "chef",
    description: "Lechón entero asado lentamente a las brasas y leña, con piel crujiente dorada y carne suave y jugosa. Rinde aproximadamente de 10 a 15 personas.",
    inclusions: [
      {
        title: "Banquete de Lechón Completo Incluye",
        items: [
          "Lechón completo asado al fuego lento",
          "Ensalada fresca de la casa",
          "Guacamole recién preparado",
          "Salsas artesanales (salsa molcajeteada y salsa de la casa)",
          "Tortillas calientes",
          "Acompañantes parrilleros"
        ]
      }
    ]
  },
  {
    id: "e-13",
    num: "13",
    name: "Banquete de Cabrito Entero",
    category: "cortes",
    priceDisplay: "$5,000",
    unit: "pieza completa (aprox.)",
    basePrice: 5000,
    isFixedPrice: true,
    badge: "Tradición Norteña",
    badgeType: "chef",
    description: "Auténtico Cabrito entero asado al estilo tradicional sobre brasas de carbón y mezquite, tierno y sazonado a la perfección. Rinde aproximadamente de 10 a 15 personas.",
    inclusions: [
      {
        title: "Banquete de Cabrito Entero Incluye",
        items: [
          "Cabrito completo asado al carbón y leña",
          "Ensalada fresca de la casa",
          "Guacamole recién preparado",
          "Salsas artesanales (salsa molcajeteada y salsa de la casa)",
          "Tortillas calientes",
          "Acompañantes parrilleros"
        ]
      }
    ]
  },
  {
    id: "e-14",
    num: "14",
    name: "Menú para Eventos 100% Personalizado",
    category: "personalizado",
    priceDisplay: "A tu medida",
    unit: "cotización libre",
    basePrice: 0,
    isCustom: true,
    badge: "A Tu Medida",
    badgeType: "featured",
    description: "¿Tienes requerimientos especiales o una idea específica para tu evento? Diseñamos la propuesta exacta combinando cortes, entradas, guarniciones y servicio a la medida.",
    inclusions: [
      {
        title: "Arma tu Evento a la Medida",
        items: [
          "Cortes selectos (Rib Eye, Picaña, T-Bone, New York, Arrachera marinada)",
          "Ahumados estilo Texas, espadas brasileñas, lechón o cabrito al gusto",
          "Estaciones botaneras de mariscos, hamburguesas o taquizas",
          "Entradas gourmet, mix de ensaladas, postres y complementos",
          "Servicio de parrilleros profesionales y equipo completo",
          "Cotización y asesoría directa por WhatsApp"
        ]
      }
    ]
  }
];

// App State
let currentTab = 'venta'; // 'venta' | 'eventos' | 'cotizador' | 'qr'
let activeFilter = 'all';
let searchQuery = '';

// Main App Initialization with safety checks
function initApp() {
  try {
    initTabs();
  } catch (err) {
    console.error("Error initTabs:", err);
  }

  try {
    renderVentaMenu();
  } catch (err) {
    console.error("Error renderVentaMenu:", err);
  }

  try {
    renderEventosMenu();
  } catch (err) {
    console.error("Error renderEventosMenu:", err);
  }

  try {
    populateCalculatorOptions();
    initCalculator();
  } catch (err) {
    console.error("Error initCalculator:", err);
  }

  try {
    initSearchAndFilters();
  } catch (err) {
    console.error("Error initSearchAndFilters:", err);
  }

  try {
    initModals();
  } catch (err) {
    console.error("Error initModals:", err);
  }

  try {
    initQRGenerator();
  } catch (err) {
    console.error("Error initQRGenerator:", err);
  }
}

// Run immediately if DOM already parsed, or wait for event
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* ==========================================================================
   TABS NAVIGATION
   ========================================================================== */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      if (targetTab) switchTab(targetTab);
    });
  });

  const mobBtns = document.querySelectorAll('.mob-action-btn[data-tab]');
  mobBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-tab');
      if (targetTab) {
        switchTab(targetTab);
      }
    });
  });
}

function switchTab(tabId) {
  currentTab = tabId;

  // Update nav buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  document.querySelectorAll('.mob-action-btn[data-tab]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Auto scroll active top tab into view horizontally on mobile
  const activeTopBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (activeTopBtn && typeof activeTopBtn.scrollIntoView === 'function') {
    activeTopBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Toggle sections
  const sections = ['venta', 'eventos', 'cotizador', 'qr'];
  sections.forEach(id => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.style.display = (id === tabId) ? 'block' : 'none';
    }
  });

  // Filter box: only show search & category chips for menu catalog tabs ('venta' & 'eventos')
  const filterBox = document.querySelector('.filter-search-box');
  if (filterBox) {
    filterBox.style.display = (tabId === 'venta' || tabId === 'eventos') ? 'block' : 'none';
  }

  // Reset search input placeholder based on tab
  const searchInput = document.getElementById('menu-search');
  if (searchInput) {
    if (tabId === 'eventos') {
      searchInput.placeholder = 'Buscar en los menús de eventos (ej. lechón, cabrito, picaña, taquiza, buffet)...';
    } else {
      searchInput.placeholder = 'Buscar platillo, paquete o antojo (ej. arrachera, alitas, hamburguesa)...';
    }
  }

  // Update filter chips display
  const chipsVenta = document.getElementById('chips-venta');
  const chipsEventos = document.getElementById('chips-eventos');
  if (chipsVenta && chipsEventos) {
    chipsVenta.style.display = tabId === 'venta' ? 'flex' : 'none';
    chipsEventos.style.display = tabId === 'eventos' ? 'flex' : 'none';
  }

  // Smooth scroll directly to the target section so the user never lands at the bottom
  setTimeout(() => {
    const navWrapper = document.querySelector('.sticky-nav-wrapper');
    const navOffset = navWrapper ? navWrapper.offsetHeight : 65;

    if (tabId === 'cotizador') {
      const cotizadorEl = document.getElementById('section-cotizador');
      if (cotizadorEl) {
        const rect = cotizadorEl.getBoundingClientRect();
        const targetY = window.pageYOffset + rect.top - navOffset - 12;
        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      }
    } else if (tabId === 'qr') {
      const qrEl = document.getElementById('section-qr');
      if (qrEl) {
        const rect = qrEl.getBoundingClientRect();
        const targetY = window.pageYOffset + rect.top - navOffset - 12;
        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      }
    } else {
      const navTop = navWrapper ? navWrapper.offsetTop : 300;
      if (window.pageYOffset > navTop) {
        window.scrollTo({
          top: Math.max(0, navTop - 10),
          behavior: 'smooth'
        });
      }
    }
  }, 40);
}
window.switchTab = switchTab;

/* ==========================================================================
   RENDER MENÚ DE VENTA
   ========================================================================== */
function renderVentaMenu() {
  const container = document.getElementById('venta-grid');
  if (!container) return;

  const filtered = MENU_VENTA_DATA.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fa-solid fa-utensils" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem; display: block;"></i>
        <h4 style="color: #fff; margin-bottom: 0.5rem;">No se encontraron platillos</h4>
        <p>Intenta con otra palabra clave como "arrachera", "alitas" o limpia el buscador.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const badgeClass = item.badgeType === 'featured' ? 'badge-featured' : 
                       item.badgeType === 'chef' ? 'badge-chef' : 'badge-budget';
    
    const waText = encodeURIComponent(`¡Hola Todo Asado Los 3 Osos! Me gustaría hacer un pedido para este domingo: ${item.name} ($${item.price} MXN). ¿Tienen disponible para entrega/pedido?`);
    const waLink = `${CONTACT_CONFIG.whatsappBase1}?text=${waText}`;

    return `
      <div class="menu-card" data-category="${item.category}">
        <div>
          <span class="card-badge ${badgeClass}">
            <i class="fa-solid fa-calendar-day"></i> Domingos · ${item.badge}
          </span>
          <div class="card-header-row">
            <h3 class="item-name">${item.name}</h3>
            <div class="item-price">
              $${item.price}
              <small>${item.priceNote}</small>
            </div>
          </div>
          <p class="item-desc">${item.description}</p>
          
          <div class="event-details" style="border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 0.75rem;">
            <div class="detail-label" style="font-size: 0.75rem;">
              <i class="fa-solid fa-circle-check" style="color: var(--accent-blue);"></i> Incluye / Guarniciones
            </div>
            <ul class="detail-list">
              ${item.highlights.map(h => `<li><i class="fa-solid fa-check"></i> ${h}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="card-actions" style="margin-top: 1rem;">
          <a href="${waLink}" target="_blank" rel="noopener" class="btn-order-wa" title="Pedir este platillo por WhatsApp">
            <i class="fa-brands fa-whatsapp" style="font-size: 1.1rem;"></i> Pedir por WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   RENDER MENÚ DE EVENTOS (11 MENÚS)
   ========================================================================== */
function renderEventosMenu() {
  const container = document.getElementById('eventos-grid');
  if (!container) return;

  const filtered = MENU_EVENTOS_DATA.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.inclusions?.some(inc => inc.items.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fa-solid fa-calendar-days" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem; display: block;"></i>
        <h4 style="color: #fff; margin-bottom: 0.5rem;">No se encontraron menús de eventos</h4>
        <p>Prueba buscando "picaña", "taquiza", "hamburguesa" o selecciona otra categoría.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const badgeClass = item.badgeType === 'featured' ? 'badge-featured' : 
                       item.badgeType === 'chef' ? 'badge-chef' : 'badge-budget';
    
    const waText = encodeURIComponent(`¡Hola Todo Asado Los 3 Osos! Me interesa cotizar el Menú para Eventos: "${item.name}" (${item.priceDisplay} ${item.unit}). Me gustaría recibir información de disponibilidad para mi evento.`);
    const waLink = `${CONTACT_CONFIG.whatsappBase1}?text=${waText}`;

    // Variants HTML if any
    let variantsHtml = '';
    if (item.variants && item.variants.length > 0) {
      variantsHtml = `
        <div class="variants-table">
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent-blue); font-weight: 700; margin-bottom: 0.25rem;">
            <i class="fa-solid fa-layer-group"></i> Opciones de presupuesto:
          </div>
          ${item.variants.map(v => `
            <div class="variant-row">
              <span class="variant-name">${v.name}</span>
              <span class="variant-price">$${v.price} <small style="font-size: 0.7rem; color: #94a3b8;">c/u</small></span>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Inclusions HTML
    let inclusionsHtml = '';
    if (item.inclusions && item.inclusions.length > 0) {
      inclusionsHtml = `
        <div class="event-details">
          ${item.inclusions.map(sec => `
            <div class="detail-block">
              <div class="detail-label">
                <i class="fa-solid fa-fire" style="color: var(--primary);"></i> ${sec.title}
              </div>
              <ul class="detail-list">
                ${sec.items.map(it => `<li><i class="fa-solid fa-check"></i> ${it}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `;
    }

    return `
      <div class="menu-card" data-category="${item.category}">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
            <span class="card-badge ${badgeClass}">
              <i class="fa-solid fa-utensils"></i> Menú #${item.num} · ${item.badge}
            </span>
            ${(() => {
              const minG = getMinGuestsForMenu(item);
              if (minG === 30) return `<span class="card-badge" style="background: rgba(255, 145, 51, 0.15); border-color: rgba(255, 145, 51, 0.5); color: #ff9133;"><i class="fa-solid fa-users"></i> Mínimo 30 pers.</span>`;
              if (minG === 20) return `<span class="card-badge" style="background: rgba(56, 189, 248, 0.15); border-color: rgba(56, 189, 248, 0.5); color: var(--accent-blue);"><i class="fa-solid fa-users"></i> Mínimo 20 pers.</span>`;
              return `<span class="card-badge" style="background: rgba(74, 222, 128, 0.15); border-color: rgba(74, 222, 128, 0.5); color: #4ade80;"><i class="fa-solid fa-check"></i> Cantidad libre</span>`;
            })()}
          </div>
          
          <div class="card-header-row">
            <h3 class="item-name">${item.name}</h3>
            <div class="item-price">
              ${item.priceDisplay}
              <small>${item.unit}</small>
            </div>
          </div>

          <p class="item-desc">${item.description}</p>
          ${variantsHtml}
          ${inclusionsHtml}
        </div>

        <div class="card-actions" style="margin-top: 1.25rem;">
          <a href="${waLink}" target="_blank" rel="noopener" class="btn-order-wa" title="Cotizar este menú por WhatsApp">
            <i class="fa-brands fa-whatsapp" style="font-size: 1.1rem;"></i> Cotizar Menú #${item.num}
          </a>
          <button type="button" class="btn-calc-quote" onclick="selectInCalculator('${item.id}')" title="Calcular para mis invitados">
            <i class="fa-solid fa-calculator"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* Helper: Get minimum guests requirement per menu */
function getMinGuestsForMenu(menuObj) {
  if (!menuObj) return 1;
  const num = parseInt(menuObj.num, 10);
  // Menus 1, 2, 5, 10, 11 -> Mínimo 30 personas
  if ([1, 2, 5, 10, 11].includes(num)) {
    return 30;
  }
  // Menus 3, 4, 6, 7, 8, 9 -> Mínimo 20 personas
  if ([3, 4, 6, 7, 8, 9].includes(num)) {
    return 20;
  }
  // Restantes (12, 13, 14) -> Libre
  return 1;
}

/* ==========================================================================
   INTERACTIVE EVENT QUOTE CALCULATOR
   ========================================================================== */
function populateCalculatorOptions() {
  const select = document.getElementById('calc-menu-select');
  if (!select) return;

  select.innerHTML = MENU_EVENTOS_DATA.map(item => {
    const minG = getMinGuestsForMenu(item);
    const minBadge = minG > 1 ? ` · Mínimo ${minG} pers.` : ` · Cantidad libre`;
    return `<option value="${item.id}">${item.num}. ${item.name} (${item.priceDisplay} ${item.unit}${minBadge})</option>`;
  }).join('');
}

function initCalculator() {
  const select = document.getElementById('calc-menu-select');
  const guestsInput = document.getElementById('calc-guests');
  const minHint = document.getElementById('calc-min-hint');
  const variantWrapper = document.getElementById('calc-variant-wrapper');
  const variantSelect = document.getElementById('calc-variant-select');
  const phoneSelect = document.getElementById('calc-phone-select');
  const resultDisplay = document.getElementById('calc-total-display');
  const sendWaBtn = document.getElementById('btn-send-calc-wa');

  if (!select || !guestsInput) return;

  function updateCalculator() {
    const selectedId = select.value;
    const menuObj = MENU_EVENTOS_DATA.find(m => m.id === selectedId);
    if (!menuObj) return;

    const minGuests = getMinGuestsForMenu(menuObj);
    guestsInput.min = String(minGuests);

    // Update helper text badge
    if (minHint) {
      if (minGuests === 30) {
        minHint.innerHTML = `<span style="color: #ff9133; font-weight: 700;"><i class="fa-solid fa-triangle-exclamation"></i> Mínimo requerido: 30 personas</span> para este paquete de hamburguesas, buffet o taquiza.`;
      } else if (minGuests === 20) {
        minHint.innerHTML = `<span style="color: var(--accent-blue); font-weight: 700;"><i class="fa-solid fa-users"></i> Mínimo requerido: 20 personas</span> para servicio de banquete completo.`;
      } else {
        minHint.innerHTML = `<span style="color: #4ade80; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Cantidad libre</span> (sin mínimo forzado de invitados).`;
      }
    }

    let enteredGuests = parseInt(guestsInput.value, 10);
    if (isNaN(enteredGuests) || enteredGuests < 1) {
      enteredGuests = minGuests;
    }

    // Enforce minimum limit strictly for calculations and quotes
    const guests = Math.max(minGuests, enteredGuests);

    let pricePerUnit = menuObj.basePrice;

    // Handle variant selection if available
    if (menuObj.variants && menuObj.variants.length > 0) {
      if (variantWrapper) variantWrapper.style.display = 'block';
      if (variantSelect) {
        if (variantSelect.getAttribute('data-menu-id') !== selectedId) {
          variantSelect.setAttribute('data-menu-id', selectedId);
          variantSelect.innerHTML = menuObj.variants.map((v) => `
            <option value="${v.price}">${v.name} ($${v.price})</option>
          `).join('');
        }
        pricePerUnit = parseFloat(variantSelect.value) || menuObj.basePrice;
      }
    } else {
      if (variantWrapper) variantWrapper.style.display = 'none';
    }

    let total = 0;
    let costSummaryText = '';

    if (menuObj.isCustom) {
      if (resultDisplay) {
        resultDisplay.innerHTML = `A Tu Medida <small>Cotización directa</small>`;
      }
      costSummaryText = `💵 Presupuesto: A la medida`;
    } else if (menuObj.isFixedPrice) {
      const piezas = Math.max(1, Math.ceil(guests / 15));
      total = menuObj.basePrice * piezas;
      if (resultDisplay) {
        resultDisplay.innerHTML = `$${total.toLocaleString('es-MX')} <small>MXN (${piezas} ${piezas > 1 ? 'piezas' : 'pieza'})</small>`;
      }
      costSummaryText = `💵 Costo Estimado: $${total.toLocaleString('es-MX')} MXN ($${menuObj.basePrice.toLocaleString('es-MX')} por pieza completa - rinde aprox 10 a 15 personas: ${piezas} ${piezas > 1 ? 'piezas' : 'pieza'})`;
    } else {
      total = pricePerUnit * guests;
      if (resultDisplay) {
        resultDisplay.innerHTML = `$${total.toLocaleString('es-MX')} <small>MXN</small>`;
      }
      costSummaryText = `💵 Costo Estimado: $${total.toLocaleString('es-MX')} MXN ($${pricePerUnit} por persona)`;
    }

    // Build WhatsApp message
    const targetWaBase = (phoneSelect && phoneSelect.value === '2') ? CONTACT_CONFIG.whatsappBase2 : CONTACT_CONFIG.whatsappBase1;

    let variantText = '';
    if (menuObj.variants && variantSelect) {
      const selectedOptionText = variantSelect.options[variantSelect.selectedIndex]?.text || '';
      variantText = `\n- Modalidad: ${selectedOptionText}`;
    }

    const minGuestsBadge = minGuests > 1 ? ` (Mínimo: ${minGuests} pers.)` : ` (Cantidad libre)`;

    let message = '';
    if (menuObj.isCustom) {
      message = `¡Hola Todo Asado Los 3 Osos! Me interesa cotizar un Menú para Eventos 100% Personalizado:\n\n` +
        `👥 Invitados aproximados: ${guests} personas\n` +
        `🔥 Me gustaría recibir opciones y armar una propuesta a mi medida con cortes y parrilladas.\n\n` +
        `¿Tienen disponibilidad de fecha? ¡Gracias!`;
    } else {
      message = `¡Hola Todo Asado Los 3 Osos! Me interesa cotizar un evento con los siguientes detalles:\n\n` +
        `🔥 Menú #${menuObj.num}: ${menuObj.name}\n` +
        `👥 Personas / Invitados: ${guests} personas${minGuestsBadge}\n` +
        `${costSummaryText}` +
        `${variantText}\n\n` +
        `¿Tienen disponibilidad de fecha y qué incluye el servicio de parrilleros? ¡Gracias!`;
    }

    if (sendWaBtn) {
      sendWaBtn.href = `${targetWaBase}?text=${encodeURIComponent(message)}`;
    }
  }

  // Auto-clamp when changing menu to higher minimum
  select.addEventListener('change', () => {
    if (variantSelect) variantSelect.removeAttribute('data-menu-id');
    const selectedId = select.value;
    const menuObj = MENU_EVENTOS_DATA.find(m => m.id === selectedId);
    const minGuests = getMinGuestsForMenu(menuObj);
    guestsInput.min = String(minGuests);
    const currentVal = parseInt(guestsInput.value, 10) || 0;
    if (currentVal < minGuests) {
      guestsInput.value = minGuests;
    }
    updateCalculator();
  });

  // Clamp on change or blur so user cannot submit or leave less than minimum
  guestsInput.addEventListener('change', () => {
    const selectedId = select.value;
    const menuObj = MENU_EVENTOS_DATA.find(m => m.id === selectedId);
    const minGuests = getMinGuestsForMenu(menuObj);
    const currentVal = parseInt(guestsInput.value, 10);
    if (isNaN(currentVal) || currentVal < minGuests) {
      guestsInput.value = minGuests;
      showToast(`El Menú #${menuObj.num} requiere un mínimo de ${minGuests} personas.`);
    }
    updateCalculator();
  });

  guestsInput.addEventListener('blur', () => {
    const selectedId = select.value;
    const menuObj = MENU_EVENTOS_DATA.find(m => m.id === selectedId);
    const minGuests = getMinGuestsForMenu(menuObj);
    const currentVal = parseInt(guestsInput.value, 10);
    if (isNaN(currentVal) || currentVal < minGuests) {
      guestsInput.value = minGuests;
    }
    updateCalculator();
  });

  guestsInput.addEventListener('input', updateCalculator);
  if (variantSelect) variantSelect.addEventListener('change', updateCalculator);
  if (phoneSelect) phoneSelect.addEventListener('change', updateCalculator);

  updateCalculator();
}

window.selectInCalculator = function(menuId) {
  switchTab('cotizador');
  const select = document.getElementById('calc-menu-select');
  if (select) {
    select.value = menuId;
    const variantSelect = document.getElementById('calc-variant-select');
    if (variantSelect) variantSelect.removeAttribute('data-menu-id');
    select.dispatchEvent(new Event('change'));
  }
};

/* ==========================================================================
   SEARCH & FILTERS
   ========================================================================== */
function initSearchAndFilters() {
  const searchInput = document.getElementById('menu-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (currentTab === 'venta') {
        renderVentaMenu();
      } else if (currentTab === 'eventos') {
        renderEventosMenu();
      }
    });
  }

  // Filter Chips for Venta
  const ventaChips = document.querySelectorAll('#chips-venta .chip-btn');
  ventaChips.forEach(chip => {
    chip.addEventListener('click', () => {
      ventaChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter') || 'all';
      renderVentaMenu();
    });
  });

  // Filter Chips for Eventos
  const eventosChips = document.querySelectorAll('#chips-eventos .chip-btn');
  eventosChips.forEach(chip => {
    chip.addEventListener('click', () => {
      eventosChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter') || 'all';
      renderEventosMenu();
    });
  });
}

/* ==========================================================================
   QR CODE GENERATOR & SHARING
   ========================================================================== */
function initQRGenerator() {
  let targetUrl = "https://campos0.github.io/Los3Osos/";
  if (typeof window !== 'undefined' && window.location.href && !window.location.href.startsWith('file://')) {
    targetUrl = window.location.href;
  }

  const qrUrlInputs = document.querySelectorAll('.qr-url-input');
  qrUrlInputs.forEach(input => {
    input.value = targetUrl;
    input.addEventListener('change', () => {
      generateQRCodes(input.value.trim());
    });
  });

  generateQRCodes(targetUrl);

  document.querySelectorAll('.btn-download-qr').forEach(btn => {
    btn.addEventListener('click', downloadQRCode);
  });

  document.querySelectorAll('.btn-copy-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.querySelector('.qr-url-input');
      const textToCopy = input ? input.value : targetUrl;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("¡Enlace copiado al portapapeles!");
      });
    });
  });
}

function generateQRCodes(url) {
  if (!url) return;

  const targets = [
    { el: document.getElementById('modal-qr-canvas'), size: 220 },
    { el: document.getElementById('page-qr-canvas'), size: 240 }
  ];

  targets.forEach(({ el, size }) => {
    if (!el) return;
    el.innerHTML = '';

    // If QRCode.js library is loaded
    if (typeof QRCode !== 'undefined') {
      try {
        new QRCode(el, {
          text: url,
          width: size,
          height: size,
          colorDark: "#111111",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        return;
      } catch (e) {
        console.warn("QRCode.js threw, using fallback:", e);
      }
    }

    // Bulletproof Fallback Image via QR Server API
    const encoded = encodeURIComponent(url);
    const img = document.createElement('img');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encoded}`;
    img.alt = "Código QR Los 3 Osos";
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.display = "block";
    img.crossOrigin = "anonymous";
    el.appendChild(img);
  });
}

function downloadQRCode() {
  const container = document.getElementById('modal-qr-canvas') || document.getElementById('page-qr-canvas');
  if (!container) return;

  const img = container.querySelector('img');
  const canvas = container.querySelector('canvas');
  let dataUrl = '';

  if (canvas) {
    try {
      dataUrl = canvas.toDataURL("image/png");
    } catch (e) {
      console.warn("Canvas export restricted:", e);
    }
  }

  if (!dataUrl && img && img.src) {
    dataUrl = img.src;
  }

  if (dataUrl) {
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'QR-Menu-Los-3-Osos.png';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("¡Código QR descargado con éxito!");
  } else {
    showToast("Generando QR... espera un momento.");
  }
}

/* ==========================================================================
   MODALS
   ========================================================================== */
function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

function openQrModal() {
  const m = document.getElementById('qr-modal');
  if (m) m.classList.add('active');
}
window.openQrModal = openQrModal;

function openImgModal() {
  const m = document.getElementById('img-modal');
  if (m) m.classList.add('active');
}
window.openImgModal = openImgModal;

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}
window.closeAllModals = closeAllModals;

/* Toast */
function showToast(message) {
  let toast = document.getElementById('custom-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      background: #111;
      border: 1px solid var(--primary);
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 600;
      z-index: 2000;
      box-shadow: 0 4px 20px rgba(0,0,0,0.5), 0 0 15px rgba(194,89,0,0.4);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #4ade80;"></i> ${message}`;
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2800);
}
