function Edge(a,b) {
  this.a = a;
  this.b = b;

  this.show = function() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    this.h1.show();
    this.h2.show();
  };

  this.hankin = function() {
    var mid = p5.Vector.add(this.a, this.b);
    mid.mult(0.5);
    var v1 = p5.Vector.sub(this.a, mid);
    var v2 = p5.Vector.sub(this.b, mid);
    v1.rotate(radians(angle));
    v2.rotate(radians(-angle));

    this.h1 = new Hankin(mid,v1);
    this.h2 = new Hankin(mid,v2);
  };

  this.findEnds = function(edge) {
    this.h1.findEnd(edge.h1);
    this.h1.findEnd(edge.h2);
    this.h2.findEnd(edge.h1);
    this.h2.findEnd(edge.h2);
  };
}
