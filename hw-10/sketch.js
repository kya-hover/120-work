function setup() {
  // create canvas to draw on (ww, wh)
  createCanvas(windowWidth, 800);
  // bodyColor array
  bodyColor = [0, 255, 220];
}

// global variables
let headAngle = 0
let headRotationRate = 0
let staffAngle = 0
let windowWidth = 1200
let windowHeight = 800
// declare panda body fill var
let bodyColor;

function draw() {
  background( 'rgb(30, 167, 151)');
  drawPanda();
  pandaAnimation();
}

function drawPanda() {
  // *** PANDA SANDBOX ***
  push();

  // BODY
  push();
  // translate to center of the window
  translate(windowWidth * 0.5, 400);
  fill(bodyColor [0]);
  noStroke();
  ellipse(0, 0, 270, 300);
  fill(bodyColor [1]);
  ellipse(0, 0, 270, 170);
  ellipse(0, 0, 160, 240);
  pop();

  // HEAD
  //ears
  push();
  fill(bodyColor [0]);
  // translate center
  translate(windowWidth * 0.5, 215);
  // rotate head based on headAngle
  rotate(radians(headAngle));
  ellipse(-50, -40, 30, 30);
  ellipse(50, -40, 30, 30);

  // main head
  noStroke();
  fill(bodyColor [1]);
  ellipse(0, 0, 120, 100);

  // eyes
  stroke(0);
  strokeWeight(25);
  line(-30, 5, -20, -8);
  line(30, 5, 20, -8);
  fill(bodyColor [2]);
  strokeWeight(5);
  ellipse(-20, -5, 15, 15);
  ellipse(20, -5, 15, 15);

  // nose
  fill(bodyColor [0]);
  triangle(-12, 20, 12, 20, 0, 30);

  // mouth
  stroke(0);
  strokeWeight(5);
  line(-5, 35, 5, 35);
  pop();

  // LEFT ARM
  push();
  // move the center to rotate
  translate(windowWidth * 0.42, 290);
  // rotate based on mouseX position
  rotate(radians(mouseX));
  // draw left arm and paw
  strokeWeight(50);
  line(0, 0, -30, -30);
  line(-30, -30, -40, -65);
  fill(bodyColor [0]);
  ellipse(-40, -65, 10, 8);
  pop();

  // RIGHT ARM
  push();
  strokeWeight(50);
  translate(windowWidth * 0.58, windowHeight * 0.36);
  line(0, 0, 40, -45);
  pop();

  // STAFF
  push();
  // translate for staff totation
  translate(windowWidth * 0.63, windowHeight * 0.27);
  // rotate staff at a constant speed
  rotate(radians(staffAngle));
  // draw the staff
  stroke('rgb(69, 133, 30)');
  strokeWeight(10);
  line(-150, -150, 150, 150);
  pop();

  // draw right paw
  push();
  fill(bodyColor [0]);
  ellipse(750, 225, 58, 58);
  pop();
  // LEGS
  push();
  strokeWeight(60);
  line(660, 530, 670, 580);
  line(540, 530, 530, 580);
  pop();

  pop();
  // *** END PANDA SANDBOX ***
}

function pandaAnimation() {
  // turn off cursor
  noCursor();
  //UPDATE THE GLOBAL VAR. VALUES
  // base head rotation on mouseY position
  headRotationRate = (mouseY * 0.1) -20;
  // update headAngle to equal itself plus headRotationRate
  headAngle = headAngle + headRotationRate;
  // set staff to spin at a constant rate
  staffAngle = staffAngle - 3;
  // make panda arm and spin rate follow mouse
  translate(mouseX, mouseY);
}
