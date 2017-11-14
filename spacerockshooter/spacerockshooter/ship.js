function Ship() {
  // this.pos = [300, 240, 240, 360, 360, 360];
  // this.center = [(this.pos[2] + this.pos[4]) /2, (this.pos[1] + this.pos[3]) /2];
  // this.dir = PI/3.0;
  this.center = createVector(300,300);
  this.direction = -PI / 2;
  this.r = 20;
  this.vel = createVector(0,0);

  this.drawShip = function() {
    push();
    translate(this.center.x, this.center.y);
    this.move();
    this.wrap();
    rotate(this.direction + PI/2);
    stroke(255);
    noFill();
    // this.fire();
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
  };

  this.move = function() {
    this.center.add(this.vel);
    this.vel.mult(.97);

    if (keyIsDown(LEFT_ARROW))
    this.direction += -(PI/20);
    if (keyIsDown(RIGHT_ARROW))
    this.direction += (PI/20);
    if (keyIsDown(UP_ARROW))
    this.boost();


    // this.center =

    // this.end = [cos(this.theta) * (x-this.center[0]) - sin(this.theta) * (y-this.center[1]) + this.center[0], sin(this.theta) * (x-this.center[0]) + cos(this.theta) * (y-this.center[1]) + this.center[1]];

    // this.direction += this.theta;
    // this.theta = 0;
  };

  this.boost = function() {
    var force = p5.Vector.fromAngle(this.direction);
    this.vel.add(force);
  };

  this.wrap = function() {
    if (this.center.x > 600) {
      this.center.x = 0;
    } else if (this.center.x < 0) {
      this.center.x = width;
    }else if (this.center.y < 0) {
      this.center.y = width;
    }else if (this.center.y < 0) {
      this.center.y = width;
    }
  };

}
