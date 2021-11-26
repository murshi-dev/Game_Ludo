var totalRandomNumbers1 = 0;
var totalRandomNumbers2 = 0;
const msg = document.querySelector(".msg");

function random1() {
  totalRandomNumbers1 += Math.floor(Math.random() * 9) + 1;
  document.getElementById("root1").innerHTML = totalRandomNumbers1;
}

function random2() {
  totalRandomNumbers2 += Math.floor(Math.random() * 9) + 1;
  document.getElementById("root2").innerHTML = totalRandomNumbers2;
}

function checkWin() {
  if (totalRandomNumbers1 >= 50 && totalRandomNumbers1 > totalRandomNumbers2) {
    msg.innerText = "PLAYER 1 WINS";
    pointerChangeToNone();
  } else if (
    totalRandomNumbers2 >= 50 &&
    totalRandomNumbers2 > totalRandomNumbers1
  ) {
    {
      msg.innerText = "PLAYER 2 WINS";
      pointerChangeToNone();
    }
  }
}
function disableButton1() {
  document.getElementById("b1").disabled = true;
}
function enableButton1() {
  document.getElementById("b1").disabled = false;
}
function disableButton2() {
  document.getElementById("b2").disabled = true;
}
function enableButton2() {
  document.getElementById("b2").disabled = false;
}
function pointerChangeToNone(){
    document.getElementById("b1").style.pointerEvents = "none";
    document.getElementById("b2").style.pointerEvents = "none";
}
function pointerChangeToInitial(){
    document.getElementById("b1").style.pointerEvents = "initial";
    document.getElementById("b2").style.pointerEvents = "initial";
}

function clearContent() {
  document.getElementById("root1").innerText = "0";
  document.getElementById("root2").innerText = "0";
  document.querySelector(".msg").innerText = "";
  totalRandomNumbers1 = 0;
  totalRandomNumbers2 = 0;
  pointerChangeToInitial();
  enableButton1();
  enableButton2();
}
