noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;
function preload(){}
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,160);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
background(
    "grey"
);
fill('pink');
stroke('black');
square(noseX, noseY, difference);
document.getElementById("square_side").innerHTML = "width and height of the square will be = "+difference+ "px";
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);  
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+ noseX+ "noseY = "+ noseY);

    leftWrist=  results[0].pose.leftWrist.x;
   rightWrist = results[0].pose.rightWrist.x;
   difference = floor(leftWrist - rightWrist);
   console.log(difference);
    }
        
}

