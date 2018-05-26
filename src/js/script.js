'use strict';

var dateField = document.getElementById("date");
var timeField = document.getElementById("time");
var fullDate = new Date();
var day = fullDate.getDay();
var date = fullDate.getDate();
var month = fullDate.getMonth();
var year = fullDate.getFullYear();
var hr = fullDate.getHours();
var min = fullDate.getMinutes();
var sec = fullDate.getSeconds();
var footerContentWrap = document.querySelector("#contact .content-wrap");
var copyright = document.createElement('p');
copyright.innerHTML = 'Copyright &copy; ' + year + ' | Christopher Lampert';
footerContentWrap.appendChild(copyright);

switch (day) {
    case 1:
        day = "Mon";
        break;
    case 2:
        day = "Tue";
        break;
    case 3:
        day = "Wed";
        break;
    case 4:
        day = "Thurs";
        break;
    case 5:
        day = "Fri";
        break;
    case 6:
        day = "Sat";
        break;
    case 7:
        day = "Sun";
        break;
    default:
        day = "Error: Unknown Day";
        break;
}


switch (month) {
    case 0:
        month = "Jan";
        break;
    case 1:
        month = "Feb";
        break;
    case 2:
        month = "Mar";
        break;
    case 3:
        month = "Apr";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        day = "Jun";
        break;
    case 6:
        month = "Jul";
        break;
    case 7:
        month = "Aug";
        break;
    case 8:
        month = "Sep";
        break;
    case 9:
        month = "Oct";
        break;
    case 10:
        month = "Nov";
        break;
    case 11:
        month = "Dec";
        break;
    default:
        month = "Error: Unknown Month";
        break;
}

function checkTimes() {
    if (sec < 10 && typeof sec === "number") {
        sec = "0" + sec;
    }

    if (min < 10 && typeof min === "number") {
        min = min + "0";
    }

    if (hr < 10 && typeof  hr === "number") {
        hr = "0" + hr;
    }
}

function runTheClock() {

    if (sec == 0) {
        sec++;
        checkTimes();
        timeField.innerHTML = "<p>" + hr + ":" + min + ":" + sec + "</p>";
    } else {
        sec++;
        checkTimes();
        if (sec < 60) {
            timeField.innerHTML = "<p>" + hr + ":" + min + ":" + sec + "</p>";
        } else {
            sec = 0;
            min ++;
            if (min > 59) {
                min = 0;
                hr++;
            }

            if (hr > 23) {
                hr = 0;
            }
            checkTimes();
            timeField.innerHTML = "<p>" + hr + ":" + min + ":" + sec + "</p>";
        }
    }
}

checkTimes();
dateField.innerHTML = "<p>" + day + " " + month + " " + date + " " + year + "</p>";
timeField.innerHTML = "<p>" + hr + ":" + min + ":" + sec + "</p>";
setInterval(runTheClock, 1000);


