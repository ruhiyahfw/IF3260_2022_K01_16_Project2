/*** DRAW SCENE ***/
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // clear to back fully opaque
  gl.clearDepth(1.0); // clear everything
  gl.enable(gl.DEPTH_TEST); // depth test
  gl.depthFunc(gl.LEQUAL); // near things obscure far things

  //alert("draw scene \nmode = "+mode+" type = "+buffers.type);

  /**** PROJECTION MATRICES  *****/

  const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  var projectionMatrix = create();
  
  if (mode == "orto"){
    // orthographic
    // TODO: check projection mode
    ortho(projectionMatrix, -aspect, aspect, -1.0, 1.0, zNear, zFar);
  }
  else if (mode == "persp"){
    projectionMatrix = perspectively(fieldOfView, aspect, zNear, zFar);
    
  }

  


  /*** SETTING UP THE CAMERA ***/
  // set the drawing point to the center
  var modelViewMatrix = create();


  translateCamera(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to translate
    [-0.0, 0.0, -6.0]
  ); // amount to translate
  rotateCamera(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to rotate
    0, // amount to rotate in radians
    [0, 0, 1]
  ); // axis to rotate around (Z)
  rotateCamera(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to rotate
    0, // amount to rotate in radians
    [0, 1, 0]
  ); // axis to rotate around (X)

  console.log(orto["scales"]["cube"]+"\n"+orto["scales"]["pyramid"]);


  /*** OBJECT TRANSFORMATION ***/
  if (buffers.type == object){
    if (mode == "orto"){
      modelViewMatrix = scale(modelViewMatrix, orto["scales"][object][0], orto["scales"][object][1], orto["scales"][object][2]);
      modelViewMatrix = xRotate(modelViewMatrix, rotationX.innerHTML);
      modelViewMatrix = yRotate(modelViewMatrix, rotationY.innerHTML);
      modelViewMatrix = zRotate(modelViewMatrix, rotationZ.innerHTML);
    }
    if (mode == "persp")
      modelViewMatrix = scale(modelViewMatrix, persp["scales"][object][0], persp["scales"][object][1], persp["scales"][object][2]);
      modelViewMatrix = xRotate(modelViewMatrix, rotationX.innerHTML);
      modelViewMatrix = yRotate(modelViewMatrix, rotationY.innerHTML);
      modelViewMatrix = zRotate(modelViewMatrix, rotationZ.innerHTML);
  }

  // ZOOM
  scaleCamera(modelViewMatrix,     // destination matrix
  modelViewMatrix,     // matrix to scale
  [camera.innerHTML, camera.innerHTML, camera.innerHTML]);  // amount to zoom */
    
  // // for rotate z
  // rotateCamera(
  //   modelViewMatrix, // destination matrix
  //   modelViewMatrix, // matrix to rotate
  //   rotationZ.innerHTML, // amount to rotate in radians
  //   [0, 0, 1]
  // ); // axis to rotate around (Z)
  // //for rotate x
  // rotateCamera(
  //   modelViewMatrix, // destination matrix
  //   modelViewMatrix, // matrix to rotate
  //   rotationX.innerHTML * 0.7, // amount to rotate in radians
  //   [0, 1, 0]
  // ); // axis to rotate around (X)*/
  // //for rotate y (?)
  // rotateCamera(
  //   modelViewMatrix, // destination matrix
  //   modelViewMatrix, // matrix to rotate
  //   rotationY.innerHTML, // amount to rotate in radians
  //   [1, 0, 0]
  // ); // axis to rotate around (Y)*/

  // pull out the positions from the position buffer into the vertexPosition attribute
  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      type,
      normalize,
      stride,
      offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  // pull out the positions from the color buffer into the vertexColor attribute
  {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexColor,
      numComponents,
      type,
      normalize,
      stride,
      offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
  }

  // specify indices to use to index the vertices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

  // use program

  gl.useProgram(programInfo.program);

  // set the shader uniforms

  gl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix
  );
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix
  );

  /*function draw(proj_matrix, model_matrix, start, end){
        gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
        gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
        gl.uniformMatrix4fv(_Mmatrix, false, model_matrix);
     
        console.log(isShading);
        
        if(isShading){
           shading(model_matrix, view_matrix);
        }
        else{
           let normalMatrix = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
           gl.uniformMatrix4fv(_Nmatrix, false, normalMatrix);
        }
     
        for (var i = start; i < end; i++){
           gl.drawArrays(gl.TRIANGLE_FAN, i*4, 4);
        }
     } */

  {
    const vertexCount = 96;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
}

/*** INIT SHADER ***/

function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // failure message
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(shaderProgram)
    );
    return null;
  }

  return shaderProgram;
}

// create a shader of given type, uploads the source and compiles it.

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // send the source to the shader object

  gl.shaderSource(shader, source);

  // compile the shader program

  gl.compileShader(shader);

  // check compile success

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader)
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
