//header
var init = function init(){
	const header = document.querySelector("#header");
	header.innerHTML=`
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid inner">
				<h1 class="navbar-brand logo m-0 p-0">
					<a class="logo-link" href="index.html" title="CW space 共享辦公空間">CW space 共享辦公空間</a>
				</h1>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav page-nav">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="about.html" title="關於我們">關於我們</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="shared-space.html" title="環境空間">環境空間</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="javascript:void(0)" title="方案介紹">方案介紹</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="contact-visit.html" title="聯絡我們">聯絡我們</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	`;

	//banner
	// const banner = document.querySelector("#banner");
	// banner.innerHTML=`
	// 	<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
	// 		<div class="carousel-inner">
	// 			<div class="carousel-item active" data-bs-interval="10000">
	// 				<img src="images/m-banner.png" class="d-block w-100 banner-img" alt="主視覺">
	// 				<div class="carousel-caption ">
	// 					<h1 class="item-title">提供您最舒適的辦公環境</h1>
	// 					<p class="item-info">辦公只需要帶一台筆電，其他的我們準備</p>
	// 					<div><a href="contact-office.html" class="reserve-btn" title="立即預約">立即預約</a></div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// `;

	//footer
	const footer = document.querySelector("#footer");
	footer.innerHTML=`
		<a href="javascript:void(0)" class="toTop-Btn" title="回頂端">
			<span>回頂端</span>
		</a>
		<div class="container">
			<div class="row">
				<div class="col-xl-6 left">
					<ul class="info">
						<li>信箱：<a href="mailto:CWspace@gmail.com">CWspace@gmail.com</a></li>
						<li>電話：<a href="tel:+886-6-666-666">06-666-6666</a></li>
						<li>傳真：06-666-6767</li>
						<li>地址：<a href="https://goo.gl/maps/uxbdai13FQP3nZJo8" target="_blank" title="臺南市安平區永華路二段777號">臺南市安平區永華路二段777號</a></li>
						<li>服務時間：周一至周五 08:30~17:30</li>
					</ul>
				</div>
				<div class="col-xl-6 right">
					<div class="footer-logo">
						<img src="images/footer-logo.jpg" alt="logo">
					</div>
				</div>
			</div>
		</div>
		<p class="copyright">Copyright 2022 - CW-space 共享辦公空間 版權所有</p>
	`;
}();