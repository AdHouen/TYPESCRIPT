var empId = 1;
var empName = "Houen";
// Tuple type 
var employe = [empId, empName];
var person = [empId, empName, true];
var user = [empId, empName, true, 25, "Admin"];
var employe1;
employe1 = [[1, "Steve Job"], [2, "Jeff Bezos"], [3, "Marc Zuk"]]; // Ici nous avons un tableau de tuple
console.log(employe1[1][1]); // on voit apparait le nom Jeff bezos dans la console avec : node tuple01.ts
employe1.push([4, "Elon Musk"]); // le push permet d'insérer dans notre tableau
console.log(employe1); // affiche tout le tableau
employe1.push([5, "Adrien Houen"]); // Ajout d'un autre pour tester 
console.log(employe1); // affiche tout le tableau
employe1[1][1] = employe1[1][1].concat(" Albert"); // Rajoute le string Albert à la suite du number et du 1er string
console.log(employe1); // affiche tout le tableau
