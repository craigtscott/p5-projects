var minval = -0.5;
var maxval = 0.5;

var minSlider;
var maxSlider;


function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  minSlider = createSlider(-2.5, 0, -2.5, 0.1);
  maxSlider = createSlider(0, 2.5, 2.5, 0.1);
}

function draw() {
  var max = 100;
  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      var a = map(x, 0, width, minSlider.value(), maxSlider.value());
      var b = map(y, 0, height, minSlider.value(), maxSlider.value());
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

      var brightness = map(n, 0, max, 0, 1);
      brightness = map(brightness, 0, 1, 0, 255);

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
