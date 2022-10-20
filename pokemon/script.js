let generations = [
    {limit:151, offset:1},
    {limit:251, offset:152},
    {limit:386, offset:252},
    {limit:493, offset:387},
    {limit:649, offset:494},
    {limit:721, offset:650},
    {limit:809, offset:722},
    {limit:905, offset:810}
]
let url = `https://pokeapi.co/api/v2/pokemon/`;
let charName = document.querySelector('#charName');
let p = document.querySelector('p');
let pokeData = [];
let image = document.querySelector('.image');
const data = document.querySelector('.cards');
const buttons = document.querySelectorAll('button')

const search = document.querySelector('#search');
function initialPokedex() {
    for (let i = 1; i <= 18; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
    }
    pokedex();
}
initialPokedex();
const searchData = () => {
    let inputData = search.value;
    console.log(inputData);

    /* for (let i = 0; i < pokeData.length; i++) {
        if(pokeData[i].name == inputData){
            console.log(pokeData[i].name);
            displayCards(pokemons)
        }
    } */
}
search.addEventListener('keyup',searchData)

function pokedex() {
    Promise.all(pokeData).then(results => {
        const pokemons = results.map(data => ({
            name: data.name,
            id: data.id,
            image: data.sprites.other["official-artwork"].front_default,
            type: data.types.map(type => type.type.name).join(", "),
        }));
        displayCards(pokemons);
    });
    
    const displayCards = pokemons => {
        console.log(pokemons);
        const pokeCards = pokemons.map (
            pokemon => `
                <div class = "card">
                <h2 class="charName">
                ${pokemon.name}</h2>
                <img src="${pokemon.image}" alt="pokemon image">
                <p>${pokemon.type}</p>
                </div>
            `
        ).join("");
        data.innerHTML = pokeCards;
    }
    pokeData = [];
}

const generationData = (index) => {
    let start = generations[index]['offset'];
    let end = generations[index]['limit']
    for (start; start <= end; start++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${start}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex();
}

buttons.forEach((button,i) => {
    button.addEventListener('click', () => generationData(i))
})
