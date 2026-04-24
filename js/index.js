/* ESTRUCTURA */
/*
-Abrir/cerrar About
-Botón Back to the top
-Grid fotos (Color)
-Grid fotos (Animación)
-Grid fotos (Blanco y negro)
-Grid fotos (Captions)
-Galería fotos
-Galería fotos (Color)
-Galería fotos (Blanco y negro)
-Grid fotos (Animación)
*/
/* ESTRUCTURA */


/* ABRIR/CERRAR ABOUT - Abre un cierra el about con un Toggle */
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
/* ABRIR/CERRAR ABOUT */




/* BOTÓN BACK TO THE TOP - Detecta el scroll y genera botón para subir arriba*/
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
/* BOTÓN BACK TO THE TOP */




/* GRID FOTOS (COLOR) -  Aplica un efecto de desvanecimiento cuando la imagen llega a cierta parte de la pantalla*/
let images = document.querySelectorAll(".div__grid__color img");

window.addEventListener("scroll", () => {
  images.forEach((img) => {
    let rect = img.getBoundingClientRect();

    let startOffset = 150; 

    let opacity = Math.min(Math.max((-rect.top + startOffset) / img.offsetHeight, 0), 1);

    img.style.opacity = 1 - opacity;
  });
});
/* GRID FOTOS (COLOR) */




/* GRID FOTOS (ANIMACIÓN) - Animación de imágenes al cargar*/ 
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
/* GRID FOTOS (ANIMACIÓN) */




/* GRID FOTOS (BLANCO Y NEGRO) - Animación de fotos al hacer scroll */

let imagesbyn = document.querySelectorAll(".div__grid__byn img");

window.addEventListener("scroll", () => {
  imagesbyn.forEach((img) => {
    let rect = img.getBoundingClientRect();

    let startOffset = 150; 

    let opacity = Math.min(Math.max((-rect.top + startOffset) / img.offsetHeight, 0), 1);

    img.style.opacity = 1 - opacity;
  });
});
/* GRID FOTOS (BLANCO Y NEGRO) */





/* GRID FOTOS (CAPTIONS) - Animación de captions al hacer scroll */
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
/* GRID FOTOS (CAPTIONS) */



/* GALERÍA FOTOS - Cambio de fotos al hacer click */

              /* FUNCIONES COMPARTIDAS */
function cambiarImagen(img, nuevoSrc, nuevoWebp, callback) {
  img.style.transition = "opacity 0.2s ease";
  img.style.opacity = 0;

  setTimeout(() => {
    let picture = img.closest("picture");
    if (picture) {
      let source = picture.querySelector("source[type='image/webp']");
      if (source) source.srcset = nuevoWebp;
    }

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
              /* FUNCIONES COMPARTIDAS */




/* GALERÍA FOTOS (COLOR) - Array de fotos (en webp) que se cambian al hacer click*/
let imagenes = [
  { src: "Media/grid_1_color.jpg", webp: "Media/optimizadas/grid_1_color.webp", numero: "01" },
  { src: "Media/grid_2_color.jpg", webp: "Media/optimizadas/grid_2_color.webp", numero: "02" },
  { src: "Media/grid_3_color.jpg", webp: "Media/optimizadas/grid_3_color.webp", numero: "03" },
  { src: "Media/grid_4_color.jpg", webp: "Media/optimizadas/grid_4_color.webp", numero: "04" },
  { src: "Media/grid_5_color.jpg", webp: "Media/optimizadas/grid_5_color.webp", numero: "05" },
  { src: "Media/grid_6_color.jpg", webp: "Media/optimizadas/grid_6_color.webp", numero: "06" },
  { src: "Media/grid_7_color.jpg", webp: "Media/optimizadas/grid_7_color.webp", numero: "07" },
  { src: "Media/grid_8_color.jpg", webp: "Media/optimizadas/grid_8_color.webp", numero: "08" },
  { src: "Media/grid_9_color.jpg", webp: "Media/optimizadas/grid_9_color.webp", numero: "09" },
  { src: "Media/grid_10_color.jpg", webp: "Media/optimizadas/grid_10_color.webp", numero: "10" },
  { src: "Media/grid_11_color.jpg", webp: "Media/optimizadas/grid_11_color.webp", numero: "11" },
  { src: "Media/grid_12_color.jpg", webp: "Media/optimizadas/grid_12_color.webp", numero: "12" },
  { src: "Media/grid_13_color.jpg", webp: "Media/optimizadas/grid_13_color.webp", numero: "13" },
  { src: "Media/grid_14_color.jpg", webp: "Media/optimizadas/grid_14_color.webp", numero: "14" },
  { src: "Media/grid_15_color.jpg", webp: "Media/optimizadas/grid_15_color.webp", numero: "15" },
  { src: "Media/grid_16_color.jpg", webp: "Media/optimizadas/grid_16_color.webp", numero: "16" },
  { src: "Media/grid_17_color.jpg", webp: "Media/optimizadas/grid_17_color.webp", numero: "17" },
  { src: "Media/grid_18_color.jpg", webp: "Media/optimizadas/grid_18_color.webp", numero: "18" },
  { src: "Media/grid_19_color.jpg", webp: "Media/optimizadas/grid_19_color.webp", numero: "19" },
  { src: "Media/grid_20_color.jpg", webp: "Media/optimizadas/grid_20_color.webp", numero: "20" },
  { src: "Media/grid_21_color.jpg", webp: "Media/optimizadas/grid_21_color.webp", numero: "21" },
  { src: "Media/grid_22_color.jpg", webp: "Media/optimizadas/grid_22_color.webp", numero: "22" },
  { src: "Media/grid_23_color.jpg", webp: "Media/optimizadas/grid_23_color.webp", numero: "23" },
  { src: "Media/grid_24_color.jpg", webp: "Media/optimizadas/grid_24_color.webp", numero: "24" },
  { src: "Media/grid_25_color.jpg", webp: "Media/optimizadas/grid_25_color.webp", numero: "25" }
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

  cambiarImagen(img1, imagenes[indexIzquierda].src, imagenes[indexIzquierda].webp, ajustarTamaño);
  cambiarImagen(img2, imagenes[indexDerecha].src, imagenes[indexDerecha].webp, ajustarTamaño);

  img1.addEventListener("click", () => {
    indexIzquierda = (indexIzquierda + 1) % imagenes.length;
    cambiarImagen(img1, imagenes[indexIzquierda].src, imagenes[indexIzquierda].webp, ajustarTamaño);
    caption1.textContent = `( ${imagenes[indexIzquierda].numero} )`;
  });

  img2.addEventListener("click", () => {
    indexDerecha = (indexDerecha - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(img2, imagenes[indexDerecha].src, imagenes[indexDerecha].webp, ajustarTamaño);
    caption2.textContent = `( ${imagenes[indexDerecha].numero} )`;
  });
}
/* GALERÍA FOTOS (COLOR) */




/* GALERÍA FOTOS (BLANCO Y NEGRO) - Array de fotos que se cambian al hacer click */
let imagenesByn = [
  { src: "Media/grid_1_byn.jpg", webp: "Media/optimizadas/grid_1_byn.webp", numero: "01" },
  { src: "Media/grid_2_byn.jpg", webp: "Media/optimizadas/grid_2_byn.webp", numero: "02" },
  { src: "Media/grid_3_byn.jpg", webp: "Media/optimizadas/grid_3_byn.webp", numero: "03" },
  { src: "Media/grid_4_byn.jpg", webp: "Media/optimizadas/grid_4_byn.webp", numero: "04" },
  { src: "Media/grid_5_byn.jpg", webp: "Media/optimizadas/grid_5_byn.webp", numero: "05" },
  { src: "Media/grid_6_byn.jpg", webp: "Media/optimizadas/grid_6_byn.webp", numero: "06" },
  { src: "Media/grid_7_byn.jpg", webp: "Media/optimizadas/grid_7_byn.webp", numero: "07" },
  { src: "Media/grid_8_byn.jpg", webp: "Media/optimizadas/grid_8_byn.webp", numero: "08" },
  { src: "Media/grid_9_byn.jpg", webp: "Media/optimizadas/grid_9_byn.webp", numero: "09" },
  { src: "Media/grid_10_byn.jpg", webp: "Media/optimizadas/grid_10_byn.webp", numero: "10" },
  { src: "Media/grid_11_byn.jpg", webp: "Media/optimizadas/grid_11_byn.webp", numero: "11" },
  { src: "Media/grid_12_byn.jpg", webp: "Media/optimizadas/grid_12_byn.webp", numero: "12" },
  { src: "Media/grid_13_byn.jpg", webp: "Media/optimizadas/grid_13_byn.webp", numero: "13" },
  { src: "Media/grid_14_byn.jpg", webp: "Media/optimizadas/grid_14_byn.webp", numero: "14" },
  { src: "Media/grid_15_byn.jpg", webp: "Media/optimizadas/grid_15_byn.webp", numero: "15" },
  { src: "Media/grid_16_byn.jpg", webp: "Media/optimizadas/grid_16_byn.webp", numero: "16" },
  { src: "Media/grid_17_byn.jpg", webp: "Media/optimizadas/grid_17_byn.webp", numero: "17" },
  { src: "Media/grid_18_byn.jpg", webp: "Media/optimizadas/grid_18_byn.webp", numero: "18" },
  { src: "Media/grid_19_byn.jpg", webp: "Media/optimizadas/grid_19_byn.webp", numero: "19" },
  { src: "Media/grid_20_byn.jpg", webp: "Media/optimizadas/grid_20_byn.webp", numero: "20" },
  { src: "Media/grid_21_byn.jpg", webp: "Media/optimizadas/grid_21_byn.webp", numero: "21" },
  { src: "Media/grid_22_byn.jpg", webp: "Media/optimizadas/grid_22_byn.webp", numero: "22" },
  { src: "Media/grid_23_byn.jpg", webp: "Media/optimizadas/grid_23_byn.webp", numero: "23" },
  { src: "Media/grid_24_byn.jpg", webp: "Media/optimizadas/grid_24_byn.webp", numero: "24" },
  { src: "Media/grid_25_byn.jpg", webp: "Media/optimizadas/grid_25_byn.webp", numero: "25" }
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

  cambiarImagen(img1byn, imagenesByn[indexIzquierdaByn].src, imagenesByn[indexIzquierdaByn].webp, ajustarTamañoByn);
  cambiarImagen(img2byn, imagenesByn[indexDerechaByn].src, imagenesByn[indexDerechaByn].webp, ajustarTamañoByn);

  img1byn.addEventListener("click", () => {
    indexIzquierdaByn = (indexIzquierdaByn + 1) % imagenesByn.length;
    cambiarImagen(img1byn, imagenesByn[indexIzquierdaByn].src, imagenesByn[indexIzquierdaByn].webp, ajustarTamañoByn);
    caption1byn.textContent = `( ${imagenesByn[indexIzquierdaByn].numero} )`;
  });

  img2byn.addEventListener("click", () => {
    indexDerechaByn = (indexDerechaByn - 1 + imagenesByn.length) % imagenesByn.length;
    cambiarImagen(img2byn, imagenesByn[indexDerechaByn].src, imagenesByn[indexDerechaByn].webp, ajustarTamañoByn);
    caption2byn.textContent = `( ${imagenesByn[indexDerechaByn].numero} )`;
  });
}
/* GALERÍA FOTOS (BLANCO Y NEGRO) */




/* GRID FOTOS (ANIMACIÓN) - Animación del header, grid y galería al cargar web */
window.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector(".header");
  let headerSmall = document.querySelector(".header_small");

  setTimeout(() => {
    header?.classList.add("is-visible");
    headerSmall?.classList.add("is-visible");
  }, 200);

      /* GRID  */
  let gridImgs = document.querySelectorAll(".div_img");
  const LIMIT = 4;
  gridImgs.forEach((img, index) => {
    const delay = index < LIMIT
      ? 800 + index * 200
      : 2000 + (index - LIMIT) * 150;
    setTimeout(() => img.classList.add("is-visible"), delay);
  });
      /* GRID  */


      /* GALERÍA  */
  let galleryImgs = document.querySelectorAll(".img_gallery, .img_gallery__byn");
  let galleryCaptions = document.querySelectorAll(".caption_gallery, .caption_gallery__byn");

  galleryImgs.forEach((el, i) => {
    el.addEventListener("load", () => {
      setTimeout(() => el.classList.add("is-visible"), i * 500);
    });
    if (el.complete) {
      setTimeout(() => el.classList.add("is-visible"), 400 + i * 500);
    }
  });

  galleryCaptions.forEach((el, i) => {
    setTimeout(() => el.classList.add("is-visible"), 700 + i * 500);
  });
});
      /* GALERÍA  */
/* GRID FOTOS (ANIMACIÓN) */