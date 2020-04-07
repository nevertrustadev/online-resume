'use strict';

const footerContentWrap = document.querySelector("#contact .content-wrap");
const copyright = document.createElement('p');

function createFooter() {
    copyright.innerHTML = 'Copyright &copy; ' + year + ' | Christopher Lampert';
    footerContentWrap.appendChild(copyright);
}