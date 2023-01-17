// Contrairement à JavaScript, TypeScript possède la notion d'énumération 
// Elle est similaire au language C

// Définition 1 : Une énumération indique les noms des valeurs  

enum Couleur {Rouge = 0, Vert = 1 , Bleu = 2};

// Utilisation : 

const ma_couleur = Couleur.Rouge;
console.log(ma_couleur);


// Définition 2 : Une énumération en indiquant précisément les valeurs 

enum Taille { Petit = 3, Moyen = 10, Grand = 11};

// Utilisation :

const ma_taille : Taille = Taille.Petit;
console.log(ma_taille); // Cela va afficher 3 
