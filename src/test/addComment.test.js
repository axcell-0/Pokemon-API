import './__Monk__/testSetup.js';
import {

  addComment,

} from '../modules/involvementCall.js';

describe('Involvement API', () => {
  describe('addComment', () => {
    it('should send a POST request to the correct URL with the item ID, username, and comment', async () => {
      global.fetch.mockResolvedValueOnce({});

      await addComment('app-id', 'item-id', 'username', 'comment');

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/app-id/comments/',
        {
          method: 'POST',
          body: JSON.stringify({
            item_id: 'item-id',
            username: 'username',
            comment: 'comment',
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    });

    it('should send a POST request to the correct URL with the provided appId, itemId, username, and comment', async () => {
      const appId = 'xJHvoU3Mdm0mPXdsrlTl';
      const itemId = '123';
      const username = 'JohnDoe';
      const comment = 'This is a comment.';

      global.fetch.mockResolvedValueOnce({});

      await addComment(appId, itemId, username, comment);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments/`,
        {
          method: 'POST',
          body: JSON.stringify({ item_id: itemId, username, comment }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    });
  });
});