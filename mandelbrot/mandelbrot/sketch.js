

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
}

function draw() {
  var max = 100;
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      var a = map(x, 0, width, -2.5, 2.5);
      var b = map(y, 0, height, -2.5, 2.5);
      var ca = a;
      var cb = b;
      var n = 0;

      while (n < max) {
        var aa = a*a - b*b;
        var bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;
        if (a+b>16) {
          break;
        }
        n++;
      }

      var brightness = 200;

      if (n === max) {
        brightness = 0;
      }

      var pix = (x+y * width) *4;
      pixels[pix + 0] = brightness;
      pixels[pix + 1] = brightness;
      pixels[pix + 2] = brightness;
      pixels[pix + 3] = 255;

    }
  }
  updatePixels();
}
