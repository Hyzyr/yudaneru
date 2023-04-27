const settings = {
  feedbacks: {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
  },
};

document.querySelectorAll(".swiper").forEach((swiperSlider) => {
  const settingsKey = swiperSlider.getAttribute("data-swiper");
  const parentElement = swiperSlider.hasAttribute("data-swiper-parent")
    ? document.querySelector(swiperSlider.getAttribute("data-swiper-parent"))
    : swiperSlider.parentElement;
  const prev = parentElement.querySelector(".swiper-arrow-prev");
  const next = parentElement.querySelector(".swiper-arrow-next");
  const dots = parentElement.querySelector(".swiper-dots");

  new Swiper(swiperSlider, {
    ...settings[settingsKey],

    // Navigation arrows
    navigation:
      next && prev
        ? {
            nextEl: next,
            prevEl: prev,
          }
        : {},

    pagination: dots
      ? {
          el: dots,
          clickable: true,
        }
      : {},
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
});
