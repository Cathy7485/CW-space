//header 往下滑動加樣式
//window監聽scroll事件：
window.addEventListener('scroll', addBackground);
//選取所有的image元素：
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
    //不符合出現條件，移除active此class
    header.classList.remove('addBg');
  } else {
    //符合出現條件，加上active此class
    header.classList.add('addBg');
  };
};
addBackground();

// swiper 插件
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
  slidesPerView: 2,
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
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
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



//預約參觀
//送出按鍵監聽
function visit(){
  const submitBtn = document.querySelector("#visit-reservation .submit-btn");
  submitBtn.addEventListener("click", addVisitOrder);
  function addVisitOrder() {
    const visitName = document.querySelector("#visit-reservation .name");
    const companyName = document.querySelector("#visit-reservation .company-name");
    const visitPhone = document.querySelector("#visit-reservation .contact-phone");
    const email = document.querySelector("#visit-reservation .email");
    const spaceType = document.querySelector("#visit-reservation .space-type");
    const visitDate = document.querySelector("#visit-reservation .visit-date");
    const visitTime = document.querySelector("#visit-reservation .visit-time");

    if (
      visitName.value == "" ||
      companyName.value == "" ||
      visitPhone.value == "" ||
      email.value == "" ||
      spaceType.value == "" ||
      visitDate.value == "" ||
      visitTime.value == ""
    ) {
      alert("請填寫表單完整！");
      return;
    }


    let order = {
      name: visitName.value,
      company: companyName.value,
      phone: visitPhone.value,
      email: email.value,
      space: spaceType.value,
      appointment: visitDate.value,
      time: visitTime.value
    }

    const URL = "https://json-server-vercel-cw-space.vercel.app/reserves";
    let orderData = [];
    axios.post(URL, order)
      .then(function (response) {
        orderData = response.data;
        alert("預約成功！");
        visitName.value = "";
        companyName.value = "";
        visitPhone.value = "";
        email.value = "";
        spaceType.value = "想要參觀哪個空間";
        visitDate.value = "";
        visitTime.value = "";

      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
// visit();

//線上留言
//送出按鍵監聽
function comment() {
  const contactSubmit = document.querySelector("#contact-form .submit-btn");
  contactSubmit.addEventListener("click", addComment);
  function addComment() {
    const name = document.querySelector("#contact-form .name");
    const companyName = document.querySelector("#contact-form .company-name");
    const phone = document.querySelector("#contact-form .phone");
    const email = document.querySelector("#contact-form .email");
    const comment = document.querySelector("#contact-form .comment");

    if (
      name.value == "" ||
      companyName.value == "" ||
      phone.value == "" ||
      email.value == "" ||
      comment.value == ""
    ) {
      alert("請填寫表單完整！");
      return;
    };


    let obj = {
      name: name.value,
      company: companyName.value,
      phone: phone.value,
      email: email.value,
      content: comment.value
    }

    const URL = "https://json-server-vercel-cw-space.vercel.app/comments";
    let orderData = [];
    axios.post(URL, obj)
      .then(function (response) {
        orderData = response.data;
        alert("留言成功");
        name.value = "";
        companyName.value = "";
        phone.value = "";
        email.value = "";
        comment.value = "";

      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
comment()
