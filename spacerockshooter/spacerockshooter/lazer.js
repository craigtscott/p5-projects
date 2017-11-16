function Lazer(center, direction) {
  this.center = createVector(center.x, center.y);
  this.vel = p5.Vector.fromAngle(direction).mult(10);

  this.update = function () {
    this.center.add(this.vel);

  };

  this.render = function() {
    stroke(255);
    point(this.center.x, this.center.y);
  };

  this.hits = function(rock) {
    var d = dist(this.center.x, this.center.y, rock.center.x, rock.center.y);

    if (d < rock.r) {
      return true;
    } else {
      return false;
    }
  };
}
