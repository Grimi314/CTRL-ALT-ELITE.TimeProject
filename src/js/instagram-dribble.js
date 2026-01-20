// ===============================
// Instagram Link Hover Effect + Click Counter
// ===============================
import iconsPath from '../img/icon.svg';

const instagramLink = document.querySelector('.instagram-link');
const svgAccess = document.querySelector('.dribble-line-icon');
const svgSource = svgAccess.querySelector('.dribble-line-source');
const mobScreen = window.matchMedia('(max-width: 767px)');
const tabScreen = window.matchMedia(
  '(min-width: 768px) and (max-width: 1439px)'
);
const deskScreen = window.matchMedia('(min-width: 1440px)');

if (instagramLink) {
  const spanMob = instagramLink.querySelector('.mob-desktop-text');
  const spanTablet = instagramLink.querySelector('.tablet-text');

  const defaultTextMob = spanMob.textContent;
  const defaultTextTablet = spanTablet.textContent;
  const instagramHoverText = "Let's connect";

  let instaClickCount =
    parseInt(localStorage.getItem('instagramClickCount')) || 0;

  function updateInstaClickCount() {
    instaClickCount++;
    localStorage.setItem('instagramClickCount', instaClickCount);
    console.log(`Посилання Instagram було натиснуто ${instaClickCount} разів`);
  }

  instagramLink.addEventListener('mouseover', () => {
    spanMob.textContent = instagramHoverText;
    spanTablet.textContent = instagramHoverText;
    instagramLink.classList.add('hovered');
  });

  instagramLink.addEventListener('mouseout', () => {
    spanMob.textContent = defaultTextMob;
    spanTablet.textContent = defaultTextTablet;
    instagramLink.classList.remove('hovered');
  });
  instagramLink.addEventListener('click', () => {
    updateInstaClickCount();
  });
}

// ===============================
// Dribbble Link Hover Effect + Click Counter
// ===============================
const dribbleLink = document.querySelector('.dribble-link');

if (dribbleLink) {
  const defaultTextDribble = dribbleLink.textContent;
  const dribbleHoverText = "Let's connect";

  let clickCount = parseInt(localStorage.getItem('dribbleClickCount')) || 0;

  function updateClickCount() {
    clickCount++;
    localStorage.setItem('dribbleClickCount', clickCount);
    console.log(`Посилання Dribbble було натиснуто ${clickCount} разів`);
  }

  dribbleLink.addEventListener('mouseover', () => {
    dribbleLink.textContent = dribbleHoverText;
    dribbleLink.classList.add('hovered');
  });

  dribbleLink.addEventListener('mouseout', () => {
    dribbleLink.textContent = defaultTextDribble;
    dribbleLink.classList.remove('hovered');
  });

  dribbleLink.addEventListener('click', () => {
    updateClickCount();
  });
}

// ===============================
// Scroll Reveal for Instagram Section
// ===============================
const instagramSection = document.querySelector('.instagram-section');

if (instagramSection) {
  function reveal() {
    const pos = instagramSection.getBoundingClientRect().top;
    if (pos < window.innerHeight * 0.8) {
      instagramSection.classList.add('visible');
    }
  }

  window.addEventListener('scroll', reveal);

  reveal();
}

// function for change svg source and with

function changeSvg() {
  if (mobScreen.matches) {
    svgAccess.setAttribute('width', '320');
    svgSource.setAttribute('href', `${iconsPath}#icon-dribbleline-mobile`);
  }
  if (tabScreen.matches) {
    svgAccess.setAttribute('width', '688');
    svgSource.setAttribute('href', `${iconsPath}#icon-dribbleline-tablet`);
  }
  if (deskScreen.matches) {
    svgAccess.setAttribute('width', '1076');
    svgSource.setAttribute('href', `${iconsPath}#icon-dribbleline-desktop`);
  }
}

changeSvg();
mobScreen.addEventListener('change', changeSvg);
tabScreen.addEventListener('change', changeSvg);
deskScreen.addEventListener('change', changeSvg);
