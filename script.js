function toggleFaq(element) {
    // Get the next sibling element which is the answer
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    // Toggle the "open" class on the answer
    answer.classList.toggle('open');

    // Rotate the arrow for visual feedback
    if (answer.classList.contains('open')) {
        arrow.style.transform = 'rotate(90deg)';
    } else {
        arrow.style.transform = 'rotate(0deg)';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.investment-cards');
    const cards = document.querySelectorAll('.investment-card');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
  
    function updateCarousel() {
      const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
      const offset = -currentIndex * cardWidth;
      cardsContainer.style.transform = `translateX(${offset}px)`;
    }
  
    rightArrow.addEventListener('click', function () {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the first card
      }
      updateCarousel();
    });
  
    leftArrow.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = cards.length - 1; // Loop back to the last card
      }
      updateCarousel();
    });
  });
  
