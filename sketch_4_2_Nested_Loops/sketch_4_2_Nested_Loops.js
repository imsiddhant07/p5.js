function setup() {
createCanvas(640,360);
}


function draw() {
background(0);
stroke(255);
strokeWeight(2);


for (var x=0 ; x<=mouseX ; x += 50){
  for(var y=0 ; y<= mouseY ; y += 50){
    fill(random(255),random(255),random(255));
    ellipse(x,y,25,25);
  }
}

}
