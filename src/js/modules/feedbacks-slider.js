const items = document.querySelectorAll('.feedbacks-item');
const dots = document.querySelectorAll('.dot-btn');
const slider = document.querySelector('.feedbacks-list');

let currentIndex = 0;

if (!items.length || !dots.length || !slider) {
  console.warn('Slider elements not found');
} else {
  showSlide(currentIndex);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
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
}

let wheelTimeout;

slider.addEventListener('wheel', e => {
  if (wheelTimeout) return;

  const sensitivity = 10;

  if (e.deltaX > sensitivity) {
    goToNextSlide();
  } else if (e.deltaX < -sensitivity) {
    goToPrevSlide();
  }

  wheelTimeout = setTimeout(() => {
    wheelTimeout = null;
  }, 300);
});

function showSlide(index) {
  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;

  items.forEach(item => item.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  items[index].classList.add('active');
  dots[index].classList.add('active');

  currentIndex = index;
}

function goToNextSlide() {
  showSlide(currentIndex + 1);
}

function goToPrevSlide() {
  showSlide(currentIndex - 1);
}
