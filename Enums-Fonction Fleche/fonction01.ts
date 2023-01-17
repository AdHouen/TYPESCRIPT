// Déclaration de fonctions avec et sans typage

function f(x,y){  // fonctionne avec des number et des string
    return x+y;
}

console.log(f(3,4),"  ", f("toto", " tata"),"  ",f("toto ", 2)); // OK

function g(x: number,y: number) { // Fonctionne uniquement avec des nombres
    return x +y;
}

console.log(g(3,4)); // OK : ceux sont des numbers
console.log(g("toto","tata")); // Erreur : ce sont des strings

