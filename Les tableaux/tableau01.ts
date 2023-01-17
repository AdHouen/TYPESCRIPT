// Dans les tableaux, précise le type d'éléments que ceux-ci contiennent 

let x = [1 ,2]; // x est de type tableau de number[] est ne peut contenir que des entiers

x[2] =3; // On peut rajouter des éléments de type number dans notre tableau, dans x

x[3] = "toto"; // Erreur : "toto" n'est pas un entier

let y : number[] = [];  // Tableau vide de type number (d'entier), on ne pourra que rajouter des éléments de type number dans le tableau 

y[0] = 2.1 // OK : parceque 2.1 est de type number

let z : (number | string)[] = []; // Tableau vide contenant des nombres OU des strings

z[0] = "toto"; // OK : "toto" est de type string

z[1] = 3; // OK : 3 est un number

z[2] = false; // Erreur : false est ni un élément de type number, ni un élément de type string

// LES TUPLES : on indique précisément le type de chaque élément du tuple

let t : [number, string] = [1, "toto"]; // Tuple dont le premier élément est de type number et le deuxième élément est de type string

t = [3, "tata"]; // OK : car on respecte bien l'ordre [number , string]

t= ["tata", 3]; // Erreur : car l'rodre n'est pas respecté, "tata" n'est pas un number et 3 n'est pas une string

t = [3 , "toto", "tata"]; // Dans ce tuple, seulement 2 valeurs sont attendues, ce n'est pas un triplet



// On utilise dans la console : tsc monFichier.ts  Pour COMPILER LE FICHIER EST CREER UN FICHIER JS
// On utilise dans la console : node monfichier.js Pour RUN LE FICHIER JS DANS LA CONSOLE A LA PLACE DE FAIRE LE RENDU SUR UNE PAGE WEB
