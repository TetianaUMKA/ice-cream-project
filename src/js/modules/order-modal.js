const openOrderModalBtns = document.querySelectorAll('.open-buy-modal');
const closeOrderModalBtn = document.querySelector('.order-modal-close-btn');
const orderModal = document.querySelector('.order-modal-overlay');

openOrderModalBtns.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});
closeOrderModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  orderModal.classList.toggle('is-open');
}
