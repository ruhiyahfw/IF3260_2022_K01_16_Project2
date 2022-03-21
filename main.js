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
  const buffers = initBuffersPyramid(gl);

  // draw the scene
  function render(now) {
    drawScene(gl, programInfo, buffers);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
