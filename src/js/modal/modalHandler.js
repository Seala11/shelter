const sectionPets = document.querySelector('.pets');
const overlayElPets = document.querySelector('.overlay-pets');

const modalHandler = (event) => {
  if (
    event.target.classList.contains('card') ||
    event.target.parentElement.classList.contains('card')
  ) {
    let petId = event.target.id || event.target.parentElement.id;
    modalOpen(petId);
  }
};

let currentModal;
let modalBtnEl;
const modalOpen = async (petId) => {
  let petData = await makeRequest(petId);

  let modal = document.createElement('div');
  let modalBtn = document.createElement('button');
  let modalContent = document.createElement('div');

  modal.className = 'modal';
  modal.style.backgroundImage = `url('${petData.img}')`;

  modalContent.className = 'modal__content';
  modalContent.innerHTML = `
  <h3 class="modal__title">${petData.name}</h3>
  <h4 class="modal__subtitle">${petData.type} - ${petData.breed}</h4>
  <h5 class="modal__desc">${petData.description}</h5>
  <ul class="modal__list">
  <li class="modal__item"><h5 class="modal__item-desc"><span class="modal__desc--bold">Age: </span>${petData.age}</h5></li>
  <li class="modal__item"><h5 class="modal__item-desc"><span class="modal__desc--bold">Inoculations: </span>${petData.inoculations}</h5></li>
  <li class="modal__item"><h5 class="modal__item-desc"><span class="modal__desc--bold">Diseases: </span>${petData.diseases}</h5></li>
  <li class="modal__item"><h5 class="modal__item-desc"><span class="modal__desc--bold">Parasites: </span>${petData.parasites}</h5></li>
  </ul>
  `;

  modalBtn.className = 'button button__round button__modal';
  modalBtn.addEventListener('click', () => modalClose(currentModal));

  modal.appendChild(modalContent);
  modal.appendChild(modalBtn);
  sectionPets.appendChild(modal);

  currentModal = modal;

  modalBtnEl = modalBtn;
  overlayToggle();

  document.body.style.overflowY = 'hidden';
};

const makeRequest = async (petId) => {
  let petsData;
  await import('../pets.json').then(({ default: petsInfo }) => {
    for (let i = 0; i < petsInfo.length; i++) {
      if (petsInfo[i].name && petsInfo[i].name === petId) {
        petsData = petsInfo[i];
        break;
      }
    }
  });
  return petsData;
};

const modalClose = (currentModal) => {
  sectionPets.removeChild(currentModal);
  overlayToggle();
  document.body.style.overflowY = 'scroll';
  currentModal = null;
};

const overlayToggle = () => {
  overlayElPets.classList.toggle('overlay--darken-card');

  overlayElPets.addEventListener('mouseenter', () => {
    modalBtnEl.classList.add('hover');
  });

  overlayElPets.addEventListener('mouseout', () => {
    modalBtnEl.classList.remove('hover');
  });
};

sectionPets.addEventListener('click', modalHandler);
overlayElPets.addEventListener('click', () => modalClose(currentModal));
