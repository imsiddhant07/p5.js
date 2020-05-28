var on = false;

function setup() {
createCanvas(640,360);
}


function draw() {
background(0);
stroke(255);
strokeWeight(2);

if(on){
  r = map(mouseX,0,width,0,255);
  g = map(mouseX,0,width,255,0);
  b = map(mouseY,0,width,0,255);
background(r,g,b);
}

for (var x=0 ; x<=mouseX ; x += 50){
  for(var y=0 ; y<= mouseY ; y += 50){
    fill(random(255),random(255),random(255));
    ellipseMode(CENTER);
    ellipse(x,y,25,25);
  }
}

}


function mousePressed() {
on = !on;
}
