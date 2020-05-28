function setup() {
createCanvas(600,400);
}


function draw() {
background(0);
stroke(255);
strokeWeight(4);


var x = 0;
while(x <= width) {
  r = map(x,0,width,0,255);
  fill(r,200,255);
ellipse(x,100,25,25);
x += 50;
}

for(var c = 0; c<= width ; c+=50){
  g = map(c,0,width,0,255);
  fill(200,g,200);
ellipse(c,300,25,25);
}
}
