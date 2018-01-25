function Branch(h,t){
  this.head = h;
  this.tail = t;


  this.show = function() {
    stroke(255);
    // translate(width/2, height);
    line(this.head.x, this.head.y, this.tail.x, this.tail.y);
  };
}
