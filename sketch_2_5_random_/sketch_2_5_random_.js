var col = {
r:255,
g:0,
b:0
};

var spot = {
x:0,
y:0,
r:30
};

function setup() {
createCanvas(640,360);
background(0);
}


function draw() {
red_upper_limit = map(mouseX,0,width,150,240);
blue_upper_limit = map(mouseX,0,width,160,80);
col.r = random(100,red_upper_limit);
col.b = random(100,blue_upper_limit);
spot.x = random(0,width);
spot.y= random(0,height);
fill(col.r,col.g,col.b,160);
ellipse(spot.x,spot.y,spot.r,spot.r);
}

function mousePressed() {
background(0);
}
