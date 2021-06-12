"use strict";

document.getElementById('calculateBtn').addEventListener('click', () => {
    let a1 = parseFloat(document.getElementById('a').value);
    let b1 = parseFloat(document.getElementById('b').value);
    let c1 = parseFloat(document.getElementById('c').value);

    let result = document.getElementById('result');

    let poweredNumber = Math.pow(b1, 2);
    let multipliedAC = (4 * a1 * c1);
    let squareRoot = Math.sqrt(poweredNumber - multipliedAC);
    let equationBottom = (2 * a1);

    if (isNaN(squareRoot)) {
        result.innerHTML = 'GO PEKLAN';
    } else {
        let x1 = (-b1 - squareRoot) / equationBottom;
        let x2 = (-b1 + squareRoot) / equationBottom;

        result.innerHTML = "x = " + x1 + " or x = " + x2
    }
});