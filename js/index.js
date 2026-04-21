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
      // Array de imágenes para la galería
let imagenesIzquierda = [
  "Media/grid_1_color.jpg",
  "Media/grid_2_color.jpg",
  "Media/grid_3_color.jpg",
  "Media/grid_4_color.jpg",
  "Media/grid_5_color.jpg",
];

let imagenesDerecha = [
  "Media/grid_6_color.jpg",
  "Media/grid_7_color.jpg",
  "Media/grid_8_color.jpg",
  "Media/grid_9_color.jpg",
  "Media/grid_10_color.jpg",
  "Media/grid_11_color.jpg",
  "Media/grid_12_color.jpg",
  "Media/grid_13_color.jpg",
];

let index1 = 0;
let index2 = 0;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

img1.addEventListener("click", () => {
  index1 = (index1 + 1) % imagenesIzquierda.length;
  img1.src = imagenesIzquierda[index1];
});

img2.addEventListener("click", () => {
  index2 = (index2 + 1) % imagenesDerecha.length;
  img2.src = imagenesDerecha[index2];
});
    // Array de imágenes para la galería




    // Diferentes tamaños de las imágenes
let imgGaleriaIzquierda = document.getElementById("img1");

function tamañoGaleriaIzquierda() {

    if (imgGaleriaIzquierda.width > imgGaleriaIzquierda.height) {
        imgGaleriaIzquierda.classList.add("horizontal");
        imgGaleriaIzquierda.classList.remove("vertical");
    } else {
        imgGaleriaIzquierda.classList.add("vertical");
        imgGaleriaIzquierda.classList.remove("horizontal");
    }
}

imgGaleriaIzquierda.onload = tamañoGaleriaIzquierda;



let imgGaleriaDerecha = document.getElementById("img2");

function tamañoGaleriaDerecha() {

    if (imgGaleriaDerecha.width > imgGaleriaDerecha.height) {
        imgGaleriaDerecha.classList.add("horizontal");
        imgGaleriaDerecha.classList.remove("vertical");
    } else {
        imgGaleriaDerecha.classList.add("vertical");
        imgGaleriaDerecha.classList.remove("horizontal");
    }
}

imgGaleriaDerecha.onload = tamañoGaleriaDerecha;
    // Diferentes tamaños de las imágenes

/*--------GALERÍA FOTOS--------*/

