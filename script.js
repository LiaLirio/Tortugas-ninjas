'use strict';
/* =====================================================================
   EQUIPO CAPARAZÓN · script.js
   1. DATOS (editá textos acá)   2. UTILIDADES   3. NAVEGACIÓN
   4. PUNTOS Y CINTURÓN   5. TORTUGAS   6. ENTRENAMIENTO
   7. TEST   8. QR   9. ARRANQUE
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. DATOS
   --------------------------------------------------------------------- */
const TURTLES = [
  {
    id: 'leo', name: 'Leonardo', initial: 'L', colorName: 'Azul', role: 'Líder',
    image: 'leo.png',
    color: '#2f7bff', light: '#78a8ff',
    persona: 'Líder nato: disciplina, responsabilidad y un plan para todo. Se exige más que nadie y cree que el honor vale más que ganar.',
    stats: { Liderazgo: 95, Fuerza: 70, Velocidad: 80, Ingenio: 75, Humor: 40 },
    weapon: { icon: 'katana', name: 'Dos katanas', text: 'Espadas japonesas de hoja curva. Piden precisión, equilibrio y mucha técnica.' },
    facts: [
      'Se llama como Leonardo da Vinci, el genio italiano del Renacimiento que fue pintor, inventor e ingeniero.',
      'En los primeros cómics de 1984 las cuatro tortugas usaban antifaz rojo. Los colores propios, como el azul de Leonardo, llegaron con la serie animada de 1987.'
    ],
    fit: 'Tenés alma de líder. Te gusta tener un plan, cuidar al grupo y hacer las cosas bien. Cuando todos dudan, vos mantenés la calma y marcás el camino.'
  },
  {
    id: 'raph', name: 'Raphael', initial: 'R', colorName: 'Rojo', role: 'Rebelde',
    image: 'raph.png',
    color: '#ff3030', light: '#ff7b7b',
    persona: 'Intenso, valiente y leal hasta el final. Dice lo que piensa, no se achica ante nada y tiene un corazón enorme bajo la coraza.',
    stats: { Liderazgo: 70, Fuerza: 98, Velocidad: 75, Ingenio: 50, Humor: 60 },
    weapon: { icon: 'sai', name: 'Dos sai', text: 'Dagas de metal con dos púas laterales, pensadas para bloquear y desarmar.' },
    facts: [
      'Su nombre viene de Rafael Sanzio, pintor y arquitecto italiano del Renacimiento.',
      'Los sai son armas tradicionales de Okinawa. Sirven para bloquear golpes y atrapar otras armas.'
    ],
    fit: 'Tenés un corazón enorme bajo una coraza dura. Decís lo que pensás, no te achicás ante nada y defendés a los tuyos con todo lo que tenés.'
  },
  {
    id: 'donnie', name: 'Donatello', initial: 'D', colorName: 'Violeta', role: 'Genio',
    image: 'donnie.png',
    color: '#a35cff', light: '#c699ff',
    persona: 'Mente que no para: inventa, programa y arregla lo imposible. Tranquilo y paciente, siempre tiene una solución ingeniosa.',
    stats: { Liderazgo: 55, Fuerza: 60, Velocidad: 65, Ingenio: 99, Humor: 50 },
    weapon: { icon: 'bo', name: 'Bo', text: 'Bastón largo de madera. Da alcance y control a distancia.' },
    facts: [
      'Lleva el nombre de Donatello, escultor florentino del siglo XV famoso por su David de bronce.',
      'El bo es un bastón largo de madera y una de las armas de artes marciales más antiguas que existen.'
    ],
    fit: 'Tenés una mente que no para. Te encanta entender cómo funcionan las cosas, inventar soluciones y ayudar al equipo con ingenio y paciencia.'
  },
  {
    id: 'mikey', name: 'Michelangelo', initial: 'M', colorName: 'Naranja', role: 'Alma de la fiesta',
    image: 'mikey.png',
    color: '#ff8c1a', light: '#ffb461',
    persona: 'El más alegre del equipo. Optimista, creativo y fanático de la pizza, convierte cualquier misión en una fiesta.',
    stats: { Liderazgo: 50, Fuerza: 70, Velocidad: 90, Ingenio: 70, Humor: 100 },
    weapon: { icon: 'nunchaku', name: 'Nunchakus', text: 'Dos palos unidos por una cadena. Se mueven rápido y piden mucho ritmo.' },
    facts: [
      'Se llama como Miguel Ángel, el artista que esculpió el David y pintó el techo de la Capilla Sixtina.',
      'A las cuatro tortugas les encanta la pizza, pero Michelangelo es el fan número uno del equipo.'
    ],
    fit: 'Sos la alegría del grupo. Mirás el lado bueno de todo, improvisás sobre la marcha y lográs que cualquiera se sume a la fiesta.'
  }
];

const BELTS = [
  { min: 0, name: 'Cinturón blanco', color: '#ffffff' },
  { min: 15, name: 'Cinturón verde', color: '#39ff14' },
  { min: 40, name: 'Cinturón negro', color: '#222222' },
  { min: 90, name: 'Gran maestre', color: '#ffe600' }
];

const RIDDLES = [
  { q: 'Soy redonda, tengo queso y salsa, y me cortan en triángulos. Las cuatro tortugas me adoran. ¿Qué soy?', a: ['pizza'], hint: 'Se hornea y llega en una caja.' },
  { q: '¿Cómo se llama el maestro rata que entrenó a las cuatro tortugas?', a: ['splinter'], hint: 'Empieza con S.' },
  { q: 'Las tortugas se llaman como artistas del Renacimiento. ¿De qué país eran esos artistas?', a: ['italia'], hint: 'Tiene forma de bota.' },
  { q: 'Cuanto más me quitás, más grande me hago. ¿Qué soy?', a: ['agujero', 'hoyo', 'hueco', 'pozo'], hint: 'Para hacerme hay que cavar.' },
  { q: 'Tengo ciudades pero no casas, montañas pero no árboles y agua pero no peces. ¿Qué soy?', a: ['mapa'], hint: 'Te ayuda a no perderte.' },
  { q: 'Si decís mi nombre, dejo de existir. ¿Qué soy?', a: ['silencio'], hint: 'Los ninjas son maestros en mí.' },
  { q: '¿Qué arma ninja tiene dos palos unidos por una cadena?', a: ['nunchaku', 'nunchakus', 'nunchaco', 'nunchacos'], hint: 'La usa Michelangelo.' },
  { q: '¿Qué tortuga lleva el color azul y es la líder del equipo?', a: ['leonardo', 'leo'], hint: 'Usa dos katanas.' }
];

const CHALLENGES = [
  { t: 'Pose ninja: quedate en un pie y sin moverte hasta que termine la cuenta.', s: 10 },
  { t: 'Duelo de miradas: mirá a una de las tortugas sin parpadear.', s: 15 },
  { t: 'Grito de batalla: inventen un grito ninja entre todos y griténlo juntos.', s: 0 },
  { t: 'Sigilo total: caminá en puntas de pie cinco pasos sin hacer ruido.', s: 0 },
  { t: 'Foto épica: sacate una foto con la pose de tu tortuga favorita.', s: 0 },
  { t: 'Trabalenguas: decí tres veces seguidas «Tres tristes tortugas tragaban trigo en un trigal».', s: 20 },
  { t: 'Reverencia ninja: hacé la reverencia más respetuosa que puedas y mantené la cara seria.', s: 5 },
  { t: 'Pizza time: describí tu pizza ideal sin repetir ningún ingrediente.', s: 10 }
];

/* Cada opción suma un punto a la tortuga indicada (leo, raph, donnie, mikey). */
const QUIZ = [
  { q: 'Llega un sábado sin planes. ¿Qué hacés?', o: [
    ['Armo una agenda para aprovecharlo bien.', 'leo'],
    ['Salgo a hacer algo intenso: deporte, bici, lo que sea.', 'raph'],
    ['Me pongo a armar o descubrir algo nuevo.', 'donnie'],
    ['Llamo a todos y armamos una juntada con pizza.', 'mikey'] ] },
  { q: 'En un trabajo en grupo, tu papel suele ser…', o: [
    ['Organizar y repartir las tareas.', 'leo'],
    ['Encargarme de lo más difícil, aunque me queje un rato.', 'raph'],
    ['Encontrar la solución más ingeniosa.', 'donnie'],
    ['Mantener a todos con ganas y buen humor.', 'mikey'] ] },
  { q: 'Elegí una comida.', o: [
    ['Algo bien preparado, que pueda disfrutar con calma.', 'leo'],
    ['Una hamburguesa gigante.', 'raph'],
    ['Lo que sea, mientras pueda seguir con mi proyecto.', 'donnie'],
    ['Pizza. Siempre pizza.', 'mikey'] ] },
  { q: 'Un amigo te dice algo que te molesta. ¿Qué hacés?', o: [
    ['Hablo con calma y busco entender.', 'leo'],
    ['Respondo en el momento, sin filtro.', 'raph'],
    ['Lo analizo y trato de entender por qué lo dijo.', 'donnie'],
    ['Lo convierto en un chiste para aflojar la tensión.', 'mikey'] ] },
  { q: 'Tu superpoder ideal sería…', o: [
    ['Liderar a cualquier equipo hasta la victoria.', 'leo'],
    ['Una fuerza descomunal.', 'raph'],
    ['Inteligencia sin límites.', 'donnie'],
    ['Hacer reír y alegrar a todo el mundo.', 'mikey'] ] },
  { q: '¿Cómo te describen tus amigos?', o: [
    ['Confiable y organizada.', 'leo'],
    ['Leal e intensa.', 'raph'],
    ['Curiosa y muy inteligente.', 'donnie'],
    ['Divertida y espontánea.', 'mikey'] ] },
  { q: 'Si pudieras elegir un arma ninja…', o: [
    ['Dos katanas.', 'leo'],
    ['Dos sai.', 'raph'],
    ['Un bastón largo.', 'donnie'],
    ['Unos nunchakus.', 'mikey'] ] },
  { q: 'Mañana tenés un examen difícil. ¿Qué hacés hoy?', o: [
    ['Sigo mi plan de estudio paso a paso.', 'leo'],
    ['Me da bronca, pero me pongo a estudiar igual.', 'raph'],
    ['Busco la forma más inteligente de estudiar: resúmenes, apps, esquemas.', 'donnie'],
    ['Estudio con música y snacks. Algo se me va a ocurrir.', 'mikey'] ] }
];

/* ---------------------------------------------------------------------
   2. UTILIDADES
   --------------------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const rand = (n) => Math.floor(Math.random() * n);
const shuffle = (arr) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const byId = (id) => TURTLES.find((t) => t.id === id);

const store = {
  get(key, fallback) { try { const v = localStorage.getItem('caparazon.' + key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem('caparazon.' + key, JSON.stringify(value)); return true; } catch { return false; } }
};

/* Onomatopeyas que saltan al tocar */
const WORDS = ['¡POW!', '¡BAM!', '¡HAI-YA!', '¡ZAP!', '¡COWABUNGA!', '¡CRASH!', '¡WHAM!'];
function pop(x, y, text) {
  const p = document.createElement('span');
  p.className = 'pop';
  p.textContent = text || WORDS[rand(WORDS.length)];
  p.style.left = x + 'px';
  p.style.top = y + 'px';
  p.style.setProperty('--r', (Math.random() * 30 - 15) + 'deg');
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 850);
}
function popAtCenter(text) { pop(innerWidth / 2, Math.min(innerHeight * 0.4, 280), text); }

let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2400);
}

async function copyText(text, okMsg = 'Copiado') {
  try { await navigator.clipboard.writeText(text); toast(okMsg); return; } catch { /* sigue al plan B */ }
  try {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    toast(ok ? okMsg : 'Seleccioná el texto y copialo a mano');
  } catch { toast('Seleccioná el texto y copialo a mano'); }
}

/* --- Dibujos originales (insignias, armas, objetos de juego) --- */
let svgCounter = 0;
function hexPts(cx, cy, r) {
  const p = [];
  for (let i = 0; i < 6; i++) { const a = Math.PI / 180 * (60 * i - 30); p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); }
  return p.join(' ');
}
/* Insignia de caparazón: panal hexagonal en el color de la tortuga + inicial */
function shellArt(t) {
  const id = 'clip' + (++svgCounter), r = 30, d = Math.sqrt(3) * r;
  let hex = `<polygon points="${hexPts(100, 100, r)}" fill="rgba(255,255,255,.2)" stroke="#000" stroke-width="4" stroke-linejoin="round"/>`;
  for (let i = 0; i < 6; i++) {
    const a = Math.PI / 180 * (60 * i);
    hex += `<polygon points="${hexPts(100 + d * Math.cos(a), 100 + d * Math.sin(a), r)}" fill="rgba(0,0,0,.28)" stroke="#000" stroke-width="4" stroke-linejoin="round"/>`;
  }
  return `<svg viewBox="0 0 200 200" role="img" aria-label="Insignia de ${t.name}">
    <defs><clipPath id="${id}"><circle cx="100" cy="100" r="92"/></clipPath></defs>
    <circle cx="100" cy="100" r="96" fill="${t.color}" stroke="#000" stroke-width="8"/>
    <g clip-path="url(#${id})">${hex}</g>
    <circle cx="100" cy="100" r="92" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="3"/>
    <text x="100" y="124" text-anchor="middle" font-size="84" fill="#fff" stroke="#000" stroke-width="7" paint-order="stroke" style="font-family:var(--font-display),Impact,sans-serif">${t.initial}</text>
  </svg>`;
}
const WEAPONS = {
  katana: '<path d="M12 52 L54 10" stroke="#e8eef0" stroke-width="5" stroke-linecap="round"/><path d="M12 52 L20 44" stroke="#222" stroke-width="7" stroke-linecap="round"/><path d="M19 39 L27 47" stroke="#d4af37" stroke-width="5" stroke-linecap="round"/>',
  sai: '<path d="M32 6 L32 44" stroke="#dfe6e8" stroke-width="4" stroke-linecap="round"/><path d="M18 16 Q16 34 32 34 Q48 34 46 16" stroke="#dfe6e8" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M32 44 L32 58" stroke="#333" stroke-width="7" stroke-linecap="round"/>',
  bo: '<path d="M8 56 L56 8" stroke="#c58b4b" stroke-width="6" stroke-linecap="round"/><path d="M8 56 L12 52" stroke="#6b4423" stroke-width="7" stroke-linecap="round"/><path d="M56 8 L52 12" stroke="#6b4423" stroke-width="7" stroke-linecap="round"/>',
  nunchaku: '<path d="M10 54 L26 30" stroke="#c58b4b" stroke-width="7" stroke-linecap="round"/><path d="M54 10 L38 34" stroke="#c58b4b" stroke-width="7" stroke-linecap="round"/><path d="M26 30 Q32 22 38 34" stroke="#cfd8d3" stroke-width="3" fill="none" stroke-dasharray="3 2"/>'
};
const weaponSvg = (key) => `<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${WEAPONS[key]}</svg>`;
const ICONS = {
  star: '<svg viewBox="0 0 48 48"><path d="M24 2 L29 19 L46 24 L29 29 L24 46 L19 29 L2 24 L19 19Z" fill="#cfd8d3" stroke="#000" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="24" r="5" fill="#0a0d0a"/></svg>',
  pizza: '<svg viewBox="0 0 48 48"><path d="M6 10 Q24 -2 42 10 L24 46Z" fill="#ffc83d" stroke="#000" stroke-width="3" stroke-linejoin="round"/><circle cx="19" cy="17" r="3.5" fill="#d62d20"/><circle cx="29" cy="19" r="3.5" fill="#d62d20"/><circle cx="24" cy="30" r="3.5" fill="#d62d20"/></svg>',
  bomb: '<svg viewBox="0 0 48 48"><circle cx="22" cy="28" r="16" fill="#1a1a1a" stroke="#000" stroke-width="3"/><path d="M32 14 Q38 6 44 8" stroke="#c9a66b" stroke-width="3" fill="none"/><circle cx="44" cy="8" r="3" fill="#ff8c1a"/><path d="M14 24 Q16 18 22 18" stroke="#777" stroke-width="3" fill="none" stroke-linecap="round"/></svg>'
};

/* ---------------------------------------------------------------------
   3. NAVEGACIÓN
   --------------------------------------------------------------------- */
const VIEWS = ['inicio', 'tortugas', 'entrenamiento', 'test'];
const stoppers = [];          // cada juego registra cómo pararse al cambiar de sección
const onShow = {};            // funciones que corren al mostrar una sección

function show(id, push = true) {
  if (!VIEWS.includes(id)) id = 'inicio';
  stoppers.forEach((stop) => stop());
  $$('.view').forEach((v) => { v.hidden = v.id !== id; });
  $$('.menu [data-nav]').forEach((b) => {
    const on = b.dataset.nav === id;
    b.classList.toggle('is-active', on);
    if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  closeMenu();
  try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch { window.scrollTo(0, 0); }
  if (push) { try { history.replaceState(null, '', '#' + id); } catch { /* sin historial */ } }
  VIEWS.forEach((v) => onShow[v] && onShow[v](v === id));
}
function closeMenu() { $('#menu').classList.remove('is-open'); $('#burger').setAttribute('aria-expanded', 'false'); }
function initNav() {
  document.addEventListener('click', (e) => {
    const nav = e.target.closest('[data-nav]');
    if (nav) show(nav.dataset.nav);
    const b = e.target.closest('.btn');
    if (b && !b.disabled) {
      if (e.detail === 0) { const r = b.getBoundingClientRect(); pop(r.left + r.width / 2, r.top); } else pop(e.clientX, e.clientY);
    }
  });
  $('#burger').addEventListener('click', () => {
    const open = $('#menu').classList.toggle('is-open');
    $('#burger').setAttribute('aria-expanded', String(open));
  });
  addEventListener('hashchange', () => show(location.hash.slice(1), false));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeMenu(); closeQR(); } });
}

/* ---------------------------------------------------------------------
   4. PUNTOS Y CINTURÓN
   --------------------------------------------------------------------- */
let points = store.get('points', 0);
const beltFor = (p) => [...BELTS].reverse().find((b) => p >= b.min);
function renderBelt() {
  const b = beltFor(points);
  $('#beltName').textContent = b.name;
  $('#beltPts').textContent = points;
  $('.belt__dot').style.background = b.color;
}
function addPoints(n, source) {
  if (n <= 0) return;
  const before = beltFor(points).name;
  points += n;
  store.set('points', points);
  renderBelt();
  const after = beltFor(points).name;
  toast(after !== before ? `¡Subiste a ${after}!` : `+${n} puntos · ${source}`);
  if (after !== before) popAtCenter('¡NIVEL NUEVO!');
}

/* ---------------------------------------------------------------------
   5. TORTUGAS (inicio + tarjetas)
   --------------------------------------------------------------------- */
function renderHero() {
  $('#brandShell').innerHTML = shellArt(TURTLES[0]);
  $('#heroBadges').innerHTML = TURTLES.map((t) => `
    <button type="button" class="badge" role="listitem" data-goto="${t.id}" style="--c:${t.color};--cl:${t.light}" aria-label="Ver tarjeta de ${t.name}">
      <span class="badge__img"><img src="${t.image}" alt=""></span><span>${t.name}</span>
    </button>`).join('');
  $('#heroBadges').addEventListener('click', (e) => {
    const b = e.target.closest('[data-goto]');
    if (!b) return;
    show('tortugas');
    setTimeout(() => {
      const card = $('#card-' + b.dataset.goto);
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.remove('is-flash'); void card.offsetWidth; card.classList.add('is-flash');
    }, 250);
  });
}

function renderCards() {
  $('#cards').innerHTML = TURTLES.map((t) => `
    <article class="card" id="card-${t.id}" style="--c:${t.color};--cl:${t.light}">
      <div class="card__photo"><img src="${t.image}" alt="${t.name}, tortuga ninja con antifaz ${t.colorName.toLowerCase()}"></div>
      <div class="card__body">
        <p class="card__tag">${t.colorName} · ${t.role}</p>
        <h3 class="card__name">${t.name}</h3>
        <p>${t.persona}</p>
        <h4>Habilidades</h4>
        <ul class="stats">${Object.entries(t.stats).map(([k, v]) => `<li><span>${k}</span><i style="--v:${v}%" role="img" aria-label="${k}: ${v} de 100"></i></li>`).join('')}</ul>
        <div class="weapon">${weaponSvg(t.weapon.icon)}<div><b>${t.weapon.name}</b><span>${t.weapon.text}</span></div></div>
        <h4>Datos curiosos</h4>
        <ul class="facts">${t.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

/* ---------------------------------------------------------------------
   6. ENTRENAMIENTO NINJA
   --------------------------------------------------------------------- */

/* --- 6.1 Dojo de reflejos --- */
function initReflex() {
  const arena = $('#reflexArena'), btn = $('#reflexStart'), msg = $('#reflexMsg');
  const scoreEl = $('#reflexScore'), timeEl = $('#reflexTime'), bestEl = $('#reflexBest');
  const KINDS = [{ k: 'star', w: 70, pts: 1, label: 'Estrella' }, { k: 'pizza', w: 15, pts: 3, label: 'Pizza' }, { k: 'bomb', w: 15, pts: -3, label: 'Bomba' }];
  const TOTAL = 20;
  let score = 0, left = TOTAL, running = false, clock = 0, spawnT = 0, best = store.get('best.reflex', 0);
  bestEl.textContent = best;

  const pick = () => { let r = Math.random() * 100; for (const k of KINDS) { if ((r -= k.w) < 0) return k; } return KINDS[0]; };
  function clearTargets() { $$('.target', arena).forEach((t) => t.remove()); }

  function spawn() {
    if (!running) return;
    const kind = pick(), b = document.createElement('button');
    b.type = 'button'; b.className = 'target target--' + kind.k; b.setAttribute('aria-label', kind.label);
    b.innerHTML = ICONS[kind.k];
    b.style.left = (2 + Math.random() * 78) + '%';
    b.style.top = (4 + Math.random() * 70) + '%';
    b.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      score += kind.pts; scoreEl.textContent = score;
      pop(e.clientX, e.clientY, kind.pts > 0 ? '+' + kind.pts : String(kind.pts));
      b.remove();
    });
    arena.appendChild(b);
    const elapsed = TOTAL - left;
    setTimeout(() => b.remove(), Math.max(750, 1300 - elapsed * 25));
    spawnT = setTimeout(spawn, Math.max(380, 700 - elapsed * 14));
  }
  function stop() { running = false; clearInterval(clock); clearTimeout(spawnT); clearTargets(); btn.disabled = false; }
  function finish() {
    stop();
    msg.hidden = false; msg.classList.add('is-end');
    msg.textContent = `¡Tiempo! Hiciste ${score} puntos`;
    if (score > best) { best = score; store.set('best.reflex', best); bestEl.textContent = best; msg.textContent += ' · ¡Nuevo récord!'; }
    btn.textContent = 'Jugar de nuevo';
    addPoints(Math.round(Math.max(0, score) / 2), 'Reflejos');
  }
  btn.addEventListener('click', () => {
    stop(); score = 0; left = TOTAL; running = true;
    scoreEl.textContent = 0; timeEl.textContent = TOTAL;
    msg.hidden = true; msg.classList.remove('is-end'); btn.disabled = true;
    clock = setInterval(() => { left--; timeEl.textContent = left; if (left <= 0) finish(); }, 1000);
    spawn();
  });
  stoppers.push(() => { if (running) { stop(); msg.hidden = false; msg.classList.remove('is-end'); msg.textContent = 'Juego pausado. Apretá “Empezar” para jugar de nuevo.'; btn.textContent = 'Empezar'; } });
}

/* --- 6.2 Memoria ninja (secuencias de colores) --- */
function initMemory() {
  const pads = $$('.pad'), msg = $('#memMsg'), btn = $('#memStart');
  const roundEl = $('#memRound'), bestEl = $('#memBest');
  const FREQ = [330, 415, 494, 587];
  let seq = [], idx = 0, round = 0, accepting = false, timers = [], audio = null, best = store.get('best.memory', 0);
  bestEl.textContent = best;
  pads.forEach((p) => { p.disabled = true; });

  function tone(i) {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      const o = audio.createOscillator(), g = audio.createGain();
      o.type = 'triangle'; o.frequency.value = FREQ[i]; g.gain.value = 0.08;
      o.connect(g); g.connect(audio.destination); o.start();
      g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.3); o.stop(audio.currentTime + 0.32);
    } catch { /* sin sonido */ }
  }
  function flash(i, ms = 320) {
    pads[i].classList.add('is-lit'); tone(i);
    timers.push(setTimeout(() => pads[i].classList.remove('is-lit'), ms));
  }
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  function setPads(on) { pads.forEach((p) => { p.disabled = !on; }); }
  function next() {
    round++; roundEl.textContent = round; seq.push(rand(4)); idx = 0; accepting = false; setPads(false);
    msg.textContent = 'Mirá la secuencia…';
    const gap = Math.max(300, 650 - round * 25);
    seq.forEach((n, k) => later(() => flash(n, gap * 0.6), 700 + k * gap));
    later(() => { accepting = true; setPads(true); msg.textContent = 'Tu turno. Repetí la secuencia.'; }, 700 + seq.length * gap);
  }
  function stop() { timers.forEach(clearTimeout); timers = []; accepting = false; setPads(false); pads.forEach((p) => p.classList.remove('is-lit')); btn.disabled = false; }
  function gameOver() {
    stop();
    const done = round - 1;
    msg.textContent = done > 0 ? `¡Casi! Completaste ${done} ${done === 1 ? 'ronda' : 'rondas'}.` : 'Fallaste en la primera. ¡Probá otra vez!';
    if (done > best) { best = done; store.set('best.memory', best); bestEl.textContent = best; msg.textContent += ' Nuevo récord.'; }
    btn.textContent = 'Jugar de nuevo';
    addPoints(done * 2, 'Memoria');
  }
  pads.forEach((p) => p.addEventListener('click', () => {
    if (!accepting) return;
    const i = Number(p.dataset.i);
    flash(i, 200);
    if (seq[idx] !== i) { gameOver(); return; }
    idx++;
    if (idx === seq.length) { accepting = false; setPads(false); msg.textContent = '¡Bien!'; later(next, 900); }
  }));
  btn.addEventListener('click', () => { stop(); seq = []; round = 0; btn.disabled = true; next(); });
  stoppers.push(() => { if (round > 0 && btn.disabled) { stop(); msg.textContent = 'Juego pausado. Apretá “Empezar” para jugar de nuevo.'; btn.textContent = 'Empezar'; } });
}

/* --- 6.3 Acertijos --- */
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
function initRiddles() {
  const text = $('#riddleText'), input = $('#riddleInput'), fb = $('#riddleFb'), form = $('#riddleForm');
  const numEl = $('#rdNum'), scoreEl = $('#rdScore');
  $('#rdTotal').textContent = RIDDLES.length;
  let order = shuffle(RIDDLES.map((_, i) => i)), pos = 0, hits = 0, answered = false;

  function say(msg, cls = '') { fb.textContent = msg; fb.className = 'status ' + cls; }
  function render() {
    if (pos >= order.length) {
      text.textContent = `¡Terminaste! Acertaste ${hits} de ${RIDDLES.length}.`;
      input.hidden = true; $('#riddleHint').hidden = true; $('#riddleSkip').hidden = true;
      form.querySelector('[type="submit"]').textContent = 'Jugar de nuevo';
      say(hits >= 6 ? 'Sos una maestra del acertijo.' : 'Buen entrenamiento. Podés mejorar la próxima.', 'is-ok');
      answered = 'end';
      return;
    }
    numEl.textContent = pos + 1;
    text.textContent = RIDDLES[order[pos]].q;
    input.value = ''; answered = false; say('');
  }
  function advance(delay) { pos++; setTimeout(render, delay); }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (answered === 'end') { order = shuffle(order); pos = 0; hits = 0; scoreEl.textContent = 0; input.hidden = false; $('#riddleHint').hidden = false; $('#riddleSkip').hidden = false; form.querySelector('[type="submit"]').textContent = 'Responder'; render(); return; }
    if (answered) return;
    const guess = norm(input.value);
    if (!guess) { say('Escribí una respuesta primero.', 'is-bad'); return; }
    const r = RIDDLES[order[pos]];
    if (guess.split(' ').some((w) => r.a.includes(w))) {
      answered = true; hits++; scoreEl.textContent = hits;
      say('¡Correcto! +10 puntos', 'is-ok'); addPoints(10, 'Acertijo'); advance(1400);
    } else say('Todavía no. Probá de nuevo o pedí una pista.', 'is-bad');
  });
  $('#riddleHint').addEventListener('click', () => { if (answered === false) say('Pista: ' + RIDDLES[order[pos]].hint); });
  $('#riddleSkip').addEventListener('click', () => { if (answered === false) { answered = true; say('Saltaste este. La respuesta era: ' + RIDDLES[order[pos]].a[0] + '.'); advance(1800); } });
  render();
}

/* --- 6.4 Ruleta de desafíos --- */
function initWheel() {
  const wheel = $('#wheel'), spin = $('#wheelSpin'), box = $('#challenge');
  const text = $('#chText'), timer = $('#chTimer'), start = $('#chStart'), done = $('#chDone');
  let deg = 0, last = -1, tick = 0, secs = 0, awarded = true;

  function clearTimer() { clearInterval(tick); tick = 0; }
  spin.addEventListener('click', () => {
    spin.disabled = true; box.hidden = true; clearTimer();
    deg += 1440 + rand(360);
    wheel.style.transform = `rotate(${deg}deg)`;
    setTimeout(() => {
      let i; do { i = rand(CHALLENGES.length); } while (i === last);
      last = i; const c = CHALLENGES[i];
      secs = c.s; awarded = false;
      text.textContent = c.t;
      timer.hidden = true; start.hidden = !secs; start.textContent = `Empezar cuenta (${secs} s)`;
      done.disabled = false; box.hidden = false; spin.disabled = false;
    }, 3100);
  });
  start.addEventListener('click', () => {
    clearTimer(); let left = secs;
    timer.hidden = false; timer.textContent = left;
    tick = setInterval(() => {
      left--; timer.textContent = left;
      if (left <= 0) { clearTimer(); timer.textContent = '¡Ya!'; popAtCenter('¡TIEMPO!'); }
    }, 1000);
  });
  done.addEventListener('click', () => {
    clearTimer();
    if (!awarded) { awarded = true; addPoints(5, 'Desafío'); }
    box.hidden = true;
  });
  stoppers.push(clearTimer);
}

/* ---------------------------------------------------------------------
   7. TEST: ¿QUÉ TORTUGA SOS?
   --------------------------------------------------------------------- */
function initQuiz() {
  const root = $('#quiz');
  let q = 0, tally, order;
  function reset() {
    q = 0; tally = { leo: 0, raph: 0, donnie: 0, mikey: 0 };
    order = QUIZ.map((item) => ({ q: item.q, o: shuffle(item.o) }));
    render();
  }
  function render() {
    if (q >= order.length) return result();
    const item = order[q];
    root.innerHTML = `
      <p class="quiz__count">Pregunta ${q + 1} de ${order.length}</p>
      <div class="quiz__progress" role="progressbar" aria-valuemin="0" aria-valuemax="${order.length}" aria-valuenow="${q}"><i style="--p:${(q / order.length) * 100}%"></i></div>
      <h3 class="quiz__q" style="color:var(--paper);text-shadow:none">${item.q}</h3>
      <div class="quiz__opts">${item.o.map(([label, who]) => `<button type="button" class="opt" data-who="${who}">${label}</button>`).join('')}</div>`;
  }
  function result() {
    const total = QUIZ.length;
    const max = Math.max(...Object.values(tally));
    const winners = TURTLES.filter((t) => tally[t.id] === max);
    const w = winners[rand(winners.length)];
    const rows = TURTLES.map((t) => ({ t, pct: Math.round((tally[t.id] / total) * 100) })).sort((a, b) => b.pct - a.pct);
    root.innerHTML = `
      <div class="result" style="--cl:${w.light}">
        <p class="eyebrow">Tu resultado</p>
        <div class="result__art"><img src="${w.image}" alt="${w.name}, tu resultado del test"></div>
        <h3 class="result__name">¡Sos ${w.name}!</h3>
        <p>${w.fit}</p>
        <ul class="bars">${rows.map(({ t, pct }) => `<li style="--c:${t.color}"><span>${t.name.slice(0, 10)}</span><i style="--v:${pct}%"></i><span>${pct}%</span></li>`).join('')}</ul>
        <div class="row" style="justify-content:center">
          <button type="button" class="btn" id="qCopy">Copiar resultado</button>
          <button type="button" class="btn btn--ghost" id="qAgain">Volver a jugar</button>
          <button type="button" class="btn btn--violet" id="qCard">Ver a ${w.name}</button>
        </div>
      </div>`;
    popAtCenter('¡' + w.name.toUpperCase() + '!');
    $('#qCopy').addEventListener('click', () => copyText(`Soy ${w.name} en el test “¿Qué tortuga sos?” del stand del Equipo Caparazón.`, 'Resultado copiado'));
    $('#qAgain').addEventListener('click', reset);
    $('#qCard').addEventListener('click', () => { show('tortugas'); setTimeout(() => { const c = $('#card-' + w.id); c.scrollIntoView({ behavior: 'smooth', block: 'center' }); c.classList.add('is-flash'); }, 250); });
  }
  root.addEventListener('click', (e) => {
    const opt = e.target.closest('.opt');
    if (!opt) return;
    tally[opt.dataset.who]++; q++; render();
  });
  reset();
}

/* ---------------------------------------------------------------------
   8. QR
   --------------------------------------------------------------------- */
function drawQR() {
  const url = $('#qrUrl').value.trim();
  const box = $('#qrCode');
  box.innerHTML = '';
  if (!/^https?:\/\/.+\..+/i.test(url)) { box.textContent = 'Pegá abajo el link de la página (empieza con https://) y apretá “Actualizar QR”.'; return; }
  if (typeof QRCode === 'undefined') { box.textContent = 'No se pudo cargar el generador de QR. Revisá tu conexión y reabrí esta ventana.'; return; }
  new QRCode(box, { text: url, width: 240, height: 240, colorDark: '#000000', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M });
  store.set('qrUrl', url);
}
function openQR() {
  const input = $('#qrUrl');
  if (!input.value) {
    const here = location.href.split('#')[0];
    input.value = store.get('qrUrl', /^https?:/i.test(here) ? here : '');
  }
  $('#qrModal').hidden = false;
  drawQR();
  $('#qrClose').focus();
}
function closeQR() { $('#qrModal').hidden = true; }
function initQR() {
  $('#qrOpen').addEventListener('click', openQR);
  $('#qrClose').addEventListener('click', closeQR);
  $('#qrModal').addEventListener('click', (e) => { if (e.target.id === 'qrModal') closeQR(); });
  $('#qrUpdate').addEventListener('click', drawQR);
  $('#qrUrl').addEventListener('keydown', (e) => { if (e.key === 'Enter') drawQR(); });
  $('#qrCopy').addEventListener('click', () => { const v = $('#qrUrl').value.trim(); if (v) copyText(v, 'Link copiado'); else toast('Todavía no hay link para copiar'); });
}

/* ---------------------------------------------------------------------
   9. ARRANQUE
   --------------------------------------------------------------------- */
function init() {
  renderHero();
  renderCards();
  renderBelt();
  initNav();
  initReflex();
  initMemory();
  initRiddles();
  initWheel();
  initQuiz();
  initQR();
  show(location.hash.slice(1) || 'inicio', false);
}
init();
