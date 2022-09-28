let url = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0"
let charName = document.querySelector('#charName')
let p = document.querySelector('p')
let pokeData = [];
let image = document.querySelector('.image')
const data = document.querySelector('.cards')
const getData = () => {
    fetch(url).then(response => response.json()).then(data => {
        pokeData = data.results;
        console.log(pokeData);
        pokeCards();
    });
};
const pokeCards = () => {
    const cards = pokeData.map((pokemon) => {
        return `
            <div class = "card">
            <img src="assets/img2.webp" alt="pikachu">
            <h2 class="charName">
            ${pokemon.name}</h2>
                
            </div>`
    }).join('');
    data.innerHTML = cards;
};

getData();