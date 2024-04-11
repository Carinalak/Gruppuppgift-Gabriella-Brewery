document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    let touchstartX = 0;
    let touchendX = 0;

    function showSlide(slideIndex) {
        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        updateDots();   
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");       
    }

    document.querySelector('#slideshow').addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    document.querySelector('#slideshow').addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    }, false);

    function handleGesture() {
        if (touchendX < touchstartX) {
            nextSlide();
        } else {
            prevSlide();
        }
    }

    updateDots();
    showSlide(currentSlide);
});
