function Hankin(a,v){
  this.a = a;
  this.v = v;
  this.b = p5.Vector.add(a,v);
  this.end;
  this.precD;

  this.show = function() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    fill(255);
    ellipse(this.a.x, this.a.y, 8);
    if (this.end) {
      fill(255,255,0);
      ellipse(this.end.x, this.end.y, 8);
    }
    };

  this.findEnd = function(other) {
    var denom = (other.v.y * this.v.x) - (other.v.x * this.v.y);
    if(!denom) {
      return;
    }
    var numerA = (other.v.x * (this.a.y - other.a.y)) - (other.v.y * (this.a.x - other.a.x));
    var numerB = (this.v.x * (this.a.y - other.a.y)) - (this.v.y * (this.a.x - other.a.x));
    var ua = numerA / denom;
    var ub = numerB / denom;
    var x = this.a.x + (ua * this.v.x);
    var y = this.a.y + (ub * this.v.y);

    if (ua > 0 && ub > 0) {
      var candidate = createVector(x,y);
      var d1 = p5.Vector.dist(candidate, this.a);
      var d2 = p5.Vector.dist(candidate, other.a);
      var d = d1 + d2;
      if (!this.end) {
        this.end = candidate;
        this.precD = d;
      } else if (d < this.prevD){
        this.prevD = d;
        this.end = candidate;
      }

    }
  };
}
