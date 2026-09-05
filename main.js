let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
menu.classList.toggle("move");
};
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
header.classList.toggle('shadow', window.scrollY > 0);
});
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
        breakpoints: {
            320:{
                slidesPerView: 1,
            },
            1024:{
                slidesPerView: 1.5,
            }
      }
    });
