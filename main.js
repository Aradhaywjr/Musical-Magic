var farruko = ""
var khaled = ""

function preload(){
    farruko = loadSound("pepas.mp3");
    khaled = loadSound("c e'st la vie.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}