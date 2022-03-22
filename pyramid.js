/*** INIT BUFFER ***/
function initBuffersPyramid(gl) {
  // create buffers

  const positionBuffer = gl.createBuffer();

  // positionbuffer to apply buffer operations

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // positions of the cube - NOT YET HOLLOW
  // TODO: fill positions and colors with the hollow object

  const positions = [
    // FRONT
      // base front
      -1, -0.2, 0.2,
      -0.6, -0.2, 0.2, 
      -0.62, -0.2, 0.18, 
      -0.98, -0.2, 0.18,

      //tegak front
      -1, -0.2, 0.2,
      -0.6, -0.2, 0.2,
      -0.6, -0.18, 0.2,
      -1, -0.18, 0.2,

      //tutup base front
      -1, -0.18, 0.2,
      -0.6, -0.18, 0.2,
      -0.62, -0.18, 0.18,
      -0.98, -0.18, 0.18,

      //sisi satunya front
      -0.98, -0.2, 0.18,
      -0.62, -0.2, 0.18,
      -0.62, -0.18, 0.18,
      -0.98, -0.18, 0.18,

    // BACK
      // base back
      -0.98, -0.2, -0.18,
      -0.62, -0.2, -0.18, 
      -0.6, -0.2, -0.2, 
      -1, -0.2, -0.2,

      // tegak back
      -1, -0.2, -0.2,
      -0.6, -0.2, -0.2,
      -0.6, -0.18, -0.2,
      -1, -0.18, -0.2,

      //tutup base back
      -0.98, -0.18, -0.18,
      -0.62, -0.18, -0.18,
      -0.6, -0.18, -0.2,
      -1, -0.18, -0.2,

      //sisi satunya back
      -0.98, -0.2, -0.18,
      -0.62, -0.2, -0.18,
      -0.62, -0.18, -0.18,
      -0.98, -0.18, -0.18,
    
    // LEFT
      // base left
      -1, -0.2, 0.2,
      -0.98, -0.2, 0.18,
      -0.98, -0.2, -0.18,
      -1, -0.2, -0.2,

      // tegak left
      -1, -0.2, 0.2,
      -1, -0.2, -0.2,
      -1, -0.18, -0.2,
      -1, -0.18, 0.2,

      // tutup base left
      -1, -0.18, 0.2,
      -0.98, -0.18, 0.18,
      -0.98, -0.18, -0.18,
      -1, -0.18, -0.2,

      //sisi satunya left
      -0.98, -0.2, 0.18,
      -0.98, -0.2, -0.18,
      -0.98, -0.18, -0.18,
      -0.98, -0.18, 0.18,

    // RIGHT
      // base right
      -0.62, -0.2, 0.18,
      -0.6, -0.2, 0.2,
      -0.6, -0.2, -0.2,
      -0.62, -0.2, -0.18,

      // tegak right
      -0.6, -0.2, 0.2,
      -0.6, -0.2, -0.2,
      -0.6, -0.18, -0.2,
      -0.6, -0.18, 0.2,

      // tutup base right
      -0.62, -0.18, 0.18,
      -0.6, -0.18, 0.2,
      -0.6, -0.18, -0.2,
      -0.62, -0.18, -0.18,

      //sisi satunya right
      -0.62, -0.2, 0.18,
      -0.62, -0.18, 0.18,
      -0.62, -0.18, -0.18,
      -0.62, -0.2, -0.18,

    // RIBS 
    -0.98, -0.18, -0.18,
    -1, -0.18, -0.2,
    -0.8, 0.2, 0,
    -0.8, 0.18, 0,

    -0.62, -0.18, 0.2,
    -0.6, -0.18, 0.2,
    -0.8, 0.2, 0,
    -0.8, 0.18, 0,

    -0.6, -0.18, -0.18,
    -0.6, -0.18, -0.2,
    -0.8, 0.2, 0,
    -0.8, 0.18, 0,

    -1, -0.18, 0.2,
    -0.98, -0.18, 0.18,
    -0.8, 0.18, 0,
    -0.8, 0.2, 0, 
   ];

  // pass the positions

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // set colors

  const faceColors = [
      [0.0, 0.0, 1.0, 1.0],  
      [0.0, 0.0, 1.0, 1.0],  
      [0.0, 0.0, 1.0, 1.0],  
      [0.0, 0.0, 1.0, 1.0],  

      [0.0, 0.25, 1.0, 1.0],  
      [0.0, 0.25, 1.0, 1.0], 
      [0.0, 0.25, 1.0, 1.0], 
      [0.0, 0.25, 1.0, 1.0], 

      [0.0, 0.5, 1.0, 1.0],  
      [0.0, 0.5, 1.0, 1.0],  
      [0.0, 0.5, 1.0, 1.0], 
      [0.0, 0.5, 1.0, 1.0],  
      
      [0.0, 0.75, 1.0, 1.0], 
      [0.0, 0.75, 1.0, 1.0], 
      [0.0, 0.75, 1.0, 1.0], 
      [0.0, 0.75, 1.0, 1.0],
      
      [0.0, 0.75, 1.0, 1.0], 
      [0.0, 0.75, 1.0, 1.0], 
      [0.0, 0.75, 1.0, 1.0], 
      [0.0, 0.75, 1.0, 1.0],
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

  var indices = [];

  for (var i = 0; i < positions.length; i += 4) {
    indices.push(i);
    indices.push(i + 1);
    indices.push(i + 2);

    indices.push(i);
    indices.push(i + 2);
    indices.push(i + 3);
  }

  // send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );

  return {
    position: positionBuffer,
    // vertices: positions,
    color: colorBuffer,
    indices: indexBuffer,
    type: "pyramid",
    center: [-0.8,0,0],
    numVertices : indices.length,
  };
}
