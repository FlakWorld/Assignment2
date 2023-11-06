const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const cardImg = card.querySelector('.card-img-top');

  card.addEventListener('mouseenter', () => {
    cardImg.classList.remove('card-img-hidden');
  });

  card.addEventListener('mouseleave', () => {
    cardImg.classList.add('card-img-hidden');
  });
});
