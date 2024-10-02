// ************************************
// ------------- CONSTANTS ------------
// ************************************

// Hamburgermenu
const openButton = document.querySelector("header > button");
const navigation = document.querySelector("nav");
const closeButton = document.querySelector("nav button");

// Carousel 1: buttons 
const previousButton1 = document.querySelector('section:nth-of-type(2) button:nth-of-type(1)');
const nextButton1 = document.querySelector('section:nth-of-type(2) button:nth-of-type(2)');

// Carousel 1: slides and container
const carouselContainer1 = document.querySelector("section:nth-of-type(2) section:nth-of-type(2) ul");
const oneSlide1 = document.querySelector("section:nth-of-type(2) section:nth-of-type(2) ul li");
const oneSlideWidth1 = oneSlide1.offsetWidth;

// Carousel 2: buttons
const nextButton2 = document.querySelector('section:nth-of-type(4) button:nth-of-type(2)');
const previousButton2 = document.querySelector('section:nth-of-type(4) button:nth-of-type(1)');

// Carousel 2: slides and container
const carouselContainer2 = document.querySelector("section:nth-of-type(4) section:nth-of-type(2) ul");
const oneSlide2 = document.querySelector("section:nth-of-type(4) section:nth-of-type(2) ul li");
const oneSlideWidth2 = oneSlide2.offsetWidth;



// ************************************
// ------------- VARIABLES ------------
// ************************************
// Carousel 1
let currentSlide1 = 0;
let slides1 = document.querySelectorAll('section:nth-of-type(2) section:nth-of-type(2) ul li');
let totalSlides1 = slides1.length;

// Carousel 2
let currentSlide2 = 0;
let slides2 = document.querySelectorAll('section:nth-of-type(4) section:nth-of-type(2) ul li');
let totalSlides2 = slides2.length;







// ************************************
// ------------- FUNCTIONS ------------
// ************************************


// ---------- MENU ----------
// !! Met behulp van de huiswerkopdrachten van DLO
function openMenu() {
    navigation.classList.toggle("showMenu");
}

function closeMenu() {
    navigation.classList.remove("showMenu");
}







// ---------- CAROUSEL SLIDE SHOW ----------
// !! Met behulp van de docent >> "".scrollLeft" en "oneSlideWidth = onSLide.offsetWidth"
// !! ChatGPT >> totalSlides = slides.length. vraag: ik wil een carousel maken waarbij je naar het volgende en vorige plaatje kunt gaan door te klikken op een button.
function nextSlide1() {    
    currentSlide1 ++;

    if (currentSlide1 >= totalSlides1) {
        carouselContainer1.scrollLeft = carouselContainer1.scrollLeft - (oneSlideWidth1 * totalSlides1);
        currentSlide1 = 0;
    } else {
        carouselContainer1.scrollLeft = carouselContainer1.scrollLeft + oneSlideWidth1;
    }
}

function previousSlide1() {    
    currentSlide1 --;

    if (currentSlide1 < 0) {
        carouselContainer1.scrollLeft = carouselContainer1.scrollLeft + (oneSlideWidth1 * totalSlides1);
        currentSlide1 = totalSlides1;
    } else {
        carouselContainer1.scrollLeft = carouselContainer1.scrollLeft - oneSlideWidth1;
    }
}



function nextSlide2() {
    currentSlide2 ++;

    if (currentSlide2 >= totalSlides2) {
        carouselContainer2.scrollLeft = carouselContainer2.scrollLeft - (oneSlideWidth2 * totalSlides2);
        currentSlide2 = 0;
    } else {
        carouselContainer2.scrollLeft = carouselContainer2.scrollLeft + oneSlideWidth2;
    }
}

function previousSlide2() {
        currentSlide2 --;

    if (currentSlide2 < 0) {
        carouselContainer2.scrollLeft = carouselContainer2.scrollLeft + (oneSlideWidth2 * totalSlides2);
        currentSlide2 = totalSlides2;
    } else {
        carouselContainer2.scrollLeft = carouselContainer2.scrollLeft - oneSlideWidth2;
    }
}





// ************************************
// ---------- EVENTLISTENERS ----------
// ************************************

// Menu
openButton.onclick = openMenu;
closeButton.onclick = closeMenu;

// Carousel 1
previousButton1.onclick = previousSlide1; 
nextButton1.onclick = nextSlide1;

// Carousel 2
previousButton2.onclick = previousSlide2;
nextButton2.onclick = nextSlide2;
 
