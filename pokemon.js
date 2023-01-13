const count = 1154;
async function pokemonTest() {
  let res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${count}`
  );
  const allPokemon = res.data.results;

  for (let i = 0; i < 3; i++) {
    let x = Math.floor(Math.random() * count);
    const pokemon = await axios.get(allPokemon[x].url);
    console.log(pokemon.data);
    const pokemonName = pokemon.data.name;
    

  }
}

pokemonTest();
