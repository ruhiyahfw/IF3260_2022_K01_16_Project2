/*** INIT BUFFER ***/
function initBuffers(gl) {

   // create buffers
 
   const positionBuffer = gl.createBuffer();
 
   // positionbuffer to apply buffer operations
 
   gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 
   // positions of the cube - NOT YET HOLLOW
   // TODO: fill positions and colors with the hollow object
 
   const positions = [
     // front face
     -1.0, -1.0,  1.0,
      1.0, -1.0,  1.0,
      1.0,  1.0,  1.0,
     -1.0,  1.0,  1.0,
 
     // back face
     -1.0, -1.0, -1.0,
     -1.0,  1.0, -1.0,
      1.0,  1.0, -1.0,
      1.0, -1.0, -1.0,
 
     // top face
     -1.0,  1.0, -1.0,
     -1.0,  1.0,  1.0,
      1.0,  1.0,  1.0,
      1.0,  1.0, -1.0,
 
     // bottom face
     -1.0, -1.0, -1.0,
      1.0, -1.0, -1.0,
      1.0, -1.0,  1.0,
     -1.0, -1.0,  1.0,
 
     // right face
      1.0, -1.0, -1.0,
      1.0,  1.0, -1.0,
      1.0,  1.0,  1.0,
      1.0, -1.0,  1.0,
 
     // left face
     -1.0, -1.0, -1.0,
     -1.0, -1.0,  1.0,
     -1.0,  1.0,  1.0,
     -1.0,  1.0, -1.0,
   ];
 
   // pass the positions
 
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
 
   // set colors
 
   const faceColors = [
     [1.0,  1.0,  1.0,  1.0],    // front face: white
     [1.0,  0.0,  0.0,  1.0],    // back face: red
     [0.0,  1.0,  0.0,  1.0],    // top face: green
     [0.0,  0.0,  1.0,  1.0],    // bottom face: blue
     [1.0,  1.0,  0.0,  1.0],    // right face: yellow
     [1.0,  0.0,  1.0,  1.0],    // left face: purple
   ];
 
   // convert array of colors into a table for all the vertices.
 
   var colors = [];
 
   for (var j = 0; j < faceColors.length; ++j) {
     const c = faceColors[j];
 
     // repeat each color four times for the four vertices of the face
     colors = colors.concat(c, c, c, c);
   }
 
   const colorBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
 
   // build element array buffer; this specifies the indices into the vertex arrays for each face's vertices.
 
   const indexBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
 
   // defines each face as two triangles, using the indices into the vertex array to specify each triangle's position
 
   const indices = [
     0,  1,  2,      0,  2,  3,    // front
     4,  5,  6,      4,  6,  7,    // back
     8,  9,  10,     8,  10, 11,   // top
     12, 13, 14,     12, 14, 15,   // bottom
     16, 17, 18,     16, 18, 19,   // right
     20, 21, 22,     20, 22, 23,   // left
   ];
 
   // send the element array to GL
 
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
       new Uint16Array(indices), gl.STATIC_DRAW);
 
   return {
     position: positionBuffer,
     color: colorBuffer,
     indices: indexBuffer,
   };
 }
 
 /*** DRAW SCENE ***/
 function drawScene(gl, programInfo, buffers) {
   gl.clearColor(0.0, 0.0, 0.0, 1.0);  // clear to back fully opaque
   gl.clearDepth(1.0);                 // clear everything
   gl.enable(gl.DEPTH_TEST);           // depth test
   gl.depthFunc(gl.LEQUAL);            // near things obscure far things
   
   // clear canvas
 
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
 
   // projection matrices
 
   const fieldOfView = 45 * Math.PI / 180;   // in radians
   const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
   const zNear = 0.1;
   const zFar = 100.0;
   const projectionMatrix = create();
 
   // orthographic
   // TODO: check projection mode
 
   ortho(projectionMatrix,
                    -aspect,
                    aspect,
                     -1.0,
                     1.0,
                    zNear,
                    zFar);
 
   // set the drawing point to the center
   const modelViewMatrix = create();
 
   // move drawing position a bit
 
    // TODO: see all the modes
 
   /* for translate
   translate(modelViewMatrix,     // destination matrix
                  modelViewMatrix,     // matrix to translate
                  [-0.0, 0.0, -6.0]);  // amount to translate */
   // for rotate z
   rotate(modelViewMatrix,  // destination matrix
               modelViewMatrix,  // matrix to rotate
               cubeRotation,     // amount to rotate in radians
               [0, 0, 1]);       // axis to rotate around (Z)
   // for rotate x 
   rotate(modelViewMatrix,  // destination matrix
               modelViewMatrix,  // matrix to rotate
               cubeRotation * .7,// amount to rotate in radians
               [0, 1, 0]);       // axis to rotate around (X)
   // for rotate y (?)
   /*mat4.rotate(modelViewMatrix,  // destination matrix
               modelViewMatrix,  // matrix to rotate
               cubeRotation * .7,// amount to rotate in radians
               [1, 0, 0]);       // axis to rotate around (Y)*/
 
 
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
         offset);
     gl.enableVertexAttribArray(
         programInfo.attribLocations.vertexPosition);
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
         offset);
     gl.enableVertexAttribArray(
         programInfo.attribLocations.vertexColor);
   }
 
   // specify indices to use to index the vertices
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
 
   // use program
 
   gl.useProgram(programInfo.program);
 
   // set the shader uniforms
 
   gl.uniformMatrix4fv(
       programInfo.uniformLocations.projectionMatrix,
       false,
       projectionMatrix);
   gl.uniformMatrix4fv(
       programInfo.uniformLocations.modelViewMatrix,
       false,
       modelViewMatrix);
 
   {
     const vertexCount = 36;
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
       alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
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
       alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
       gl.deleteShader(shader);
       return null;
     }
   
     return shader;
   }