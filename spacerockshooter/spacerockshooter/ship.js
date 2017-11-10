function Ship() {
  // this.pos = [300, 240, 240, 360, 360, 360];
  // this.center = [(this.pos[2] + this.pos[4]) /2, (this.pos[1] + this.pos[3]) /2];
  // this.dir = PI/3.0;
  this.center = [300,300];
  this.end = [300, 250];
  this.theta = 0;

  this.drawShip = function() {
    stroke(255);
    this.rotate();

    line(this.center[0], this.center[1], this.end[0], this.end[1]);
  };

  this.rotate = function() {
    if (keyIsDown(LEFT_ARROW))
    this.theta = -(PI/20);
    if (keyIsDown(RIGHT_ARROW))
    this.theta = (PI/20);
    x = this.end[0];
    y = this.end[1];

    this.end = [cos(this.theta) * (x-this.center[0]) - sin(this.theta) * (y-this.center[1]) + this.center[0], sin(this.theta) * (x-this.center[0]) + cos(this.theta) * (y-this.center[1]) + this.center[1]];

    this.theta = 0;


  };
}
