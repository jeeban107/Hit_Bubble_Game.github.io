var time = 60;
var score= 0;
var hitrn=0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}

function newHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#newhit").innerHTML= hitrn;
}


function makeBubble() {
  var cultter = "";

  for (var i = 1; i <= 160; i++) {
    var rnum = Math.floor(Math.random() * 10);
    cultter += `<div class="bubble">${rnum}</div>`;
  }
  document.querySelector(".p-btm").innerHTML = cultter;
}


function runTimer() {
  var timerInv =setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    }
    else{
        clearInterval(timerInv)
        document.querySelector(".p-btm").innerHTML="";
        document.querySelector(".p-btm").innerHTML=`<h1>Game Over</h1>
            <h3>Your Score </h3> <div class ="sc">${score}</div> </h3>`;
    }
  }, 1000);
}

document.querySelector(".p-btm").addEventListener("click",function(dets){
   var clickedval = Number(dets.target.textContent);
    if(clickedval == hitrn){
        increaseScore();
        makeBubble();
        newHit();
    }
})


newHit();
runTimer();
makeBubble();

