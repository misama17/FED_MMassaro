// ************************************
// ------------- CONSTANTS ------------
// ************************************

// ---------- HAMBURGERMENU ----------
const openButton = document.querySelector("header > button");
const navigation = document.querySelector("nav");
const closeButton = document.querySelector("nav button");






// ************************************
// ------------- FUNCTIONS ------------
// ************************************

// ---------- HAMBURGERMENU ----------
// !! Met behulp van de huiswerkopdrachten van DLO
function openMenu() {
  navigation.classList.toggle("showMenu");
}

function closeMenu() {
  navigation.classList.remove("showMenu");
}






// ************************************
// ---------- EVENTLISTENERS ----------
// ************************************

// ---------- HAMBURGERMENU ----------
openButton.onclick = openMenu;
closeButton.onclick = closeMenu;