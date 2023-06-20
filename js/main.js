const container = document.querySelector(".container");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let API = `https://pokeapi.co/api/v2/pokemon`;

async function getData() {
  const res = await fetch(API);
  const data = await res.json();
  return data;
}
render();

async function render() {
  const pokemonData = await getData();
  const pokemonList = pokemonData.results;
  container.innerHTML = "";

  pokemonList.forEach(async (item) => {
    const res = await fetch(item.url);
    const data = await res.json();
    const pokemonTypes = data.types[0];
    const imageUrl = data.sprites.front_default;
    container.innerHTML += `
    <div class="myCard">
    <div class="innerCard">
        <div class="frontSide">
          <img
            src="${imageUrl}"
            alt=""
          />
        </div>
        <div class="backSide">
          <p class="title">${item.name}</p>
          <p class="type">Type: ${pokemonTypes.type.name}</p>
          <p class="height">Height: ${data.height}</p>
          <p class="weight">Weight: ${data.weight}</p>
        </div>
        </div>
      </div>`;
  });
}
