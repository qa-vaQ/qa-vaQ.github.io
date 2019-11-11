var counter = 0;
var colors = ["#000001","#fffffE"];

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
