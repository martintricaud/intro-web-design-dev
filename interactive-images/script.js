let urlList = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/200/200/300",
    "https://picsum.photos/id/12/200/300",
    "https://picsum.photos/id/53/200/300",
];

function setTargetBorder(event) {
    event.target.style.border = "2px dashed red";
}
for (let i = 0; i < urlList.length; i++) {

    const article = document.createElement("article");
    const img = document.createElement("img");
    img.src = "https://via.placeholder.com/150";
    img.alt = "Sample Image";

    const button = document.createElement("button");
    button.textContent = "Click Me"; // Replace with desired button text
    button.onclick = "setTargetBorder"

    article.appendChild(img);
    article.appendChild(button);
}

let lore = [
    {
        nom: "Sombre crête florinale",
        type: "équipement"
    },
    { 
        nom: "Lents cornels bifugés", 
    },
    { 
        nom: "Mousse opaque dessillée",
        type: ["substance"] 
    },
    { 
        nom: "Brûlant flambeau zeronique", 
        type:["arme"]
    },
    { nom: "Fringales jurassiques", type:"sortilège"},
    { nom: "Cassis fétiche igonique", },
    { nom: "Epineuse thistle torurique", },
    { nom: "Fuirte molle bédérique", },
    { nom: "Rondin lavé porfique", type: ["objet"] },
    { nom: "Moelle antiséquane",type: "substance"},
    { nom: "Poudreuse matarnicole", type: ["évènement"]},
    { nom: "Ramée cryptée viaplique", },
    { nom: "Génealogie surfocale médulienne", },
    { 
        nom: "Clayon de calfignage", 
        type: "objet",
        description: "Comme son nom l'indique, cet objet sert à calfigner toutes sortes de surfaces, "
    },
    { 
        nom: "Spines verdantes interflurées", },
    { nom: "Sopine purtristique", },
    { nom: "Grésoir clovial frutalique", },
    { nom: "Vallon colétang héribrice", },
    { nom: "Bouillon du delta des Pyradons", type: ["substance"], description:"breuvage à l'odeur repoussante, mais qui a fait ses preuves "},
    { nom: "Libérante râme ciéraniq", },
    { nom: "Flamberge de Nuscagne", type: ["objet","arme"], description:"Les artisans de Nuscagne sont réputés pour leurs Flamberges" },
    { nom: "Télorée d'Araric ", },
    { nom: "Glémentine de givre", type: "objet" },
    { nom: "Belgraine rufinique", },
    { nom: "Dégrilleur de Citharic", },
    { nom: "Plénorabe des Pyradons", },
    { nom: "Grisalme en dévôte", },
    { nom: "Vergriscène des Cotypes", },
    { nom: "Gellette de Quoréthique", },
    { nom: "Hydromel des Borguilles", type: ["consommable", "substance"] },
    { nom: "Lycorésis sous Tolvene", },
    { nom: "Chémorbe en équilibre", type:"pouvoir"},
    { nom: "Castigue alisarnais fortifié", type:"batiment"},
    { nom: "Aethonisation des Arpices", type:"pouvoir"},
    { nom: "Tégularia en filances", },
    { nom: "Artamis, Fermicomte des Tranelins", type:"personnage"},
    { nom: "Eptessis de Vabrône", type:"personnage"},
    { nom: "Morricle des Ivadores", type:"animal"},
    { nom: "Liperne de Serpian", },
    { nom: "Franticheur "},
    { nom: "Noblipe fantiche", },
    { nom: "Merizède des astroches", type:["creature"] },
    { nom: "Cintennale aquatuphe", },
    { nom: "Fauste en griffes", },
    { nom: "Flegonia en lambeaux", type: "équippement corporel" },
    { nom: "Marmaille blanche de sel", },
    { nom: "Flacon de Brulançol frelaté", type: "substance"},
    { nom: "Tourbasque de Luminor",type: "substance", description:"Un type de Tourbasque particulièrment prisé des connaisseurs, issue de la fermentation des Luminors dans certains marécages aux propriétés globulisantes"},
    { nom: "Gilmagne crochée", type: "vêtement", description:"Cette Gilmagne crochée se porte aussi bien à la taille qu'autour du cou"},
    { nom: "Frénéton dérivé", },
    { nom: "Cernacier morne", },
    { nom: "Soliléa des alvises", type: "vegetal"},
    { nom: "Lantices en vanne", },
    { nom: "Fluzer d’Ogenple", },
    { nom: "Théoronique au blanc gazé", },
    { nom: "Mairméans roulants", type:"evenement"},
    { nom: "Velaformé terile", },
    { nom: "Pyramicule et son lacier", },
    { nom: "Flockor juvénile frissique", },
    { nom: "Espoliessant bruminé", },
    { nom: "Chiffrelle grisante de Tilleux", type:["créature"] }]

