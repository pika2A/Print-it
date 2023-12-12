const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow//slide2.jpg",
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
//je recupere ma balise image par sa class
let bannerImg = document.querySelector(".banner-img");
// je cree une variable => substring() pour extraire le nom de fichier de l’image à partir de son URL.
let bannerImgName = bannerImg.src.substring(
  // et je recuper l'index à partir de la derniere occurence => /
  bannerImg.src.lastIndexOf("/") + 1,
  bannerImg.src.length
);
// je cree ma boucle pour integré les bullets
for (let i = 0; i < slides.length; i++) {
  //je cree une nouvelle balise
  let baliseDot = document.createElement("div");
  // je lui cree une class
  baliseDot.classList.add("dot");

  //j'integre ma nouvelle balise a son parent
  let baliseDots = document.querySelector(".dots");
  baliseDots.appendChild(baliseDot);
  // si dot sur image alors dot = dot_selected

  if (bannerImgName === slides[i].image) {
    baliseDot.classList.add("dot_selected");
  }
}

// j'Ajoute un index pour suivre l'image actuelle
let slidesIndex = 0;

let flechDeDroite = document.querySelector(".arrow_right");
//j'ajoute un evenement qd je clique sur ma fleche de droite
flechDeDroite.addEventListener("click", function () {
  // Supprime la boucle for, elle n'est plus nécessaire
  for (slidesIndex.length = 0; slidesIndex.length < 3; slidesIndex.length++);
  slidesIndex++;

  console.log("slidesIndex: ", slidesIndex);
  console.log("Current image: ", slides[slidesIndex].image);
  console.log("Vous avez cliqué sur la fleche de droite");
  // Mettez à jour l'image et le texte
  bannerImg.src = slides[slidesIndex].image;
  //je selectionne la tag line de mon dossier html
  let tagLineElement = document.querySelector("#banner p");
  //je mets à jour le tag line de mon element <p> en utilisant le texte de la diapositive actuelle
  tagLineElement.innerHTML = slides[slidesIndex].tagLine;
  console.log(slides[slidesIndex].image);

  // je Mets à jour les dots
  let dots = document.querySelectorAll(".dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot_selected"); // je Supprime la classe de tous les dots
    if (i === slidesIndex) {
      // Si c'est le dot actuel, ajoutez la classe
      dots[i].classList.add("dot_selected");
    }
  }
});
