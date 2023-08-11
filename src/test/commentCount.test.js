import {
  getComments,
} from '../modules/involvementCall.js';

describe('getComments', () => {
  it('should return an array of comments', async () => {
    // Mock the fetch function to return a sample response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([
        { id: 1, username: 'user1', comment: 'Comment 1' },
        { id: 2, username: 'user2', comment: 'Comment 2' },
      ]),
    });

    // Call the function and assert the result
    const comments = await getComments('appId', 'itemId');
    expect(comments).toEqual([
      { id: 1, username: 'user1', comment: 'Comment 1' },
      { id: 2, username: 'user2', comment: 'Comment 2' },
    ]);

    // Ensure that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/appId/comments/?item_id=itemId',
    );
  });

  it('should throw an error if the response is not ok', async () => {
    // Mock the fetch function to return a non-ok response
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    // Call the function and expect it to throw an error
    await expect(getComments('appId', 'itemId')).rejects.toThrow('Failed to fetch comments: 500');
  });
});
