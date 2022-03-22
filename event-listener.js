// rotation
var rotationXRange = document.getElementById("rotationX");
var rotationX = document.getElementById("rotationX-value");
var rotationYRange = document.getElementById("rotationY");
var rotationY = document.getElementById("rotationY-value");
var rotationZRange = document.getElementById("rotationZ");
var rotationZ = document.getElementById("rotationZ-value");
// camera
var cameraRange = document.getElementById("camera");
var camera = document.getElementById("camera-value");
// scaling
var scaleXRange = document.getElementById("scalingX");
var scaleX = document.getElementById("scalingX-value");
var scaleYRange = document.getElementById("scalingY");
var scaleY = document.getElementById("scalingY-value");
var scaleZRange = document.getElementById("scalingZ");
var scaleZ = document.getElementById("scalingZ-value");

rotationXRange.addEventListener("change", () => {
    rotationX.innerHTML = rotationXRange.value;
});

rotationYRange.addEventListener("change", () => {
    rotationY.innerHTML = rotationYRange.value;
});

rotationZRange.addEventListener("change", () => {
    rotationZ.innerHTML = rotationZRange.value;
});

cameraRange.addEventListener("change", () => {
    camera.innerHTML = cameraRange.value;
});

function changeProjection(val){
    mode = val;
}

function changeObject(val){
    object = val;
    alert(persp["scales"]["cube"][0])
}

scaleXRange.addEventListener("input", () => {
    scaleX.innerHTML = scaleXRange.value;
    if (mode == "orto"){
        orto["scales"][object][0] = scaleXRange.value;
    }
    if (mode == "persp"){
        persp["scales"][object][0] = scaleXRange.value;
    }
});

scaleYRange.addEventListener("input", () => {
    scaleY.innerHTML = scaleYRange.value;
    if (mode == "orto"){
        orto["scales"][object][1] = scaleYRange.value;
    }
    if (mode == "persp"){
        persp["scales"][object][1] = scaleYRange.value;
    }
});

scaleZRange.addEventListener("input", () => {
    scaleZ.innerHTML = scaleZRange.value;
    if (mode == "orto"){
        orto["scales"][object][2] = scaleZRange.value;
    }
    if (mode == "persp"){
        persp["scales"][object][2] = scaleZRange.value;
    }
});