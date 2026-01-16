'use strict';

const buttonOpenModal = document.querySelector('.button-mobil-open');
const buttonCloseModal = document.querySelector('.button-close-modal');
const modalWindow = document.querySelector('.mobil-modal');

buttonOpenModal.addEventListener('click', () => {
  modalWindow.classList.add('isVisible');
});

buttonCloseModal.addEventListener('click', () => {
  modalWindow.classList.remove('isVisible');
});
