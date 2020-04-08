'use strict';

let footerContentWrap = document.querySelector("#footer .content-wrap");
let copyright = document.createElement('p');

function createFooter() {
    copyright.innerHTML = 'Copyright &copy; ' + year + ' | Christopher Lampert';
    footerContentWrap.appendChild(copyright);
}