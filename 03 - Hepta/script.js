'use strict';

const navigationEl = document.querySelector('.navigation');
const navigationBtn = document.querySelector('.navigation__icon');
const allLinks = document.querySelectorAll('a:link');

navigationBtn.addEventListener('click', function () {
  navigationEl.classList.toggle('open-nav');
});

allLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('navigation__link'))
      navigationEl.classList.toggle('open-nav');
  });
});
