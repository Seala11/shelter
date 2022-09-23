const pageSection = document.querySelector('.pets');
let currentCardsNumber;

const getCardsNumber = () => {
  let section = pageSection.getAttribute('data-section');
  let screenWidth = document.body.clientWidth;

  if (screenWidth > 1278) {
    if (section === 'slider') {
      currentCardsNumber = 3;
    } else {
      currentCardsNumber = 8;
    }
  }

  if (screenWidth <= 1278 && screenWidth > 766) {
    if (section === 'slider') {
      currentCardsNumber = 2;
    } else {
      currentCardsNumber = 6;
    }
  }

  if (screenWidth <= 766) {
    if (section === 'slider') {
      currentCardsNumber = 1;
    } else {
      currentCardsNumber = 3;
    }
  }

  return currentCardsNumber;
};

getCardsNumber();

export { currentCardsNumber, getCardsNumber };
