
var ship;
var rock = [];
var rocks = 5;

function setup() {
  createCanvas(600,600);
  s = new Ship();
  for (var i = 0; i < rocks; i++) {
    rock.push(new Rock());
  }
}


function draw() {
  background(1);
  // debugger
  s.drawShip();
  for (var i = 0; i < rock.length; i++) {
    rock[i].render();
  }

}
