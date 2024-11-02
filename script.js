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

const cards = document.querySelector('.cards');
let scrollPosition = 0;

function scrollLeft() {
    if (scrollPosition > 0) {
        scrollPosition -= 260;
        cards.style.transform = `translateX(-${scrollPosition}px)`;
    }
}

function scrollRight() {
    if (scrollPosition < cards.scrollWidth - cards.clientWidth) {
        scrollPosition += 260;
        cards.style.transform = `translateX(-${scrollPosition}px)`;
    }
}
