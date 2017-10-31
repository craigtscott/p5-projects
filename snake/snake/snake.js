function Snake() {
  this.position = createVector(0,0);
  this.movment = [createVector(1,0)];
  this.dir = createVector(1, 0);
  this.total = 0;
  this.ate = false;
  this.tail = [];

  this.direction = function(x,y) {
    if (this.dir.x !== x * -1 && this.dir.y !== y * -1){
      this.dir.x = x;
      this.dir.y = y;
    }
  };

  this.update = function() {

    this.tail.unshift(createVector(this.position.x, this.position.y));
    if (!this.ate) {
      this.tail.pop();
    } else {
      this.ate = false;
    }

    this.position.x = this.position.x + this.dir.x * scl;
    this.position.y = this.position.y + this.dir.y * scl;

    // this.position.x = constrain(this.position.x, 0, width-scl);
    // this.position.y = constrain(this.position.y, 0, height-scl);
  };

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.position.x, this.position.y, scl, scl);
  };

  this.isDead = function() {
    if (this.position.x < 0 || this.position.y < 0 || this.position.x > width || this.position.y > height) {
      game();
    }
    for (var i = 0; i < this.tail.length; i++) {
        var dis = dist(this.position.x, this.position.y, this.tail[i].x, this.tail[i].y);
      if (dis < 1) {
        game();
      }
    }
  };

  this.eat = function(pos) {
    var dis = dist(this.position.x, this.position.y, pos.x, pos.y);
    if (dis < 2) {
      this.total++;
      this.ate = true;
      return true;
    } else {
      return false;
    }
  };
}
