var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const menu = document.querySelector(".menu")
const hamberger = document.querySelector(".hamberger")
const span = document.querySelector(".hamberger span")

menu.addEventListener("click", function () {
  hamberger.style.display = "initial"
})

span.addEventListener("click", function () {
  hamberger.style.display = "none"
})