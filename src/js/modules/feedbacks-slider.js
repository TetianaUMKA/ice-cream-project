const items = document.querySelectorAll('.feedbacks-item');
const dots = document.querySelectorAll('.dot-btn');
const slider = document.querySelector('.feedbacks-list');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    items[index].classList.add('active');
    dot.classList.add('active');
  });
});

let startX = 0;

slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  const swipeDistance = 50;

  if (diff > swipeDistance) {
    goToNextSlide();
  } else if (diff < -swipeDistance) {
    goToPrevSlide();
  }
});

function goToNextSlide() {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= items.length) nextIndex = 0;
  showSlide(nextIndex);
}

function goToPrevSlide() {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) prevIndex = items.length - 1;
  showSlide(prevIndex);
}
