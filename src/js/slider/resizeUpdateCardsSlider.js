import {
  currentCardsNumber,
  getCardsNumber,
} from '../common/screenWidthGetter';
import { loadRandomSliderCards } from './cardGeneratorSlider';

const resizeUptade = () => {
  let currentWidth = document.body.clientWidth;

  if (
    (currentWidth > 1278 && currentCardsNumber !== 3) ||
    (currentWidth <= 1278 && currentWidth > 766 && currentCardsNumber !== 2) ||
    (currentWidth <= 766 && currentCardsNumber !== 1)
  ) {
    let resizeToNumber = getCardsNumber();

    loadRandomSliderCards(resizeToNumber);
  }
};

export { resizeUptade };
