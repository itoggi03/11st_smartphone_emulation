// css
require("../css/style.css");
require("../css/memo-style.css");

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
  location.hash == "#memo" && onMemo();
});

/* 
  memo 페이지에서..
  1. new 버튼 클릭시 input 나타남
  2. input창에서 값 입력 후 엔터 누르면 입력값 LocalStorage에 저장
  3. 입력한 값들의 목록을 보여줌
  4. input 사라짐 & input 값 초기화
*/
let id = 0;

function onMemo() {
  const memoInput = document.querySelector(".memo-input");
  const newBtn = document.querySelector(".new");

  // 원래 저장되어 있던 메모들 보여주기
  getMemo();

  newBtn.addEventListener("click", () => {
    memoInput.classList.remove("memo-input-hidden");
    memoInput.focus();
  });

  memoInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || memoInput.value === "") {
      return;
    }
    // 1. LocalStorage에 입력 내용 저장
    localStorage.setItem(id, memoInput.value);

    // 2. 입력한 값들의 목록을 보여줌
    const ulTag = document.querySelector(".items");
    const inputItem = createItem(memoInput.value, id);
    ulTag.appendChild(inputItem);
    id++;

    // 3. 입력창 사라짐 & 인풋 값 초기화
    memoInput.classList.add("memo-input-hidden");
    memoInput.value = "";
  });
  // 4. 메모 클릭시 펼쳐지는 함수 실행
  const item = document.querySelector(".item");
  item && onClickMemo();
}

// localStorage에 저장되어 있는 메모들 보여주는 함수
function getMemo() {
  const ulTag = document.querySelector(".items");
  // localStorage.clear();
  // console.log(id);
  Object.keys(localStorage).forEach((memoId) => {
    // console.log(memoId);
    id = Number(memoId) + 1;
    const item = createItem(localStorage.getItem(memoId), memoId);
    ulTag.appendChild(item);
  });
}

// 메모 아이템 생성하는 함수
function createItem(text, memoId) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.innerHTML = `<li class="item__row">
  <div class="item item-overflow" data-id=${memoId}>${text}</div>
  
</li>`;
  return itemRow;
}

function onClickMemo() {
  const items = document.querySelector(".items");
  items.addEventListener("click", (event) => {
    const clickMemoId = event.target.dataset;
    // console.log(event.target.dataset);
    if (clickMemoId) {
      const item = document.querySelector(`.item[data-id="${clickMemoId.id}`);
      console.log(item);
      item.classList.toggle("item-overflow");
    }
  });
}
