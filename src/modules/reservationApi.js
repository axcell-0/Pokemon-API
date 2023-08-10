import { addReservation as apiAddReservation, getReservations as apiGetReservations } from './involvementCall.js';
import appId from './apiConfig.js';

const addReservation = async (itemId, reservationData) => {
  await apiAddReservation(appId, itemId, reservationData);
};

const getReservations = async (itemId) => {
  const reservations = await apiGetReservations(appId, itemId);
  return reservations;
};

export { addReservation, getReservations };