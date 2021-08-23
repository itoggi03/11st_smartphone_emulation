// js
const onMemo = require("../src/memo.js");
const onPhoto = require("../src/photo.js");
const onAlarm = require("../src/alarm.js");

// css
require("../css/style.css");
require("../css/memo-style.css");
require("../css/photo-style.css");
require("../css/alarm-style.css");

// router
const { initialRoutes, hashRouterPush } = require("./router");

// app division
// const historyAppDiv = document.querySelector('#history-app')
const hashAppDiv = document.querySelector("#hash-app");

// Hash History
initialRoutes(hashAppDiv);

window.onload = () => {
  // const historyLinker = document.querySelectorAll('span.history')
  const hashLinker = document.querySelectorAll("a.hash");

  hashLinker.forEach((el) => {
    el.addEventListener("click", (evt) => {
      const pathName = evt.target.getAttribute("route");

      hashRouterPush(pathName, hashAppDiv);
    });
  });
};

// 현재 시각을 출력하는 함수
function currentTime() {
  const now = new Date();
  const navBar = document.querySelector(".nav-bar");

  navBar.innerHTML = `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;
}

// 최초에 함수 실행 + 1초마다 함수 실행 -> 실시간으로 현재 시각 보여줌
currentTime();
setInterval(currentTime, 1000);

// hash가 변경될 떄마다 실행
window.addEventListener("hashchange", () => {
  location.hash == "#memo" && onMemo.onMemo();
  location.hash == "#photo" && onPhoto.onPhoto();
  location.hash == "#alarm" && onAlarm.onAlarm();
});
