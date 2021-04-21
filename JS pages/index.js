window.onload = function(){
  
  startUp.style.display = "block";
  };
// modal and close
var startUp = document.getElementById("startUp");

var modal = document.getElementById("myModal");

var btn = document.getElementById("rich");

var span = document.getElementsByClassName("close")[0];

var span2 =document.getElementsByClassName("x")[0];

var richImg = document.getElementById("canidate");

var geoImg = document.getElementById("geo");

function mouseover(x){
  x.style.height = "310px";
  x.style.transition = ".75s";
}
function mouseout(x){
  x.style.height = "300px";
  x.style.transition = ".75s";

}

function move(){
  var btn = document.getElementById("george");

  if(btn.style.hover = true){
    btn.style.backgroundColor = "#cc0000";
    btn.style.transition = "2s"

  }
  
}
function moveOut() {
  var btn = document.getElementById("george");
  btn.style.backgroundColor = "#0c00b3"
}
 
function rich() {
  modal.style.display = "block";
}

span.onclick =  function() {
  modal.style.display = "none";
}
span2.onclick = function(){
  startUp.style.opacity = "0"
  startUp.style.transition = "1s";
  x();
  
  function x(){
    startUp.style.display ="none"
  }

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == startUp) {
    startUp.style.display = "none";
  }
}

function george(){
  var geo = prompt("Please confirm you are voting for McGovern by typing 'Im a loser!'");
  if(geo == "Im a loser!")
  modal.style.display = "block";
  else{
    alert("No vote was put in.")
  }
}


span.onclick =  function() {
  modal.style.display = "none";
  document.getElementById("geo").src = '../imagesUsed/mcGovern2.jpeg';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("geo").src = '../imagesUsed/mcGovern2.jpeg';

  }
}