//MENU

let menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', toggleDisplay);

function toggleDisplay() {

    menu.classList.toggle('menu-visible');

  }


//feature to be able to flip the coffee cards
  let cards = document.querySelectorAll('.flip-card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});


// SLIDESHOW - OUR CAFÉ PICKS SECTION

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
        const dots = slides[currentSlide].querySelectorAll(".dot");
        const allDots = document.querySelectorAll(".dot");
        allDots.forEach(dot => dot.classList.remove("active"));
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

// Subscribe - button:
const inputField = document.querySelector('.subscribe-input');
const subscribeBtn = document.querySelector('.subscribe-btn');


inputField.addEventListener('input', function() {

    if (inputField.value.trim() !== '') {
        subscribeBtn.disabled = false;
        subscribeBtn.style.opacity = '1';
    } else {
        subscribeBtn.disabled = true;
        subscribeBtn.style.opacity = '0.5';
    }
});

