function Stack(letSize, shoot) {
  this.letters = [];
  this.shoot = shoot;
  this.len = floor(random(3, 15));
  this.space = random(40);
  this.letSize = letSize;

  this.buildStack = function() {
    this.width = floor(random(width));
    console.log(this.letSize);
    for (var i = 0; i < this.len; i++) {
      this.letters.push(new Letter(this.width, -(this.letSize * i) - this.space, this.letSize));
    }
  };

  this.render = function() {
    for (var i = 0; i < this.letters.length; i++) {
      this.letters[i].render();
    }
    if (this.letters[(this.len - 1)].pos.y >= height + this.letSize) {
      console.log("here");
      this.letters = [];
      this.buildStack();
    }
  };

}
