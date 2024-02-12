let BanniereCarroussel = document.querySelectorAll("#banner");
const FlecheGauche = document.querySelector(".arrow_left");
const FlecheDroite = document.querySelector(".arrow_right");
let ImageBanniere = document.querySelector(".banner-img");
let Paragraphe = document.querySelector("#banner p");
const Points = document.querySelector(".dots");

let indexTableau = 0;
const path = "./assets/images/slideshow/"

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const pointVide = `
	<div class="dot"></div>
	`;
const pointPlein = `
	<div class="dot dot_selected"></div>
	`;

function changePoints() {
	let pointsDiv = ``;
	for(let i=0; i < slides.length; i++) {
		if(i === indexTableau) {
			// rond plein
			pointsDiv = pointsDiv + pointPlein
		} 
		else {
			// rond vide
			pointsDiv = pointsDiv + pointVide
		}
	}
	Points.innerHTML = pointsDiv;
}

function changeImageEtParagraphe() {
	ImageBanniere.src = path + slides[indexTableau].image;
	Paragraphe.innerHTML = slides[indexTableau].tagLine;
	changePoints();
}

changePoints();

FlecheGauche.addEventListener("click", function() {
	if(indexTableau > 0) {
		indexTableau--;
	}
	else {
		indexTableau = 3;
	}
	changeImageEtParagraphe();
});

FlecheDroite.addEventListener("click", function() {
	if(indexTableau < 3) { 
		indexTableau++;
	}
	else { 
		indexTableau = 0;
	};
	changeImageEtParagraphe();
});