import { getLikes } from './involvementCall.js';

import appId from './apiConfig.js';

const fetchLikes = async (itemId) => {
  const likesCountElement = document.getElementById(`likes-count-${itemId}`);
  const likes = await getLikes(appId);
  const itemLikes = likes.find((item) => item.item_id === itemId.toString());
  if (itemLikes) {
    likesCountElement.textContent = itemLikes.likes;
  } else {
    likesCountElement.textContent = '0';
  }
};

export default fetchLikes;