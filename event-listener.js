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
    rotationX.innerHTML = arrTransformation[mode]["rotations"][object][0];
    rotationY.innerHTML = arrTransformation[mode]["rotations"][object][1];
    rotationZ.innerHTML = arrTransformation[mode]["rotations"][object][2];
    rotationXRange.value = arrTransformation[mode]["rotations"][object][0];
    rotationYRange.value = arrTransformation[mode]["rotations"][object][1];
    rotationZRange.value = arrTransformation[mode]["rotations"][object][2];

}

function changeObject(val){
    object = val;
    scaleX.innerHTML = arrTransformation[mode]["scales"][object][0];
    scaleY.innerHTML = arrTransformation[mode]["scales"][object][1];
    scaleZ.innerHTML = arrTransformation[mode]["scales"][object][2];
    scaleXRange.value = arrTransformation[mode]["scales"][object][0];
    scaleYRange.value = arrTransformation[mode]["scales"][object][1];
    scaleZRange.value = arrTransformation[mode]["scales"][object][2];
    rotationX.innerHTML = arrTransformation[mode]["rotations"][object][0];
    rotationY.innerHTML = arrTransformation[mode]["rotations"][object][1];
    rotationZ.innerHTML = arrTransformation[mode]["rotations"][object][2];
    rotationXRange.value = arrTransformation[mode]["rotations"][object][0];
    rotationYRange.value = arrTransformation[mode]["rotations"][object][1];
    rotationZRange.value = arrTransformation[mode]["rotations"][object][2];
}

function turnShadingOnOff(val){
    if (val == "on"){
        shadingState = true;
    }
    else{
        shadingState = false;
    }
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
    scaleZ.innerHTML = scaleYRange.value;
    arrTransformation[mode]["scales"][object][2] = scaleZRange.value;
});

function handleReset() {
    objects = ["cube", "pyramid", "triangularprism"]
    projections = ["orto", "persp", "oblique"]
    document.getElementById("orto").checked = true;
    cube.checked = true;
    for(var i=1;i<2;i++) {
        document.getElementById(projections[i]).checked = false;
        document.getElementById(objects[i]).checked = false;
    }
    rotationXRange.value = 0;
    rotationYRange.value = 0;
    rotationZRange.value = 0;
    rotationX.innerHTML = 0;
    rotationY.innerHTML = 0;
    rotationZ.innerHTML = 0;
    scaleXRange.value = 1
    scaleYRange.value = 1
    scaleZRange.value = 1;
    scaleX.innerHTML = 1;
    scaleY.innerHTML = 1;
    scaleZ.innerHTML = 1;
    cameraRange.value= 1;
    camera.innerHTML = 1;
    for (var i=0;i<3;i++) {
        for(var j=0;j<2;j++) { // j < 2, not yet for oblique
            arrTransformation[projections[j]]["rotations"][objects[i]][0] = 0;
            arrTransformation[projections[j]]["rotations"][objects[i]][1] = 0;
            arrTransformation[projections[j]]["rotations"][objects[i]][2] = 0;
            arrTransformation[projections[j]]["scales"][objects[i]][0] = 1;
            arrTransformation[projections[j]]["scales"][objects[i]][1] = 1;
            arrTransformation[projections[j]]["scales"][objects[i]][2] = 1;
        }
    }
}