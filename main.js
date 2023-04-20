Webcam.set({
    width:350,
    height:300,
    imageFormat: 'png',
    pngQuality: 90
});

var camera = document.getElementById("camera");

Webcam.attach('#camera')
function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'"/>'
    })
}
console.log('ml5 version: ',ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ShF13ncBA/model.json',modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!')
}

function check(){
    var img = document.getElementById('captured_image');
    classifier.classify(img, gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        if(results[0].label ==="Tranquilo"){
            document.getElementById("result_label").innerHTML = "Você está fazendo - Tranquilo"
        }
        else if(results[0].label ==="Legal"){
            document.getElementById("result_label").innerHTML = "Você está fazendo - Legal"
        }
        else if(results[0].label ==="Vitória"){
            document.getElementById("result_label").innerHTML = "Você está fazendo - Vitória"
        }
        }
    }