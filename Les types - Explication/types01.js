// TypeScript a ses propres types, compatibles avec ceux de JS
// Après compilation, en JS, ces variables pourront éventuellement avoir un autre type (cf tableau)
// TS peut inférer (attribuer) des types à partir des valeurs 
var x = 4; // type number
var y = "toto"; // type string
var z = false; // type boolean
// Les tableaux :
var tab1 = [1, 2, 3]; // type number[] : tableau contenant uniquement des entiers 
var tab2 = ["toto", "tata", "titi"]; // type string[] : tableau contenant uniquement des strings 
var tab3 = [3, "tata", "titi"]; // type (number | string)[] : tableau pouvant contenir des entiers et des strings 
