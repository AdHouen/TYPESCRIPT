// On peut imposer le type d'une variable avec l'opérateur ": type"

let x : number = 4; // ici number est superflu , 4 impliqué déjà que x était un nombre

x = false; // Erreur de compilation car false n'est pas un nombre

let y : any = 4; // J'impose que y soit any, même si il vaut le nombre 4 

y = "toto"; // Valide puisque y est de type any

let z = undefined; // z est de type any car on sait que l'on initialise ce genre de variable pour lui affecter une autre variable par la suite

let u : undefined = undefined; // u est de type undefined est restera toujours de ce type

u = 3;  // Erreur : 3 n'est pas de type undefined 

let v : null = null;  // v est de type null

v = 2; // Erreur : 2 n'est pas de type null

let w1 : number = undefined; // Erreur car w1 est de type number et pas de type undefined 

let w2 : number = null; // Erreur : number n'est pas null