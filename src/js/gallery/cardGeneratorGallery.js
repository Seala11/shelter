import { getRandomCards } from '../common/cardGenerator';

const getCardsArray = async (uniqueCardsPerPage) => {
  const cards = await getRandomCards(uniqueCardsPerPage);
  return cards;
};

const getAllPages = async (uniqueCardsPerPage = 8, pages = 6) => {
  let allPagesCards = [];
  for (let i = 0; i < pages; i++) {
    const cards = await getCardsArray(uniqueCardsPerPage);
    allPagesCards = [...allPagesCards, ...cards];
  }
  return allPagesCards;
};

export { getAllPages };
