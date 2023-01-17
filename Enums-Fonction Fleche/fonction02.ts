// Déclaration d'une fonction en JavaScript

let f = function (x,y){
    return x+y;

}

console.log(f(3,4));
console.log();

// Syntaxe des fonctions lamba (fonction fléché) : (params) => { code }
// Définition identique à f, mais plus simple (très utile en Angular)

let g = (x, y) => {
    return x+y;

}

console.log(g(3,4));
console.log();


// Syntaxe des fonctions lambda avec typage

let h = (x : number, y : number) => {
    return x+y;

}

console.log(h(3,4));
console.log();


// Exercice
function infosClients(id:number, nom:string, email?:string) {
    console.log("ID : ", id);
    console.log("Nom : ", nom);

    if(email != undefined){
        console.log("Email : ", email);
        
    }
       
}
infosClients(1,"Gilbert");
infosClients(12,"Hélène", "hélene@gmail.com");
console.log();


// Transformer en fonction fléchée

let infosClients2 = (id2:number, nom2:string, email2?:string) => {

    console.log("ID : ", id2);
    console.log("Nom : ", nom2);

    if(email2 != undefined){
        console.log("Email : ", email2);
        
    }
}

infosClients2(1,"Gilbert");
infosClients2(12,"Hélène","hélene@gmail.com");
console.log();




let commande = (nomProduit:string,
    produitHT:number,
    tva: number) => {
    let produitTTC = produitHT* (1+tva/100);
    return console.log("Nom du produit : ", nomProduit , produitTTC, " €");
    
}

commande("Manette", 60, 20);
commande("Moto", 2000, 20);