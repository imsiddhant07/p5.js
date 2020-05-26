var x = 200;
var y = 200;
var extraCanvas;


function setup() {
createCanvas(640,360);
extraCanvas = createGraphics(640,360);
extraCanvas.clear();
background(0);
}


function draw() {
background(0);
x += random(-5,5);
y += random(-5,5);


if(mouseIsPressed){
extraCanvas.fill(255,150);
extraCanvas.noStroke();
extraCanvas.ellipse(mouseX,mouseY,6,6);
}
image(extraCanvas,0,0);
fill(255,0,200);
stroke(255);
rectMode(CENTER);
rect(x,y,20,20);
}
