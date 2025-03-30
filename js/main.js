const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
});

const swiper = new Swiper('.swiper', {
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const items = document.querySelectorAll(".tours__item");

items.forEach(element => {

  element.addEventListener("click", () => {
    items.forEach(el => {
      el.classList.remove("tours__item--active");
    });

    element.classList.add("tours__item--active");
  });

});
