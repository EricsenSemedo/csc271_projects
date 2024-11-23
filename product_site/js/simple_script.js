var prevButtons = document.getElementsByClassName('prev');
var nextButtons = document.getElementsByClassName('next');
var gameList = document.getElementsByClassName('game-list');
var carousels = document.getElementsByClassName('carousel');
var gameCards = document.getElementsByClassName('game-card');
var cardWidth =  gameCards[0].offsetWidth + 30;
var minOpacity = .1;

// TODO: max 5 games seen at a time in carousel
// TODO: move 1 at a time in carousel

// This decrements the current index and updates the selected carousel
function cyclePrevious(carousel) {
    var currentIndex = parseInt(carousel.getAttribute('index'));

    if (currentIndex > 0) {
        currentIndex--;
        carousel.setAttribute('index', currentIndex);
        updateCarousel(carousel);
    }
}

// This increments the current index and updates the selected carousel
function cycleNext(carousel) {
    var currentIndex = parseInt(carousel.getAttribute('index'));

    if (currentIndex < gameCards.length - Math.floor(gameList[1].clientWidth / cardWidth)) {
        currentIndex++;
        carousel.setAttribute('index', currentIndex);
        updateCarousel(carousel);
    }
}

// This moves left or right through the carousel based on the current index for the selected carousel
function updateCarousel (carousel){
    var currentIndex = parseInt(carousel.getAttribute('index'));
    var selectedGameList = carousel.querySelector('.game-list');
    var selectedPrevButton = carousel.querySelector('.prev');
    var selectedNextButton = carousel.querySelector('.next');

    const offset = -currentIndex * cardWidth;
    selectedGameList.style.transform = `translateX(${offset}px)`;

    // if the current index is at the beginning or end of the carousel, set the opacity of the previous or next button to .1 and the cursor to default
    if (currentIndex == 0) {
        selectedPrevButton.style.opacity = '.1';
        selectedPrevButton.style.cursor = 'default';
        selectedNextButton.style.opacity = '1';
        selectedNextButton.style.cursor = 'pointer';
    }
    else if (currentIndex == gameCards.length - Math.floor(gameList[1].clientWidth / cardWidth)) {
        selectedPrevButton.style.opacity = '1';
        selectedPrevButton.style.cursor = 'pointer';
        selectedNextButton.style.opacity = '.1';
        selectedNextButton.style.cursor = 'default';
    }
    else {
        // if the current index is not at the beginning or end of the carousel, set the opacity of the previous or next button to 1 and the cursor to pointer
        selectedPrevButton.style.opacity = '1';
        selectedNextButton.style.opacity = '1';
        selectedNextButton.style.cursor = 'pointer';
        selectedPrevButton.style.cursor = 'pointer';
    }
}

// This initializes the carousel by setting the opacity of the previous button to .1 and the next button to 1
function initializeCarousel() {
    // this loop sets the opacity of the previous button to .1 and the next button to 1 and the cursor to pointer
    // for each carousel
    for (var i = 0; i < prevButtons.length; i++) {
        const currentIndex = i; // this stores the current index for the selected carousel at each iteration (done this way to avoid the variable being changed by the time the event listener is called)
        prevButtons[i].style.opacity = '.1';
        prevButtons[i].style.cursor = 'default';
        nextButtons[i].style.opacity = '1';

        prevButtons[i].addEventListener('click', function() {
            cyclePrevious(carousels[currentIndex]);
        });
        nextButtons[i].addEventListener('click', function() {
            cycleNext(carousels[currentIndex]);
        })
        carousels[i].setAttribute('index', 0);
    }
}

initializeCarousel();