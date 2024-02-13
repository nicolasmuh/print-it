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
let indeximage = 0;
// creation et rajout des points 
document.addEventListener("DOMContentLoaded", function () {
	let points = document.querySelector('.dots');
	slides.forEach(function (slide, index) {
        let point = document.createElement('div');
        point.classList.add('dot');

      points.appendChild(point);
    });

});

// creration des fleches
const flechedroite = document.querySelector(".arrow_right");
const flechegauche = document.querySelector(".arrow_left");
// test
flechegauche.addEventListener ("click", ()=> {
	console.log("fleche gauche selection")
})
flechedroite.addEventListener ("click", function() {
	console.log("fleche droite selectionnée")
});


// deplacement
flechegauche.addEventListener ("click", ()=> {
	if (indeximage == 0){
		indeximage = slides.length -1;
	}else{
		indeximage = indeximage -1;
	}

	afficherBanner(slides[indeximage].image, slides[indeximage].tagLine, indeximage);
});
flechedroite.addEventListener ("click", function() {
	if (indeximage == slides.length -1) {
		indeximage = 0;
	}else{
		indeximage = indeximage +1;
	}
	
	afficherBanner(slides[indeximage].image, slides[indeximage].tagLine, indeximage);
});

document.addEventListener("DOMContentLoaded", function () {

	afficherBanner(slides[indeximage].image, slides[indeximage].tagLine, indeximage);
});
function afficherBanner (image, titre, index) {
// zone carrousel slide et titre
	let carrousel = document.getElementById("banner");
	let slidecarrousel = document.querySelector (".banner-img");
	let titrecarrousel = document.querySelector ("#banner p");
	let prefix ='./assets/images/slideshow/';

	slidecarrousel.src = prefix + image;
	titrecarrousel.innerHTML = titre;
	const points = document.querySelectorAll('.dot');
	points.forEach(element => {
        element.classList.remove('dot_selected');
	})
	points[index].classList.add('dot_selected');
}
/**Changement de point actif
    const points = document.querySelectorAll('.dot');

    // Suppression du point actif au clic
    points.forEach(element => {
        element.classList.remove('dot_selected');
    })

	// Ajout du point actif au clic
    points[indexSlideActive].classList.add('dot_selected');**/