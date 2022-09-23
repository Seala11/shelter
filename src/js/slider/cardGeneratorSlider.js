import { currentCardsNumber } from '../common/screenWidthGetter';
import { getRandomCards } from '../common/cardGenerator';
import { resizeUptade } from './resizeUpdateCardsSlider';

const activeItems = document.querySelector('.slider__items--active');
const leftItems = document.querySelector('.slider__items--left');
const rightItems = document.querySelector('.slider__items--right');
let currentActiveCards = [];

const loadRandomSliderCards = async (currentCardsNumber) => {
  let cards = await getRandomCards(currentCardsNumber);

  activeItems.innerHTML = '';
  currentActiveCards = [];
  for (let i = 0; i < currentCardsNumber; i++) {
    currentActiveCards.push(cards[i].id);
    activeItems.appendChild(cards[i]);
  }

  updateHiddenCards(currentCardsNumber);
};

const updateHiddenCards = async (currentCardsNumber) => {
  let cards = await getRandomCards();

  let cardsToCheck = currentActiveCards;
  currentActiveCards = [];

  let uniqueCards = [];
  for (let i = 0; i < cards.length; i++) {
    if (!cardsToCheck.includes(cards[i].id)) {
      uniqueCards.push(cards[i]);
      currentActiveCards.push(cards[i].id);
    }
    if (uniqueCards.length === currentCardsNumber) break;
  }

  leftItems.innerHTML = '';
  rightItems.innerHTML = '';
  for (let i = 0; i < currentCardsNumber; i++) {
    let current = uniqueCards[i];
    let copy = current.cloneNode(true);
    leftItems.appendChild(current);
    rightItems.appendChild(copy);
  }
};

loadRandomSliderCards(currentCardsNumber);

window.addEventListener('resize', resizeUptade);

export { updateHiddenCards, loadRandomSliderCards };
