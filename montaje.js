/* Orbit Terminal · reproductor de la animación de montaje.
   Fotogramas renderizados con Blender desde el CAD del proyecto; el scroll elige el fotograma.
   Sin dependencias externas. */
(function () {
  'use strict';
  var BASE = 'assets/montaje/';
  var sec = document.getElementById('montaje');
  var lienzo = document.getElementById('lienzo');
  if (!sec || !lienzo) return;
  var ctx = lienzo.getContext('2d');
  var reducido = window.matchMedia('(prefers-reduced-motion: reduce)');
  var guion = null, N = 116, estilo = 'realista', cache = {}, actual = -1, pend = false;

  function ruta(e, f) { return BASE + e + '/f' + String(f).padStart(3, '0') + '.webp'; }
  function img(e, f) {
    var k = e + f; if (cache[k]) return cache[k];
    var i = new Image(); i.decoding = 'async'; i.src = ruta(e, f);
    i.onload = function () { if (f === actual && e === estilo) pintar(f, true); };
    cache[k] = i; return i;
  }
  function precargar(e) {
    // primero cada 8, luego el resto, para que el scroll rápido tenga siempre algo cerca
    var orden = [];
    for (var p = 8; p >= 1; p = p >> 1) for (var f = 1; f <= N; f += p) if (orden.indexOf(f) < 0) orden.push(f);
    var i = 0;
    (function tanda() { for (var n = 0; n < 6 && i < orden.length; n++, i++) img(e, orden[i]); if (i < orden.length) setTimeout(tanda, 60); })();
  }
  function cercano(f) {
    for (var d = 0; d < N; d++) {
      var a = img(estilo, Math.max(1, f - d)); if (a.complete && a.naturalWidth) return a;
      var b = img(estilo, Math.min(N, f + d)); if (b.complete && b.naturalWidth) return b;
    }
    return null;
  }
  function pintar(f, forzar) {
    if (f === actual && !forzar) return;
    actual = f;
    var i = cercano(f); if (!i) return;
    if (lienzo.width !== i.naturalWidth) { lienzo.width = i.naturalWidth; lienzo.height = i.naturalHeight; }
    ctx.drawImage(i, 0, 0);
    rotulos(f);
  }
  var lis = [];
  function rotulos(f) {
    if (!guion) return;
    var activo = -1;
    guion.pasos.forEach(function (p, k) { if (f >= p.t0) activo = k; });
    document.getElementById('paso-num').textContent = activo < 0 ? '00' : String(activo + 1).padStart(2, '0');
    document.getElementById('paso-txt').textContent = activo < 0 ? 'Desplázate para montar' : guion.pasos[activo].etiqueta;
    lis.forEach(function (li, k) {
      li.className = k === activo ? 'activo' : (guion.pasos[k].t1 <= f ? 'hecho' : '');
    });
  }
  function progreso() {
    var r = sec.getBoundingClientRect();
    var total = sec.offsetHeight - window.innerHeight;
    return Math.min(1, Math.max(0, -r.top / total));
  }
  function alScroll() {
    if (pend) return; pend = true;
    requestAnimationFrame(function () {
      pend = false;
      var p = progreso();
      document.getElementById('barra').style.width = (p * 100).toFixed(1) + '%';
      pintar(1 + Math.round(p * (N - 1)));
    });
  }
  function listas() {
    var ol = document.getElementById('pasos'), ol2 = document.getElementById('pasos-estatico');
    guion.pasos.forEach(function (p) {
      var li = document.createElement('li'); li.textContent = p.etiqueta; ol.appendChild(li); lis.push(li);
      var li2 = document.createElement('li'); li2.textContent = p.etiqueta; ol2.appendChild(li2);
    });
  }
  document.querySelectorAll('.estilo button').forEach(function (b) {
    b.addEventListener('click', function () {
      estilo = b.getAttribute('data-estilo');
      document.querySelectorAll('.estilo button').forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
      precargar(estilo); pintar(actual < 1 ? 1 : actual, true);
    });
  });
  guion = window.ORBIT_GUION || null;
  if (guion) { N = guion.frames || N; listas(); }
  arrancar();
  function arrancar() {
    if (reducido.matches) return;          // versión estática por CSS
    precargar(estilo);
    window.addEventListener('scroll', alScroll, { passive: true });
    window.addEventListener('resize', alScroll);
    alScroll();
  }
})();
