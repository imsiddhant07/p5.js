var bubbles = [];

function setup() {
createCanvas(640,360);
//for(var i=0;i<5;i++){
 // x = random(width);
  //y = random(height);
 // d = random(10,60);
//bubbles[i] = new Bubble(x,y,d);
//}
}


function mousePressed(){
var d =random(10,60);
var b = new Bubble(mouseX,mouseY,d);
bubbles.push(b);
}

function mouseDragged(){
var d =random(10,60);
var b = new Bubble(mouseX,mouseY,d);
bubbles.push(b);
}

function draw() {
background(0);


for(let elt of bubbles){
elt.move();
elt.show();
}

//for(var i=0;i<bubbles.length;i++){
//bubbles[i].move();
//bubbles[i].show();
//}


}



class Bubble {

  constructor(x,y,d){
  this.x = x;
  this.y = y;
  this.d = d;
  }
    
  move(){
  this.x = this.x + random(-10,10) ;
  this.y = this.y + random(-10,10) ;
  }
  
  
  show(){
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(this.x,this.y,this.d);
  }


}
