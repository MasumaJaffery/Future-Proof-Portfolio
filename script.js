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
        const cardWidth = cards[0].offsetWidth + 20; // Width of one card + gap (adjust if needed)
        const visibleCards = Math.floor(cardsContainer.offsetWidth / cardWidth);
        const maxIndex = cards.length - visibleCards;

        // Ensure currentIndex is within bounds
        currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

        // Move the container based on the current index
        const offset = -currentIndex * cardWidth;
        cardsContainer.style.transform = `translateX(${offset}px)`;
    }

    // Expand width when interacting with the carousel
    function expandCarouselWidth() {
        cardsContainer.classList.add('expanded-width');
    }

    // Right arrow click event
    rightArrow.addEventListener('click', function () {
        expandCarouselWidth(); // Expand the width on interaction
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first card
        }
        updateCarousel();
    });

    // Left arrow click event
    leftArrow.addEventListener('click', function () {
        expandCarouselWidth(); // Expand the width on interaction
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1; // Loop back to the last card
        }
        updateCarousel();
    });

    // Optionally, you can reset the width when no longer interacting
    window.addEventListener('resize', function () {
        cardsContainer.classList.remove('expanded-width'); // Remove expanded width on resize
        updateCarousel();
    });

    // Initial setup
    updateCarousel();

});

