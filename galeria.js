// Visor de fotos de «La evolución del Orbit». Cada etapa es su propio grupo.
(function(){
  var visor=document.getElementById('visor'); if(!visor||!visor.showModal) return;
  var img=visor.querySelector('img'), pie=visor.querySelector('figcaption'), grupo=[], i=0;
  function ver(n){ i=(n+grupo.length)%grupo.length; var b=grupo[i], m=b.querySelector('img');
    img.src=b.dataset.full; img.alt=m.alt; pie.textContent=b.dataset.pie+' · '+(i+1)+'/'+grupo.length+' · prototipo en construcción'; }
  document.querySelectorAll('.fotos-etapa').forEach(function(ul){
    var bs=[].slice.call(ul.querySelectorAll('.foto'));
    bs.forEach(function(b,k){ b.addEventListener('click',function(){ grupo=bs; ver(k); visor.showModal(); }); });
  });
  visor.querySelector('.v-cerrar').onclick=function(){visor.close();};
  visor.querySelector('.v-ant').onclick=function(){ver(i-1);};
  visor.querySelector('.v-sig').onclick=function(){ver(i+1);};
  visor.addEventListener('click',function(e){ if(e.target===visor) visor.close(); });
  visor.addEventListener('keydown',function(e){ if(e.key==='ArrowLeft') ver(i-1); if(e.key==='ArrowRight') ver(i+1); });
})();
