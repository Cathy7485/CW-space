//預約功能日曆插件
$(document).ready(function () {
	$("#my-calendar").zabuto_calendar({
		language: "en",
		year: 2022,
		// month: 3,
		show_previous: false,
		show_next: 2,
		cell_border: true,
    today: true,
    show_days: true,
    weekstartson: 0,
		legend: [
        {type: "block", label: "目前選擇", classname: "selected-label"},
				{type: "block", label: "尚有空位", classname: "vacancy-label"},
				{type: "block", label: "座位已滿", classname: "full-label"},
      ],
      // ajax: {
      //   url: "show_data.php?grade=1"
			// }
	});
});

//座位表Canvas
const seatImg = document.querySelector("#seating .seating-img img"); 
let canvas = document.querySelector("#seatCanvas");
let ctx = canvas.getContext("2d");
//讓canvas的高度和寬度等於整張座位圖
canvas.height = seatImg.offsetHeight;
canvas.width = seatImg.offsetWidth;

/*使用arc(x,y,r,s,e)畫一個圓
x,y是圓心的座標，r是半徑，s和e是起點和終點的角度*/
//座位1
ctx.beginPath();
ctx.arc(99,235,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字1
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("01",88,242);
ctx.fill();

//座位2
ctx.beginPath();
ctx.arc(138,196,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字2
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("02",128,202);
ctx.fill();

//座位3
ctx.beginPath();
ctx.arc(302,103,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字3
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("03",293,110);
ctx.fill();


//座位4
ctx.beginPath();
ctx.arc(334,102,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字4
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("04",324,110);
ctx.fill();


//座位5
ctx.beginPath();
ctx.arc(302,226,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字5
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("05",292,232);
ctx.fill();


//座位6
ctx.beginPath();
ctx.arc(334,226,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字6
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("06",324,232);
ctx.fill();

//座位7
ctx.beginPath();
ctx.arc(302,280,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字7
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("07",292,288);
ctx.fill();

//座位8
ctx.beginPath();
ctx.arc(334,284,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字8
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("08",324,288);
ctx.fill();


//座位9
ctx.beginPath();
ctx.arc(302,338,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字9
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("09",292,346);
ctx.fill();

//座位10
ctx.beginPath();
ctx.arc(334,338,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字10
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("10",324,346);
ctx.fill();

//座位11
ctx.beginPath();
ctx.arc(500,196,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字11
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("11",488,202);
ctx.fill();

//座位12
ctx.beginPath();
ctx.arc(538,236,13,0,Math.PI*2);
ctx.fillStyle = "#D0FB55";
ctx.fill();
//數字12
ctx.beginPath();
ctx.fillStyle = "#000";
ctx.font = "20px sans-serif";
ctx.fillText("12",526,242);
ctx.fill();
