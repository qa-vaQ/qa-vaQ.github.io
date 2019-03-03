var counter = 0;
var colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF"];

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
  
  
