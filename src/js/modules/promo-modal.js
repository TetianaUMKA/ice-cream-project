const openPromoModalBtn = document.querySelector('.advantages-btn');
const closePromoModalBtn = document.querySelector('.promo-modal-close-icon');
const promoModal = document.querySelector('.promo-modal-overlay');

openPromoModalBtn.addEventListener('click', toggleModal);
closePromoModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  promoModal.classList.toggle('is-open');
}
