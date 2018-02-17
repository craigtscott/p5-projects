
function setup() {
  createCanvas(600,600);
  background(50);

}

function draw() {

}

function Polygon() {
  this.vertices = [];
  this.edges = [];

  this.addVertex = function(x,y) {
    var a = createVertex(x,y);
    var total = this.vertices.length;
    this.vertices.push(a);
    if (total > 0) {
      var prev = this.vertices[total - 1];
      var edge = new Edge(prev, a);
      this.edges.push(edge);
    }
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
