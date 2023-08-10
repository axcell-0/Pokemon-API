import './__Monk__/testSetup.js';
import callPoke from '../modules/pokeCall.js';

describe('callPoke', () => {
  it('should send a GET request to the correct URL with the expected limit value', async () => {
    global.fetch.mockResolvedValueOnce({});

    await callPoke();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );
  });

  it('should fetch data from the PokeAPI and update the limit value on success', async () => {
    const mockData = { results: [{ name: 'pokemon1' }, { name: 'pokemon2' }] };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    document.body.innerHTML = '<div id="limit-value"></div>';

    const data = await callPoke();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=10');

    expect(data).toEqual(mockData);

    expect(document.getElementById('limit-value').innerText).toBe('(10)');
  });

  it('should handle HTTP errors by throwing an error', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    try {
      await callPoke();
    } catch (error) {
      expect(error.message).toBe('HTTP error! status: 500');
    }
  });

  it('should handle errors during data fetching by displaying an error message', async () => {
    const mockErrorMessage = 'Failed to fetch data';
    global.fetch = jest.fn().mockRejectedValue(new Error(mockErrorMessage));

    document.body.innerHTML = '';

    await callPoke();

    const errorElement = document.querySelector('p');
    expect(errorElement).toBeTruthy();
    expect(errorElement.textContent).toBe(`Error fetching Pokémon data: ${mockErrorMessage}`);
  });
});
