import {
  currentCardsNumber,
  getCardsNumber,
} from '../common/screenWidthGetter';

import { loadRandomGalleryCards } from './galleryHandler';

const resizeUptade = () => {
  let currentWidth = document.body.clientWidth;

  if (
    (currentWidth > 1278 && currentCardsNumber !== 8) ||
    (currentWidth <= 1278 && currentWidth > 766 && currentCardsNumber !== 6) ||
    (currentWidth <= 766 && currentCardsNumber !== 3)
  ) {
    let cardsPerPage = getCardsNumber();
    let uniqueCardsPerPage = 8; 
    let pages = 6;

    if (cardsPerPage < 8) {
      uniqueCardsPerPage = 6; 
      pages = 8;
    }
    loadRandomGalleryCards(uniqueCardsPerPage, pages);
  }
};

export { resizeUptade };
