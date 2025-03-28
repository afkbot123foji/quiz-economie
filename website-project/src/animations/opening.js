function initOpeningAnimation() {
    const images = document.querySelectorAll('.opening-image');
    let currentImage = 0;

    function showNextImage() {
        if (currentImage < images.length) {
            images[currentImage].classList.add('fade-in');
            currentImage++;
            setTimeout(showNextImage, 1000); // Change image every second
        } else {
            // Optionally, you can trigger the next part of the application here
            console.log('Opening animation completed');
        }
    }

    showNextImage();
}

export { initOpeningAnimation };