// Kya Hover
// FINAL MAZE PROJECT

// Global Variables
let cols, rows;
let w = 20;
let current;
let grid = [];
let stack = [];
// preload the background image
let img;

function preload() {
  img = loadImage('./images/gandalf_background.jpg');
}

function setup() {
  createCanvas(660, 660);
  cols = floor(width/w);
  rows = floor(height/w);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  // set the background as the gandalf image
  background(img);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  // if the cell has been visited, hilight it
  current.visited = true;
  current.highlight();
  // randomly choose one of the unvisited neighbor cells
  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    // push the current cell to the stack
    stack.push(current);

    // remove the wall between the current and selected cell
    removeWalls(current, next);

    // make the selected cell the current cell and mark it as visited
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
}

// CELL CLASS

function Cell(i, j) {
  // cell constructor
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;

  // check to see if neighboring cell has been visited
  this.checkNeighbors = function() {
    let neighbors = [];

    let top    = grid[index(i, j -1)];
    let right  = grid[index(i+1, j)];
    let bottom = grid[index(i, j+1)];
    let left   = grid[index(i-1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }
    // keep within canvas
    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  // make the leading cell a different color
  this.highlight = function() {
    let x = this.i*w;
    let y = this.j*w;
    noStroke();
    fill(255, 226, 138, 200);
    rect(x, y, w, w);
  }

  this.show = function() {
    // draw cell walls
    let x = this.i*w;
    let y = this.j*w;
    strokeWeight(2);
    stroke(255);
    // top wall
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    // right wall
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    // bottom wall
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    // left wall
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }
    // make the visited cells hilighted
    if (this.visited) {
      noStroke();
      fill(200, 168, 154, 100);
      rect(x, y, w, w);
    }
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {
    return -1;
  }
  return i + j * cols;
}

// remove the walls if visited
function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
