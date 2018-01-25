function Branch(h,t, c){
  this.head = h;
  this.tail = t;
  this.color = c;


  this.show = function() {
    stroke(this.color);
    // translate(width/2, height);
    line(this.head.x, this.head.y, this.tail.x, this.tail.y);
  };

  this.branches = function() {
    var dir = p5.Vector.sub(this.tail, this.head);
    // dir.mult(0.75);

    var dirR = dir.rotate(angle);
    var newTailR = p5.Vector.add(this.tail, dirR);
    var dirL = dir.rotate(-angle *2);
    var newTailL = p5.Vector.add(this.tail, dirL);
    var right = new Branch(this.tail, newTailR, "red");
    var left = new Branch(this.tail, newTailL, "blue");
    return [left, right];
  };
}
