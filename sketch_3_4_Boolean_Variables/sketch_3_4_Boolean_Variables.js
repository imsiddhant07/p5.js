var on = false;

function setup() {
createCanvas(640,360);
}


function draw() {
background(0);
stroke(255);
noFill();

if(mouseX>320 && mouseX<420 && mouseY>180 && mouseY<280){
fill(125,20,200);

}
if(on){
background(120,120,255);
}

rect(320,180,100,100);
}


function mousePressed() {
if(mouseX>320 && mouseX<420 && mouseY>180 && mouseY<280){
on = !on;
}

}
