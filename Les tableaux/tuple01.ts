let empId : number = 1;
let empName : string = "Houen";

// Tuple type 

let employe :  [number, string] = [empId, empName];

let person : [number , string, boolean] = [empId, empName, true];

let user : [number , string, boolean, number, string] = [empId, empName, true, 25, "Admin"];

let employe1 : [number, string][];

employe1 = [[1, "Steve Job"], [2, "Jeff Bezos"], [3, "Marc Zuk"]]; // Ici nous avons un tableau de tuple

console.log(employe1[1][1]); // on voit apparait le nom Jeff bezos dans la console avec : node tuple01.ts

employe1.push([4, "Elon Musk"]); // le push permet d'insérer dans notre tableau

console.log(employe1); // affiche tout le tableau

employe1.push([5, "Adrien Houen"]); // Ajout d'un autre pour tester 

console.log(employe1); // affiche tout le tableau

employe1[1][1] = employe1[1][1].concat(" Albert"); // Rajoute le string Albert à la suite du number et du 1er string

console.log(employe1); // affiche tout le tableau






 