var prevButtons = document.getElementsByClassName('prev');
var nextButtons = document.getElementsByClassName('next');
var gameList = document.getElementsByClassName('game-list');
var gameCards = document.getElementsByClassName('game-card');
var cardWidth =  gameCards[0].offsetWidth + 30;
var currentIndex = 0;

// This decrements the current index and updates the selected carousel
function cyclePrevious(carouselIndex) {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel(carouselIndex);
    }
}

// This increments the current index and updates the selected carousel
function cycleNext(carouselIndex) {
    if (currentIndex < gameCards.length - Math.floor(gameList[1].clientWidth / cardWidth)) {
        currentIndex++;
        updateCarousel(carouselIndex);
    }
}

// This moves left or right through the carousel based on the current index for the selected carousel
function updateCarousel (carouselIndex){
    const offset = -currentIndex * cardWidth;
    gameList[carouselIndex].style.transform = `translateX(${offset}px)`;

    // if the current index is at the beginning or end of the carousel, set the opacity of the previous or next button to .5 and the cursor to default
    if (currentIndex == 0) {
        prevButtons[carouselIndex].style.opacity = '.5';
        prevButtons[carouselIndex].style.cursor = 'default';
        nextButtons[carouselIndex].style.opacity = '1';
        nextButtons[carouselIndex].style.cursor = 'pointer';
    }
    else if (currentIndex == gameCards.length - Math.floor(gameList[1].clientWidth / cardWidth)) {
        prevButtons[carouselIndex].style.opacity = '1';
        prevButtons[carouselIndex].style.cursor = 'pointer';
        nextButtons[carouselIndex].style.opacity = '.5';
        nextButtons[carouselIndex].style.cursor = 'default';
    }
    else {
        // if the current index is not at the beginning or end of the carousel, set the opacity of the previous or next button to 1 and the cursor to pointer
        prevButtons[carouselIndex].style.opacity = '1';
        nextButtons[carouselIndex].style.opacity = '1';
        nextButtons[carouselIndex].style.cursor = 'pointer';
        prevButtons[carouselIndex].style.cursor = 'pointer';
    }
}

// This initializes the carousel by setting the opacity of the previous button to .5 and the next button to 1
function initializeCarousel() {
    // this loop sets the opacity of the previous button to .5 and the next button to 1 and the cursor to pointer
    // for each carousel
    for (var i = 0; i < prevButtons.length; i++) {
        prevButtons[i].style.opacity = '.5';
        prevButtons[i].style.cursor = 'default';
        nextButtons[i].style.opacity = '1';
    }
}

initializeCarousel();