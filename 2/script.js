"use strict"

let skaicius = 345
let skaitmuo = Math.log(skaicius) * Math.LOG10E + 1 | 0;

let suma, vidurkis, sandauga;

if (3 === skaitmuo) {
    suma = 3 + 4 + 5;
    vidurkis = suma / 3;
    sandauga = 3 * 4 * 5;
}

console.log("skaicius", skaicius)
console.log("skaitmuo", skaitmuo)
console.log("suma", suma)
console.log("vidurkis", vidurkis)
console.log("sandauga", sandauga)