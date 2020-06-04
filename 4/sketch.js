
let ts = 400;
let letter = ["T", "E", "E", "T", "H"]
let index = 0
let index2 = 1
let index3 = 2
let index4 = 3
let index5 = 4

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('futura');

}

function draw() {
  // background(255);
  textSize(ts);
  colorMode(HSB, 360, 100, 100)
  fill(360 - mouseY / 2.5, 20, 255)
  stroke( 360 - mouseX / 2, 200, 200)

  text(letter[index], width/2, height/2);
  text(letter[index2], mouseX, mouseY);
  text(letter[index3], mouseX, map(mouseY,0,height,height,10));
  text(letter[index4], map(mouseX,0,width,width,10), mouseY);
  text(letter[index5], map(mouseX,0,width,width,10), map(mouseY,0,height,height,10));

  ts -= 0.8

}

function mousePressed(){
 index = index + 1
  if (index == 1){
    index5 = 0
    index4 = 4
    index3 = 3
    index2 = 2
  }

  if (index == 2){
    index5 = 1
    index4 = 0
    index3 = 4
    index2 = 3
  }

  if (index == 3){
    index5 = 2
    index4 = 1
    index3 = 0
    index2 = 4
  }

  if (index == 4){
    index5 = 3
    index4 = 2
    index3 = 1
    index2 = 0
  }

  if (index == 5){
    index5 = 4
    index4 = 3
    index3 = 2
    index2 = 1
    index = 0
  }
 if (ts < 400) {
   ts = 400
 }

}
