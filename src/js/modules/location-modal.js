// Find button Locations
const openBtnLocation = document.querySelector('.location-btn');
const closeBtnLocation = document.querySelector('.location-btn-close');
const overlayLocation = document.querySelector('.location.modal-overlay');

// For button
openBtnLocation.addEventListener('click', () => {
  overlayLocation.classList.add('is-open');
  /* Block scrolling background under modal-window */
  document.body.style.overflow = 'hidden';
});

// Close modal window
closeBtnLocation.addEventListener('click', () => {
  overlayLocation.classList.remove('is-open');
  /* UnBlock scrolling background under modal-window */
  document.body.style.overflow = '';
});
