console.log("EXERCICE 1");

const nombres = [1, 2, 3, 4, 5];
for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
}

console.log("EXERCICE 2");
function sommeTableau(tableau) {
    let somme = 0;
    for (let index = 0; index < tableau.length; index++) {
        somme += tableau[index]
    }
    return somme;
}

const tableau = [1, 2, 3, 4, 5];
const resultat = sommeTableau(tableau);

console.log(`La somme est ${resultat}`);

console.log("EXERCICE 3");


const mots = ["guitare", "mediators", "siege"];

function motPlusLong(tableauMots) {

    if (!tableauMots || tableauMots.length === 0) {
        return null;
    }

    let compteur = 0;
    let motPlusLong = "";
    for (const mot of tableauMots) {
        if (mot.length > compteur) {
            compteur = mot.length;
            motPlusLong = mot
        }


    }
    return motPlusLong;
}


console.log(motPlusLong(mots));

console.log("EXERCICE 4");



function inverserChaine(chaine) {
    let chaineInversee = "";
    for (let i = chaine.length - 1; i >= 0; i--) {
        chaineInversee += chaine[i];

    }
    return chaineInversee;
}

console.log(inverserChaine("Bonjour"));

console.log("EXERCICE 5");

function compterVoyelles(chaine) {
    const voyelles = `aeiouyAEIOUY`;
    let nbrVoyelles = 0;
    for (let index = 0; index < chaine.length; index++) {
        if (voyelles.includes(chaine[index])) {
            nbrVoyelles++;
        }
    }
    return nbrVoyelles;
}
console.log(compterVoyelles(`Créez une fonction compterVoyelles(chaine) qui retourne le nombre de voyelles
dans une chaîne de caractères.
`));

console.log("EXERCICE 6");

let numbers = [Math.floor(Math.random() * 50)]
let pairs = nombresPairs(numbers)

function nombresPairs(tableau) {
    const tableauPairs = []
    for (let index = 0; index < tableau.length; index++) {
        if (tableau[index] % 2 === 0) {
            tableauPairs.push(tableau[index])
        }

    }
    return tableauPairs
}

console.log(pairs);

console.log("EXERCICE 7");

let monObjet = {
    nom: "sébastien",
    age: 30,
    ville: "Nieul le Dolent"
};
let nombreDeProprietes = 0;
function compterProprietes(objet) {

    for (let key in objet) {
        nombreDeProprietes++;
    }
    return nombreDeProprietes;
}

console.log(compterProprietes(monObjet));

console.log("EXERCICE 8");

let produits = [
    { nom: "Stylo", prix: 2 },
    { nom: "Cahier", prix: 5 },
    { nom: "Gomme", prix: 1 }
];

function extraireNoms(produits) {
    const nomDesProduits = []
    for (const produit of produits) {
        nomDesProduits.push(produit.nom);

    }
    return nomDesProduits;
}

console.log(extraireNoms(produits));

console.log("EXERCICE 9");

function factorielle(n) {
    // if (n === 0 || n === 1) {
    //     return 1;
    // }

    // if (n < 0 || !Number.isInteger(n)) {
    //     throw new Error("Veuillez entrer un nombre entier positif");

    // }

    let resultat = 1;
    for (let index = 2; index <= n; index++) {
        resultat *= index

    }
    return resultat;
}

console.log(factorielle(7));

console.log("EXERCICE 10");

let nbr = [4, 2, 5, 18, 7, 9, 35];
let suite = [0, 1, 2, 5, 7, 25, 36]

function estTrie(tableau) {
    if (!tableau || tableau.length <= 1) {
        return true;
    }
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > tableau[i + 1]) {
            return false;
        }

    }
    return true;
}
console.log(`est trié : ${estTrie(nbr)}`);
console.log(`est trié : ${estTrie(suite)}`);





