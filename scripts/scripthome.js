// ************************************
// ------------- CONSTANTS ------------
// ************************************

// ---------- MENU ----------
// Hamburgermenu
const openButton = document.querySelector("header > button");
const navigation = document.querySelector("nav");
const closeButton = document.querySelector("nav button");


// ---------- CAROUSEL ----------
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


// ---------- VIDEOS ----------
// Video 1
const vid1 = document.querySelector("section:nth-of-type(3) li:nth-of-type(1) video");
const playButton1 = document.querySelector("section:nth-of-type(3) li:nth-of-type(1) button:nth-of-type(1)");
const pauseButton1 = document.querySelector("section:nth-of-type(3) li:nth-of-type(1) button:nth-of-type(2)");

// Video 2
const vid2 = document.querySelector("section:nth-of-type(3) li:nth-of-type(2) video ");
const playButton2 = document.querySelector("section:nth-of-type(3) li:nth-of-type(2) button:nth-of-type(1)");
const pauseButton2 = document.querySelector("section:nth-of-type(3) li:nth-of-type(2) button:nth-of-type(2)");

// Video 3
const vid3 = document.querySelector("section:nth-of-type(3) li:nth-of-type(3) video ");
const playButton3 = document.querySelector("section:nth-of-type(3) li:nth-of-type(3) button:nth-of-type(1)");
const pauseButton3 = document.querySelector("section:nth-of-type(3) li:nth-of-type(3) button:nth-of-type(2)");




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
// Carousel 1
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


// Carousel 2
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


// ---------- VIDEOS ----------
// BROND: https://www.w3schools.com/jsref/met_video_pause.asp#:~:text=The%20pause()%20method%20halts,%2C%20attached%20on%20the%20video).
// Video 1
function playVideo1() {
    vid1.play();
}

function pauseVideo1() {
    vid1.pause();
}


// Video 2
function playVideo2() {
    vid2.play();
}

function pauseVideo2() {
    vid2.pause();
}


// Video 3
function playVideo3() {
    vid3.play();
}

function pauseVideo3() {
    vid3.pause();
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


// Video 1
playButton1.onclick = playVideo1;
pauseButton1.onclick = pauseVideo1;

// Video 2
playButton2.onclick = playVideo2;
pauseButton2.onclick = pauseVideo2;

// Video 3
playButton3.onclick = playVideo3;
pauseButton3.onclick = pauseVideo3;