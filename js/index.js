/*--------ABOUT--------*/
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
/*--------ABOUT--------*/




/*--------BACK TO THE TOP--------*/
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
/*--------BACK TO THE TOP--------*/




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

const imagesbyn = document.querySelectorAll(".div__grid__byn img");

window.addEventListener("scroll", () => {
  imagesbyn.forEach((img) => {
    const rect = img.getBoundingClientRect();

    const startOffset = 150; 

    const opacity = Math.min(Math.max((-rect.top + startOffset) / img.offsetHeight, 0), 1);

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





/*--------GALERÍA FOTOS--------*/
/*--------GALERÍA FOTOS--------*/

/* Las primeras visibles en HTML son 01 y 02 */
/* El array empieza desde la siguiente foto */

let imagenesIzquierda = [
  { src: "Media/grid_3_color.jpg", numero: "03" },
  { src: "Media/grid_5_color.jpg", numero: "05" },
  { src: "Media/grid_7_color.jpg", numero: "07" },
  { src: "Media/grid_9_color.jpg", numero: "09" },
  { src: "Media/grid_11_color.jpg", numero: "11" },
  { src: "Media/grid_13_color.jpg", numero: "13" },
  { src: "Media/grid_15_color.jpg", numero: "15" },
  { src: "Media/grid_17_color.jpg", numero: "17" },
  { src: "Media/grid_19_color.jpg", numero: "19" },
  { src: "Media/grid_21_color.jpg", numero: "21" },
  { src: "Media/grid_23_color.jpg", numero: "23" },
  { src: "Media/grid_25_color.jpg", numero: "25" },
  { src: "Media/grid_27_color.jpg", numero: "27" },
  { src: "Media/grid_29_color.jpg", numero: "29" }
];

let imagenesDerecha = [
  { src: "Media/grid_4_color.jpg", numero: "04" },
  { src: "Media/grid_6_color.jpg", numero: "06" },
  { src: "Media/grid_8_color.jpg", numero: "08" },
  { src: "Media/grid_10_color.jpg", numero: "10" },
  { src: "Media/grid_12_color.jpg", numero: "12" },
  { src: "Media/grid_14_color.jpg", numero: "14" },
  { src: "Media/grid_16_color.jpg", numero: "16" },
  { src: "Media/grid_18_color.jpg", numero: "18" },
  { src: "Media/grid_20_color.jpg", numero: "20" },
  { src: "Media/grid_22_color.jpg", numero: "22" },
  { src: "Media/grid_24_color.jpg", numero: "24" },
  { src: "Media/grid_26_color.jpg", numero: "26" },
  { src: "Media/grid_28_color.jpg", numero: "28" },
  { src: "Media/grid_30_color.jpg", numero: "30" }
];

let index1 = 0;
let index2 = 0;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

let caption1 = document.querySelector(".div_gallery__izquierda .caption_gallery");
let caption2 = document.querySelector(".div_gallery__derecha .caption_gallery");

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

/* Mantiene 01 y 02 iniciales del HTML */
caption1.textContent = "( 01 )";
caption2.textContent = "( 02 )";

/* Click izquierda */
img1.addEventListener("click", () => {
  cambiarImagen(
    img1,
    imagenesIzquierda[index1].src,
    ajustarTamaño
  );

  caption1.textContent = `( ${imagenesIzquierda[index1].numero} )`;

  index1 = (index1 + 1) % imagenesIzquierda.length;
});

/* Click derecha */
img2.addEventListener("click", () => {
  cambiarImagen(
    img2,
    imagenesDerecha[index2].src,
    ajustarTamaño
  );

  caption2.textContent = `( ${imagenesDerecha[index2].numero} )`;

  index2 = (index2 + 1) % imagenesDerecha.length;
});

/*--------GALERÍA FOTOS--------*/


/*--------GALERÍA FOTOS--------*/

