//關於我們內頁-空間照片切換
const gallery = document.querySelector("#space-photos");
const spaceTitle = document.querySelector(".space-name");

//監聽空間名稱區塊，點擊名稱li加active
spaceTitle.addEventListener("click", e => {
  const targetClass = e.target.classList;
  const nodeName = e.target.nodeName;
  if (nodeName === "UL") {
    return;
  }

  const Sibling = Array.from(spaceTitle.children);
  //判斷有無active
  if (!Array.from(targetClass).includes("active")) {
    //抓取外層ul，判斷裡面的li是否有active，有的話移除
    Sibling.forEach(i => {
      const classAry = Array.from(i.classList);
      if (classAry.includes("active")) {
        i.classList.remove("active");
      }
    })
    e.target.classList.add("active");

    //大圖連動
    //抓取li名稱有active的index
    Sibling.forEach((item, index) => {
      const className = item.getAttribute("class");
      if (className === "active") {
        let nameIndex = index;

        const liList = Array.from(gallery.children); //空間照片
        liList.forEach((item, index) => {
          item.classList.remove("active");
          liList[nameIndex].classList.add("active");
        })
      }
    });
  }
})
