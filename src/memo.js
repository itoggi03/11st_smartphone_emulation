/* 
  memo 페이지에서..
  1. new 버튼 클릭시 input 나타남
  2. input창에서 값 입력 후 엔터 누르면 입력값 LocalStorage에 저장
  3. 입력한 값들의 목록을 보여줌
  4. input 사라짐 & input 값 초기화
*/
let id = 0;

module.exports.onMemo = function () {
  const memoInput = document.querySelector(".memo-input");
  const newBtn = document.querySelector(".new");

  // 저장된 메모 목록 보여주기
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
    localStorage.setItem(`memo${id}`, memoInput.value);

    // 2. 입력한 값들의 목록 보여주기
    const ulTag = document.querySelector(".items");
    const inputItem = createItem(memoInput.value, id);
    ulTag.appendChild(inputItem);
    id++;

    // 3. 입력창 사라짐 & 인풋 값 초기화
    memoInput.classList.add("memo-input-hidden");
    memoInput.value = "";
  });

  // 4. 메모 클릭시 펼쳐지는 함수 실행
  onClickMemo();
};

// localStorage에 저장되어 있는 메모들 보여주는 함수
function getMemo() {
  const ulTag = document.querySelector(".items");
  // localStorage.clear();
  Object.keys(localStorage).forEach((memoId) => {
    if (memoId.slice(0, 4) == "memo") {
      const currId = Number(memoId.slice(-1));
      const item = createItem(localStorage.getItem(`memo${currId}`), memoId);
      id = currId > id ? currId + 1 : id;
      ulTag.appendChild(item);
    }
  });
  console.log(id);
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
    const clickMemoId = event.target.dataset.id;
    if (clickMemoId) {
      const item = document.querySelector(`.item[data-id="${clickMemoId}`);
      item.classList.toggle("item-overflow");
    }
  });
}
