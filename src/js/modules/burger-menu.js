const openMenuBtn = document.querySelector('.burger-open-menu-btn');
const closeMenuBtn = document.querySelector('.close-burger-menu-btn');
const burgerOverlay = document.querySelector('.burger-menu');
const burgerLinks = document.querySelectorAll('.burger-menu-nav-link');

openMenuBtn.addEventListener('click', () => {
  burgerOverlay.classList.add('is-open', 'animate__animated', 'animate__slideInDown');
  document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
  burgerOverlay.classList.remove('is-open', 'animate__animated', 'animate__slideInDown');
  document.body.style.overflow = '';
});

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});
