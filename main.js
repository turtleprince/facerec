Webcam.attach("#camera");
camera = document.getElementById("camera");

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});



function take_snap() {
    Webcam.snap(function (captured_image) {
        document.getElementById("result").innerHTML = '<img id= "captured_image" src= "' + captured_image + '">';

    });
}
console.log("ml5 version : ", ml5.version);

my_classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gKOgKSE4-/", model_Loaded);


function model_Loaded() {

    console.log("Your model has been loaded");
}

function check_image(){
    my_image = document.getElementById('captured_image');
   my_classifier.classify(my_image, my_results);         //Image,function
  
}

function my_results(error, results){
    
    if (error){
        console.error(error);
    }else{
        console.log(results);
        //results[0]
        
        // results[0].label = name of the item identified by our model
        document.getElementById("object_name").innerHTML = results[0].label;

        // results[0].confidence = accuracy of the item identified by our model
        document.getElementById("accuracy_name").innerHTML = results[0].confidence.toFixed(2);

    }

    
    
}