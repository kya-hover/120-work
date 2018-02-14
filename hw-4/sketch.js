function setup() {
  // create a canvas
createCanvas(600, 800);
}
function draw() {
  // background color
  background('rgb(120, 166, 121)');
// create a sandbox for whole character
push();
//translate graph to center
translate(300, 400);
// hair
push();
noStroke();
strokeWeight(100);
stroke(220);
line(0, -130, 0, 0);
strokeWeight(85);
stroke(200);
line(0, -130, 0, 0);
pop();
// head
fill('rgb(233, 200, 169)');
rect(-37.5, -162.5, 75, 75, 10);
// eyes
fill(255);
strokeWeight(3);
ellipse(-20, -130, 25, 30);
ellipse(20, -130, 25, 30);
fill(0);
ellipse(-20, -130, 12.5, 15);
ellipse(20, -130, 12.5, 15);
// eyebrows
push();
stroke(255);
strokeWeight(6);
line(-30, -150, -6, -147);
line(6, -147, 30, -150);
pop();
// hat
fill(130);
stroke(100);
ellipse(0, -162.5, 250, 25);
triangle(0, -300, 37.5, -162.5, -37.5, -162.5);
// body
fill(130,);
stroke(100);
strokeWeight(4);
rect(-50, -75, 100, 100, 15);
quad(-50, 0, 50, 0, 100, 200, -100, 200);
// arms
fill(130);
quad(50, -64, 150, 25, 100, 75, 50, -25);
quad(-50, -64, -50, -25, -100, 75, -150, 25);
// hands
fill('rgb(233, 200, 169)');
stroke('rgb(233, 200, 169)');
strokeWeight(17);
line(152, 37, 155, 40);
line(-152, 37, -155, 40);
// feet
fill('rgb(32, 18, 15)');
stroke('rgb(32, 18, 15)');
strokeWeight(20);
line(12.5, 212, 25, 212);
line(-12.5, 212, -25, 212);
// beard
fill(240);
noStroke()
triangle(-31, -87.5, 31, -87.5, -21, -25);
triangle(-31, -87.5, 31, -87.5, 21, -25);
fill(249);
triangle(-31, -87.5, 31, -87.5, 0, 0);
triangle(0, -110, 31, -87.5, -31, -87.5);
// mouth
stroke(0);
strokeWeight(3);
line(-3, -100, 3, -100);
pop();
}
