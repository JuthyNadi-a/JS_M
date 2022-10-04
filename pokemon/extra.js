/* const getData = () => {
    fetch(url1).then(response => response.json()).then(data => {
        pokeData = data.results;
        console.log(pokeData);
    pokeCards();
    })
    pokeData.then(results => {
        const pokemons = results.map(data => ({
            name: data.name,
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map(type => type.type.name).join(", "),
        }))
        pokeCards(pokemons);   
    })
} */


/* const pokeCards = () => {
    const cards = pokemons.map((pokemon) => {
        return `
            <div class = "card">
            <img src="assets/img2.webp" alt="pikachu">
            <h2 class="charName">
            ${pokemon.name}</h2> 
            <p>${pokemon.image}</p>
            <p>${pokemon.type}</p>
            </div>`
    }).join('');
    data.innerHTML = cards;
}; */
/* const pokeImages = () => {
    
} */
/* getData(); */

/* const imageData = pokeData.map(result => {
           return fetch(result.url).then(response => response.json());
        })
        return Promise.all(imageData);
    }).then((data) => {
        pokeImage = data
    } ); */

    /* for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    pokeData.push(fetch(url).then(res => res.json()));
  }
Promise.all(pokeData).then(results => {
    const pokemons = results.map(data => ({
        name: data.name,
        id: data.id,
        image: data.sprites["front_default"],
        type: data.types.map(type => type.type.name).join(", "),
    }));
    pokeCards(pokemons);
}); */
/* <p>${pokemon.image}</p>
            <p>${pokemon.type}</p> */