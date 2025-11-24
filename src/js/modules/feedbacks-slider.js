const items = document.querySelectorAll('.feedbacks-item');
const dots = document.querySelectorAll('.dot-btn');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    items[index].classList.add('active');
    dot.classList.add('active');
  });
});
