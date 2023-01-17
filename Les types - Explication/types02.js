// En TS, quand on crée une variable, on lui affecte un type
// et cette variable conservera toujours ce type
// DONC on ne peut pas changer le type de varible en cours de programme 
// NI lui affecter une valeur d'un autre type incompatible
// Cela va provoquer une erreur de compilation
// Par exemple : 
var x = 4; // type number
x = "toto"; //Erreur Type "string" is not assignable to type "number"
