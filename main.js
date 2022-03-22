main();
function main() {
  const canvas = document.querySelector("#glcanvas");
  const gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  // gl not supported
  if (!gl) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }
  // vertex shader
  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    varying lowp vec4 vColor;
    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;
  // fragment shader
  const fsSource = `
    varying lowp vec4 vColor;
    void main(void) {
      gl_FragColor = vColor;
    }
  `;

  // init shader
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // info for shader
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        "uProjectionMatrix"
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    },
  };

  // buffers
  const buffers1 = initBuffersPyramid(gl);
  const buffers2 = initBuffersCube(gl);
  const buffers3 = initBuffersTriangularPrism(gl);

  // draw the scene
  function render() {
    // clear canvas
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    drawScene(gl, programInfo, buffers1);
    drawScene(gl, programInfo, buffers2);
    drawScene(gl, programInfo, buffers3);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
  
}
