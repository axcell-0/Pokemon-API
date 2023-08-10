import './__Monk__/testSetup.js';
import {
  createApp,
} from '../modules/involvementCall.js';

describe('Involvement API', () => {
  describe('createApp', () => {
    it('should send a POST request to the correct URL', async () => {
      // Mock the fetch response
      const mockResponse = { text: jest.fn().mockResolvedValue('app-id') };
      global.fetch.mockResolvedValue(mockResponse);

      await createApp();

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
        {
          method: 'POST',
        },
      );
    });

    it('should return the response data', async () => {
      const mockResponse = { text: jest.fn().mockResolvedValue('app-id') };
      global.fetch.mockResolvedValue(mockResponse);

      const result = await createApp();

      expect(result).toBe('app-id');
    });
  });
});