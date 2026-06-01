// =========================
// ELEMENTOS
// =========================

const sliderTrack =
document.querySelector('.slider-track');

const cards =
document.querySelectorAll('.organization-card');

const nextBtn =
document.querySelector('.next-btn');

const prevBtn =
document.querySelector('.prev-btn');

// =========================
// VARIABLES
// =========================

let currentIndex = 0;

const gap = 25;



function updateSlider(){

    const cardWidth =
    cards[0].offsetWidth + gap;

    sliderTrack.style.transform =
    `translateX(-${currentIndex * cardWidth}px)`;
}



nextBtn.addEventListener('click', () => {

    const visibleCards =
    Math.floor(
        document.querySelector('.slider-container')
        .offsetWidth /
        (cards[0].offsetWidth + gap)
    );

    const maxIndex =
    cards.length - visibleCards;

    if(currentIndex >= maxIndex){

        currentIndex = 0;

    }else{

        currentIndex++;
    }

    updateSlider();

});

// =========================
// PREVIOUS
// =========================

prevBtn.addEventListener('click', () => {

    const visibleCards =
    Math.floor(
        document.querySelector('.slider-container')
        .offsetWidth /
        (cards[0].offsetWidth + gap)
    );

    const maxIndex =
    cards.length - visibleCards;

    if(currentIndex <= 0){

        currentIndex = maxIndex;

    }else{

        currentIndex--;
    }

    updateSlider();

});

// =========================
// RESPONSIVE FIX
// =========================

window.addEventListener('resize', () => {

    updateSlider();

});