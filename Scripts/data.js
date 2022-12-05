
//首頁方案資訊
const URL = "https://json-server-vercel-cw-space.vercel.app/spaces";
let data = [];
axios.get(URL)
  .then(function (response) {
		data = response.data;
		getPlanData();
  })
  .catch(function (error) {
    console.log(error);
  });
	
function getPlanData(){
	const swiperWrapper = document.querySelector("#pricing-plan .swiper-wrapper");
	let str ="";
	data.forEach(i=>{
		str+= `<div class="swiper-slide">
					<div class="plan-item">
						<div class="img-box">
							<img src="../images/plan01.jpg" alt="共享辦公空間">
						</div>
						<div class="bottom">
							<div class="left-info">
								<div class="title">${i.name}</div>
								<ul class="price">
									<li>${i.price}</li>
								</ul>
							</div>
							<div class="info-text">
								<p class="open">${i.open}</p>
								<p class="info">${i.info}</p>
							</div>
							<a href="#!" class="more-btn">更多資訊</a>
						</div>
					</div>
				</div>`;
	})
	swiperWrapper.innerHTML = str;
}

//首頁最新消息
const newsURL = "https://json-server-vercel-cw-space.vercel.app/posts?_limit=5";
let newsData = [];
axios.get(newsURL)
  .then(function (response) {
		newsData = response.data;
		getNews();
  })
  .catch(function (error) {
    console.log(error);
  });
	
function getNews(){
	const swiperWrapper = document.querySelector("#news .news-list");
	let str = "";
	newsData.forEach(i=>{
		let newData = new Date(i.date * 1000);
		dataValues = `${newData.getFullYear()+ '-' }${newData.getMonth() + 1 + '-'}${newData.getDate()}`;
		console.log(dataValues);
		str+=`<li class="news-item">
			<a href="#!" class="item" title="${i.title}">
				<div class="title">${i.title}</div>
				<div class="item-block">
					<div class="date">${dataValues}</div>
					<div class="${i.tag}"></div>
				</div>
			</a>
		</li>`;
	})
	swiperWrapper.innerHTML = str;	
}

//首頁QA
const fqaURL = "https://json-server-vercel-cw-space.vercel.app/fqa";
let fqaData = [];
axios.get(fqaURL)
  .then(function (response) {
		fqaData = response.data;
		fqa();
  })
  .catch(function (error) {
    console.log(error);
  });
function fqa(){
	const accordionItem = document.querySelector("#fqa .fqu-list");
	let str = "";
	fqaData.forEach((i,index)=>{
		str+=`
			<div class="accordion-item">
				<h2 class="accordion-header" id="flush-heading-${index}">
					<a class="accordion-button collapsed" href="#!" type="button" data-bs-toggle="collapse"
						data-bs-target="#flush-collapse-${index}" aria-expanded="false" aria-controls="flush-collapse-${index}">
						${i.question}
					</a>
				</h2>
				<div id="flush-collapse-${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${index}"
					data-bs-parent="#accordionFlushExample">
					<div class="accordion-body">
						${i.answer}
					</div>
				</div>
			</div>
		`
	})
	accordionItem.innerHTML = str;
}


//初始化資料
function init(){
	getPlanData();
	getNews();
	fqa();
}
init();