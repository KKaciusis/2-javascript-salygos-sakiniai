"use strict";

for (let i = 0; i<40; i++) {
let divElement = document.createElement('div');
divElement.classList.add('element-size');
divElement.innerText = i + 1;
document.querySelector(".container").append(divElement);

if ( (i+1) % 2 == 0 ) {
    divElement.classList.add('green-element');
    divElement.innerText = "olia"
}

}