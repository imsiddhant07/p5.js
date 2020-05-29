function setup() {
createCanvas(640,360);
}


function draw() {
background(0);
lollipop(100,100,50);
lollipop(350,200,150);
}


function lollipop(x,y,diameter) {
l = map(diameter,20,150,60,190);
fill(120,200,10);
rect(x-10,y,20,l);

fill(255,10,125);
ellipse(x,y,diameter,diameter);

}
