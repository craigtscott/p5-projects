function Phyllo(ox,oy) {
  this.ox = ox;
  this.oy = oy;
  this.n = 0;


  this.render = function() {
    translate(this.ox, this.oy);
    ang = this.n * 137.5;
    rad = c * sqrt(this.n);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    console.log(c);
    fill(ang % 256, 255, 255);
    ellipse(x,y,2);

    this.n++;
  };
}
