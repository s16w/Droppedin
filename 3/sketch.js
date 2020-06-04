let circles = [];
let numCircles;
let spacing = 10;
let rad;
let thickness = 0.5;


function setup() {
noCursor()
  createCanvas(windowWidth, windowHeight);

  rad = width * 1.5;
  numCircles = 1500

  for (let i = 0; i < numCircles; i++) {
    circles[i] = new Circle(rad);
    // console.log(rad);
    rad *= 0.9; //change value for the amount of spacing
    // spacing *= 0.9;
  }

//   noFill();
// noStroke();
}

function draw() {
  background(0);
  strokeWeight(thickness)
  for (var i = 0; i < circles.length; i++) {
//colour of circles
    // fill( 20, map( i, 0, circles.length, 28, 255),200)
// This is speed
    circles[i].r *= 1.009;
    circles[i].show(i);

//new circle appears when outer circle's radius is bigger than width * number
    if (circles[i].r > width * 2) {
      circles.splice(i, 1);
      circles.push(new Circle(1));
    }

  }

}

function mousePressed(){
  if (thickness < 150) {
    thickness += 2
  } else{
    thickness = 1
  }

  }

function keyPressed(){
  if (thickness < 150) {
    thickness = 0.5
  } else{
    thickness = 1
  }
}

function Circle(radius) {
  this.x = windowWidth / 2
  this.y = windowHeight / 2
  this.r = radius;
  this.show = function() {
    // console.log(a);
    rectMode(CENTER)
    rect(this.x, this.y, this.r, this.r)
    //
    stroke(360 - mouseX / 2, 100, 100);
    // noStroke();
    colorMode(HSB, 360, 100, 100)
    // fill(360 - mouseY / 2, 100, 100)
    fill(360 - mouseY / 2.5, 20, 255)
    ellipse(map(mouseX,0,width,width,10),mouseY, this.r, this.r)
    ellipse(mouseX,map(mouseY,0,height,height,10), this.r, this.r)
    ellipse(map(mouseX,0,width,width,10),map(mouseY,0,height,height,10), this.r, this.r)
    ellipse(mouseX,mouseY, this.r, this.r)

  }
}
