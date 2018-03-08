var mapImage;
function preload() {
  mapImage = loadImage("https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/-122.4241,37.78,14.25,0,60/600x600?access_token=pk.eyJ1IjoiY3JhaWd0c2NvdHRqciIsImEiOiJjamVod3pwbmUwZnZwMnhubDY1NTVjcDgyIn0.CZysnb_LuhsGj06WSMhkLA");
}
function setup() {
  createCanvas(600,600);
  image(mapImage,0,0);
}

function draw() {

}
