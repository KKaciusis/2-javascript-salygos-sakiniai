"use strict"

/**
 ax^2 + bx + c = 0
 D=b^2-4ac

 jei D=0, tai x= -(b/(2a))
 jei D>0, tai x= (-b+-sqrt(D))/2a
 */

function getD(a, b, c) {
    return b * b + 4 * a * c;
}

function getResult(a, b, c) {
    let d = getD(a, b, c);

    if (0 === d) {
        return -(b/(2*a));
    } else if (d > 0) {
        let x1 = (-b+Math.sqrt(d))/2*a;
        let x2 = (-b-Math.sqrt(d))/2*a;
        return [Math.round(x1, 2), Math.round(x2, 2)];
    }
}

//6x^2 - 17x + 12 = 0
console.log("Solution: " + getResult(6, 17, 12));