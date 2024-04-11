import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const slider = document.querySelector('.hero-slider')

const sliderHero = new Swiper(slider, {
  pagination: {
    el: '.hero-slider__pagination',
    type: 'progressbar',
  },

  slidesPerView: '1',
  loop: true,
})
