function Ship() {
  // this.pos = [300, 240, 240, 360, 360, 360];
  // this.center = [(this.pos[2] + this.pos[4]) /2, (this.pos[1] + this.pos[3]) /2];
  // this.dir = PI/3.0;
  this.center = [300,300];
  this.end = [300, 250];
  this.theta = 0;

  this.drawShip = function() {
    stroke(255);
    // noFill();
    // translate(300, 300);
    line(this.center[0], this.center[1], this.end[0], this.end[1]);
    // rotate(10);
    // triangle(this.pos[0], this.pos[1], this.pos[2], this.pos[3], this.pos[4], this.pos[5]);
  };

  this.rotate = function(deg) {
    x = this.end[0];
    y = this.end[1];
    this.theta += deg;

    this.end[0] = cos(deg) * (x-this.center[0]) - sin(deg) * (y-this.center[1]) + this.center[0];

    this.end[1] = sin(deg) * (x-this.center[0]) + cos(deg) * (y-this.center[1]) + this.center[1];


  };
}
