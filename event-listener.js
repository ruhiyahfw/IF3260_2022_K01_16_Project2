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
// translation
var translateXRange = document.getElementById("translateX");
var translateX = document.getElementById("translateX-value");
var translateYRange = document.getElementById("translateY");
var translateY = document.getElementById("translateY-value");
var translateZRange = document.getElementById("translateZ");
var translateZ = document.getElementById("translateZ-value");

// change projection
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
    translateX.innerHTML = arrTransformation[mode]["translations"][object][0];
    translateY.innerHTML = arrTransformation[mode]["translations"][object][1];
    translateZ.innerHTML = arrTransformation[mode]["translations"][object][2];
    translateXRange.value = arrTransformation[mode]["translations"][object][0];
    translateYRange.value = arrTransformation[mode]["translations"][object][1];
    translateZRange.value = arrTransformation[mode]["translations"][object][2];
}

// change object
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
    translateX.innerHTML = arrTransformation[mode]["translations"][object][0];
    translateY.innerHTML = arrTransformation[mode]["translations"][object][1];
    translateZ.innerHTML = arrTransformation[mode]["translations"][object][2];
    translateXRange.value = arrTransformation[mode]["translations"][object][0];
    translateYRange.value = arrTransformation[mode]["translations"][object][1];
    translateZRange.value = arrTransformation[mode]["translations"][object][2];
}

// shading
function turnShadingOnOff(val){
    if (val == "on"){
        shadingState = true;
    }
    else{
        shadingState = false;
    }
}

// rotation
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


// camera
cameraRange.addEventListener("input", () => {
    camera.innerHTML = cameraRange.value;
});


// scaling
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

// translation
translateXRange.addEventListener("input", () => {
    translateX.innerHTML = translateXRange.value;
    arrTransformation[mode]["translations"][object][0] = translateXRange.value;
});

translateYRange.addEventListener("input", () => {
    translateY.innerHTML = translateYRange.value;
    arrTransformation[mode]["translations"][object][1] = translateYRange.value;
});

translateZRange.addEventListener("input", () => {
    translateZ.innerHTML = translateYRange.value;
    arrTransformation[mode]["translations"][object][2] = translateZRange.value;
});

// reset
function handleReset() {
    objects = ["cube", "pyramid", "triangularprism"]
    projections = ["orto", "persp", "oblique"]
    document.getElementById("orto").checked = true;
    cube.checked = true;
    for(var i=1;i<2;i++) {
        document.getElementById(projections[i]).checked = false;
        document.getElementById(objects[i]).checked = false;
    }
    changeProjection("orto");
    changeObject("cube");
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
    translateXRange.value = 1
    translateYRange.value = 1
    translateZRange.value = 1;
    translateX.innerHTML = 1;
    translateY.innerHTML = 1;
    translateZ.innerHTML = 1;
    cameraRange.value= 1;
    camera.innerHTML = 1;
    for (var i=0;i<3;i++) {
        for(var j=0;j<3;j++) {
            arrTransformation[projections[j]]["translations"][objects[i]][0] = 0;
            arrTransformation[projections[j]]["translations"][objects[i]][1] = 0;
            arrTransformation[projections[j]]["translations"][objects[i]][2] = 0;
            arrTransformation[projections[j]]["rotations"][objects[i]][0] = 0;
            arrTransformation[projections[j]]["rotations"][objects[i]][1] = 0;
            arrTransformation[projections[j]]["rotations"][objects[i]][2] = 0;
            arrTransformation[projections[j]]["scales"][objects[i]][0] = 1;
            arrTransformation[projections[j]]["scales"][objects[i]][1] = 1;
            arrTransformation[projections[j]]["scales"][objects[i]][2] = 1;
        }
    }
}

/* save file */
function saveFile() {
    // get filename
    var filename = document.getElementById("filename").value;
    if (filename == "") {
      filename = "webgl project";
    }
  
    // collect project's variables
    var objToExport = [];
    objToExport.push(arrTransformation);
  
    // stringify objToExport
    var data = JSON.stringify(objToExport);
  
    // download data
    download(filename + ".json", data);
  
    // show success info
    alert("Save file success");
  }

  var download = function (filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
  
    element.style.display = "none";
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  };

/* load file */
function loadFile() {
    // get file chosen
    var file = document.getElementById("import_file").files[0];
    if (!file) {
      alert("Choose a json file first");
      return;
    }
  
    var reader = new FileReader();
    reader.onload = function (e) {
      console.log("file imported");
      arrObjects = JSON.parse(e.target.result);
      LoadData(arrObjects);
    };
  
    reader.readAsText(file);
  }
  
  function LoadData(arrObjects) {
    // reset
    handleReset()
    // save new global variables
    arrTransformation = arrObjects[0];
  }