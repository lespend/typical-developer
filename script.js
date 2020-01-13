"use strict";

let mobileMenuButton = document.getElementsByClassName('navigation__hamburger-button')[0];
let mobileMenuButtonShow = document.getElementsByClassName('navigation__hamburger-button-wrapper')[0];
let mobileNavigation = document.getElementsByClassName('main-navigation__mobile-wrapper')[0];

mobileMenuButton.onclick = function() {
    mobileNavigation.classList.toggle('show-navigation');
    mobileMenuButtonShow.classList.toggle('show-navigation');
}