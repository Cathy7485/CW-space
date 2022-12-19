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

//關於我們內頁，空間照片切換

const gallery = document.querySelector("#space-photos");
const spaceName = document.querySelector(".space-name");

//監聽空間名稱區塊，點擊名稱li加active
spaceName.addEventListener("click",e=>{
	const targetClass = e.target.classList;
	const nodeName = e.target.nodeName;
	if(nodeName === "UL"){
		//非目標中斷
		return;	
	}

	const Sibling = Array.from(spaceName.children);
	//判斷有無active
	if(!Array.from(targetClass).includes("active")){
		//抓取外層ul，判斷裡面的li是否有active，有的話移除
		Sibling.forEach(i=>{
			const classAry = Array.from(i.classList);
			if(classAry.includes("active")){
				i.classList.remove("active");
			}
		})
		//點擊目標的class加上active
		e.target.classList.add("active");

		//大圖連動
		//抓取li名稱有active的index
		Sibling.forEach((item,index)=>{
			const className = item.getAttribute("class");
			if(className === "active"){
				let nameIndex = index;

				const liList = Array.from(gallery.children); //空間照片
				liList.forEach((item,index)=>{
					item.classList.remove("active"); //移除目前li有active
					liList[nameIndex].classList.add("active"); // 針對點擊標題取得的index，加上active
				})
			}
		});
	}

})


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

