module.exports.onAlarm = function () {
  const newBtn = document.querySelector(".new");
  const alarmInput = document.querySelector(".alarm-input-section");
  const saveBtn = document.querySelector(".save");

  newBtn.addEventListener("click", () => {
    alarmInput.classList.remove("alarm-input-hidden");
  });

  saveBtn.addEventListener("click", () => {
    const inputTime = setTime();

    // const alarm = document.querySelector(".alarm");
    // alarm.innerHTML = inputTime;

    const ul = document.querySelector(".alarms");
    const li = `<li class="alarms__row">
    <div class="alarm">${inputTime}</div>
    <button class="delete">삭제</button>
  </li>`;
    ul.appendChild(li);   // 여기서 에러남
  });
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
    hour = hour - 12;
  }
  return am == true ? `오전 ${hour}시 ${min}분` : `오후 ${hour}시 ${min}분`;
}
