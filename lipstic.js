function  home_pageL(){
    window.location="index.html";
}

function saveL(){
    save("My_lipstick.png");
}

lipstick_x=0;

lipstick_y=0;


function preload(){
lipstick=loadImage('https://i.postimg.cc/7Lz2hTF3/l.png');
}

function setup(){
    canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initalized for lipstick filter");
}




function gotPoses(results){
    if (results.length>0){
        console.log(results);
        lipstick_x=results[0].pose.nose.x-25;
        lipstick_y=results[0].pose.nose.y+18;
    }
}



function draw(){
    image(video,0,0,300,300);

image(lipstick,lipstick_x,lipstick_y,50,20);
}


