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
    v1.rotate(radians(60));
    v2.rotate(radians(-60));

    this.h1 = new Hankin(mid,v1);
    this.h2 = new Hankin(mid,v2);
  };
}
