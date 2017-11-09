function Ship() {
  this.ship = triangle(300, 240, 240, 360, 360, 360);
  this.dir = 0;

  this.drawShip = function() {
    stroke(255);
    noFill();
    triangle(300, 240, 240, 360, 360, 360)
  };
}
