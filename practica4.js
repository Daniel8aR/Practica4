const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    let pokeId = document.getElementById("pokeId");
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    let pokeTy = document.getElementById("typePokemon");
    let pokeStat = document.getElementById("stat0");
    let pokeMoves = document.getElementById("move0");

    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeId.innerHTML = "Error al cargar el nombre del pokemon";
            pokeImage("./pikachu-sad.gif");
            pokeTy.innerHTML = "Error al cargar el tipo";
            pokeStat.innerHTML = "Error al cargar las estadisticas";
            pokeMoves.innerHTML = "Error al cargar los movimientos";
        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeId = data.name;
        let pokeImg = data.sprites.front_default;
        let pokeTy = data.types;
        let pokeStat = data.stats;
        let pokeMoves = data.moves;

        console.log(primerLetraMayuscula(pokeId));
        putName(pokeId);        

        console.log(pokeImg);
        pokeImage(pokeImg);

        console.log(pokeTy);
        putTypes(pokeTy);

        console.log(pokeStat);
        pokeStats(pokeStat);

        console.log(pokeMoves);
        pokeMovements(pokeMoves);
    });
}

function primerLetraMayuscula(frase){
    let string = frase.split(' ');

    return string.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');
}

function putName(pokeId){
    const pokeName = document.getElementById("pokeId");
    pokeName.innerHTML = pokeId;
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

function putTypes(pokeTy){
    const types = document.getElementById("typePokemon");
    types.innerHTML = pokeTy[0].type.name;
}

function pokeStats(pokeStat){
    const stat0 = document.getElementById("stat0");
    const stat1 = document.getElementById("stat1");
    const stat2 = document.getElementById("stat2");
    const stat3 = document.getElementById("stat3");
    const stat4 = document.getElementById("stat4");
    const stat5 = document.getElementById("stat5");

    stat0.innerHTML = pokeStat[0].stat.name + ": " + pokeStat[0].base_stat;
    stat1.innerHTML = pokeStat[1].stat.name + ": " + pokeStat[1].base_stat;
    stat2.innerHTML = pokeStat[2].stat.name + ": " + pokeStat[2].base_stat;
    stat3.innerHTML = pokeStat[3].stat.name + ": " + pokeStat[3].base_stat;
    stat4.innerHTML = pokeStat[4].stat.name + ": " + pokeStat[4].base_stat;
    stat5.innerHTML = pokeStat[5].stat.name + ": " + pokeStat[5].base_stat;
}

function pokeMovements(pokeMoves){
    const move0 = document.getElementById("move0");
    const move1 = document.getElementById("move1");
    const move2 = document.getElementById("move2");
    const move3 = document.getElementById("move3");
    const move4 = document.getElementById("move4");
    const move5 = document.getElementById("move5");
    const move6 = document.getElementById("move6");
    const move7 = document.getElementById("move7");
    const move8 = document.getElementById("move8");
    const move9 = document.getElementById("move9");
    const move10 = document.getElementById("move10");

    move0.innerHTML = pokeMoves[0].move.name;
    move1.innerHTML = pokeMoves[1].move.name;
    move2.innerHTML = pokeMoves[2].move.name;
    move3.innerHTML = pokeMoves[3].move.name;
    move4.innerHTML = pokeMoves[4].move.name;
    move5.innerHTML = pokeMoves[5].move.name;
    move6.innerHTML = pokeMoves[6].move.name;
    move7.innerHTML = pokeMoves[7].move.name;
    move8.innerHTML = pokeMoves[8].move.name;
    move9.innerHTML = pokeMoves[9].move.name;
    move10.innerHTML = pokeMoves[10].move.name;
}