import './__Monk__/testSetup.js';
import { getComments } from '../modules/involvementCall.js';

describe('Involvement API', () => {
  describe('getComments', () => {
    it('should send a GET request to the correct URL with the item ID', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue([]),
      });

      await getComments('app-id', 'item-id');

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/app-id/comments/?item_id=item-id',
      );
    });

    it('should parse the response body as JSON and return it', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue(['comment']),
      };
      global.fetch.mockResolvedValueOnce(mockResponse);

      const result = await getComments('app-id', 'item-id');

      expect(result).toEqual(['comment']);
    });
  });

  it('should fetch comments from the API and return the data on success', async () => {
    const mockAppId = 'appId';
    const mockItemId = 'itemId';
    const mockData = [{ id: 1, comment: 'Comment 1' }, { id: 2, comment: 'Comment 2' }];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const data = await getComments(mockAppId, mockItemId);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${mockAppId}/comments/?item_id=${mockItemId}`);

    expect(data).toEqual(mockData);
  });

  it('should throw an error if the API response is not OK', async () => {
    const mockAppId = 'appId';
    const mockItemId = 'itemId';
    const mockStatusCode = 404;

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: mockStatusCode,
    });

    try {
      await getComments(mockAppId, mockItemId);
    } catch (error) {
      expect(error.message).toBe(`Failed to fetch comments: ${mockStatusCode}`);
    }
  });
});
