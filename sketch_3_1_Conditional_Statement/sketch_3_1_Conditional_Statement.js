function setup() {
createCanvas(640,360);
}


function draw() {
background(0);

stroke(255);
strokeWeight(4);
noFill();

if(mouseX>320) {
fill(255,160,100);
}

ellipseMode(CENTER);
ellipse(320,180,50,50);
}
