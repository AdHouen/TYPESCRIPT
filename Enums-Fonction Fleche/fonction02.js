// Déclaration d'une fonction en JavaScript
var f = function (x, y) {
    return x + y;
};
console.log(f(3, 4));
console.log();
// Syntaxe des fonctions lamba (fonction fléché) : (params) => { code }
// Définition identique à f, mais plus simple (très utile en Angular)
var g = function (x, y) {
    return x + y;
};
console.log(g(3, 4));
console.log();
// Syntaxe des fonctions lambda avec typage
var h = function (x, y) {
    return x + y;
};
console.log(h(3, 4));
console.log();
// Exercice
function infosClients(id, nom, email) {
    console.log("ID : ", id);
    console.log("Nom : ", nom);
    if (email != undefined) {
        console.log("Email : ", email);
    }
}
infosClients(1, "Gilbert");
infosClients(12, "Hélène", "hélene@gmail.com");
console.log();
// Transformer en fonction fléchée
var infosClients2 = function (id2, nom2, email2) {
    console.log("ID : ", id2);
    console.log("Nom : ", nom2);
    if (email2 != undefined) {
        console.log("Email : ", email2);
    }
};
infosClients2(1, "Gilbert");
infosClients2(12, "Hélène", "hélene@gmail.com");
console.log();
var commande = function (nomProduit, produitHT, tva) {
    var produitTTC = produitHT * (1 + tva / 100);
    console.log("Nom du produit : ", nomProduit, produitTTC, " €");
};
commande("Manette", 60, 20);
commande("Moto", 2000, 20);
