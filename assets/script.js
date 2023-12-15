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

//je recupère l'element du DOM banner img
let slideImg = document.querySelector(".banner-img");

//et je recupère l'element de ma tag line
let slideTagLine = document.querySelector("#banner p");

// je recupère la fleche de droite
let flecheDeDroite = document.querySelector(".arrow_right");

//je crée une fonction pour mettre a jour l'image et le text de mon carrousel
function carrousel() {
  slideImg.src = slides[slidesIndex].image;
  slideTagLine.innerHTML = slides[slidesIndex].tagLine;
}

// je mets un evenement sur ma fleche au click
flecheDeDroite.addEventListener("click", function () {
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
  carrousel();
  dotsCarrousel();
  console.log("Vous avez cliqué sur flecheDeDroite");
});

//je mets un événements au click sur la flèche de gauche
let flecheDeGauche = document.querySelector(".arrow_left");
flecheDeGauche.addEventListener("click", function () {
  //je fais la meme condition que la fleche de droite mais je decremente cette fois ci
  slidesIndex--;
  // Si je dépasse le début du tableau
  if (slidesIndex < 0) {
    //je vais a la fin
    slidesIndex = slides.length - 1;
  }
  //j'integre mes fonctions pour qu'elles se mettent en place au click
  carrousel();
  dotsCarrousel();
  console.log("Vous avez cliqué sur flecheDeGauche");
});

//je ccrée une boucle pour afficher mes bulles
for (i = 0; i < slides.length; i++) {
  //je crée un ediv pour contenir mes bulles
  let baliseDot = document.createElement("div");
  baliseDot.classList.add("dot");
  let baliseDots = document.querySelector(".dots");
  baliseDots.appendChild(baliseDot);
  /*//je crée la class dot_selected pour se positionner dans le carrousel
  let dotActive = document.querySelector(".dot");
  dotActive.classList.add("dot_selected");*/
}
function dotsCarrousel() {
  // je recupere tout les dot
  let dots = document.querySelectorAll(".dot");

  //boucle pour que modifier la class dot => dot selected
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_selected");
  }

  //je crée la class dot-selected
  dots[slidesIndex].classList.add("dot_selected");
}
