import { getComments } from './involvementCall.js';

import appId from './apiConfig.js';

const fetchComments = async (itemId) => {
  const commentsListElement = document.getElementById(`comments-list-${itemId}`);
  commentsListElement.innerHTML = '<li>Loading...</li>';

  try {
    const comments = await getComments(appId, itemId.toString());

    if (Array.isArray(comments) && comments.length > 0) {
      commentsListElement.innerHTML = '';
      comments.forEach((comment) => {
        const listItem = document.createElement('li');
        const dateParts = comment.creation_date.split('-');
        const reversedDate = dateParts.reverse().join('/');

        listItem.textContent = `${reversedDate} - ${comment.username}: ${comment.comment}`;
        commentsListElement.appendChild(listItem);
      });
    } else {
      commentsListElement.innerHTML = '<li>No comments available.</li>';
    }

    const commentsCountElement = document.getElementById(`comments-count-${itemId}`);
    commentsCountElement.textContent = `(${comments.length})`;
  } catch (error) {
    if (error.message.startsWith('Failed to fetch comments')) {
      commentsListElement.innerHTML = '<li>No comments available.</li>';
    } else {
      commentsListElement.innerHTML = '<li>Error fetching comments</li>';
    }
  }
};

export default fetchComments;