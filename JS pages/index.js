
// modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("rich");

var span = document.getElementsByClassName("close")[0];
 
function rich() {
  modal.style.display = "block";
}

span.onclick =  function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function george(){
  var geo = prompt("Please confirm you are voting for McGovern by typing 'Im a loser!'");
  if(geo == "Im a loser!")
  modal.style.display = "block";
  else{
    prompt("Please confirm you are voting for McGovern by typing 'Im a loser!'")
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