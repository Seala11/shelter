import { displayCards, fullCardsArray, totalPages, cardsPerPage } from './galleryHandler';

const pageNumberEl = document.querySelector('.gallery__page-number');

let currentPage = +pageNumberEl.innerHTML;

const setTotalPagesNumber = (cardsPerPage) => {
  let totalPages = fullCardsArray.length / cardsPerPage;
  return totalPages;
};

const changeCurrPageNumber = (pageNumber, operation) => {
  if (operation === 'FIRST_PAGE' || operation === 'LAST_PAGE') {
    pageNumberEl.innerHTML = pageNumber;
    currentPage = pageNumber;
  }

  if (operation === 'PREV_PAGE') {
    currentPage = currentPage - 1;
    pageNumberEl.innerHTML = currentPage;
  }

  if (operation === 'NEXT_PAGE') {
    currentPage = currentPage + 1;
    pageNumberEl.innerHTML = currentPage;
  }
};

const showFirstPage = () => {
  let firstPage = 1;
  changeCurrPageNumber(firstPage, 'FIRST_PAGE');
  displayCards(fullCardsArray, cardsPerPage);
};

const showPrevPage = () => {
  let prevPage = currentPage - 1;
  changeCurrPageNumber(prevPage, 'PREV_PAGE');
  displayCards(fullCardsArray, cardsPerPage);
};

const showNextPage = () => {
  let nextPage = currentPage + 1;
  changeCurrPageNumber(nextPage, 'NEXT_PAGE');
  displayCards(fullCardsArray, cardsPerPage);
};

const showLastPage = () => {
  changeCurrPageNumber(totalPages, 'LAST_PAGE');
  displayCards(fullCardsArray, cardsPerPage);
};

export {
  changeCurrPageNumber,
  setTotalPagesNumber,
  showFirstPage,
  showLastPage,
  showNextPage,
  showPrevPage,
  currentPage,
};
