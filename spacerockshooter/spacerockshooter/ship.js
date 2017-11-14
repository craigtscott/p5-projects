function Ship() {
  // this.pos = [300, 240, 240, 360, 360, 360];
  // this.center = [(this.pos[2] + this.pos[4]) /2, (this.pos[1] + this.pos[3]) /2];
  // this.dir = PI/3.0;
  this.center = createVector(300,300);
  this.direction = 0;
  this.r = 20;
  this.speed = 0;

  this.drawShip = function() {
    translate(this.center.x, this.center.y);
    this.move();
    rotate(this.direction);
    stroke(255);
    noFill();
    // this.fire();
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  };

  this.move = function() {
    if (keyIsDown(LEFT_ARROW))

    this.direction += -(PI/20);
    if (keyIsDown(RIGHT_ARROW))
    this.direction += (PI/20);

    // this.center =

    // this.end = [cos(this.theta) * (x-this.center[0]) - sin(this.theta) * (y-this.center[1]) + this.center[0], sin(this.theta) * (x-this.center[0]) + cos(this.theta) * (y-this.center[1]) + this.center[1]];

    // this.direction += this.theta;
    // this.theta = 0;
  };

}
