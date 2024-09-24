// // CONSTANTS
// const openButton = document.querySelector("header > button");
// const navigation = document.querySelector("nav");
// const closeButton = document.querySelector("nav button");

// const slides1 = document.querySelectorAll('section:nth-of-type(2) li');
// const previousButton1 = document.querySelector('section:nth-of-type(2) button:nth-of-type(1)');
// const nextButton1 = document.querySelector('section:nth-of-type(2) button:nth-of-type(2)');
// const slides2 = document.querySelectorAll('section:nth-of-type(4) li');
// const previousButton2 = document.querySelector('section:nth-of-type(4) button:nth-of-type(1)');
// const nextButton2 = document.querySelector('section:nth-of-type(4) button:nth-of-type(2)');

// // VARIABLES
// let currentSlide1 = 0;
// let totalSlides1 = slides1.length;
// let currentSlide2 = 0;
// let totalSlides2 = slides2.length;



// // ---------- MENU ----------
// function openMenu() {
//     navigation.classList.toggle("showMenu");
// }

// function closeMenu() {
//     navigation.classList.remove("showMenu");
// }



// // ---------- CAROUSEL SLIDE SHOW ----------
// // CHATGPT >> vraag: ik wil een carousel maken waarbij je naar het volgende en vorige plaatje kunt gaan door te klikken op een button.
// function slideShow1(index) {
//     if (index >= totalSlides1) {
//       currentSlide1 = 0; // Ga terug naar de eerste afbeelding
//     } else if (index < 0) {
//       currentSlide1 = totalSlides1 - 1; // Ga naar de laatste afbeelding
//     } else {
//       currentSlide1 = index;
//     }

//     // ChatGPT
//     document.querySelector('section:nth-of-type(2) > section:nth-of-type(2)').style.transform = `translateX(-${currentSlide1 * 100}%)`;
// }

// function nextSlide1() {
//   slideShow1(currentSlide1 + 1);
// }
  
// function previousSlide1() {
//   slideShow1(currentSlide1 - 1);
// }

// function slideShow2(index) {
//   if (index >= totalSlides2) {
//     currentSlide2 = 0; // Ga terug naar de eerste afbeelding
//   } else if (index < 0) {
//     currentSlide2 = totalSlides2 - 1; // Ga naar de laatste afbeelding
//   } else {
//     currentSlide2 = index;
//   }

//   // ChatGPT
//   document.querySelector('section:nth-of-type(4) > section:nth-of-type(2)').style.transform = `translateX(-${currentSlide2 * 100}%)`;
// }

// function nextSlide2() {
//   slideShow2(currentSlide2 + 1);
// }

// function previousSlide2() {
//   slideShow2(currentSlide2 - 1);
// }




// // ---------- EVENTLISTENERS ----------
// openButton.onclick = openMenu;
// closeButton.onclick = closeMenu;
// previousButton1.onclick = previousSlide1; 
// nextButton1.onclick = nextSlide1;
// previousButton2.onclick = previousSlide2; 
// nextButton2.onclick = nextSlide2;







// const cursor = document.querySelector('div');

// // Zorgt ervoor dat de cirkel de muis volgt
// document.addEventListener('mousemove', function (e) {
// cursor.style.left = e.pageX + 'px';
// cursor.style.top = e.pageY + 'px';
//  });

// // Grotere cirkel bij hover (optioneel)
// document.addEventListener('mousedown', function () {
// cursor.style.transform = 'scale(1.5)';
// });

// document.addEventListener('mouseup', function () {
// cursor.style.transform = 'scale(1)';
// });


// Zorg ervoor dat de cirkel de muis volgt
// document.addEventListener('mousemove', function (e) {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
// });

// document.body.onmousemove = function(e) {
//   document.documentElement.style.setProperty (
//     '--x', (
//       e.clientX+window.scrollX
//     )
//     + 'px'
//   );
//   document.documentElement.style.setProperty (
//     '--y', (
//       e.clientY+window.scrollY
//     ) 
//     + 'px'
//   );
// }

document.body.onmousemove = function(e) {
  // Stel de CSS-variabelen in op basis van de muispositie
  document.documentElement.style.setProperty('--x', (e.clientX + window.scrollX)  + 'px');
  document.documentElement.style.setProperty('--y', (e.clientY + window.scrollY)  + 'px');
}