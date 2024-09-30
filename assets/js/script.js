
  var swiper = new Swiper(".hotelSwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 800,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 5000,
    },
  });

  var swiper = new Swiper(".aboutSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
