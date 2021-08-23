const img1 = require("../images/cat1.jpg");
const img2 = require("../images/cat2.jpg");
const img3 = require("../images/dog1.jpg");
const img4 = require("../images/dog2.jpg");
const img5 = require("../images/dog3.jpg");
const img6 = require("../images/mountains.jpg");
const img7 = require("../images/orange.jpg");
const img8 = require("../images/pizza.jpg");
const img9 = require("../images/sea.jpg");
const img10 = require("../images/technology.jpg");

module.exports.onPhoto = function () {
  let idx = 0;
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const li = document.querySelectorAll(".photo__row");

  // 10개 이미지 보여주기
  [...li].forEach((val) => {
    const img = document.createElement("img");
    img.src = imgs[idx];
    img.setAttribute("class", "photo");
    val.appendChild(img);
    idx++;
  });

  onClick();
};

// 사진 클릭했을 경우 아래에 그 사진 보여주는 함수
function onClick() {
  const ul = document.querySelector(".photos");
  const view = document.querySelector(".view");
  ul.addEventListener("click", (event) => {
    const photoToShow = event.target.src;
    if (photoToShow) {
      view.innerHTML = `<img src="${photoToShow}" alt="clickedImg" class="photo-show">`;
      const lis = document.querySelectorAll(".photo");

      // 클릭된 사진 border 변경
      lis.forEach((li) => {
        if (li.src == photoToShow) {
          li.classList.add("photo-clicked");
        } else {
          li.classList.remove("photo-clicked");
        }
      });
    }
  });
}
