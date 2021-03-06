/*** INIT BUFFER ***/
function initBuffersCube(gl) {
  // create buffers

  const positionBuffer = gl.createBuffer();

  // positionbuffer to apply buffer operations

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // positions of the cube - NOT YET HOLLOW
  // TODO: fill positions and colors with the hollow object

  const positions = [
    //back face
    -0.2, -0.2, -0.2, 0.2, -0.2, -0.2, 0.2, -0.18, -0.2, -0.2, -0.18, -0.2,
    -0.2, 0.18, -0.2, 0.2, 0.18, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2, -0.2, -0.2,
    -0.2, -0.2, -0.18, -0.2, -0.2, -0.18, 0.2, -0.2, -0.2, 0.2, -0.2, 0.18,
    -0.2, -0.2, 0.2, -0.2, -0.2, 0.2, 0.2, -0.2, 0.18, 0.2, -0.2,

    //front face
    -0.2, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.18, 0.2, -0.2, -0.18, 0.2, -0.2,
    0.18, 0.2, 0.2, 0.18, 0.2, 0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2,
    -0.18, -0.2, 0.2, -0.18, 0.2, 0.2, -0.2, 0.2, 0.2, 0.18, -0.2, 0.2, 0.2,
    -0.2, 0.2, 0.2, 0.2, 0.2, 0.18, 0.2, 0.2,

    //bottom face
    -0.2, -0.2, 0.2, -0.18, -0.2, 0.2, -0.18, -0.2, -0.2, -0.2, -0.2, -0.2,
    0.18, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.18, -0.2, -0.2, -0.2,
    -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, 0.18, -0.2, -0.2, 0.18, -0.2, -0.2,
    -0.2, 0.2, -0.2, -0.2, 0.2, -0.2, -0.18, -0.2, -0.2, -0.18,

    //top face
    -0.2, 0.2, 0.2, -0.18, 0.2, 0.2, -0.18, 0.2, -0.2, -0.2, 0.2, -0.2, 0.18,
    0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, -0.2, 0.18, 0.2, -0.2, -0.2, 0.2, 0.2,
    0.2, 0.2, 0.2, 0.2, 0.2, 0.18, -0.2, 0.2, 0.18, -0.2, 0.2, -0.2, 0.2, 0.2,
    -0.2, 0.2, 0.2, -0.18, -0.2, 0.2, -0.18,

    //left face
    -0.2, -0.2, 0.2, -0.2, -0.2, 0.18, -0.2, 0.2, 0.18, -0.2, 0.2, 0.2, -0.2,
    -0.2, -0.2, -0.2, -0.2, -0.18, -0.2, 0.2, -0.18, -0.2, 0.2, -0.2, -0.2,
    -0.2, 0.2, -0.2, -0.2, -0.2, -0.2, -0.18, -0.2, -0.2, -0.18, 0.2, -0.2, 0.2,
    0.2, -0.2, 0.18, 0.2, -0.2, 0.18, -0.2, -0.2, 0.2, -0.2,

    //right face
    0.2, -0.2, 0.2, 0.2, -0.2, 0.18, 0.2, 0.2, 0.18, 0.2, 0.2, 0.2, 0.2, -0.2,
    -0.2, 0.2, -0.2, -0.18, 0.2, 0.2, -0.18, 0.2, 0.2, -0.2, 0.2, -0.2, 0.2,
    0.2, -0.2, -0.2, 0.2, -0.18, -0.2, 0.2, -0.18, 0.2, 0.2, 0.2, 0.2, 0.2,
    0.18, 0.2, 0.2, 0.18, -0.2, 0.2, 0.2, -0.2,
  ];

  // pass the positions

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // set colors

  const faceColors = [
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],

    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],

    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],

    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],

    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],

    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0, 0.0],
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

  // normal
  var normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  var vertexNormals = getVectorNormals(positions);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    // vertices: positions,
    // offset: 0,
    color: colorBuffer,
    indices: indexBuffer,
    normal:normalBuffer,
    type:"cube",
    center: [0,0,0],
    numVertices : 96,
  };
}
