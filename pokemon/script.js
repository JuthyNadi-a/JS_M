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

const getPokemon = () => {
  /* fetch for initial 151 pokemons */
    for (let i = 1; i <= 151; i++) {
        url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
    }
    pokedex();
   
    function pokedex() {
        Promise.all(pokeData).then(results => {
            const pokemons = results.map(data => ({
                name: data.name,
                id: data.id,
                image: data.sprites.other["official-artwork"].front_default,
                type: data.types.map(type => type.type.name).join(", "),
            }));
            displayCards(pokemons);
             /*  search poke data */
            searchPokedex = (e) => {
            e.preventDefault();
              let pokemon = pokemons.filter(poke => poke.name.includes(search.value));
            
                if (search.value == "") {
                    displayCards(pokemons);
                }
                else {
                    displayCards(pokemon);    
                }
                search.innerHTML == ""
            }
        search.addEventListener("keyup", searchPokedex);
        }); 
        pokeData = [];
    }
    /* display poke cards */
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
   /* generate poke generations */
    const generationData = (index) => {
        let start = generations[index]['offset'];
        let end = generations[index]['limit']
        for (start; start <= end; start++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${start}`;
            pokeData.push(fetch(url).then(res => res.json()));
        } 
        console.log(pokeData);
    pokedex();
    }
    /* Buttons for gennerations */
    buttons.forEach((button,i) => {
        button.addEventListener('click', () => generationData(i))
    })

}
getPokemon();