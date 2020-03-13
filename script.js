var counter = 0;
var colors = ["#00FFFF", "#0080FF", "#0000FF", "#7F00FF", "#FF00FF", "#FF007F", "#FF0000", "#FF8000", "#FFFF00", "#80FF00", "#00FF00", "#00FF80"];

function setup() {
  setInterval(changeColor, 2000);
 }
 
 function changeColor() {
  var body = document.body;
  body.style.backgroundColor = colors[counter];
  
  if(counter == 12) {
    counter = 0;
  } else {
    counter++;
  }
}
  
  
