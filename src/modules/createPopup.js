import { addComment } from './involvementCall.js';
import fetchComments from './fetchComments.js';

import appId from './apiConfig.js';

const createPopup = (pokemon) => {
  const popupContainer = document.getElementById('popup-container');
  popupContainer.innerHTML = `
      <div class="popup">
        <span class="close">&times;</span>
        <img src="${pokemon.sprites.front_default}" alt="" />
        <h2>${pokemon.name}</h2>
        <div class="description">
        <p>Height: ${pokemon.height}</p>
        <p>Types: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>Base Experience: ${pokemon.base_experience}</p>
        </div>
        <h3>Comments<span id="comments-count-${pokemon.id}">(0)</span></h3>
      <ul id="comments-list-${pokemon.id}"></ul>
        <form id="comment-form-${pokemon.id}" class="comment-form">
          <input type="text" id="username-${pokemon.id}" placeholder="Your name">
          <textarea id="comment-${pokemon.id}" placeholder="Enter your comment" rows="3"></textarea>
          <input type="submit" value="Submit">
        </form>
      </div>
    `;

  const closeButton = popupContainer.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popupContainer.style.visibility = 'hidden';
    popupContainer.style.opacity = 0;
  });

  const commentForm = popupContainer.querySelector(`#comment-form-${pokemon.id}`);
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const commentInput = popupContainer.querySelector(`#comment-${pokemon.id}`);
    const usernameInput = popupContainer.querySelector(`#username-${pokemon.id}`);
    const comment = commentInput.value.trim();
    const username = usernameInput.value.trim();
    if (comment !== '' && username !== '') {
      await addComment(appId, pokemon.id.toString(), username, comment);
      commentInput.value = '';
      usernameInput.value = '';
      await fetchComments(pokemon.id);
    }
  });

  fetchComments(pokemon.id);

  popupContainer.style.visibility = 'visible';
  popupContainer.style.opacity = 1;
};

export default createPopup;