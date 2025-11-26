const openPromoModalBtn = document.querySelector('.advantages-btn');
const closePromoModalBtn = document.querySelector('.promo-modal-close-btn');
const promoModal = document.querySelector('.promo-modal-overlay');
const promoVideo = document.querySelector('.promo-modal-iframe');

const videoSrc = promoVideo.src;

openPromoModalBtn.addEventListener('click', () => {
  promoVideo.src = videoSrc;
  promoModal.classList.add('is-open');
});

closePromoModalBtn.addEventListener('click', () => {
  promoVideo.src = '';
  promoModal.classList.remove('is-open');
});
