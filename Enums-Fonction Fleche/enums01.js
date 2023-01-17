// Contrairement à JavaScript, TypeScript possède la notion d'énumération 
// Elle est similaire au language C
// Définition 1 : Une énumération indique les noms des valeurs  
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Vert"] = 1] = "Vert";
    Couleur[Couleur["Bleu"] = 2] = "Bleu";
})(Couleur || (Couleur = {}));
;
// Utilisation : 
var ma_couleur = Couleur.Rouge;
console.log(ma_couleur);
// Définition 2 : Une énumération en indiquant précisément les valeurs 
var Taille;
(function (Taille) {
    Taille[Taille["Petit"] = 3] = "Petit";
    Taille[Taille["Moyen"] = 10] = "Moyen";
    Taille[Taille["Grand"] = 11] = "Grand";
})(Taille || (Taille = {}));
;
// Utilisation :
var ma_taille = Taille.Petit;
console.log(ma_taille); // Cela va afficher 3 
