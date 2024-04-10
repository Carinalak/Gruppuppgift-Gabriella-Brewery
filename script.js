//MENU

let menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', toggleDisplay);

function toggleDisplay() {

    menu.classList.toggle('menu-visible');
  }