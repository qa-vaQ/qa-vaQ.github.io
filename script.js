var counter = 0;
var colors = ["#2323ff", "#FF7F00", "#FFFF00", "#00FF00", "#00FFFF", "#ff1e1e", "#9311ff"];

function setup() {
  setInterval(changeColor, 3000);
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
  
  
