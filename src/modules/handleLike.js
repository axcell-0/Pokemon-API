import { addLike } from './involvementCall.js';
import fetchLikes from './fetchLikes.js';

import appId from './apiConfig.js';

const handleLike = async (itemId) => {
  await addLike(appId, itemId.toString());
  await fetchLikes(itemId);
};
export default handleLike;