import { getAllPages } from './cardGeneratorGallery';
import { getCardsNumber } from '../common/screenWidthGetter';
import { resizeUptade } from './resizeUpdateCardsGallery';
import {
  buttonsHandler,
  buttoncClassHandler,
  setfirstBtnsInactive,
  setlastBtnsInactive,
} from './galleryButtonsHandler';
import { changeCurrPageNumber, setTotalPagesNumber, currentPage } from './galleryPagesHandler';

const galleryElement = document.querySelector('.gallery');

let cardsPerPage = getCardsNumber();
let totalPages;
let fullCardsArray;

const loadRandomGalleryCards = async (uniqueCardsPerPage, pages) => {
  const cards = await getAllPages(uniqueCardsPerPage, pages);

  changeCurrPageNumber(1, 'FIRST_PAGE');
  cardsPerPage = getCardsNumber();
  displayCards(cards, cardsPerPage, currentPage);
  fullCardsArray = cards;
  totalPages = setTotalPagesNumber(cardsPerPage);

  showIdInConsole(cardsPerPage);
};

let cardsId = [];
const showIdInConsole = (cardsPerPage) => {
  cardsId = [];
  for (let i = 0; i < fullCardsArray.length; i++) {
    let curr = fullCardsArray[i].id;
    let page = Math.floor(i / cardsPerPage) + 1;
    cardsId.push(`Page ${page}: ${i + 1} - ${curr}`);
  }
};

const displayCards = (cards = fullCardsArray, cardsPerPage, page = currentPage) => {
  addAnimation();

  galleryElement.innerHTML = '';
  page--;

  let from = cardsPerPage * page;
  let to = from + cardsPerPage;
  let chosenPageItems = cards.slice(from, to);

  for (let i = 0; i < chosenPageItems.length; i++) {
    galleryElement.appendChild(chosenPageItems[i]);
  }
};

const addAnimation = () => {
  galleryElement.classList.add('fadein');

  setfirstBtnsInactive();
  setlastBtnsInactive();

  buttoncClassHandler();
};

const removeAnimation = (event) => {
  if (event.animationName === 'fadein') {
    galleryElement.classList.remove('fadein');

    buttonsHandler();
  }
};

loadRandomGalleryCards();
galleryElement.addEventListener('animationend', removeAnimation);
window.addEventListener('resize', resizeUptade);

export { loadRandomGalleryCards, displayCards, fullCardsArray, totalPages, cardsPerPage };
