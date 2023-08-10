const callPoke = async () => {
  const limit = 10;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById('limit-value').innerText = `(${limit})`;
    return data;
  } catch (error) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error fetching Pokémon data: ${error.message}`;
    document.body.appendChild(errorElement);
    return null;
  }
};

export default callPoke;
