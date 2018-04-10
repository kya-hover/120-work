// global variables
let bubbles = [];
let num_of_bubbles = 40

function setup() {
    createCanvas(windowWidth, windowHeight);
    // make a for loop and call Bubble, push to the bubbles array
    for (let i = 0; i < num_of_bubbles; i++) {
        /* start the bubble in the middle of the canvas and give a ramdom size between 2 and 80 px */
        bubbles.push(new Bubble(width/2, height/2, random(2, 80)));
    }
}

function draw() {
    background(0);
    // put the Bubble class methods in the draw loop
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
    }
}


// BUBBLE CLASS //


class Bubble {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.delta_x = random(-2, 2);
        this.delta_y = random(-2, 2);
        this.bubble_color = color(random(255), random(255), random(255), random(255));
    }

    show() {
        noStroke();
        fill(this.bubble_color);
        ellipse(this.x, this.y, this.radius * 2);
    }

    move() {
      // move the bubbles away from the center
      this.x += this.delta_x;
      this.y += this.delta_y;
      // make the bubbles bounce off of the walls
      // vertical walls
        if (this.x >= width) {
          this.delta_x *= -1;
          this.x = width - abs(this.delta_x);
      } else if (this.x <= 0) {
          this.delta_x *= -1
          this.x = abs(this.delta_x);
      // horizontal walls
      } else if (this.y >= height) {
          this.delta_y *= -1;
          this.y = height - abs(this.delta_y);
      } else if (this.y <= 0) {
          this.delta_y *= -1;
          this.y = abs(this.delta_y);
      }
    }
}
