let id = 0;

module.exports.onAlarm = function () {
  const newBtn = document.querySelector(".new");
  const alarmInput = document.querySelector(".alarm-input-section");
  const saveBtn = document.querySelector(".save");

  // 저장된 알람 목록 보여주기
  getAlarm();

  newBtn.addEventListener("click", () => {
    alarmInput.classList.remove("alarm-input-hidden");
  });

  saveBtn.addEventListener("click", () => {
    const inputTime = setTime();
    const ul = document.querySelector(".alarms");

    // localStorage에 저장
    localStorage.setItem(`alarm${id}`, inputTime);

    // 알람 목록 보여주기
    const li = createItem(inputTime, id);
    ul.append(li);
    id++;

    // input 사라짐
    alarmInput.classList.add("alarm-input-hidden");
  });
  onClickDelete();
};

// 입력한 시간을 가공하여 보여줄 시간 구하는 함수
function setTime() {
  const alarmTime = document.querySelector(".alarm-input");
  let [hour, min] = alarmTime.value.split(":");
  let am = true; // 오전일 경우 true, 오후일 경우 false

  if (Number(hour) == 0) {
    hour = 12;
  } else if (Number(hour) == 12) {
    am = false;
    hour = 12;
  } else if (Number(hour) > 12) {
    am = false;
    hour = "0" + (hour - 12);
  }

  const result =
    am == true ? `오전 ${hour}시 ${min}분` : `오후 ${hour}시 ${min}분`;
  return result;
}

// localStorage에 있는 알람 목록 가져와서 보여주기
function getAlarm() {
  Object.keys(localStorage).forEach((alarmId) => {
    const ul = document.querySelector(".alarms");
    if (alarmId.slice(0, 5) == "alarm") {
      const currId = Number(alarmId.slice(-1));
      const item = createItem(localStorage.getItem(`alarm${currId}`), alarmId);

      id = currId > id ? currId + 1 : id;
      ul.appendChild(item);
    }
  });
}

// 알람 목록 아이템(li) 만드는 함수
function createItem(time, alarmId) {
  const li = document.createElement("li");
  li.setAttribute("class", "alarms__row");
  li.innerHTML = `<div class="alarm">${time}</div>
  <button class="delete" data-id=${alarmId}>삭제</button>`;
  return li;
}

// 삭제 버튼 눌렀을 경우
function onClickDelete() {
  const items = document.querySelector(".alarms");

  items.addEventListener("click", (event) => {
    const clickAlarmId = event.target.dataset.id;
    if (clickAlarmId) {
      const item = document.querySelector(`.delete[data-id="${clickAlarmId}"]`);

      localStorage.removeItem(clickAlarmId);
      items.removeChild(item.parentElement);
    }
  });
}
