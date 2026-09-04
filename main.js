let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
menu.classList.toggle("move");
};
var swiper = new Swiper('.testimonial-content', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

      });