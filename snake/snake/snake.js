function Snake() {
  this.position = createVector(0,0);
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.changes = false;
  this.tail = [];

  this.dir = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.update = function() {
    for (var i = 0; i <= this.tail.lenght - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    // if (this.total != this.tail.length); {
    if (this.chagnes); {
      this.tail[this.total - 1] = createVector(this.position.x, this.position.y);
      this.changes = false;
    }
    print (this.tail);
    this.position.x = this.position.x + this.xspeed * scl;
    this.position.y = this.position.y + this.yspeed * scl;

    this.position.x = constrain(this.position.x, 0, width-scl);
    this.position.y = constrain(this.position.y, 0, height-scl);
  };

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.position.x, this.position.y, scl, scl);
  };

  this.eat = function(pos) {
    var dis = dist(this.position.x, this.position.y, pos.x, pos.y);
    if (dis < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };
}
