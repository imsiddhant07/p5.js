var x = 0;
var y = 10;
var speedx = 5;
var speedy = 5;

function setup() {
createCanvas(640,360);
}


function draw() {
background(0);
stroke(255);
strokeWeight(4);
noFill();
ellipse(x,y,50,50);

if(x>width){
speedx = -5;
}
else {
if(x<0){
  speedx = 5;
} }

if(y>height){
speedy = -5;
}
else {
if(y<0){
  speedy = 5;
} }


x = x+speedx;
y = y+speedy;
}
