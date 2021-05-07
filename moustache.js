function  home_pageM(){
    window.location="index.html";
}

moustache_x=0;
moustache_y=0;

function preload(){
moustache=loadImage('https://i.postimg.cc/G2pVFHmy/m.png');
}

function setup(){
    canvas=createCanvas(300,300);
   video= createCapture(VIDEO);
   canvas.center();
   video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialised");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        moustache_x=results[0].pose.nose.x-40;
        moustache_y=results[0].pose.nose.y;
    }
}




function draw(){
    image(video,0,0,300,300);
    image(moustache,moustache_x,moustache_y,80,40);
}

function saveM(){
    save("My_moustache.png");
}