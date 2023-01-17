// TypeScript a ses propres types, compatibles avec ceux de JS
// Après compilation, en JS, ces variables pourront éventuellement avoir un autre type (cf tableau)
// TS peut inférer (attribuer) des types à partir des valeurs 

let x = 4; // type number
let y= "toto"; // type string
let z = false; // type boolean

// Les tableaux :
let tab1 = [1,2,3]; // type number[] : tableau contenant uniquement des entiers 
let tab2 = ["toto","tata","titi"]; // type string[] : tableau contenant uniquement des strings 
let tab3 = [3,"tata","titi"]; // type (number | string)[] : tableau pouvant contenir des entiers et des strings 