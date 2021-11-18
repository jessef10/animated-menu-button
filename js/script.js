'use strict';

showMenu();
closeMenu();

function showMenu() {
  let menuOpenIcon = document.querySelector('.menu__icon');
  console.log(menuOpenIcon);
  let menuOverlay = document.querySelector('.menu__overlay');
  menuOpenIcon.addEventListener('click', function() {
    menuOverlay.style.width = "40%";
  });
}

function closeMenu() {
  let menuCloseIcon = document.querySelector('.menu__close__icon');
  let menuOverlay = document.querySelector('.menu__overlay');
  menuCloseIcon.addEventListener('click', function() {
    menuOverlay.style.width = "0";
  });
}
