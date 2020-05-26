//Javascript objects
var circle1 = {
x:0,
y:100,
diameter:50
};


function setup() {
createCanvas(640,360);
}
print(circle.x);

function draw() {
background(0);
stroke(255);
fill(125,200,180);
ellipse(circle1.x,circle1.y,circle1.diameter,circle1.diameter);
circle1.x = circle1.x+1;
}
