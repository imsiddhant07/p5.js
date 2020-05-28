var ball ={
x: 200,
y: 300,
speedx: 4,
speedy: 4
};

function setup() {
createCanvas(640,360);
}


function draw() {
background(0);
move();
bounce();
display();
}

function move() {
ball.x = ball.x + ball.speedx;
ball.y = ball.y + ball.speedy;
}

function bounce(){
if (ball.x>width || ball.x<0){
ball.speedx = ball.speedx*(-1);
}
if (ball.y>height || ball.y<0){
ball.speedy = ball.speedy*(-1);
}
}

function display() {
stroke(255);
noFill();
ellipse(ball.x,ball.y,50,50);

}
