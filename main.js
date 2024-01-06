
let inpHr, inpMin, inpSec, myAudio; 
function setAlarm(){
  inpHr = inputHr.value;
  inpMin = inputMin.value;
  inpSec = inputSec.value;
  
}

function stopAlarm (){
myAudio.pause();
}

function myTime (){
  let myDate = new Date;
  let hr = myDate.getHours();
  let min = myDate.getMinutes();
  let sec = myDate.getSeconds();

  displayHr.innerText = hr;
  displayMin.innerText = min;
  displaySec.innerText = sec;

  if(inpHr == hr && inpMin == min && inpSec == sec){
   myAudio = new Audio("Dnd.mp3");
   myAudio.play();
  }
}

setInterval(myTime, 1000)