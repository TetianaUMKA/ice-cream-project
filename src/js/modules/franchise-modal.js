const openFranchiseModalBtn = document.querySelector('#open-franchise-modal');
const closeFranchiseModalBtn = document.querySelector('.franchise-modal-close-btn');
const franchiseModal = document.querySelector('.franchise-modal-overlay');

openFranchiseModalBtn.addEventListener('click', toggleModal);
closeFranchiseModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  franchiseModal.classList.toggle('is-open');
}
