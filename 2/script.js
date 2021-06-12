"use strict"

document.getElementById('calcBtn').addEventListener('click', () => {
    let num = document.getElementById('3digitNum').value;
    const ALLOWED_INPUT_LENGTH = 3;

    if (ALLOWED_INPUT_LENGTH !== num.length) {
        number.innerHTML = "Please input " + ALLOWED_INPUT_LENGTH + " digit number";
    } else {
        number.innerHTML = 'Number:  ' + num;

        let NumDigits = num.length
        numberDigits.innerHTML = 'Digits: ' + NumDigits;

        let NumDigitSum = parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2]);
        numberDigitSum.innerHTML = 'Number Digits summed : ' + NumDigitSum;

        let NumDigitAv = parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2]) / 2;
        numberDigitAverage.innerHTML = 'Number Digit Average : ' + NumDigitAv;

        let NumDigitMult = parseInt(num[0]) * parseInt(num[1]) * parseInt(num[2]);
        numberDigitMultiplied.innerHTML = 'Number Digits Multiplied : ' + NumDigitMult;
    }
});