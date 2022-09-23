import { updateHiddenCards } from './cardGeneratorSlider';
import { currentCardsNumber } from '../common/screenWidthGetter';

const sliderEl = document.querySelector('.slider');
const leftBtn = document.querySelector('.button__round--left');
const rightBtn = document.querySelector('.button__round--right');
const leftItems = document.querySelector('.slider__items--left');
const rightItems = document.querySelector('.slider__items--right');

const transitionLeft = () => {
  let width = window.innerWidth;
  let numberOfCards = cardsNumberToRender(width);
  sliderEl.classList.add(`transition-left-${numberOfCards}`);

  leftBtn.removeEventListener('click', transitionLeft);
  rightBtn.removeEventListener('click', transitionRight);
};

const transitionRight = () => {
  let width = window.innerWidth;
  let numberOfCards = cardsNumberToRender(width);
  sliderEl.classList.add(`transition-right-${numberOfCards}`);

  leftBtn.removeEventListener('click', transitionLeft);
  rightBtn.removeEventListener('click', transitionRight);
};

const cardsNumberToRender = (screenWidth) => {
  let numberToRender;

  if (screenWidth > 1278) {
    numberToRender = 3;
  } else if (screenWidth > 766 && screenWidth <= 1278) {
    numberToRender = 2;
  } else if (screenWidth <= 766) {
    numberToRender = 1;
  }

  return numberToRender;
};

const animationHandler = (event) => {
  if (
    event.animationName === 'transition-right-3' ||
    event.animationName === 'transition-right-2' ||
    event.animationName === 'transition-right-1'
  ) {
    sliderEl.classList.remove('transition-right-3');
    sliderEl.classList.remove('transition-right-2');
    sliderEl.classList.remove('transition-right-1');
    document.querySelector('.slider__items--active').innerHTML = rightItems.innerHTML;
  }
  if (
    event.animationName === 'transition-left-3' ||
    event.animationName === 'transition-left-2' ||
    event.animationName === 'transition-left-1'
  ) {
    sliderEl.classList.remove('transition-left-3');
    sliderEl.classList.remove('transition-left-2');
    sliderEl.classList.remove('transition-left-1');
    document.querySelector('.slider__items--active').innerHTML = leftItems.innerHTML;
  }

  updateHiddenCards(currentCardsNumber);

  leftBtn.addEventListener('click', transitionLeft);
  rightBtn.addEventListener('click', transitionRight);
};

leftBtn.addEventListener('click', transitionLeft);
rightBtn.addEventListener('click', transitionRight);
sliderEl.addEventListener('animationend', animationHandler);
