const makeRequest = async () => {
  let info;
  await import('../pets.json').then(({ default: petsInfo }) => {
    info = petsInfo;
  });
  return info;
};

const cardGenerator = async () => {
  let petsData = await makeRequest();

  let cardsArr = [];

  petsData.forEach((cardInfo) => {
    let card = document.createElement('div');
    card.className = 'slider__cards card';
    card.id = cardInfo.name;

    let cardImg = document.createElement('div');
    cardImg.className = `card__image`;
    cardImg.style.backgroundImage = `url(${cardInfo.img})`;
    card.appendChild(cardImg);

    let cardName = document.createElement('span');
    cardName.className = 'card__name';
    cardName.innerHTML = `${cardInfo.name}`;
    card.appendChild(cardName);

    let cardButton = document.createElement('button');
    cardButton.className = 'button button__primary button__primary--card';
    cardButton.innerHTML = 'Learn more';
    card.appendChild(cardButton);

    cardsArr.push(card);
  });

  return cardsArr;
};

const getRandomCards = async (currentCardsNumber = 8) => {
  let cardsArr = await cardGenerator();

  const cards = cardsArr
    .sort(() => Math.random() - 0.5)
    .slice(0, currentCardsNumber);

  return cards;
};

export { cardGenerator, getRandomCards };
