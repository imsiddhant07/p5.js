var circleX = 100;
var circleY = 100;
var circleR = 10;


function setup() {
createCanvas(1640,1360);
}
function draw() {
background(200,200,120);
  noStroke();
fill(0,150);
ellipse(circleX,circleY,circleR,circleR);
circleR += 1;
circleX = circleX +1;
}

/*function mousePressed() {
background(random(0,255),random(0,255),random(0,255));
} */
