import callPoke from './pokeCall.js';
import { createApp } from './involvementCall.js';
import renderStructure from './renderStructure.js';

const init = async () => {
  try {
    await createApp();
    const data = await callPoke();
    await renderStructure(data);
  } catch (error) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error fetching Pokémon data: ${error.message}`;
    document.body.appendChild(errorElement);
  }
};

export default init;