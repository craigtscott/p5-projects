function makeFeild(cols, rows) {
  let arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
let feild;
let cols;
let rows;
let resolution = 40;

function setup() {
  createCanvas(400,400);
  cols = width / resolution;
  rows = height / resolution;
  feild = makeFeild(cols, rows);
  for (let i = 0; i < feild.length; i++) {
    for (let j = 0; j < feild[i].length; j++) {
      feild[i][j] = floor(random(2));
    }
  }


}

function draw() {
  background(0);
  for (let i = 0; i < feild.length; i++) {
    for (var j = 0; j < feild[i].length; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (feild[i][j] === 1){
        fill(255);
        rect(x,y,resolution, resolution);
      }
    }
  }
}
