//header 往下滑動加樣式
window.addEventListener('scroll', addBackground);
const header = document.querySelector('#header');
function addBackground(e) {
  //條件一：
  const currentPosition = window.scrollY + window.innerHeight;
  const bgShowPosition = header.offsetTop + header.clientHeight / 2 - 10;
  const bgAppear = currentPosition > bgShowPosition;
  //條件二：
  const imageBottom = header.offsetTop + header.clientHeight;
  const imageOnWindow = window.scrollY < imageBottom;

  if (imageOnWindow && bgAppear) {
    header.classList.remove('addBg');
  } else {
    header.classList.add('addBg');
  };
};
addBackground();

// swiper 套件
//環境空間
var spaceSwiper = new Swiper("#space .swiper.spaceSwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  observer: true,
  grabCursor: true,
  followFinger: false,
  allowSlidePrev: true,
  observeParents: true,
  navigation: {
    nextEl: "#space .swiper-button-next",
    prevEl: "#space .swiper-button-prev",
  },
  allowTouchMove: true,
  watchSlidesProgress: true,
  speed: 800,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
//方案介紹
var planSwiper = new Swiper("#pricing-plan .swiper.planSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  followFinger: false,
  allowSlidePrev: true,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: "#pricing-plan .swiper-button-next",
    prevEl: "#pricing-plan .swiper-button-prev",
  },
  allowTouchMove: true,
  watchSlidesProgress: true,
  speed: 800,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
//共享辦公空間內頁
var planSwiper = new Swiper("#shared-space-page .swiper.sharedSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: true,
  loopFillGroupWithBlank: true,
  followFinger: false,
  allowSlidePrev: true,
  grabCursor: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: "#shared-space-page .swiper-button-next",
    prevEl: "#shared-space-page .swiper-button-prev",
  },
  allowTouchMove: true,
  watchSlidesProgress: true,
  speed: 800,
  centeredSlides: true,
});

//回頂端按鈕
$(".toTop-Btn").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});

