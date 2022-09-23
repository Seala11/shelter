const navToggleButton = document.querySelector('.navbar__toggle');
const navList = document.querySelector('.list');
const logo = document.querySelector('.logo');
const headerPetsPage = document.querySelector('.header--pets');
const overlayEl = document.querySelector('.overlay');
const page = navList.getAttribute('data-page');

const menuToggle = () => {
  const visibility = navList.getAttribute('data-visible');

  if (visibility === 'false') {
    navList.setAttribute('data-visible', true);
    navToggleButton.setAttribute('aria-expended', true);
    iconToggle(visibility);
    logoToggle();
    scrollToggle(page);
    overlayToggle(page);
  } else {
    navList.setAttribute('data-visible', false);
    navToggleButton.setAttribute('aria-expended', false);
    iconToggle(visibility);
    logoToggle();
    scrollToggle(page);
    overlayToggle(page);
  }
};

const iconToggle = (visibility) => {
  if (visibility === 'false') {
    if (navToggleButton.classList.contains('hamburger--toggle-right')) {
      navToggleButton.classList.remove('hamburger--toggle-right');
    }
    navToggleButton.classList.add('hamburger--toggle-left');
  } else {
    navToggleButton.classList.remove('hamburger--toggle-left');
    navToggleButton.classList.add('hamburger--toggle-right');
  }
};

const logoToggle = () => {
  logo.classList.toggle('logo--transform');
};

const scrollToggle = () => {
  document.documentElement.classList.toggle('prevent-scroll');
};

const overlayToggle = (page) => {
  overlayEl.classList.toggle('overlay--darken');
  if (page === 'pets') headerPetsPage.classList.toggle('header--darken');
};

const navLinksHandler = (event) => {
  let menuIsOpen = navToggleButton.getAttribute('aria-expended');
  let linkIsActive = event.target.classList.contains('link--active');

  if (page === 'main' && linkIsActive) {
    event.preventDefault();
    if (menuIsOpen === 'true') {
      menuToggle();
    }
    return;
  }
  if (page === 'main' && !linkIsActive) {
    if (event.target.classList.contains('link') && menuIsOpen === 'true') {
      menuToggle();
    }
    return;
  }

  if (page === 'pets' && linkIsActive) {
    event.preventDefault();
    if (menuIsOpen === 'true') {
      menuToggle();
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return;
  }
  if (page === 'pets' && !linkIsActive) {
    if (event.target.classList.contains('link') && menuIsOpen === 'true') {
      menuToggle();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
};

const logoLinkHandler = (event) => {
  if (page !== 'main') return;

  let currentWidth = document.body.clientWidth;
  let menuIsOpen = navToggleButton.getAttribute('aria-expended');

  if (menuIsOpen === 'false' || currentWidth > 766) {
    event.preventDefault();
    return;
  } else if (menuIsOpen === 'true') {
    event.preventDefault();
    menuToggle();
    return;
  }
};

navToggleButton.addEventListener('click', menuToggle);
navList.addEventListener('click', navLinksHandler);
overlayEl.addEventListener('click', menuToggle);
logo.addEventListener('click', logoLinkHandler);
