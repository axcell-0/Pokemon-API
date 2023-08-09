import createPopup from './createPopup.js';
import handleLike from './handleLike.js';
import fetchLikes from './fetchLikes.js';

const renderStructure = async (data) => {
  const list = document.getElementById('card-container');
  list.innerHTML = '';

  const pokemonPromises = data.results.map(async (pokemon) => {
    const id = pokemon.url.split('/')[6];
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData = await response.json();
    return pokemonData;
  });

  const pokemons = await Promise.all(pokemonPromises);

  pokemons.forEach((pokemonData) => {
    const item = document.createElement('div');
    item.classList.add('grid-item');
    const { id, name, sprites } = pokemonData;
    const img = sprites.front_default;

    item.innerHTML = `
      <img src="${img}" alt="" />
      <div class="space-item">
        <h4>${name}</h4>
        <div class="span-items">
          <i class="far fa-heart likes"></i>
          <span class='likes-count' id="likes-count-${id}">Loading...</span>
        </div>
      </div>
      <button type="button" class="btn">Comments</button>
      <button type="button" class="btn-reserve">Reserve</button>
    `;
    list.appendChild(item);

    const likeButton = item.querySelector('.likes');
    likeButton.addEventListener('click', () => handleLike(id));

    const commentButton = item.querySelector('.btn');
    commentButton.addEventListener('click', () => createPopup(pokemonData));

    const reserveButton = item.querySelector('.btn-reserve');
    reserveButton.addEventListener('click', () => createReservationPopup(pokemonData));

    fetchLikes(id);
  });
};

export default renderStructure;
