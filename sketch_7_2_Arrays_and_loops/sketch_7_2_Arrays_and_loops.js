var nums = [20,50,80,110];

function setup() {
createCanvas(640,360);
}


function draw() {
background(0);

//ellipseMode(CENTER);
//ellipse(100,200,nums[0]);
//ellipse(200,200,nums[1]);
//ellipse(300,200,nums[2]);
//ellipse(400,200,nums[3]);

for(let i=0;i<nums.length;i++){
xcord = map(nums[i],20,110,100,550);
ellipseMode(CENTER);
stroke(255);
noFill();
ellipse(xcord,200,nums[i]);
}
}
