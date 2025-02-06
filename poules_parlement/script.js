let poule1 = {
    prenom: "Eggine",
    parti: "Union des Filets de Protection",
    role: "Ministre de la Sécurité Avicole",
    image: "https://picsum.photos/id/18/500/300"
}

let poule2  = {
    prenom: "Galinetta",
    parti: "Graines pour tous",
    role: "Ministre de la paille",
    image: "https://picsum.photos/id/18/500/300"
}

function creerCarte(poule) {
    // CREER LE CONTENEUR PRINCIPAL
    let carte = document.createElement("section")

    // CREER LE CONTENEUR DE TITRE
    let h1_nom = document.createElement("h1")
    // RAJOUTER UNE CLASSE
    h1_nom.classList.add("nom")
    // DEFINIR SON CONTENU
    h1_nom.innerText = poule.prenom

    let illustration = document.createElement("img");
    illustration.src = poule.image

    let h2_parti = document.createElement("h2")
    h2_parti.innerText = poule.parti
    let div_parti = document.createElement("div")
    div_parti.appendChild(h2_parti)

    carte.appendChild(illustration)
    carte.appendChild(h1_nom)
    carte.appendChild(div_parti)
    document.body.appendChild(carte)
}

creerCarte(poule1)
creerCarte(poule2)

// function afficherValeur(brocoli){
//     console.log(brocoli)
// }

// afficherValeur("hello")
// afficherValeur("x")
// afficherValeur(123)


// let div_parti = document.createElement("div")
// let div_roles = document.createElement("div")
// let nom_parti = document.createElement("h2")
// let h2_roles = document.createElement("h2")
// let liste_roles = document.createElement("list")

