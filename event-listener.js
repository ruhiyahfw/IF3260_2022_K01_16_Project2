var rotationXRange = document.getElementById("rotationX");
var rotationX = document.getElementById("rotationX-value");
var rotationYRange = document.getElementById("rotationY");
var rotationY = document.getElementById("rotationY-value");
var rotationZRange = document.getElementById("rotationZ");
var rotationZ = document.getElementById("rotationZ-value");

rotationXRange.addEventListener("change", () => {
    rotationX.innerHTML = rotationXRange.value;
});

rotationYRange.addEventListener("change", () => {
    rotationY.innerHTML = rotationYRange.value;
});

rotationZRange.addEventListener("change", () => {
    rotationZ.innerHTML = rotationZRange.value;
});