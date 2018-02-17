
function setup() {
  createCanvas(600,600);
  background(50);

}

function draw() {

}

function Polygon() {
  this.edges = [];

  this.addVertex = function(x,y) {
    var a = createVertex(x,y);
    this.vertices.push(a);
  };

  this.show = function() {
    for (var i = 0; i < edges.length; i++) {
      edges[i].show();
    }
  };

}

function Edge(a,b) {
  this.a = a;
  this.b = b;

  this.show = function() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  };
}
