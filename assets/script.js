const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// J'nitialise le tableau slides pour recuperer ses index
let slidesIndex = 0;

// je recupère la fleche de droite
let rightArrow = document.querySelector(".arrow_right");

// je mets un evenement sur ma fleche au click
rightArrow.addEventListener("click", function () {
  /*je suprime la boucle de l'etapes 3 pour pourvoir affiche mon carrousel sans erreur 
  for (slidesIndex.length = 0; slidesIndex.length < 3; slidesIndex.length++);*/

  //j'incremente de 1 les elements du tableau slides
  slidesIndex++;

  //je fais une conditions a la place de ma boucle, si mon tableau arrive a la fin il revient au debut
  // Si on dépasse la fin du tableau
  if (slidesIndex >= slides.length) {
    //je reviens au debut
    slidesIndex = 0;
  }
  //j'integre mes fonctions pour qu'elles se mettent en place au click
  changeCarouselItems();
  updateDotCarousel();
});

//je mets un événements au click sur la flèche de gauche
let leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click", function () {
  //je fais la meme condition que la fleche de droite mais je decremente cette fois ci
  slidesIndex--;
  // Si je dépasse le début du tableau
  if (slidesIndex < 0) {
    //je vais a la fin
    slidesIndex = slides.length - 1;
  }
  //j'integre mes fonctions pour qu'elles se mettent en place au click
  changeCarouselItems();
  updateDotCarousel();
});

//je ccrée une boucle pour afficher mes bulles
for (i = 0; i < slides.length; i++) {
  //je crée un ediv pour contenir mes bulles
  let baliseDot = document.createElement("div");
  baliseDot.classList.add("dot");
  let baliseDots = document.querySelector(".dots");
  baliseDots.appendChild(baliseDot);
  //je crée la class dot_selected pour se positionner dans le carrousel
  let dotSelected = document.querySelector(".dot");
  dotSelected.classList.add("dot_selected");
}

//je crée une fonction pour mettre a jour l'image et le text de mon carrousel
function changeCarouselItems() {
  //je recupère l'element du DOM banner img
  let slideImg = document.querySelector(".banner-img");

  //et je recupère l'element de ma tag line
  let slideTagLine = document.querySelector("#banner p");
  //changer le nom
  slideImg.src = slides[slidesIndex].image;
  slideTagLine.innerHTML = slides[slidesIndex].tagLine;
}

function updateDotCarousel() {
  // je recupere tout les dot
  let dot = document.querySelector(".dot_selected");

  dot.classList.remove("dot_selected");

  let dots = document.querySelectorAll(".dot");
  // j'Ajoute la classe "dot-selected" au point correspondant à l'image actuelle
  dots[slidesIndex].classList.add("dot_selected");
}
