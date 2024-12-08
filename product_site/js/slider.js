const navLinks = document.querySelectorAll('.nav-container > a');
const slider = document.querySelector('.slider');
const navContainer = document.querySelector('.nav-container');

/* this function moves the slider to the active link when the page is loaded
   by getting the active link and setting the slider's position to the left of the link and the width of the link
*/
function moveSliderToActiveLink() {
    const activeLink = document.querySelector('.nav-container > .active');

    if (activeLink) {
        const linkRect = activeLink.getBoundingClientRect();
        slider.style.left = `${linkRect.left}px`;
        slider.style.width = `${linkRect.width}px`;
    }
}

/* this function calculates the position of the slider based on the link that is hovered over
   and sets the slider's position to the left of the link and the width of the link
*/
function handleNavHover() {
    const linkRect = this.getBoundingClientRect(); // 'this' refers to the link that is hovered over
    slider.style.left = `${linkRect.left}px`;
    slider.style.width = `${linkRect.width}px`;
}

/* this function connects the hover event to the link
   by adding an event listener to the link that listens for a mouseenter event
   and calls the handleNavHover function when the mouse enters the link
*/
for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    link.addEventListener('mouseenter', handleNavHover);
}  


// Initialize the slider position when the page is loaded
moveSliderToActiveLink();
window.addEventListener('resize', moveSliderToActiveLink); // move the slider when the window is resized
navContainer.addEventListener('mouseleave', moveSliderToActiveLink); // move the slider back to the active link when the mouse leaves the nav container