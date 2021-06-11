"use strict";

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//let convertSecondsToTime = seconds => new Date(seconds * 1000).toISOString().substr(11, 8);

function convertSecondsToTime(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
}

document.getElementById('button').addEventListener('click', () => {
    document.getElementById('result').innerHTML = convertSecondsToTime(document.getElementById('seconds').value);
});