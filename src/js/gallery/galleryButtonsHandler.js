import { showFirstPage, showLastPage, showNextPage, showPrevPage, currentPage } from "./galleryPagesHandler";
import { totalPages } from "./galleryHandler";

const navigation = document.querySelector('.gallery__navigation');
const firstPageBtn = navigation.querySelector('.button__round--start');
const prevPageBtn = navigation.querySelector('.button__round--prev');
const nextPageBtn = navigation.querySelector('.button__round--next');
const lastPageBtn = navigation.querySelector('.button__round--end');

const buttonsHandler = () => {
  if (currentPage === 1) {
    setfirstBtnsInactive();
    setlastBtnsActive();
  } else if (currentPage === totalPages) {
    setlastBtnsInactive();
    setfirstBtnsActive();
  } else {
    setlastBtnsActive();
    setfirstBtnsActive();
  }
};

const buttoncClassHandler = () => {
  if (currentPage === 1) {
    firstPageBtn.classList.add('button--inactive');
    prevPageBtn.classList.add('button--inactive');
    lastPageBtn.classList.remove('button--inactive');
    nextPageBtn.classList.remove('button--inactive');
  } else if (currentPage === totalPages) {
    firstPageBtn.classList.remove('button--inactive');
    prevPageBtn.classList.remove('button--inactive');
    lastPageBtn.classList.add('button--inactive');
    nextPageBtn.classList.add('button--inactive');
  } else {
    firstPageBtn.classList.remove('button--inactive');
    prevPageBtn.classList.remove('button--inactive');
    lastPageBtn.classList.remove('button--inactive');
    nextPageBtn.classList.remove('button--inactive');
  }
};

const setfirstBtnsInactive = () => {
  firstPageBtn.removeEventListener('click', showFirstPage);
  prevPageBtn.removeEventListener('click', showPrevPage);
};

const setlastBtnsInactive = () => {
  lastPageBtn.removeEventListener('click', showLastPage);
  nextPageBtn.removeEventListener('click', showNextPage);
};

const setfirstBtnsActive = () => {
  firstPageBtn.addEventListener('click', showFirstPage);
  prevPageBtn.addEventListener('click', showPrevPage);
};

const setlastBtnsActive = () => {
  lastPageBtn.addEventListener('click', showLastPage);
  nextPageBtn.addEventListener('click', showNextPage);
};

firstPageBtn.addEventListener('click', showFirstPage);
prevPageBtn.addEventListener('click', showPrevPage);
nextPageBtn.addEventListener('click', showNextPage);
lastPageBtn.addEventListener('click', showLastPage);

export { buttonsHandler, setfirstBtnsInactive, setlastBtnsInactive, buttoncClassHandler};