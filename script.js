const swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  centeredSlides: true,
  initialSlide: 1, // começa na 2ª imagem (index 1)
  grabCursor: true,

  speed: 650, // suavidade na troca

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Ajusta quantos aparecem por tamanho de tela
  breakpoints: {
    0: {
      slidesPerView: 1.25,   // mostra um pedacinho dos lados no mobile
      spaceBetween: 12,
    },
    800: {
      slidesPerView: 3,      // mostra 3 no desktop (esquerda + centro + direita)
      spaceBetween: 20,
    }
  },
});
