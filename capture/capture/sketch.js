var capture;
var button;
var shots = [];
var counter = 0;
var total = 35;
//




function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  filter('INVERT');
}
// function setup() {
//   createCanvas(640,480);
//   background(50);
//   // button = createButton('snap');
//   // button.mousePressed(takesnap);
//   capture = createCapture(VIDEO, ready);
//   capture.hide();
//
//
//
// }
//
// var go = false;
// function ready() {
//   go = true;
// }
//
// function draw() {
//   if (go){
//       shots[counter] = capture.get();
//       counter++;
//
//       if (counter === total) {
//         counter = 0;
//       }
//   }
//   var wid = width / 5;
//   var heg = height / 5;
//   var x = 0;
//   var y = 0;
//   for (var i = 0; i < shots.length; i++) {
//     var idx = (i + frameCount) % shots.length;
//     image(shots[idx], x, y, wid, heg);
//     x = x + wid;
//     if (x > width - wid) {
//       x = 0;
//       y = y + heg;
//     }
//   }
//   // tint(0,100,50);
//   // image(capture, 0, 0);
// }
//
// // function takesnap() {
// //   shots.push(capture.get());
// //   // image(capture, 0, 0);
// // }
