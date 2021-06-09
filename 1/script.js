"use strict"
var laikas = new Date(null);
laikas.setSeconds(500); // sekundziu ivestis
var suslaik = laikas.toISOString().substr(11, 8);

console.log(suslaik)