//TITLE PAGE

const titleImage = document.querySelector('.title-page-logo img');

titleImage.addEventListener('click', scrollDown);

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight * 1,
        behavior: 'smooth' 
    });
}

//MENU

let menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

const beanOne = document.querySelector('.menu-button-beans img:nth-child(1)');
const beanTwo = document.querySelector('.menu-button-beans img:nth-child(2)');
const beanThree = document.querySelector('.menu-button-beans img:nth-child(3)');

let isMenuOpen = false;

menuBtn.addEventListener('click', toggleDisplay);

function toggleDisplay() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        beanOne.classList.add('animateBean1');
        beanTwo.classList.add('animateBean2');
        beanThree.classList.add('animateBean3');
        menu.classList.add('menu-visible');
        beanOne.classList.remove('deAnimateBean1');
        beanTwo.classList.remove('deAnimateBean2');
        beanThree.classList.remove('deAnimateBean3');
        menu.classList.remove('menu-slideOut');
    } else {
        beanOne.classList.remove('animateBean1');
        beanTwo.classList.remove('animateBean2');
        beanThree.classList.remove('animateBean3');
        beanOne.classList.add('deAnimateBean1');
        beanTwo.classList.add('deAnimateBean2');
        beanThree.classList.add('deAnimateBean3');
        menu.classList.add('menu-slideOut');

        setTimeout(() => {
            menu.classList.remove('menu-visible');
        }, 500);
    }
}

// ----------------- Cookie popup: ----------------------- //

var declineBtn = document.getElementById('declineBtn');
var acceptBtn = document.getElementById('acceptBtn');
var cookiePopup = document.getElementById('cookiePopup');

declineBtn.addEventListener('click', function() {
    cookiePopup.style.display = 'none';
});

acceptBtn.addEventListener('click', function() {
    cookiePopup.style.display = 'none';
});



//feature to be able to flip the coffee cards
  let cards = document.querySelectorAll('.flip-card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});


// SLIDESHOW - OUR CAFÉ PICKS SECTION
let nextBtn = document.querySelector('#nextBtn');
let previousBtn = document.querySelector('#previousBtn');


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slideshow-slide");
    let currentSlide = 0;
    let touchstartX = 0;
    let touchendX = 0;

    function showSlide(slideIndex) {
        slides.forEach(slide => slide.style.display = "none");
        slides[slideIndex].style.display = "grid";
    }


    // function adjustSlideLayout() {
    //     if (window.innerWidth > 700) {
    //         slides.forEach(slide => slide.style.display = "grid");
    //     } else {
    //         function showSlide(slideIndex) {
    //             slides.forEach(slide => slide.style.display = "none");
    //             slides[slideIndex].style.display = "block";
    //         } 
    //     }
    //     showSlide(slideIndex);
    // }
    // adjustSlideLayout();
    

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        updateDots();   
    }

    nextBtn.addEventListener("click", nextSlide);


    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        updateDots();
    }

    previousBtn.addEventListener("click", prevSlide);

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



// // SLIDESHOW TABLET

// document.addEventListener("DOMContentLoaded", function() {

//     function checkScreenSize() {
//         if (window.innerWidth > 700) {
//             elementToShow.style.display = "block";
//         } else {
//             elementToShow.style.display = "none";
//         }
//     }

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
// });

// const images = document.querySelector('slideshow-image');
// const slideshowSection = document.querySelector('#slideshow');

// class Carousel {

//     constructor(container, items){
//         this.carouselContainer = container;
//         this.carouselArray = [...items];
//     }
// }

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

