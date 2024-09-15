console.log("hi");

const slide = document.querySelector('section:nth-of-type(2) li');
const previousButton = document.querySelector('section:nth-of-type(2) button:nth-of-type(1)');
const nextButton = document.querySelector('section:nth-of-type(2) button:nth-of-type(2)');
let currentSlide = 0;
let index = 0;

function slideShow(index) {
    // Verander het indexnummer om ervoor te zorgen dat we binnen de grenzen blijven
    if (index >= slide.length) {
      currentSlide = 0; // Ga terug naar de eerste afbeelding
    } else if (index < 0) {
      currentSlide = slide.length - 1; // Ga naar de laatste afbeelding
    } else {
      currentSlide = index;
    }

    // ChatGPT
    document.querySelector('section:nth-of-type(2) > section:nth-of-type(2)').style.transform = `translateX(-${currentSlide * 96}%)`;
}

function nextSlide() {
    slideShow(currentSlide + 1);
}
  
  function previousSlide() {
    slideShow(currentSlide - 1);
}

previousButton.onclick = previousSlide; 
nextButton.onclick = nextSlide;