/* 
  memo 페이지에서..
  - 저장된 메모 목록 보여주기
  - new 버튼 클릭시 input 나타남
  - input창에서 값 입력 후 엔터 누르면 입력값 LocalStorage에 저장
  - 입력한 값들의 목록을 보여줌
  - input 사라짐 & input 값 초기화
  - 메모 클릭시 1개만 펼쳐짐
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
    // LocalStorage에 입력 내용 저장
    localStorage.setItem(`memo${id}`, memoInput.value);

    // 입력한 값들의 목록 보여주기
    const ulTag = document.querySelector(".items");
    const inputItem = createItem(memoInput.value, id);
    ulTag.appendChild(inputItem);
    id++;

    // 입력창 사라짐 & 인풋 값 초기화
    memoInput.classList.add("memo-input-hidden");
    memoInput.value = "";

    onClickMemo();
  });

  // 메모 클릭시 펼쳐지는 함수 실행
  onClickMemo();
};

// localStorage에 저장되어 있는 메모들 보여주는 함수
function getMemo() {
  const ulTag = document.querySelector(".items");

  Object.keys(localStorage).forEach((memoId) => {
    if (memoId.slice(0, 4) == "memo") {
      const currId = Number(memoId.slice(-1));
      const item = createItem(localStorage.getItem(`memo${currId}`), memoId);
      id = currId >= id ? currId + 1 : id;
      ulTag.appendChild(item);
    }
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

/*  
메모 클릭시 펼쳐지게 하는 함수
- 한번에 하나의 메모만 펼칠 수 있도록 이전에 펼쳐진 메모는 다시 2줄만 표시되도록 한다. 
*/
function onClickMemo() {
  const items = document.querySelector(".items");
  const itemDiv = document.querySelectorAll(".item");
  items.addEventListener("click", (event) => {
    const clickMemoId = event.target.dataset.id;
    if (clickMemoId) {
      itemDiv.forEach((item) => {
        if (item.dataset.id == clickMemoId) {
          item.classList.remove("item-overflow");
        } else {
          item.classList.add("item-overflow");
        }
      });
    }
  });
}
