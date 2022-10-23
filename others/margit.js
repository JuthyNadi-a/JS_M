let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
let charName = document.querySelector('#charName');
let p = document.querySelector('p');
let pokeData = [];
let image = document.querySelector('.image');
const data = document.querySelector('.cards');

const getData = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const fetches = data.results.map(item => {
            return fetch(item.url).then(res => res.json())
        });
        Promise.all(fetches)
        .then(response => {pokeData=response;
            pokeCards(response)});
        console.log(pokeData);
        
    })
}

const pokeCards = () => {
    const cards = pokeData.map((pokemon) => {
        return `
            <div class = "card">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}>
            <h2 class="charName">
            ${pokemon.name}</h2> 
            <p>${pokemon.type}</p>
            </div>`
    }).join('');
    data.innerHTML = cards;
};
getData();