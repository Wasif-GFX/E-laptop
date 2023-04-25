// IMAGES SLIDER
// var slidImg = document.getElementById("slidImg");
var images = new Array(
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png"
);
var len = images.length;
var i = 0;
function slider(){
    if(i > len-1){
        i = 0;
    }
    slidImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}
