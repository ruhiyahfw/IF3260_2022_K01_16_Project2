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
    scaleX.innerHTML = arrTransformation[mode]["scales"][object][0];
    scaleY.innerHTML = arrTransformation[mode]["scales"][object][1];
    scaleZ.innerHTML = arrTransformation[mode]["scales"][object][2];
    scaleXRange.value = arrTransformation[mode]["scales"][object][0];
    scaleYRange.value = arrTransformation[mode]["scales"][object][1];
    scaleZRange.value = arrTransformation[mode]["scales"][object][2];
}

function changeObject(val){
    object = val;
    scaleX.innerHTML = arrTransformation[mode]["scales"][object][0];
    scaleY.innerHTML = arrTransformation[mode]["scales"][object][1];
    scaleZ.innerHTML = arrTransformation[mode]["scales"][object][2];
    scaleXRange.value = arrTransformation[mode]["scales"][object][0];
    scaleYRange.value = arrTransformation[mode]["scales"][object][1];
    scaleZRange.value = arrTransformation[mode]["scales"][object][2];
}

scaleXRange.addEventListener("input", () => {
    scaleX.innerHTML = scaleXRange.value;
    arrTransformation[mode]["scales"][object][0] = scaleXRange.value;
});

scaleYRange.addEventListener("input", () => {
    scaleY.innerHTML = scaleYRange.value;
    arrTransformation[mode]["scales"][object][1] = scaleYRange.value;
});

scaleZRange.addEventListener("input", () => {
    arrTransformation[mode]["scales"][object][2] = scaleZRange.value;
});