const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const createApp = async () => {
  const response = await fetch(`${baseUrl}/apps/`, {
    method: 'POST',
  });
  const data = await response.text();
  return data;
};

const addLike = async (appId, itemId) => {
  await fetch(`${baseUrl}/apps/${appId}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getLikes = async (appId) => {
  const response = await fetch(`${baseUrl}/apps/${appId}/likes/`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const text = await response.text();

  if (!text) {
    return []; // Return an empty array if the response body is empty
  }

  const responseBody = JSON.parse(text);
  return responseBody;
};

const addComment = async (appId, itemId, username, comment) => {
  await fetch(`${baseUrl}/apps/${appId}/comments/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId, username, comment }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getComments = async (appId, itemId) => {
  const response = await fetch(`${baseUrl}/apps/${appId}/comments/?item_id=${itemId}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch comments: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

const addReservation = async (appId, itemId, reservationData) => {
  const url = `${baseUrl}/apps/${appId}/reservations`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId, ...reservationData }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to add reservation: ${response.status}`);
  }
};

const getReservations = async (appId, itemId) => {
  const url = `${baseUrl}/apps/${appId}/reservations?item_id=${itemId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch reservations: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export {
  createApp,
  addLike,
  getLikes,
  addComment,
  getComments,
  addReservation,
  getReservations,
  baseUrl,
};
