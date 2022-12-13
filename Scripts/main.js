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

//預約空間 step1
//選擇空間監聽
const spaceList = document.querySelector("#reserve-form fieldset");
const selectSpace = document.querySelectorAll("#reserve-form .option");

spaceList.addEventListener("click",e=>{
  //如果點擊對象沒有.option就中斷程式
  const classAry = Array.from(e.target.offsetParent.classList);
  if (!classAry.includes("option")){
    return; 
  }

  const target = e.target;
  const option = target.offsetParent;//抓取父層
	const spaceTag = option.querySelector(".space-name");
  const spaceName = spaceTag.textContent;//抓取點擊的空間名稱
	localStorage.setItem('choiceSpace', spaceName); //將選擇的空間名稱存入localStorage

  //及時渲染選擇的空間名稱
  const choiceSpace = document.querySelector(".choice-space");
  const render = localStorage.getItem('choiceSpace');
  choiceSpace.textContent = `您目前選擇的是：${render}`;

	//判斷兄弟節點有沒有select，有的話要拿掉
	const outerSubs = document.querySelector("fieldset").children;
	const ary = Array.from(outerSubs);
	ary.forEach(i=>{
		// console.log()
		if(i.getAttribute("class").includes("select")){
			i.classList.remove("select");
		}
	})

	// //沒有select就加上去，有就拿掉
	option.classList.add("select");
	
})

//預約空間 step2
