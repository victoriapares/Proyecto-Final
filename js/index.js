/*--------ABRIR/CERRAR ABOUT--------*/
let aboutContainer = document.querySelector(".about__container");

document.querySelectorAll(".openAbout").forEach(btn => {
  btn.addEventListener("click", toggleAbout);
});

function toggleAbout(e) {
  e.preventDefault();

  let grid = document.querySelector(".div__grid__color");
  let navLinks = document.querySelectorAll(".nav__link:not(.nav__about)");
  let aboutBtn = document.querySelector(".openAbout");

  if (aboutContainer.classList.contains("active")) {
    aboutContainer.classList.remove("active");
    grid.classList.remove("blurred");
    navLinks.forEach(link => link.classList.remove("blurred"));
    aboutBtn.classList.add("notselected");      
  } else {
    aboutContainer.classList.add("active");
    grid.classList.add("blurred");
    navLinks.forEach(link => link.classList.add("blurred"));
    aboutBtn.classList.remove("notselected");   
  }
}
/*--------ABRIR/CERRAR ABOUT--------*/




/*--------BOTÓN "BACK TO THE TOP"--------*/
let btn = document.getElementById("btnTop");

if (btn) {

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 1000) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  btn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
}
/*--------BOTÓN "BACK TO THE TOP"--------*/




/*--------GRID FOTOS (COLOR)--------*/
let images = document.querySelectorAll(".div__grid__color img");

window.addEventListener("scroll", () => {
  images.forEach((img) => {
    let rect = img.getBoundingClientRect();

    let startOffset = 150; 

    let opacity = Math.min(Math.max((-rect.top + startOffset) / img.offsetHeight, 0), 1);

    img.style.opacity = 1 - opacity;
  });
});
/*--------GRID FOTOS (COLOR)--------*/




/*--------GRID FOTOS (ANIMACIÓN)--------*/
window.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector(".header");
  let headerSmall = document.querySelector(".header_small");
  

  let images = document.querySelectorAll(".div_img");

  // Header
  setTimeout(() => {
    header?.classList.add("is-visible");
    headerSmall?.classList.add("is-visible");
  }, 200);

  // Imágenes
  const LIMIT = 4;

  images.forEach((img, index) => {
    const delay = index < LIMIT
      ? 800 + index * 200
      : 2000 + (index - LIMIT) * 150;

    setTimeout(() => {
      img.classList.add("is-visible");
    }, delay);
  });
});
/*--------GRID FOTOS (ANIMACIÓN)--------*/




/*--------GRID FOTOS (BYN)--------*/

let imagesbyn = document.querySelectorAll(".div__grid__byn img");

window.addEventListener("scroll", () => {
  imagesbyn.forEach((img) => {
    let rect = img.getBoundingClientRect();

    let startOffset = 150; 

    let opacity = Math.min(Math.max((-rect.top + startOffset) / img.offsetHeight, 0), 1);

    img.style.opacity = 1 - opacity;
  });
});
/*--------GRID FOTOS (BYN)--------*/





/*--------GRID FOTOS (CAPTIONS)--------*/
let texto = document.querySelectorAll(".caption");

window.addEventListener("scroll", () => {
  texto.forEach((p) => {
    let rect = p.getBoundingClientRect();

    let startOffset = 200;

    let progress = Math.min(
      Math.max((-rect.top + startOffset) / p.offsetHeight, 0),
      1
    );

    if (progress > 0.5) {
      p.classList.add("hidden");
    } else {
      p.classList.remove("hidden");
    }
  });
});
/*--------GRID FOTOS (CAPTIONS)--------*/



/*--------GALERIA FOTOS--------*/



              /*--------FUNCIONES COMPARTIDAS--------*/
function cambiarImagen(img, nuevoSrc, callback) {
  img.style.transition = "opacity 0.2s ease";
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = nuevoSrc;
    img.onload = () => {
      callback(img);
      img.style.opacity = 1;
    };
  }, 300);
}

function ajustarTamaño(img) {
  if (img.naturalWidth > img.naturalHeight) {
    img.classList.add("horizontal");
    img.classList.remove("vertical");
  } else {
    img.classList.add("vertical");
    img.classList.remove("horizontal");
  }
}

function ajustarTamañoByn(img) {
  if (img.naturalWidth > img.naturalHeight) {
    img.classList.add("horizontal__byn");
    img.classList.remove("vertical__byn");
  } else {
    img.classList.add("vertical__byn");
    img.classList.remove("horizontal__byn");
  }
}
              /*--------FUNCIONES COMPARTIDAS--------*/




/*--------GALERÍA FOTOS (COLOR)--------*/
let imagenes = [
  { src: "Media/grid_1_color.jpg", numero: "01" },
  { src: "Media/grid_2_color.jpg", numero: "02" },
  { src: "Media/grid_3_color.jpg", numero: "03" },
  { src: "Media/grid_4_color.jpg", numero: "04" },
  { src: "Media/grid_5_color.jpg", numero: "05" },
  { src: "Media/grid_6_color.jpg", numero: "06" },
  { src: "Media/grid_7_color.jpg", numero: "07" },
  { src: "Media/grid_8_color.jpg", numero: "08" },
  { src: "Media/grid_9_color.jpg", numero: "09" },
  { src: "Media/grid_10_color.jpg", numero: "10" },
  { src: "Media/grid_11_color.jpg", numero: "11" },
  { src: "Media/grid_12_color.jpg", numero: "12" },
  { src: "Media/grid_13_color.jpg", numero: "13" },
  { src: "Media/grid_14_color.jpg", numero: "14" },
  { src: "Media/grid_15_color.jpg", numero: "15" },
  { src: "Media/grid_16_color.jpg", numero: "16" },
  { src: "Media/grid_17_color.jpg", numero: "17" },
  { src: "Media/grid_18_color.jpg", numero: "18" },
  { src: "Media/grid_19_color.jpg", numero: "19" },
  { src: "Media/grid_20_color.jpg", numero: "20" },
  { src: "Media/grid_21_color.jpg", numero: "21" },
  { src: "Media/grid_22_color.jpg", numero: "22" },
  { src: "Media/grid_23_color.jpg", numero: "23" },
  { src: "Media/grid_24_color.jpg", numero: "24" },
  { src: "Media/grid_25_color.jpg", numero: "25" },
  { src: "Media/grid_26_color.jpg", numero: "26" },
  { src: "Media/grid_27_color.jpg", numero: "27" },
  { src: "Media/grid_28_color.jpg", numero: "28" },
  { src: "Media/grid_29_color.jpg", numero: "29" },
  { src: "Media/grid_30_color.jpg", numero: "30" },
];

let indexIzquierda = 0;
let indexDerecha = imagenes.length - 1;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

let caption1 = document.querySelector(".div_gallery__izquierda .caption_gallery");
let caption2 = document.querySelector(".div_gallery__derecha .caption_gallery");

if (img1 && img2) {
  caption1.textContent = `( ${imagenes[indexIzquierda].numero} )`;
  caption2.textContent = `( ${imagenes[indexDerecha].numero} )`;

  cambiarImagen(img1, imagenes[indexIzquierda].src, ajustarTamaño);
  cambiarImagen(img2, imagenes[indexDerecha].src, ajustarTamaño);

  img1.addEventListener("click", () => {
    indexIzquierda = (indexIzquierda + 1) % imagenes.length;
    cambiarImagen(img1, imagenes[indexIzquierda].src, ajustarTamaño);
    caption1.textContent = `( ${imagenes[indexIzquierda].numero} )`;
  });

  img2.addEventListener("click", () => {
    indexDerecha = (indexDerecha - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(img2, imagenes[indexDerecha].src, ajustarTamaño);
    caption2.textContent = `( ${imagenes[indexDerecha].numero} )`;
  });
}
/*--------GALERÍA FOTOS (COLOR)--------*/




/*--------GALERÍA FOTOS (BLANCO Y NEGRO)--------*/
let imagenesByn = [
  { src: "Media/grid_1_byn.jpg", numero: "01" },
  { src: "Media/grid_2_byn.jpg", numero: "02" },
  { src: "Media/grid_3_byn.jpg", numero: "03" },
  { src: "Media/grid_4_byn.jpg", numero: "04" },
  { src: "Media/grid_5_byn.jpg", numero: "05" },
  { src: "Media/grid_6_byn.jpg", numero: "06" },
  { src: "Media/grid_7_byn.jpg", numero: "07" },
  { src: "Media/grid_8_byn.jpg", numero: "08" },
  { src: "Media/grid_9_byn.jpg", numero: "09" },
  { src: "Media/grid_10_byn.jpg", numero: "10" },
  { src: "Media/grid_11_byn.jpg", numero: "11" },
  { src: "Media/grid_12_byn.jpg", numero: "12" },
  { src: "Media/grid_13_byn.jpg", numero: "13" },
  { src: "Media/grid_14_byn.jpg", numero: "14" },
  { src: "Media/grid_15_byn.jpg", numero: "15" },
  { src: "Media/grid_16_byn.jpg", numero: "16" },
  { src: "Media/grid_17_byn.jpg", numero: "17" },
  { src: "Media/grid_18_byn.jpg", numero: "18" },
  { src: "Media/grid_19_byn.jpg", numero: "19" },
  { src: "Media/grid_20_byn.jpg", numero: "20" },
  { src: "Media/grid_21_byn.jpg", numero: "21" },
  { src: "Media/grid_22_byn.jpg", numero: "22" },
  { src: "Media/grid_23_byn.jpg", numero: "23" },
  { src: "Media/grid_24_byn.jpg", numero: "24" },
  { src: "Media/grid_25_byn.jpg", numero: "25" },
  { src: "Media/grid_26_byn.jpg", numero: "26" },
  { src: "Media/grid_27_byn.jpg", numero: "27" },
  { src: "Media/grid_28_byn.jpg", numero: "28" },
  { src: "Media/grid_29_byn.jpg", numero: "29" },
  { src: "Media/grid_30_byn.jpg", numero: "30" },
];

let indexIzquierdaByn = 0;
let indexDerechaByn = imagenesByn.length - 1;

let img1byn = document.getElementById("img1byn");
let img2byn = document.getElementById("img2byn");

let caption1byn = document.getElementById("caption1byn");
let caption2byn = document.getElementById("caption2byn");

if (img1byn && img2byn) {
  caption1byn.textContent = `( ${imagenesByn[indexIzquierdaByn].numero} )`;
  caption2byn.textContent = `( ${imagenesByn[indexDerechaByn].numero} )`;

  cambiarImagen(img1byn, imagenesByn[indexIzquierdaByn].src, ajustarTamañoByn);
  cambiarImagen(img2byn, imagenesByn[indexDerechaByn].src, ajustarTamañoByn);

  img1byn.addEventListener("click", () => {
    indexIzquierdaByn = (indexIzquierdaByn + 1) % imagenesByn.length;
    cambiarImagen(img1byn, imagenesByn[indexIzquierdaByn].src, ajustarTamañoByn);
    caption1byn.textContent = `( ${imagenesByn[indexIzquierdaByn].numero} )`;
  });

  img2byn.addEventListener("click", () => {
    indexDerechaByn = (indexDerechaByn - 1 + imagenesByn.length) % imagenesByn.length;
    cambiarImagen(img2byn, imagenesByn[indexDerechaByn].src, ajustarTamañoByn);
    caption2byn.textContent = `( ${imagenesByn[indexDerechaByn].numero} )`;
  });
}
/*--------GALERÍA FOTOS (BLANCO Y NEGRO)--------*/
