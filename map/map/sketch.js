var mapImage;
var clat = 0;
var clon = 0;
var ww = 1024;
var hh = 512;

// 27.9878° N, 86.9250° E
var lat = 27.9878;
var lon = 86.9250;

var zoom = 0;
var earthquakes;

function preload() {
  mapImage = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clat + ',' + clon + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiY3JhaWd0c2NvdHRqciIsImEiOiJjamVod3pwbmUwZnZwMnhubDY1NTVjcDgyIn0.CZysnb_LuhsGj06WSMhkLA');
    earthquakes = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}

function setup() {
  createCanvas(ww,hh);
  translate(width/2, height/2);
  imageMode(CENTER);
  image(mapImage,0,0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  for (var i = 0; i < earthquakes.length; i++) {
    var data = earthquakes[i].split(/,/);
    var lat = data[1];
    var lon = data[2];
    var mag = data[4];
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
    mag = pow(10, mag);
    mag = sqrt(mag);
    var magmax = sqrt(pow(10, 10));
    var d = map(mag, 0, magmax, 0, 180);
    fill(0, 110,16);
    ellipse(x,y,10,10);
  }

}

function mercX(lon) {
  lon = radians(lon);
  var a = (512 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (512 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}
