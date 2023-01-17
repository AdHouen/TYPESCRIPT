// Si l'on déclare une varibale sans lui affecter une valeur 
// son type devient un ANY (type = any)
// Dans ce cas on peut lui affecter n'importe quelle valeur
// son type sera toujours any
// Ceci implique que l'on peut lui réaffecter une nouvelle valeur d'un autre type

// Par exemple : 

let x; // Type = any

x = 4; // x est toujours de type ANY mais sa valeur est de 4

x = "toto"; // instruction VALIDE, x est toujours de type ANY mais sa valeur est "toto"

// On peut imposer le type d'une variable lors de sa déclaration

let y : number; // y est de type number mais sa valeur est undefined



