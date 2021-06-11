"use strict";
document.getElementById('calcbutton').addEventListener('click', () => {
    let a1 = parseFloat(document.getElementById('a').value);
    let b1 = parseFloat(document.getElementById('b').value);
    let c1 = parseFloat(document.getElementById('c').value);
    let rezultatas = document.getElementById('rezultatas');
    let bm = Math.pow(b1, 2);
    let daugybaac = (4 * a1 * c1);
    let kvadratinesaknis = Math.sqrt(bm - daugybaac);
    let lygtiesapacia = (2 * a1);
    if (isNaN(kvadratinesaknis)) {
        rezultatas.innerHTML = 'EIK PEKLAN';
    } else {
        let res1 = (-b1 - kvadratinesaknis) / lygtiesapacia;
        let res2 = (-b1 + kvadratinesaknis) / lygtiesapacia;
        rezultatas.innerHTML = "x = " + res1 + " arba x = " + res2
    }
});