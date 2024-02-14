// tableau image et titre
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
];
// création  indeximage
let indeximage = 0;

// création et rajout des points 
document.addEventListener("DOMContentLoaded", function () {
	let points = document.querySelector('.dots');
	slides.forEach(function (slide, index) {
        let point = document.createElement('div');
        point.classList.add('dot');

      points.appendChild(point);
    });

});

// création des fleches
const flechedroite = document.querySelector(".arrow_right");
const flechegauche = document.querySelector(".arrow_left");
// test
flechegauche.addEventListener ("click", ()=> {
	console.log("fleche gauche selection")
})
flechedroite.addEventListener ("click", function() {
	console.log("fleche droite selectionnée")
});


// fonction fleche gauche = reculer d'une image et passer de la 1ère a la dernière
flechegauche.addEventListener ("click", ()=> {
	if (indeximage == 0){
		indeximage = slides.length -1;
	}else{
		indeximage = indeximage -1;
	}

	afficherBanner(slides[indeximage].image, slides[indeximage].tagLine, indeximage);
});
// fonction fleche droite avancer d'une image et passer de la dernière a la première
flechedroite.addEventListener ("click", function() {
	if (indeximage == slides.length -1) {
		indeximage = 0;
	}else{
		indeximage = indeximage +1;
	}
	
	afficherBanner(slides[indeximage].image, slides[indeximage].tagLine, indeximage);
});
// lancement de la fonction apres que le document soit chargé
document.addEventListener("DOMContentLoaded", function () {

	afficherBanner(slides[indeximage].image, slides[indeximage].tagLine, indeximage);
});

// fonction slider parametre image, titre et index
function afficherBanner (image, titre, index) {
	let carrousel = document.getElementById("banner"); // définition de la zone du slider
	let slidecarrousel = document.querySelector (".banner-img");	// définition de l'image du slide
	let titrecarrousel = document.querySelector ("#banner p");		// définition du titre
	let prefix ='./assets/images/slideshow/';						// définition adresse image

	slidecarrousel.src = prefix + image;				// image adressée
	titrecarrousel.innerHTML = titre;					//insertion du titre
	const points = document.querySelectorAll('.dot');
	points.forEach(element => {
        element.classList.remove('dot_selected');
	})
	points[index].classList.add('dot_selected');		// ajout du point selectionné sur l'image en cours
}
