function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(700, 500);
    canvas.position(650,120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#c2c2c2');
}

function modelLoaded() {
    console.log('Posenet is Initialized!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}