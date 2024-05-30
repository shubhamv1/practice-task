document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.querySelector(".navbar-links");

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
    let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function NextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}
 setInterval(NextImage, 3000);

});


