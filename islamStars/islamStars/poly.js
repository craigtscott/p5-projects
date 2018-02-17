function Polygon() {
  this.vertices = [];
  this.edges = [];

  this.addVertex = function(x,y) {
    var a = createVector(x,y);
    var total = this.vertices.length;
    this.vertices.push(a);
    if (total > 0) {
      var prev = this.vertices[total - 1];
      var edge = new Edge(prev, a);
      this.edges.push(edge);
    }
  };

  this.show = function() {
    for (var i = 0; i < this.edges.length; i++) {
      this.edges[i].show();
    }
  };

}
