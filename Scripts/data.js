//首頁方案資訊
const URL = "https://json-server-vercel-cw-space.vercel.app/spaces";

const getSpaceData = async () => {
	await axios
		.get(URL)
		.then(function (response) {
			getPlanData(response.data)
		})
		.catch(function (error) {
			console.log(error);
		});
}

function getPlanData(data) {
	const swiperWrapper = document.querySelector("#pricing-plan .swiper-wrapper");
	let str = "";
	data.forEach(i => {
		const imageUrl = i.imgUrl.length > 0 ? i.imgUrl[0] : i.imgUrl;


		let priceStr = "";
		const key = Object.keys(i.price[0]);

		switch (key[0]) {
			case 'day': {
				priceStr += `單日方案：NT$ ${i.price[0].day}<br>單月方案：NT$ ${i.price[1].month}`;
				break;
			}
			case 'hour': {
				priceStr += `單日使用 NT ${i.price[0].hour}/小時 (每次 2小時起租)`;
				break;
			}
			default: {
				const officeObj = i.price[0].month[0];
				const officeKey = Object.keys(officeObj);

				priceStr += `
					空間${officeKey[0]}：NT$ ${officeObj[officeKey[0]]}/月<br>
					空間${officeKey[1]}：NT$ ${officeObj[officeKey[1]]}/月<br>
					空間${officeKey[2]}：NT$ ${officeObj[officeKey[2]]}/月
				`;
				break;
			}
		}
		str += `<div class="swiper-slide hvr-reveal">
					<div class="plan-item">
						<div class="img-box">
							<img src="${imageUrl}" alt="">
						</div>
						<div class="bottom">
							<div class="left-info">
								<div class="title">${i.name}</div>
								<ul class="price">
									<li>${priceStr}</li>
								</ul>
							</div>
							<div class="info-text">
								<p class="open">開放時間：平日 週一至週五 ${i.open.weekdays}（不含例假日）</p>
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
const newsURL = "https://json-server-vercel-cw-space.vercel.app/posts?_sort=id&_order=desc&_limit=5";
let newsData = [];
axios.get(newsURL)
	.then(function (response) {
		newsData = response.data;
		getNews();
	})
	.catch(function (error) {
		console.log(error);
	});

function getNews() {
	const swiperWrapper = document.querySelector("#news .news-list");
	let str = "";
	newsData.forEach(i => {
		let newData = new Date(i.date * 1000);
		dataValues = `${newData.getFullYear() + '-'}${newData.getMonth() + 1 + '-'}${newData.getDate()}`;
		str += `<li class="news-item">
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
function fqa() {
	const accordionItem = document.querySelector("#fqa .fqu-list");
	let str = "";
	fqaData.forEach((i, index) => {
		str += `
			<div class="accordion-item">
				<h2 class="accordion-header" id="flush-heading-${index}">
					<a class="accordion-button collapsed" href="#!" type="button" data-bs-toggle="collapse"
						data-bs-target="#flush-collapse-${index}" aria-expanded="false" aria-controls="flush-collapse-${index}">
						Q ${i.question}
					</a>
				</h2>
				<div id="flush-collapse-${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${index}"
					data-bs-parent="#accordionFlushExample">
					<div class="accordion-body">
						A ${i.answer}
					</div>
				</div>
			</div>
		`
	})
	accordionItem.innerHTML = str;
}



//初始化資料
function init() {
	getSpaceData();
	getNews();
	fqa();
}
init();