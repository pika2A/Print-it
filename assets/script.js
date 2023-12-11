const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// recuperer la fleche de gauche
let flecheDeGauche = document.querySelector(".arrow_left");
flecheDeGauche.addEventListener("click", function () {
  for (slides.length = 0; slides.length < 3; slides.length++);
  console.log("vous avez cliqué sur la fleche de gauche!");
});

let flechDeDroite = document.querySelector(".arrow_right");
flechDeDroite.addEventListener("click", function () {
  for (slides.length = 0; slides.length < 3; slides.length++);
  console.log("Vous avez cliqué sur la fleche de droite");
});

let bannerImg = document.querySelector(".banner-img");
let bannerImgName = bannerImg.src.substring(
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
