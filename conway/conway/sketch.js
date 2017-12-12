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
let resolution = 10;

function setup() {
  winWid = windowWidth - (windowWidth % 10);
  winHe = windowHeight - (windowHeight % 10);
  createCanvas(winWid,winHe);
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
        stroke(0);
        fill(255);
        rect(x,y,resolution, resolution);
      }
    }
  }

  let nextFeild = makeFeild(cols, rows);

  for (let i = 0; i < feild.length; i++) {
    for (var j = 0; j < feild[i].length; j++) {
      let state = feild[i][j];
      let sum = 0;
      let adjCount = getAdj(feild, i, j);

      if (state === 0 && adjCount === 3) {
        nextFeild[i][j] = 1;
      } else if (state === 1 && (adjCount < 2 || adjCount > 3)) {
        nextFeild[i][j] = 0;
      } else {
        nextFeild[i][j] = state;
      }
    }
  }
  feild = nextFeild;
}

  function getAdj(feild, x, y){
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += feild[col][row];
    }
  }
  sum -= feild[x][y];
  return sum;
  }
