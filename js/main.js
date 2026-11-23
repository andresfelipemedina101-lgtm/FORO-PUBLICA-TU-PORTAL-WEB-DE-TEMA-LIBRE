/* =========================================================
   AutomatIA - Interactividad con JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Datos ---------- */
  const procesos = [
    {
      icono: "bi-headset",
      titulo: "Atención al cliente",
      resumen: "Chatbots y asistentes que responden consultas 24/7 y escalan casos complejos.",
      beneficio: "Hasta 60 % menos tiempo de respuesta",
      pasos: [
        "El cliente escribe por WhatsApp, web o correo.",
        "La IA identifica la intención (reclamo, consulta, compra).",
        "Busca la respuesta en la base de conocimiento.",
        "Responde de forma personalizada o transfiere a un agente humano.",
        "Registra la conversación en el CRM automáticamente."
      ]
    },
    {
      icono: "bi-cash-coin",
      titulo: "Finanzas y contabilidad",
      resumen: "Lectura automática de facturas, conciliaciones bancarias y detección de fraudes.",
      beneficio: "Reducción de errores de digitación",
      pasos: [
        "Llega una factura en PDF al correo.",
        "La IA extrae proveedor, NIT, valores e impuestos (OCR + IA).",
        "Valida los datos contra la orden de compra.",
        "Registra el asiento contable en el sistema.",
        "Alerta si detecta montos atípicos o posibles fraudes."
      ]
    },
    {
      icono: "bi-people",
      titulo: "Recursos humanos",
      resumen: "Filtrado de hojas de vida, agendamiento de entrevistas y onboarding automatizado.",
      beneficio: "Procesos de selección más ágiles",
      pasos: [
        "Se reciben cientos de hojas de vida para una vacante.",
        "La IA compara perfiles con los requisitos del cargo.",
        "Genera una lista corta con justificación.",
        "Agenda entrevistas según la disponibilidad del equipo.",
        "Envía material de bienvenida al candidato contratado."
      ]
    },
    {
      icono: "bi-megaphone",
      titulo: "Marketing y ventas",
      resumen: "Generación de contenido, segmentación de clientes y recomendaciones personalizadas.",
      beneficio: "Campañas más relevantes y rápidas",
      pasos: [
        "La IA analiza el historial de compras de los clientes.",
        "Crea segmentos según intereses y comportamiento.",
        "Genera textos e imágenes para cada segmento.",
        "Programa publicaciones y correos en el mejor horario.",
        "Mide resultados y ajusta la siguiente campaña."
      ]
    },
    {
      icono: "bi-truck",
      titulo: "Logística e inventario",
      resumen: "Predicción de demanda, optimización de rutas y control de inventario inteligente.",
      beneficio: "Menos quiebres de stock",
      pasos: [
        "Se recopilan datos de ventas, clima y temporada.",
        "La IA predice la demanda de cada producto.",
        "Genera órdenes de compra automáticas al proveedor.",
        "Calcula las rutas de entrega más eficientes.",
        "Notifica al cliente el estado de su pedido en tiempo real."
      ]
    },
    {
      icono: "bi-heart-pulse",
      titulo: "Salud",
      resumen: "Apoyo al diagnóstico por imágenes, triaje de pacientes y gestión de citas.",
      beneficio: "Atención más oportuna",
      pasos: [
        "El paciente describe sus síntomas en un asistente virtual.",
        "La IA sugiere un nivel de prioridad (triaje).",
        "Agenda la cita con el especialista adecuado.",
        "Apoya al médico analizando imágenes diagnósticas.",
        "El profesional de salud valida y toma la decisión final."
      ]
    }
  ];

  const herramientas = [
    { nombre: "Zapier", categoria: "nocode", icono: "bi-lightning-charge", desc: "Conecta miles de aplicaciones con flujos automáticos sin programar." },
    { nombre: "Make", categoria: "nocode", icono: "bi-bezier2", desc: "Constructor visual de escenarios de automatización complejos." },
    { nombre: "n8n", categoria: "nocode", icono: "bi-diagram-2", desc: "Plataforma de automatización de código abierto y auto-hospedable." },
    { nombre: "Claude", categoria: "llm", icono: "bi-chat-square-text", desc: "Modelo de lenguaje de Anthropic para redactar, analizar y crear agentes." },
    { nombre: "ChatGPT", categoria: "llm", icono: "bi-chat-dots", desc: "Asistente conversacional de OpenAI para múltiples tareas." },
    { nombre: "Gemini", categoria: "llm", icono: "bi-stars", desc: "Modelo multimodal de Google integrado a Workspace." },
    { nombre: "UiPath", categoria: "rpa", icono: "bi-robot", desc: "Plataforma líder de RPA con capacidades de IA para empresas." },
    { nombre: "Power Automate", categoria: "rpa", icono: "bi-microsoft", desc: "Automatización de Microsoft integrada con Office 365." }
  ];

  const preguntas = [
    {
      pregunta: "¿Cuál es la principal diferencia entre RPA y la automatización con IA?",
      opciones: ["RPA es más costosa", "La IA puede manejar datos no estructurados", "RPA funciona solo de noche", "No hay diferencia"],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es el primer paso para implementar IA en un proceso?",
      opciones: ["Comprar la herramienta más cara", "Despedir personal", "Identificar el proceso adecuado", "Escalar a toda la empresa"],
      correcta: 2
    },
    {
      pregunta: "¿Qué significa 'no-code'?",
      opciones: ["Software sin licencia", "Crear automatizaciones sin escribir código", "Programas sin errores", "IA que no usa datos"],
      correcta: 1
    },
    {
      pregunta: "¿Por qué se recomienda supervisión humana en decisiones importantes?",
      opciones: ["Porque la IA puede cometer errores o tener sesgos", "Porque es obligatorio por ley en todos los países", "Para que la IA trabaje más lento", "No se recomienda"],
      correcta: 0
    },
    {
      pregunta: "¿Qué proceso es un buen candidato para automatizar primero?",
      opciones: ["Uno poco frecuente y muy creativo", "Uno repetitivo, de alto volumen y con reglas claras", "La estrategia general de la empresa", "Ninguno"],
      correcta: 1
    }
  ];

  /* ---------- Año del footer ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Navbar al hacer scroll + botón volver arriba ---------- */
  const nav = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
    backToTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  // Cerrar el menú móvil al hacer clic en un enlace
  const navMenu = document.getElementById("navMenu");
  document.querySelectorAll("#navMenu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  // Resaltar en el menú la sección visible
  const navLinks = [...document.querySelectorAll("#navMenu .nav-link")];
  const seccionesNav = navLinks.map(l => document.querySelector(l.getAttribute("href")));
  const marcarActivo = () => {
    let idx = 0;
    seccionesNav.forEach((sec, i) => { if (sec && sec.getBoundingClientRect().top <= 120) idx = i; });
    navLinks.forEach((l, i) => l.classList.toggle("active", i === idx));
  };
  window.addEventListener("scroll", marcarActivo);
  marcarActivo();

  /* ---------- Tema claro / oscuro ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const setTheme = (tema) => {
    document.documentElement.setAttribute("data-bs-theme", tema);
    themeToggle.innerHTML = tema === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
    try { localStorage.setItem("tema", tema); } catch (e) { /* almacenamiento no disponible */ }
  };
  let temaGuardado = null;
  try { temaGuardado = localStorage.getItem("tema"); } catch (e) { /* ignorar */ }
  setTheme(temaGuardado || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  themeToggle.addEventListener("click", () => {
    const actual = document.documentElement.getAttribute("data-bs-theme");
    setTheme(actual === "dark" ? "light" : "dark");
  });

  /* ---------- Efecto de texto escrito (typing) ---------- */
  const palabras = ["IA", "chatbots", "agentes", "machine learning"];
  const typed = document.getElementById("typed");
  let palabraIdx = 0, letraIdx = palabras[0].length, borrando = true;
  const escribir = () => {
    const palabra = palabras[palabraIdx];
    typed.textContent = palabra.substring(0, letraIdx);
    if (borrando) {
      letraIdx--;
      if (letraIdx < 0) { borrando = false; palabraIdx = (palabraIdx + 1) % palabras.length; letraIdx = 0; }
    } else {
      letraIdx++;
      if (letraIdx > palabras[palabraIdx].length) { borrando = true; setTimeout(escribir, 1500); return; }
    }
    setTimeout(escribir, borrando ? 60 : 120);
  };
  setTimeout(escribir, 2000);

  /* ---------- Contadores animados ---------- */
  const animarContador = (el) => {
    const objetivo = +el.dataset.target;
    const duracion = 1500;
    const inicio = performance.now();
    const paso = (ahora) => {
      const progreso = Math.min((ahora - inicio) / duracion, 1);
      el.textContent = Math.floor(progreso * objetivo);
      if (progreso < 1) requestAnimationFrame(paso);
      else el.textContent = objetivo;
    };
    requestAnimationFrame(paso);
  };

  /* ---------- Animación al aparecer (IntersectionObserver) ---------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains("counter")) animarContador(entry.target);
      else entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  /* ---------- Tarjetas de procesos + modal ---------- */
  const processGrid = document.getElementById("processGrid");
  processGrid.innerHTML = procesos.map((p, i) => `
    <div class="col-md-6 col-lg-4 reveal">
      <div class="card h-100 border-0 shadow-sm process-card" data-index="${i}" tabindex="0" role="button" aria-label="Ver flujo de ${p.titulo}">
        <div class="card-body p-4">
          <div class="icon-box mb-3"><i class="bi ${p.icono}"></i></div>
          <h5 class="card-title">${p.titulo}</h5>
          <p class="card-text text-body-secondary">${p.resumen}</p>
          <span class="badge rounded-pill"><i class="bi bi-graph-up-arrow"></i> ${p.beneficio}</span>
        </div>
        <div class="card-footer bg-transparent border-0 px-4 pb-4 pt-0">
          <small class="fw-semibold text-gradient">Ver flujo automatizado <i class="bi bi-arrow-right"></i></small>
        </div>
      </div>
    </div>
  `).join("");

  const modal = new bootstrap.Modal(document.getElementById("processModal"));
  const abrirProceso = (i) => {
    const p = procesos[i];
    document.getElementById("processModalLabel").innerHTML = `<i class="bi ${p.icono} text-gradient"></i> ${p.titulo}`;
    document.getElementById("processModalBody").innerHTML = `
      <p class="text-body-secondary">${p.resumen}</p>
      <h6 class="fw-semibold mt-3 mb-3">Ejemplo de flujo automatizado:</h6>
      <ol class="modal-steps">${p.pasos.map(s => `<li>${s}</li>`).join("")}</ol>
      <div class="alert alert-info mb-0"><i class="bi bi-graph-up-arrow"></i> <strong>Beneficio:</strong> ${p.beneficio}</div>
    `;
    modal.show();
  };
  processGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".process-card");
    if (card) abrirProceso(card.dataset.index);
  });
  processGrid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".process-card");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); abrirProceso(card.dataset.index); }
  });

  /* ---------- Calculadora de ahorro ---------- */
  const calc = {
    tareas: document.getElementById("calcTareas"),
    minutos: document.getElementById("calcMinutos"),
    costo: document.getElementById("calcCosto"),
    porcentaje: document.getElementById("calcPorcentaje")
  };
  const formatoUSD = new Intl.NumberFormat("es-CO", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const calcular = () => {
    const tareas = +calc.tareas.value;
    const minutos = +calc.minutos.value;
    const costo = Math.max(+calc.costo.value || 0, 0);
    const pct = +calc.porcentaje.value;

    document.getElementById("calcTareasVal").textContent = tareas;
    document.getElementById("calcMinutosVal").textContent = minutos;

    const horasMes = (tareas * minutos * 22 / 60) * pct;
    const ahorroMes = horasMes * costo;

    document.getElementById("resHoras").textContent = `${Math.round(horasMes).toLocaleString("es-CO")} h`;
    document.getElementById("resMes").textContent = formatoUSD.format(ahorroMes);
    document.getElementById("resAnio").textContent = formatoUSD.format(ahorroMes * 12);
    document.getElementById("resBar").style.width = `${pct * 100}%`;
  };
  Object.values(calc).forEach(input => input.addEventListener("input", calcular));
  calcular();

  /* ---------- Herramientas: filtro y búsqueda ---------- */
  const toolGrid = document.getElementById("toolGrid");
  const toolSearch = document.getElementById("toolSearch");
  const toolEmpty = document.getElementById("toolEmpty");
  const etiquetas = { nocode: "No-code", llm: "Modelo de IA", rpa: "RPA" };
  let filtroActual = "todas";

  const renderHerramientas = () => {
    const texto = toolSearch.value.trim().toLowerCase();
    const lista = herramientas.filter(h =>
      (filtroActual === "todas" || h.categoria === filtroActual) &&
      (h.nombre.toLowerCase().includes(texto) || h.desc.toLowerCase().includes(texto))
    );
    toolGrid.innerHTML = lista.map(h => `
      <div class="col-sm-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm tool-card text-center">
          <div class="card-body p-4">
            <i class="bi ${h.icono} tool-icon text-gradient"></i>
            <h6 class="mt-3 mb-1 fw-semibold">${h.nombre}</h6>
            <span class="badge text-bg-light border mb-2">${etiquetas[h.categoria]}</span>
            <p class="small text-body-secondary mb-0">${h.desc}</p>
          </div>
        </div>
      </div>
    `).join("");
    toolEmpty.classList.toggle("d-none", lista.length > 0);
  };

  document.querySelectorAll("#toolFilters .btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#toolFilters .btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filtroActual = btn.dataset.filter;
      renderHerramientas();
    });
  });
  toolSearch.addEventListener("input", renderHerramientas);
  renderHerramientas();

  /* ---------- Quiz ---------- */
  let actual = 0, puntaje = 0;
  const quizBox = document.getElementById("quizBox");
  const quizResult = document.getElementById("quizResult");
  const quizOptions = document.getElementById("quizOptions");
  document.getElementById("quizTotal").textContent = preguntas.length;

  const mostrarPregunta = () => {
    const q = preguntas[actual];
    document.getElementById("quizNum").textContent = actual + 1;
    document.getElementById("quizProgress").style.width = `${(actual / preguntas.length) * 100}%`;
    document.getElementById("quizQuestion").textContent = q.pregunta;
    quizOptions.innerHTML = q.opciones.map((o, i) =>
      `<button class="btn btn-outline-secondary quiz-option" data-i="${i}">${o}</button>`
    ).join("");
  };

  quizOptions.addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-option");
    if (!btn) return;
    const correcta = preguntas[actual].correcta;
    const botones = quizOptions.querySelectorAll(".quiz-option");
    botones.forEach(b => b.disabled = true);
    if (+btn.dataset.i === correcta) { btn.classList.add("correct"); puntaje++; }
    else { btn.classList.add("wrong"); botones[correcta].classList.add("correct"); }

    setTimeout(() => {
      actual++;
      if (actual < preguntas.length) mostrarPregunta();
      else mostrarResultado();
    }, 1000);
  });

  const mostrarResultado = () => {
    document.getElementById("quizProgress").style.width = "100%";
    quizBox.classList.add("d-none");
    quizResult.classList.remove("d-none");
    document.getElementById("quizScore").textContent = `Obtuviste ${puntaje} de ${preguntas.length}`;
    const mensajes = puntaje === preguntas.length
      ? "¡Excelente! Dominas los conceptos de automatización con IA."
      : puntaje >= 3 ? "¡Muy bien! Repasa las secciones para llegar al 100 %."
      : "Sigue explorando el portal y vuelve a intentarlo.";
    document.getElementById("quizMessage").textContent = mensajes;
  };

  document.getElementById("quizRestart").addEventListener("click", () => {
    actual = 0; puntaje = 0;
    quizResult.classList.add("d-none");
    quizBox.classList.remove("d-none");
    mostrarPregunta();
  });
  mostrarPregunta();

  /* ---------- Formulario de contacto ---------- */
  const form = document.getElementById("contactForm");
  const mensaje = document.getElementById("mensaje");
  const charCount = document.getElementById("charCount");
  mensaje.addEventListener("input", () => { charCount.textContent = `${mensaje.value.length}/500`; });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    const nombre = document.getElementById("nombre").value.trim();
    document.getElementById("toastBody").textContent = `¡Gracias, ${nombre}! Recibimos tu consulta y te responderemos pronto.`;
    bootstrap.Toast.getOrCreateInstance(document.getElementById("contactToast")).show();
    form.reset();
    form.classList.remove("was-validated");
    charCount.textContent = "0/500";
  });

  /* ---------- Activar animaciones ---------- */
  document.querySelectorAll(".reveal, .counter").forEach(el => observer.observe(el));
});
