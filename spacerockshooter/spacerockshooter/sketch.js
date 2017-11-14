
var ship;
var rock = [];

function setup() {
  createCanvas(600,600);
  s = new Ship();
  rock.push(new Rock());
}


function draw() {
  background(1);
  // debugger
  s.drawShip();

  for (var i = 0; i < rock.length; i++) {
    rock[i].render();
  }
}

// function key() {
//   if (keyCode ===LEFT_ARROW) {
//     s.rotate(-PI/20);
//   } else if (keyCode === RIGHT_ARROW) {
//     s.rotate(PI/20);
//   }
// }
