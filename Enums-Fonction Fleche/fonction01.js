// Déclaration de fonctions avec et sans typage
function f(x, y) {
    return x + y;
}
console.log(f(3, 4), "  ", f("toto", " tata"), "  ", f("toto ", 2)); // OK
function g(x, y) {
    return x + y;
}
console.log(g("toto", 4));
