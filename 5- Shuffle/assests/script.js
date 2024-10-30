////////////////////////////////
// Scroll Up
const homeSection = document.querySelector('.home');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting) {
      document.body.classList.remove('showScrollUp');
    }

    if (!ent.isIntersecting) {
      document.body.classList.add('showScrollUp');
    }
  },

  {
    root: null,
    threshold: 1,
  }
);

obs.observe(homeSection);

////////////////////////////////
// Mobile Navigation
const navEl = document.querySelector('.header__navbar');
const btnOpen = document.querySelector('.header__btn--toggle');
const btnClose = document.querySelector('.header__btn--close');

btnOpen.addEventListener('click', function () {
  navEl.classList.add('header__modal');
  btnOpen.classList.add('hidden');
});

btnClose.addEventListener('click', function () {
  navEl.classList.remove('header__modal');
  btnOpen.classList.remove('hidden');
});

////////////////////////////////////////////////////////
// Slider
const slides = document.querySelectorAll('.slider__item');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const slider = function () {
  const goToSlide = function (slide) {
    slides.forEach(
      (sl, i) => (sl.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  let curSlide = 0;

  // Next Slide
  const nextSlide = function () {
    if (curSlide === slides.length - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  // Previos Slide
  const preSlide = function () {
    if (curSlide === 0) {
      curSlide = slides.length - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', preSlide);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') preSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // Auto Slider
  setInterval(nextSlide, 5000);
};
slider();
