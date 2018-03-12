// create trees using ellipses

 function setup() {
    createCanvas(windowWidth, 700);

}


function draw() {
    // background sky color
    background('rgb(133, 185, 189)');
    // draw the sun
    // make sun sandbox
    push();
    strokeWeight(3);
    stroke(255);
    fill("rgb(255, 218, 59)");
    ellipse(.5 * width, .5 * height, 100, 100)
    pop();
    // tree fill color with alpha value
    fill(152, 223, 152, 10);
    // nested tree loops
    for (let y = 20; y < height; y += 2) {
		    for (let x = 10; x <= width; x += 30) {
			       let diameter = y/20;
			       ellipse(x, y, diameter, diameter);
		}
	}

}
