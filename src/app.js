let cardIcons = ["♦", "♥", "♠", "♣"];
let cardNumb = [
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "A"
];

window.onload = function() {
  //write your code here
  changeNumber();
  changeIcon();
  let checkTime = document.querySelector(".checkTimer");
  checkTime.addEventListener("click", setTimer);
};

function changeNumber() {
  let numberCard = Math.floor(Math.random() * (12 + 1));
  let number = document.querySelector("#cardNumber");
  number.textContent = cardNumb[numberCard];
}

function changeIcon() {
  let iconCard = Math.floor(Math.random() * (3 + 1));
  let icon = document.querySelectorAll("#cardIcon");
  icon[0].textContent = cardIcons[iconCard];
  icon[1].textContent = cardIcons[iconCard];
  if (iconCard < 2) {
    icon[0].style.color = "red";
    icon[1].style.color = "red";
  } else {
    icon[0].style.color = "black";
    icon[1].style.color = "black";
  }
}
let intervalID;

function setTimer() {
  let flag = event.target.checked;
  if (flag) {
    intervalID = window.setInterval(timerChange, 10000);
  } else {
    window.clearInterval(intervalID);
  }
}

function timerChange() {
  changeNumber();
  changeIcon();
}
