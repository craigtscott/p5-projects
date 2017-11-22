function DNA(genes) {
  if (genes){
    this.genes = genes;
  } else {
    this.genes = [];
    for (var i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].setMag(0.2);
    }
  }
  
  this.cross = function(partner) {
    var newgenes = [];
    var mid = floor(random(this.genes.length));
    for (var i = 0; i < this.genes.length; i++) {
      rand = random(2);
      if (random == 1){
        newgenes[i] = this.genes[i];
      } else {
        newgenes[i] = partner.genes[i];
      }
    }
    return new DNA(newgenes);
  };
  
  this.mutate = function() {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < 0.7) {
        this.genes[i] = p5.Vector.random2D();
      }
    }
  };
}