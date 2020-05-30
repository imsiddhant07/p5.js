
var index = 0;

var nums = [20,50,80,110];

var bubble = {
x:100,
y:200,
yspeed:4,
xspeed:4,
};

function setup() {
createCanvas(640,360);
}


function draw() {
background(0);



bounce();
move();
show();

}

function bounce() {
if(bubble.x >width || bubble.x<0){
bubble.xspeed = (-1)*bubble.xspeed;
}
if(bubble.y > height || bubble.y <0){
bubble.yspeed = (-1)*bubble.yspeed;
}
}


function move(){
bubble.x += bubble.xspeed;
bubble.y += bubble.yspeed;
}

function show(){
stroke(255);
noFill();
ellipse(bubble.x,bubble.y,nums[index]);
}


function mousePressed() {
index += 1;
if (index == nums.length){
index = 0;
}

}
