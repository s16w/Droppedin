let circles = [];

let numCircles;
let spacing = 6;

let rad = 1950;


function setup() {

  numCircles = rad / spacing;

  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numCircles; i++){
   circles[i] = new Circle(rad);
    rad -= spacing;
  }
 noCursor()
}

function draw() {
  background(225);
 stroke(180- mouseX/2,100,100)
  var thetaX = map(mouseX, 0, width, 0, TWO_PI);
    var thetaY = map(mouseY, 0, height, 0, TWO_PI);

  for (var i = 0; i < numCircles; i++){
    push();
    translate(cos(thetaX) * i , cos(thetaY) * i);
    circles[i].show(i);
    pop();
  }

}



function Circle(radius) {
  this.x = windowWidth / 2
  this.y = windowHeight / 2
  this.r = radius;
  this.show = function(a) {
    // console.log(a);
    rectMode(CENTER)
    ellipse(this.x, this.y, this.r, this.r)
    //fill(1, 200, 300)
    //noStroke()
  }
  this.grow = function() {

  }
}
