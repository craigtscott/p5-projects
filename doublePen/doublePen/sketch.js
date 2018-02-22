var r1 = 100;
var r2 = 100;
var m1  = 10;
var m2 = 10;
var ang1 = 3.14/2;
var ang2 = 0;


function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0);

  translate(width/2,height/2);

  var x1 = r1 * sin(ang1);
  var y1 = r1 * cos(ang1);

  var x2 = x1 + r2 * sin(ang2);
  var y2 = y1 + r2 * cos(ang2);


  stroke(255);
  line(0,0,x1,y1);
  ellipse(x1,y1,4,4);

  line(x1,y1,x2,y2);
  ellipse(x2,y2,4,4);
}
