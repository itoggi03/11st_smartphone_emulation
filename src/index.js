// css
require("../css/style.css");

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

const now = new Date();
const navBar = document.querySelector(".nav-bar");

navBar.innerHTML = `${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`;
