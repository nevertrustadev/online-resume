'use strict';

var footerContentWrap = document.querySelector("#contact .content-wrap");
var copyright = document.createElement('p');

function createFooter() {
    copyright.innerHTML = 'Copyright &copy; ' + year + ' | Christopher Lampert';
    footerContentWrap.appendChild(copyright);
}