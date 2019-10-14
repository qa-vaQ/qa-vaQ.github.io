var counter = 0;
var colors = ["#00FFFF", "#2323ff", "#9311ff", "#ff1e1e", "#FF7F00", "#FFFF00", "#00FF00"];

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
  
  
