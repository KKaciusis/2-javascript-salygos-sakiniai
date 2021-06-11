"use strict"

let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let calcbutton = document.getElementById('calcbutton');
let resultatas = document.getElementById('resultatas');

calcbutton.addEventListener('click', calculate);

function calculate() {
    let a1 = a.value;
    let b1 = b.value;
    let c1 = c.value;
    
    a1 = parseFloat(a1);
    b1 = parseFloat(b1);
    c1 = parseFloat(c1);

    let bm = Math.pow(b1, 2);
    let daugac = (4 * a1 * c1);
    let reskelimui = bm - daugac;
    let kvsaknis = Math.sqrt(reskelimui);
    let lygtiesbott = (2 * a1);

    if (isNaN(kvsaknis) === true){
        resultatas.innerHTML = 'EIK PEKLAN';
    }
    else {
        let res1 = (-b1 - kvsaknis) / lygtiesbott;
        let res2 = (-b1 + kvsaknis) / lygtiesbott;
        resultatas.innerHTML = "x = " + res1 + " arba x = " + res2
    }



}