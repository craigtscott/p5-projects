function Stack(len) {
  this.letters = [];
  this.width;
  this.len = len
  
  this.buildStack = function() {
    this.width = random(width)
    for (var i = 0; i < this.len; i++) {
      this.letters.push(new Letter(this.width, (i*40)));
    }
  }
  
  this.render = function() {
    for (var i = 0; i < this.letters.length; i++) {
      this.letters[i].render();
    }
    // debugger;
    if (this.letters[1].pos.y >= height + 40) {
      console.log("here");
      this.letters = [];
      this.buildStack();
    }
  }
  
}