'use strict';

const dateField = document.getElementById("date");
const timeField = document.getElementById("time");
const fullDate = new Date();
let day = fullDate.getDay();
const date = fullDate.getDate();
let month = fullDate.getMonth();
const year = fullDate.getFullYear();
let hr = fullDate.getHours();
let min = fullDate.getMinutes();
let sec = fullDate.getSeconds();

function configureClock() {
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
        case 0:
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
    dateField.innerHTML = "<p>" + day + " " + month + " " + date + " " + year + "</p>";
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

function updateClock() {
    checkTimes();
    timeField.innerHTML = "<p>" + hr + ":" + min + ":" + sec + "</p>";
}

function runTheClock() {

    if (sec === 0) {
        sec++;
        updateClock();
    } else {
        sec++;
        if (sec < 60) {
            updateClock();
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
            updateClock();
        }
    }
}