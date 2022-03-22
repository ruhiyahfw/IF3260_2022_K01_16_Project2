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
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],

    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],

    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],

    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],

    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
    [1.0, 1.0, 1.0, 1.0],
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
    0,
    1,
    2,
    0,
    2,
    3, // front
    4,
    5,
    6,
    4,
    6,
    7, // back
    8,
    9,
    10,
    8,
    10,
    11, // top
    12,
    13,
    14,
    12,
    14,
    15, // bottom
    16,
    17,
    18,
    16,
    18,
    19, // right
    20,
    21,
    22,
    20,
    22,
    23, // left
    24,
    25,
    26,
    24,
    26,
    27,
    28,
    29,
    30,
    28,
    30,
    31,
    32,
    33,
    34,
    32,
    34,
    35,
    36,
    37,
    38,
    36,
    38,
    39,
    40,
    41,
    42,
    40,
    42,
    43,
    44,
    45,
    46,
    44,
    46,
    47,
    48,
    49,
    50,
    48,
    50,
    51,
    52,
    53,
    54,
    52,
    54,
    55,
    56,
    57,
    58,
    56,
    58,
    59,
    60,
    61,
    62,
    60,
    62,
    63,
  ];

  // send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );

  return {
    position: positionBuffer,
    // vertices: positions,
    // offset: 0,
    color: colorBuffer,
    indices: indexBuffer,
    type:"cube",
    center: [0,0,0]
  };
}
