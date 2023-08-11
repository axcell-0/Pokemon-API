import './__Monk__/testSetup.js';
import { getLikes } from '../modules/involvementCall.js';

describe('Involvement API', () => {
  describe('getLikes', () => {
    it('should send a GET request to the correct URL', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        text: jest.fn().mockResolvedValueOnce(''),
      });

      await getLikes('app-id');

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/app-id/likes/',
      );
    });

    it('should send a GET request to the correct URL with the provided appId', async () => {
      const appId = 'xJHvoU3Mdm0mPXdsrlTl';

      global.fetch.mockResolvedValueOnce({
        ok: true,
        text: jest.fn().mockResolvedValueOnce('[{"item_id": "123", "likes": 5}]'),
      });

      const likes = await getLikes(appId);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,
      );
      expect(likes).toEqual([{ item_id: '123', likes: 5 }]);
    });
    it('should empty array if the response body is empty', async () => {
      const mockResponse = { ok: true, status: 200, text: jest.fn().mockResolvedValue('') };
      global.fetch.mockResolvedValueOnce(mockResponse);

      const result = await getLikes('app-id');

      expect(result).toEqual([]);
    });

    it('parse the response body as JSON and return it', async () => {
      const mockResponse = {
        ok: true,
        status: 200,
        text: jest.fn().mockResolvedValue('[{"item_id":"1","likes":5}]'),
      };
      global.fetch.mockResolvedValueOnce(mockResponse);

      const result = await getLikes('app-id');

      expect(result).toEqual([{ item_id: '1', likes: 5 }]);
    });
  });
});
