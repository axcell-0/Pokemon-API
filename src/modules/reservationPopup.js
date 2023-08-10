import { addReservation, getReservations } from './reservationApi.js';

const createReservationPopup = (pokemon) => {
  const popupContainer = document.getElementById('popup-container');
  popupContainer.innerHTML = `
      <div class="reservation-popup">
        <span class="close">&times;</span>
        <img src="${pokemon.sprites.front_default}" alt="" />
        <h2>${pokemon.name}</h2>
        <div class="description">
          <p>Height: ${pokemon.height}</p>
          <p>Types: ${pokemon.types.map((type) => type.type.name).join(', ')}</p>
          <p>Weight: ${pokemon.weight}</p>
          <p>Base Experience: ${pokemon.base_experience}</p>
        </div>
        <div class="reservations-container">
          <h3 class="reservation-heading">Reservations<span class="reservation-count">(0)</span></h3>
          <ul id="reservations-list"></ul>
        </div>
        <form id="reservation-form" class="reservation-form">
          <input type="text" id="reservation-name" placeholder="Your name">
          <input type="text" id="reservation-start-date" placeholder="Start Date (YYYY-MM-DD)">
          <input type="text" id="reservation-end-date" placeholder="End Date (YYYY-MM-DD)">
          <input type="submit" value="Reserve">
        </form>
      </div>
    `;

  const closeButton = popupContainer.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popupContainer.style.visibility = 'hidden';
    popupContainer.style.opacity = 0;
  });

  const reservationCount = popupContainer.querySelector('.reservation-count');
  const reservationsList = popupContainer.querySelector('#reservations-list');
  const reservationForm = popupContainer.querySelector('#reservation-form');
  const nameInput = popupContainer.querySelector('#reservation-name');
  const startDateInput = popupContainer.querySelector('#reservation-start-date');
  const endDateInput = popupContainer.querySelector('#reservation-end-date');

  const renderReservations = async () => {
    reservationsList.innerHTML = '<li>Loading reservations...</li>';
    try {
      const reservations = await getReservations(pokemon.id);
      reservationsList.innerHTML = '';
      if (reservations.length > 0) {
        reservations.forEach((reservation) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${reservation.username} - ${reservation.date_start} to ${reservation.date_end}`;
          reservationsList.appendChild(listItem);
        });
        reservationCount.textContent = `(${reservations.length})`;
      } else {
        reservationsList.innerHTML = '<li>No reservations found</li>';
        reservationCount.textContent = '(0)';
      }
    } catch (error) {
      reservationsList.innerHTML = '<li>Error loading reservations</li>';
      reservationCount.textContent = '';
      console.error('Error loading reservations:', error.message);
    }
  };

  reservationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const startDate = startDateInput.value.trim();
    const endDate = endDateInput.value.trim();
    if (name !== '' && startDate !== '' && endDate !== '') {
      try {
        await addReservation(pokemon.id,
          { username: name, date_start: startDate, date_end: endDate });
        nameInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
        await renderReservations();
      } catch (error) {
        console.error('Error adding reservation:', error.message);
      }
    }
  });

  renderReservations();

  popupContainer.style.visibility = 'visible';
  popupContainer.style.opacity = 1;
};

export default createReservationPopup;