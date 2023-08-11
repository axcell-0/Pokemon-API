import { getLikes } from '../modules/involvementCall.js';

describe('getLikes', () => {
  it('should return an array of likes', async () => {
    const mockResponse = {
      ok: true,
      status: 200,
      text: jest.fn().mockResolvedValue('[{"item_id": "1", "likes": 5}]'),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const likes = await getLikes('appId');

    expect(likes).toEqual([{ item_id: '1', likes: 5 }]);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/appId/likes/');
  });

  it('should return an empty array if the response body is empty', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(''),
    });

    // Call the function and assert the result
    const likes = await getLikes('appId');
    expect(likes).toEqual([]);

    // Ensure that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/appId/likes/',
    );
  });

  it('should throw an error if the response is not ok', async () => {
    // Mock the fetch function to return a non-ok response
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    // Call the function and expect it to throw an error
    await expect(getLikes('appId')).rejects.toThrow('HTTP error! status: 500');
  });
});
