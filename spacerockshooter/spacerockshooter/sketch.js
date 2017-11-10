
var ship;

function setup() {
  createCanvas(600,600);
  s = new Ship();
}


function draw() {
  background(1);
  // debugger
  s.drawShip();
}

// function key() {
//   if (keyCode ===LEFT_ARROW) {
//     s.rotate(-PI/20);
//   } else if (keyCode === RIGHT_ARROW) {
//     s.rotate(PI/20);
//   }
// }
