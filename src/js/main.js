'use strict';

var openMenuButton = document.getElementById('open-menu');
var closeMenuButton = document.getElementById('close-menu');
var navMenu = document.getElementById('side-menu');
var content = document.getElementsByClassName('content-wrap');
var links = document.getElementsByClassName('nav-link');

function toggleInert(elementList) {
    for (var i=0; i < elementList.length; i++) {
        if (elementList[i].hasAttribute('inert')) {
            elementList[i].removeAttribute('inert');
        } else {
            elementList[i].setAttribute('inert', '');
        }
    }
}

for(var i = 0 ; i < links.length; i++){
    links[i].addEventListener("click", function(){
        navMenu.classList.remove('side-menu--open');
        toggleInert(content);
    });
}

openMenuButton.addEventListener("click", function(){
    navMenu.classList.add('side-menu--open');
    navMenu.classList.remove('side-menu--closed');
    toggleInert(content);
    closeMenuButton.focus();
});


closeMenuButton.addEventListener("click", function () {
    navMenu.classList.remove('side-menu--open');
    navMenu.classList.add('side-menu--closed');
    toggleInert(content);
    openMenuButton.focus();
});

createFooter();
configureClock();
updateClock();
runTheClock();
setInterval(runTheClock, 1000);