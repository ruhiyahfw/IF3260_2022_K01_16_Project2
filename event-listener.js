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

rotationXRange.addEventListener("input", () => {
    rotationX.innerHTML = rotationXRange.value;
    arrTransformation[mode]["rotations"][object][0] = rotationXRange.value;
});

rotationYRange.addEventListener("input", () => {
    rotationY.innerHTML = rotationYRange.value;
    arrTransformation[mode]["rotations"][object][1] = rotationYRange.value;
});

rotationZRange.addEventListener("input", () => {
    rotationZ.innerHTML = rotationZRange.value;
    arrTransformation[mode]["rotations"][object][2] = rotationZRange.value;
});

cameraRange.addEventListener("input", () => {
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