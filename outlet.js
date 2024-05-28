Status = "";
outlet_image = "";

function preload(){
    outlet_image = loadImage("outlet.jpg");
}

function setup(){
    canvas= createCanvas(640,350);
    canvas.position(315,200);
    object_Detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status=true;
    object_Detector.Detect(outlet.html,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error("error");
    }
    console.log(results);

}

function draw(){
image(outlet_image,0,0,640,350);
}