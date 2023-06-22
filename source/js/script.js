const mainNav = document.querySelector('.nav-list');
const navToggle = document.querySelector('.header__toggle');

mainNav.classList.remove('nav-list--nojs');
navToggle.classList.remove('header__toggle--nojs');

if (!mainNav.classList.contains('site-list--closed')) {
  mainNav.classList.add('site-list--closed');
}

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('nav-list--closed');
  navToggle.classList.toggle('header__toggle--open');
  navToggle.classList.toggle('header__toggle--closed');
});

const mainSlider = document.querySelector('.about-slider__wrapper');
mainSlider.classList.remove('about-slider__wrapper--nojs');

const swiper = new Swiper('.about-slider__container', {
  navigation: {
    nextEl: '.about-slider__button-next',
    prevEl: '.about-slider__button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,

    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  }
});
