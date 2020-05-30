var bubble1 , bubble2;

function setup() {
createCanvas(640,360);
bubble1 = new Bubble(random(width),random(height));
bubble2 = new Bubble(random(width),random(height));
}


function draw() {
background(0);

//bubble1.bounce();
bubble1.move();
bubble1.show();

//bubble2.bounce();
bubble2.move();
bubble2.show();

}



class Bubble {

  constructor(x,y){
  this.x = x;
  this.y = y;
  this.xspeed = 1;
  this.yspeed = 1;
  }
  
  bounce(){
  if(this.x>width || this.x<0){
  this.xspeed = !this.xspeed;
  }
  if(this.y>height || this.y<0){
  this.yspeed = !this.yspeed;
  }
  }
  
  
  move(){
  this.x = this.x + random(-10,10) ;
  this.y = this.y + random(-10,10) ;
  }
  
  
  show(){
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(this.x,this.y,75,75);
  }


}
