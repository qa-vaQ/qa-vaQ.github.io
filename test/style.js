var counter = 0;
var colors = ["#00FFFF", "#2323ff", "#9311ff", "#ff1e1e", "#FF7F00", "#FFFF00", "#00FF00"];

function setup() {
  setInterval(changeColor, 3000);
 }
 
var colour0 = localStorage.getItem(colour0);
document.body.style.backgroundColor = colour0

function changeColor() {
  var body = document.body;
  body.style.backgroundColor = colors[counter];
  localStorage.setItem(body.style.backgroundColor, colour0);
  if(counter == 6) {
    counter = 0;
  } else {
    counter++;
  }
}
function easteregg() {
        var decider1 = document.getElementById('easteregg');
        if(decider1.checked){
            document.getElementById("body").style.transform = "rotate(180deg)";
        } else {
          document.getElementById("body").style.transform = "rotate(0deg)";
        }
    }
function easteregg2() {
        var decider2 = document.getElementById('easteregg2');
        if(decider2.checked){
            document.getElementById("body").style.filter = "invert(1)";
        } else {
          document.getElementById("body").style.filter = "invert(0)";
        }
    }
function settingsopen() {
        document.getElementById("settings").style.display = "block";
    }
function settingsclose() {
        document.getElementById("settings").style.display = "none";
    }
