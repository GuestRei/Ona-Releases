// ONA · iconos propios
// Sustituye los emojis de la interfaz por iconos de línea dibujados (mismo trazo, mismo peso).
// Funciona sobre todo el texto que pinta la app, también el que se genera después de cargar.
(function(){
  'use strict';

  // Cada icono: contenido SVG en cuadrícula 24x24, trazo currentColor
  const E = (cx, cy, rx, ry, rot) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${rot} 12 12)"/>`;
  const I = {
    pesa:      '<path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10"/>',
    llama:     '<path d="M12 3c1 3.2 4.2 4.6 4.2 8.800a4.200 4.200 0 0 1-8.400 0c0-1.700.700-2.800 1.600-3.700.2 1.200.9 1.800 1.600 1.800C11.400 8 11.500 5.500 12 3z"/>',
    rayo:      '<path d="M13 3 5.500 13.500H11L10 21l8-11h-5.500z"/>',
    brote:     '<path d="M12 20v-7"/><path d="M12 13c-4 0-6.200-2.300-6.200-6 3.800 0 6.200 2 6.200 6z"/><path d="M12 15.500c0-3 2-5 6-5 0 3.500-2 5-6 5z"/>',
    flor:      E(12,6.500,2.400,3.500,0) + E(12,6.500,2.400,3.500,72) + E(12,6.500,2.400,3.500,144) + E(12,6.500,2.400,3.500,216) + E(12,6.500,2.400,3.500,288) + '<circle cx="12" cy="12" r="1.300"/>',
    luna:      '<path d="M19.500 14.500A8 8 0 1 1 9.500 4.500a6.500 6.500 0 0 0 10 10z"/>',
    sol:       '<circle cx="12" cy="12" r="3.800"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.600 5.600 7 7M17 17l1.400 1.400M18.400 5.600 17 7M7 17l-1.400 1.400"/>',
    chispa:    '<path d="M12 3.500 13.800 9 19.500 11l-5.700 2L12 18.500 10.200 13 4.500 11l5.700-2z"/>',
    ok:        '<path d="M5 12.500l4.500 4.500L19 7.500"/>',
    okCirculo: '<circle cx="12" cy="12" r="9"/><path d="M8 12.500l3 3 5-6"/>',
    alerta:    '<path d="M12 4 21 19.500H3z"/><path d="M12 10v4.500M12 17h.01"/>',
    info:      '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    idea:      '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.500 10.900c.7.600 1 1.300 1 2.100h5c0-.8.300-1.500 1-2.100A6 6 0 0 0 12 3z"/>',
    calendario:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
    repetir:   '<path d="M20 11a8 8 0 0 0-14-4.500L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4.500L20 15M20 20v-5h-5"/>',
    lista:     '<rect x="6" y="5" width="12" height="16" rx="2"/><path d="M9 5V3h6v2M9 11h6M9 15h6"/>',
    diana:     '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    tendencia: '<path d="M4 19V5M4 19h16M8 15l4-4 3 3 5-6"/>',
    barras:    '<path d="M6 20v-8M12 20V5M18 20v-11"/>',
    copa:      '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M12 13v4M9 20h6M10 17h4"/>',
    estrella:  '<path d="M12 3.500l2.600 5.400 5.900.8-4.300 4.100 1 5.800L12 16.800 6.800 19.600l1-5.800L3.500 9.700l5.900-.8z"/>',
    cerebro:   '<path d="M9.500 4A3 3 0 0 0 6.500 7a3 3 0 0 0-2 5 3.500 3.500 0 0 0 3 5.500 3 3 0 0 0 5-1V5.500A2 2 0 0 0 9.500 4z"/><path d="M14.500 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3.500 3.500 0 0 1-3 5.500 3 3 0 0 1-5-1V5.500A2 2 0 0 1 14.500 4z"/>',
    salud:     '<path d="M12 5v14M5 12h14"/>',
    estetoscopio:'<path d="M6 4v5a4 4 0 0 0 8 0V4M10 13v2a4 4 0 0 0 8 0v-2"/><circle cx="18" cy="11" r="2"/>',
    cronometro:'<circle cx="12" cy="13.500" r="7.500"/><path d="M12 9.500v4l2.500 2M9.500 3h5"/>',
    reloj:     '<path d="M7 4h10v3l-5 5 5 5v3H7v-3l5-5-5-5z"/>',
    corazon:   '<path d="M12 20s-7.500-4.600-7.500-10.200A4.200 4.200 0 0 1 12 7.500a4.200 4.200 0 0 1 7.500 2.300C19.500 15.400 12 20 12 20z"/>',
    carrito:   '<path d="M3 5h2.500l2 11h10l2-8H7"/><circle cx="9.500" cy="19.500" r="1.200"/><circle cx="16.500" cy="19.500" r="1.200"/>',
    casa:      '<path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-5h4v5"/>',
    persona:   '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>',
    balanza:   '<path d="M12 4v16M7 20h10M5 8h14M5 8l-2.500 6a3 3 0 0 0 5 0zM19 8l-2.500 6a3 3 0 0 0 5 0z"/>',
    caraNeutra:'<circle cx="12" cy="12" r="9"/><path d="M9 9.500v.01M15 9.500v.01M9 15h6"/>',
    caraFeliz: '<circle cx="12" cy="12" r="9"/><path d="M9 9.500v.01M15 9.500v.01M8.500 14c1 1.600 2.200 2.300 3.500 2.300s2.500-.7 3.500-2.300"/>',
    caraTriste:'<circle cx="12" cy="12" r="9"/><path d="M9 9.500v.01M15 9.500v.01M8.500 16.300c1-1.600 2.200-2.300 3.500-2.300s2.500.7 3.500 2.300"/>',
    caraSueno: '<circle cx="12" cy="12" r="9"/><path d="M8 10h2M14 10h2M9.500 15h5"/>',
    andar:     '<circle cx="13" cy="4.500" r="1.600"/><path d="M12 8.500l-3 3 2.500 2.500-2 6M12 8.500l3.500 3M13.500 14l3 2.500.8 3.500"/>',
    ajustes:   '<circle cx="12" cy="12" r="3.500"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.600 5.600l2.100 2.100M16.300 16.300l2.100 2.100M18.400 5.600l-2.100 2.100M7.700 16.300l-2.100 2.100"/>',
    camara:    '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.500" r="3.500"/><path d="M8 7l1.500-3h5L16 7"/>',
    lupa:      '<circle cx="11" cy="11" r="6"/><path d="M16 16l4 4"/>',
    cruz:      '<path d="M6 6l12 12M18 6 6 18"/>',
    microfono: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3M8 22h8"/>',
    mas:       '<path d="M12 5v14M5 12h14"/>',
    atras:     '<path d="M15 5l-7 7 7 7"/>',
    gota:      '<path d="M12 3c4 5 6 7.500 6 11a6 6 0 0 1-12 0c0-3.500 2-6 6-11z"/>',
    bandera:   '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    cubiertos: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 2-3 5-3 8h3v10"/>',
    hueso:     '<circle cx="12" cy="12" r="2"/><path d="M12 4v4M12 16v4"/>',
    circulo:   '<circle cx="12" cy="12" r="8"/>'
  };

  function svg(nombre){
    return '<svg class="o-ico" viewBox="0 0 24 24" width="1.15em" height="1.15em" fill="none" stroke="currentColor" ' +
           'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[nombre] + '</svg>';
  }
  function punto(color){
    return '<span class="o-dot" aria-hidden="true" style="background:' + color + '"></span>';
  }

  // emoji → icono (los puntos de color van aparte). Lo que no esté aquí se deja como está.
  const MAPA = {
    '💪':'pesa','🏋':'pesa','🦾':'pesa','🦵':'pesa','🦶':'pesa','🍑':'pesa','🤸':'pesa','🧘':'flor','🌸':'flor','🌺':'flor',
    '🔥':'llama','⚡':'rayo','🌱':'brote','🌿':'brote','🌳':'brote','🌲':'brote','🌴':'brote',
    '🌙':'luna','🌕':'luna','☀':'sol','✨':'chispa','💥':'chispa',
    '✅':'okCirculo','✔':'ok','⚠':'alerta','🚨':'alerta','🛑':'alerta','ℹ':'info','💡':'idea','🔬':'info','💭':'info',
    '📅':'calendario','🔄':'repetir','↩':'atras','📋':'lista','📝':'lista','📌':'bandera','🎯':'diana',
    '📈':'tendencia','📊':'barras','🏆':'copa','🥇':'copa','🥈':'copa','🏅':'copa','⭐':'estrella','🧠':'cerebro',
    '🩺':'estetoscopio','🩹':'salud','🩸':'gota','⏱':'cronometro','⏳':'reloj',
    '💜':'corazon','💛':'corazon','🩷':'corazon','🤍':'corazon','🤰':'corazon','🤱':'corazon','👶':'corazon',
    '🛒':'carrito','🏠':'casa','👤':'persona','⚖':'balanza',
    '😐':'caraNeutra','🤔':'caraNeutra','🙂':'caraFeliz','😫':'caraTriste','😣':'caraTriste','😤':'caraTriste',
    '😴':'caraSueno','😪':'caraSueno','🥱':'caraSueno','🙆':'pesa','🏢':'casa',
    '🚶':'andar','🏃':'andar','⚙':'ajustes','🔧':'ajustes','🛠':'ajustes','📷':'camara','📸':'camara','🔍':'lupa',
    '❌':'cruz','✕':'cruz','✖':'cruz','×':'cruz','🎙':'microfono','🎤':'microfono',
    '➕':'mas','🔙':'atras','💧':'gota','🏁':'bandera','🥗':'cubiertos','🍽':'cubiertos','🍩':'cubiertos','🍫':'cubiertos',
    '🦴':'hueso','🐱':'pesa','⬜':'circulo','🟦':'circulo','🫃':'corazon','🔋':'rayo','🌬':'flor','🧬':'info'
  };
  const PUNTOS = { '🔴':'#b3261e', '🔵':'#3d7390', '🟡':'#c9962b', '🟢':'#2f7d5a', '🔹':'#3d7390' };
  // quitar sin sustituir (decoración sin significado)
  const QUITAR = ['👋'];

  const claves = Object.keys(MAPA).concat(Object.keys(PUNTOS), QUITAR)
    .sort((a, b) => b.length - a.length)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const RE = new RegExp('(' + claves.join('|') + '|[\u{1F300}-\u{1FAFF}☀-➿])[\\uFE0E\\uFE0F\\u200D]?', 'gu');
  const RE_TEST = new RegExp('(' + claves.join('|') + '|[\u{1F300}-\u{1FAFF}\u2600-\u27BF])', 'u');

  const SALTAR = { SCRIPT:1, STYLE:1, TEXTAREA:1, INPUT:1, OPTION:1, TITLE:1, SVG:1, CODE:1 };

  function reemplazarNodo(nodo){
    const texto = nodo.nodeValue;
    if(!texto || !RE_TEST.test(texto)) return;
    const padre = nodo.parentNode;
    if(!padre || SALTAR[padre.nodeName.toUpperCase()]) return;
    if(padre.closest && padre.closest('[data-sin-iconos], .m-x, .chat-x, .chat-mic-btn, .chat-send')) return;
    const tpl = document.createElement('template');
    let html = '';
    let ultimo = 0;
    texto.replace(RE, (m, k, idx) => {
      html += escapar(texto.slice(ultimo, idx));
      ultimo = idx + m.length;
      if(QUITAR.indexOf(k) !== -1){ /* nada */ }
      else if(PUNTOS[k]) html += punto(PUNTOS[k]);
      else if(MAPA[k]) html += svg(MAPA[k]);
      else html += punto('var(--t)');
      return m;
    });
    html += escapar(texto.slice(ultimo));
    tpl.innerHTML = html;
    padre.replaceChild(tpl.content, nodo);
  }
  function escapar(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function recorrer(raiz){
    if(!raiz) return;
    if(raiz.nodeType === 3){ reemplazarNodo(raiz); return; }
    if(raiz.nodeType !== 1 || SALTAR[raiz.nodeName.toUpperCase()]) return;
    const w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.nodeValue && RE_TEST.test(n.nodeValue)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    });
    const lista = [];
    while(w.nextNode()) lista.push(w.currentNode);
    lista.forEach(reemplazarNodo);
  }

  let pendiente = false;
  const cola = new Set();
  function vaciar(){
    pendiente = false;
    const items = Array.from(cola); cola.clear();
    items.forEach(n => { if(n.isConnected) recorrer(n); });
  }
  function programar(n){
    cola.add(n);
    if(!pendiente){ pendiente = true; (window.requestAnimationFrame || setTimeout)(vaciar); }
  }

  function iniciar(){
    recorrer(document.body);
    new MutationObserver(muts => {
      muts.forEach(m => {
        if(m.type === 'characterData') programar(m.target);
        else m.addedNodes.forEach(n => programar(n));
      });
    }).observe(document.body, { childList:true, subtree:true, characterData:true });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();

  window.ONA_ICONOS = { svg, recorrer };
})();
