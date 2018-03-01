// global variables
let bCol;
let nebula = {};
nebula.x1 = 100;
nebula.y1 = 100;
nebula.x2 = 200;
nebula.y2 = 200;
nebula.x3 = 0;
nebula.y3 = 0;
let centerX, centerY;
let triangleSize = 0.05;
let multipleChange;
let multiple;
let redFill = 255;
let opacity = 300;
let opacityNoise;
let spot = {
  x: 100,
  y: 50
};
let col = {
  r: 255,
  g: 255,
  b: 255
};
let circleSize = {
  w: 20,
  h: 20
};


function setup() {
  bCol = color('rgb(15, 0, 47)');
  // createCanvas (ww, wh)
  createCanvas(windowWidth, 800);
  background(bCol);
  // initial position for nebula triangle
  nebula.x1 = random(width);
  nebula.y1 = random(height);
  nebula.x2 = nebula.x1 + 2;
  nebula.y2 = nebula.y1 - 2;
}


function draw() {

  centerX = width * 0.5;
  centerY = height * 0.5;

  frameRate(40);
  multipleChange = noise(0.01 * frameCount + pow(2, 8));
  multipleChange = map(multipleChange, 0, 1, -0.0001, 0.0001);
  triangleSize = constrain(triangleSize + multipleChange, 0.005, 0.2);
  multiple = random(-triangleSize, triangleSize);
  nebula.x3 = abs(((width * multiple) + nebula.x2) % width);
  multiple = random(-triangleSize, triangleSize);
  nebula.y3 = abs(((height * multiple) + nebula.y2) % height);


  multiple = noise(frameCount * 0.001) * 255;
  redFill = constrain(multiple, 0, 255);

  noStroke();
  // make random opacity noise val
  opacityNoise = noise(0.02 * frameCount + 1000);
  opacityNoise = map(opacityNoise, 0, 1, -2, 2);
  opacity += opacityNoise;
  opacity = constrain(opacity, 20, 100);
  // nebula colors
  fill(redFill, 255 - redFill, 175, 30);

  triangle(nebula.x1, nebula.y1, nebula.x2, nebula.y2, nebula.x3, nebula.y3);

  nebula.x1 = nebula.x2;
  nebula.y1 = nebula.y2;
  nebula.x2 = nebula.x3;
  nebula.y2 = nebula.y3;

  // stars
  push();
  //frameRate(10);
  spot.x = random(width);
  spot.y = random(height);
  circleSize.w = random(0, 5);
  circleSize.h = random(0, 5);
  fill(col.r, col.g, col.b, 100);
  noStroke();
  ellipse(spot.x, spot.y, circleSize.w, circleSize.h);
  pop();

}


// make program function on full screen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bCol);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
        fullscreen(!fs);
    }
}
