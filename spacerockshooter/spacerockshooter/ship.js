function Ship() {
  this.center = createVector(300,300);
  this.direction = -PI / 2;
  this.r = 20;
  this.vel = createVector(0,0);
  this.lazers = [];

  this.drawShip = function() {
    for (var i = 0; i < this.lazers.length; i++) {
      this.lazers[i].update();
      this.lazers[i].render();
    }
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
    if (keyIsDown(32))
    this.lazers.push(new Lazer(this.center, this.direction));



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
    if (this.center.x >= 600) {
      this.center.x = 0;
    } else if (this.center.x < 0) {
      this.center.x = width;
    }else if (this.center.y < 0) {
      this.center.y = height;
    }else if (this.center.y >= 600) {
      this.center.y = 0;
    }
  };

}
