// Dans les tableaux, précise le type d'éléments que ceux-ci contiennent 
var x = [1, 2]; // x est de type tableau de number[] est ne peut contenir que des entiers
x[2] = 3; // On peut rajouter des éléments entiers dans notre tableau, dans x
x[3] = "toto"; // Erreur : "toto" n'est pas un entier
var y = [1, 2, 3]; // Tableau vide de type number (d'entier), on ne pourra que rajouter des entiers dans le tableau 
y[3] = 0.1;
