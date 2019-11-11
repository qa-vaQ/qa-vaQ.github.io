var counter = 0;
var colors = ["#0000FF,#2E2B5F,#8B00FF,#FF0000,#FF7F00,#FFFF00,#00FF00"];

function setup() {
  setInterval(changeColor, 500);
 }
 
 function changeColor() {
  var body = document.body;
  body.style.backgroundColor = colors[counter];
  
  if(counter == 6) {
    counter = 0;
  } else {
    counter++;
  }
}
