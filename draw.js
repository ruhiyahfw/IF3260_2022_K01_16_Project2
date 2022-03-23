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


  /*** OBJECT TRANSFORMATION ***/
  // Scaling
  modelViewMatrix = scale(modelViewMatrix, arrTransformation[mode]["scales"][buffers.type][0], arrTransformation[mode]["scales"][buffers.type][1], arrTransformation[mode]["scales"][buffers.type][2], buffers.center);
  
  // translasi

  // rotation
  modelViewMatrix = rotateX(modelViewMatrix, arrTransformation[mode]["rotations"][buffers.type][0], buffers.center);
  modelViewMatrix = rotateY(modelViewMatrix, arrTransformation[mode]["rotations"][buffers.type][1], buffers.center);
  modelViewMatrix = rotateZ(modelViewMatrix, arrTransformation[mode]["rotations"][buffers.type][2], buffers.center);

  // ZOOM
  scaleCamera(modelViewMatrix,     // destination matrix
  modelViewMatrix,     // matrix to scale
  [camera.innerHTML, camera.innerHTML, camera.innerHTML]);  // amount to zoom */


  /** SHADING PREP ***/
  // Compute a normal matrix for shading and lighting
  var normalMatrix = inverse(modelViewMatrix);
  normalMatrix = transpose(normalMatrix);

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

  // Tell WebGL how to pull out the normals from
  // the normal buffer into the vertexNormal attribute.
  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexNormal,
      numComponents,
      type,
      normalize,
      stride,
      offset);
    gl.enableVertexAttribArray(
      programInfo.attribLocations.vertexNormal);
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
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.normalMatrix,
    false,
    normalMatrix);
  gl.uniform1i(
    programInfo.uniformLocations.shadingBool,
    shadingState);

  {
    const vertexCount = buffers.numVertices;
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
