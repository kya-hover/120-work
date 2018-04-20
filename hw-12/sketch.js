

// global variables
let bubbles = [];
let num_of_bubbles = 100

function setup() {
    createCanvas(windowWidth, windowHeight);
    // make a for loop and call Bubble, push to the bubbles array
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < num_of_bubbles; i++) {
        bubbles.push(new Bubble(init_x, init_y, random(5, 15)));
    // bubble starting position
        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background(0);
    // put the Bubble class methods in the draw loop
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
        bubbles[i].destroy(bubbles, i);
    }
}

// make the destroy method a function
function destroy(my_id){
  bubbles.splice(my_id, 1);
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

    // destroy bubbles when they collide
    destroy(bubbles, my_id) {
        for (let n = 0; n < bubbles.length; n++) {
        if (n != my_id) {
            let d = dist(this.x, this.y, bubbles[n].x, bubbles[n].y);
            let combinedR = this.radius + bubbles[n].radius;
            for (let i = bubbles.length -1; i >= 0; i--) {
                if (d <= combinedR) {
                    destroy(my_id);
                }
            }
        }
        }
    }
}
