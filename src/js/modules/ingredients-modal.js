// Find all button Products
const openBtnIngredients = document.querySelectorAll('.product-btn');

const closeBtnIngredients = document.querySelector('.ingr-btn-close');
const overlayIngredients = document.querySelector('.ingredients.modal-overlay');

// For 1 button
// openBtnIngredients.addEventListener('click', () => {
//   overlayIngredients.classList.add('is-open');
//   /* Block scrolling background under modal-window */
//   document.body.style.overflow = 'hidden';
// });

// For every button
openBtnIngredients.forEach(link => {
  link.addEventListener('click', () => {
    overlayIngredients.classList.add('is-open');
    /* Block scrolling background under modal-window */
    document.body.style.overflow = 'hidden';
  });
});

// Close modal window
closeBtnIngredients.addEventListener('click', () => {
  overlayIngredients.classList.remove('is-open');
  /* UnBlock scrolling background under modal-window */
  document.body.style.overflow = '';
});


