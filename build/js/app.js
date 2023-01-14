function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),a=document.querySelector(".about-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){a.getBoundingClientRect().bottom<0?(e.classList.add("fixed"),n.classList.add("body-scroll")):(e.classList.remove("fixed"),n.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".main-navegation a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const a=e.target.attributes.href.value;document.querySelector(a).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".img-galery");for(i=1;i<=12;i++){const a=document.createElement("picture");a.innerHTML=`\n            <source srcset="build/img/thumb/${i}.avif" type="image/avif" onclick="mostrarImagen(${i})">\n            <source srcset="build/img/thumb/${i}.webp" type="image/webp" onclick="mostrarImagen(${i})">\n\n            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg"\n                alt="Imagen galería" onclick="mostrarImagen(${i})">\n            \x3c!--Aquí siempre debemos colocar un img con un src con la version que mas es soprtada, si el navegador soporta cualquiera de las otras dos que son mas livianas va a colocar esa y se recomienda poner ese width y ese height para mejorar el rendimiento y luego ponerle width 100% y height auto en globales para que quede bien--\x3e\n        `,e.appendChild(a)}}function mostrarImagen(e){const a=document.createElement("picture");a.innerHTML=`\n            <source srcset="build/img/grande/${e}.avif" type="image/avif">\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n\n            <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg"\n                alt="Imagen galería">\n            \x3c!--Aquí siempre debemos colocar un img con un src con la version que mas es soprtada, si el navegador soporta cualquiera de las otras dos que son mas livianas va a colocar esa y se recomienda poner ese width y ese height para mejorar el rendimiento y luego ponerle width 100% y height auto en globales para que quede bien--\x3e\n    `;const n=document.createElement("DIV");n.appendChild(a),n.classList.add("overlay"),n.onclick=function(){n.remove(),i.classList.remove("pinup-body")};const o=document.createElement("P");o.textContent="X",o.classList.add("btn-close"),o.onclick=function(){n.remove(),i.classList.remove("pinup-body")},n.appendChild(o);const i=document.querySelector("body");i.appendChild(n),i.classList.add("pinup-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
