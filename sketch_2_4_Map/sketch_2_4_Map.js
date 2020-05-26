var r = 0;
var b = 255;

function setup() {
createCanvas(640,360);
}


function draw() {
r = map(mouseX,0,640,0,255);
b = map(mouseX,0,640,255,0);

background(r,0,b);
stroke(200);
fill(160,100,60);
ellipse(mouseX,150,64,64);
}
