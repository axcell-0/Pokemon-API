import './__Monk__/testSetup.js';
import {
  addLike,
} from '../modules/involvementCall.js';

describe('Involvement API', () => {
  describe('addLike', () => {
    it('should send a POST request to the correct URL with the item ID', async () => {
      global.fetch.mockResolvedValueOnce({});

      await addLike('app-id', 'item-id');

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/app-id/likes/',
        {
          method: 'POST',
          body: JSON.stringify({ item_id: 'item-id' }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    });
    it('should send a POST request to the correct URL with the provided appId and itemId', async () => {
      const appId = 'xJHvoU3Mdm0mPXdsrlTl';
      const itemId = '123';

      global.fetch.mockResolvedValueOnce({});

      await addLike(appId, itemId);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`,
        {
          method: 'POST',
          body: JSON.stringify({ item_id: itemId }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    });
  });
});