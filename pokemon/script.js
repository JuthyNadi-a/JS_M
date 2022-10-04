let url1 = "https://pokeapi.co/api/v2/pokemon";
/* let url2= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" */
let charName = document.querySelector('#charName');
let p = document.querySelector('p');
let pokeData = [];
let image = document.querySelector('.image');
const data = document.querySelector('.cards');

const btn1 = document.querySelector('#gen1');
const btn2 = document.querySelector('#gen2');
const btn3 = document.querySelector('#gen3');
const btn4 = document.querySelector('#gen4');
const btn5 = document.querySelector('#gen5');
const btn6 = document.querySelector('#gen6');
const btn7 = document.querySelector('#gen7');
const btn8 = document.querySelector('#gen8');
const btn9 = document.querySelector('#gen9');

const search = document.querySelector('#search');
function initialPokedex() {
    for (let i = 1; i <= 18; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
    }
    pokedex();
    /* window.location.reload(); */
}
initialPokedex();
const searchData = () => {
    let inputData = search.value;
    console.log(inputData);
    /* for (let i = 0; i < pokeData.length; i++) {
        if(pokemon.name == inputData)
    } */
}
search.addEventListener('click',searchData)

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
                <img src="${pokemon.image}" alt="pokemon image">
                <h2 class="charName">
                ${pokemon.name}</h2>
                <p>${pokemon.type}</p>
                </div>
            `
        ).join("");
        data.innerHTML = pokeCards;
    }
    pokeData = [];
}

btn1.addEventListener('click', function () {
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})

btn2.addEventListener('click', function () {
    for (let i = 152; i <= 251; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})
btn3.addEventListener('click', function () {
    for (let i = 252; i <= 386; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})
btn4.addEventListener('click', function () {
    for (let i = 387; i <= 493; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})
btn5.addEventListener('click', function () {
    for (let i = 494; i <= 649; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})
btn6.addEventListener('click', function () {
    for (let i = 650; i <= 721; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})
btn7.addEventListener('click', function () {
    for (let i = 722; i <= 809; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})
btn8.addEventListener('click', function () {
    for (let i = 810; i <= 905; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})
btn9.addEventListener('click', function () {
    for (let i = 906; i <= 1154; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        pokeData.push(fetch(url).then(res => res.json()));
      } 
pokedex() ;
})
