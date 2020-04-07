'use strict';

const navMenu = document.getElementById('side-menu');
const content = document.getElementsByClassName('content-wrap');
const links = document.getElementsByClassName('nav-link');

function toggleInert(elementList) {
    for (let i=0; i < elementList.length; i++) {
        if (elementList[i].hasAttribute('inert')) {
            elementList[i].removeAttribute('inert');
        } else {
            elementList[i].setAttribute('inert', '');
        }
    }
}

for(let i = 0 ; i < links.length; i++){
    links[i].addEventListener("click", function(){
        navMenu.classList.remove('side-menu--open');
        toggleInert(content);
    });
}


createFooter();
configureClock();
updateClock();
runTheClock();
setInterval(runTheClock, 1000);