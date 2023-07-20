import Swiper, { Navigation, Pagination, Thumbs } from "swiper";

document.addEventListener("DOMContentLoaded", () => {

  const breakpointsThreeSliders = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 16,
    }
  }

  const salesSlider = '.sales-slider'
  if(document.querySelector(salesSlider)) {
    new Swiper(salesSlider, {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      speed: 800,
      modules: [Navigation, Pagination],
      pagination: {
        el: `${salesSlider}-pagination`,
        clickable: true,
      },
      navigation: {
        nextEl: `${salesSlider}-next`,
        prevEl: `${salesSlider}-prev`,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      },
    });
  }

  const programsSlider = '.programs-slider';
  if(document.querySelector(programsSlider)) {
    new Swiper(programsSlider, {
      slidesPerView: 1,
      speed: 400,
      modules: [Navigation],
      navigation: {
        nextEl: `${programsSlider}-next`,
        prevEl: `${programsSlider}-prev`,
      },
      breakpoints: breakpointsThreeSliders,
    });
  }

  const reviewsSlider = '.reviews-slider';
  if(document.querySelector(reviewsSlider)) {
    new Swiper(reviewsSlider, {
      slidesPerView: 1,
      speed: 800,
      modules: [Navigation],
      navigation: {
        nextEl: `${reviewsSlider}-next`,
        prevEl: `${reviewsSlider}-prev`,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      },
    });
  }

  const promoSlider = '.promo-slider';
  if(document.querySelector(promoSlider)) {
    new Swiper(promoSlider, {
      slidesPerView: 1,
      speed: 400,
      modules: [Navigation],
      navigation: {
        nextEl: `${promoSlider}-next`,
        prevEl: `${promoSlider}-prev`,
      },
      breakpoints: breakpointsThreeSliders,
    });
  }

  const qualitySlider = '.quality-slider';
  if(document.querySelector(qualitySlider)) {
    new Swiper(qualitySlider, {
      slidesPerView: 1,
      speed: 400,
      modules: [Navigation, Pagination],
      pagination: {
        el: `${qualitySlider}-pagination`,
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return '0' + number;
        },
        formatFractionTotal: function (number) {
          if(number < 10) return '0' + number;
          if(number > 9) return number;
        }
      },
      navigation: {
        nextEl: `${qualitySlider}-next`,
        prevEl: `${qualitySlider}-prev`,
      },
    });
  }

  const teamSlider = '.team-slider';
  if(document.querySelector(teamSlider)) {
    new Swiper(teamSlider, {
      speed: 400,
      modules: [Navigation, Pagination],
      pagination: {
        el: `${teamSlider}-pagination`,
        type: 'progressbar',
      },
      navigation: {
        nextEl: `${teamSlider}-next`,
        prevEl: `${teamSlider}-prev`,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
        }
      }
    });
  }

  const partnersSlider = '.partners-slider';
  if(document.querySelector(partnersSlider)) {
    new Swiper(partnersSlider, {
      speed: 400,
      modules: [Navigation, Pagination],
      pagination: {
        el: `${partnersSlider}-pagination`,
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return '0' + number;
        },
        formatFractionTotal: function (number) {
          if(number < 10) return '0' + number;
          if(number > 9) return number;
        }
      },
      navigation: {
        nextEl: `${partnersSlider}-next`,
        prevEl: `${partnersSlider}-prev`,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 16,
        }
      }
    });
  }

  const datesSlider = '.dates-slider';
  if(document.querySelector(datesSlider)) {
    new Swiper(datesSlider, {
      slidesPerView: "auto",
      spaceBetween: 8,
      speed: 300,
      simulateTouch: false,
      modules: [Navigation],
      navigation: {
        nextEl: `${datesSlider}-next`,
        prevEl: `${datesSlider}-prev`,
      },
      on: {
        slideChange: function (i) {
          const nav = document.querySelector('.dates-slider-buttons');
          if(i.isEnd) {
            nav.classList.add('last-slide');
          }
          else {
            nav.classList.remove('last-slide');
          }
        },
        resize: function (i) {
          const nav = document.querySelector('.dates-slider-buttons');
          if(i.isLocked) {
            nav.classList.add('d-none');
          }
          else {
            nav.classList.remove('d-none');
          }
        },
      },
    });
  }

  const productCardSlider = '.productCard-slider';
  const productCardThumbs = '.productCard-thumbs-slider';

  if(document.querySelector(productCardSlider) && document.querySelector(productCardThumbs)) {

    const productCardThumbsSlider = new Swiper(productCardThumbs, {
      spaceBetween: 4,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(productCardSlider, {
      spaceBetween: 10,
      modules: [Navigation, Thumbs],
      navigation: {
        nextEl: `${productCardSlider}-next`,
        prevEl: `${productCardSlider}-prev`,
      },
      thumbs: {
        swiper: productCardThumbsSlider,
      },
    });
  }

});