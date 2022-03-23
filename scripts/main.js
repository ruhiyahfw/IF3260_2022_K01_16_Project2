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
    attribute vec3 aVertexNormal;
    attribute vec4 aVertexColor;

    uniform mat4 uNormalMatrix;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;
    varying highp vec3 vLighting;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;

      // Apply lighting effect
      highp vec3 ambientLight = vec3(0.5, 0.5, 0.5);
      highp vec3 directionalLightColor = vec3(1, 1, 1);
      highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));

      highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

      highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
      vLighting = ambientLight + (directionalLightColor * directional);
    }
  `;
  // fragment shader
  const fsSource = `
    varying lowp vec4 vColor;
    varying highp vec3 vLighting;

    uniform bool uShading;

    void main(void) {
      if (uShading){
        gl_FragColor = vec4(vColor.rgb * vLighting, vColor.a);
      }
      else{
        gl_FragColor = vColor;
      }
    }
  `;

  // init shader
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // info for shader
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
      vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
    },
    uniformLocations: {
      normalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
      projectionMatrix: gl.getUniformLocation(shaderProgram,"uProjectionMatrix"),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
      shadingBool: gl.getUniformLocation(shaderProgram, 'uShading'),
    },
  };

  // buffers
  buffers["pyramid"] = initBuffersPyramid(gl);
  buffers["cube"] = initBuffersCube(gl);
  buffers["triangularprism"] = initBuffersTriangularPrism(gl);
  console.log(buffers);

  // draw the scene
  function render() {
    // clear canvas
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    drawScene(gl, programInfo, buffers["pyramid"]);
    drawScene(gl, programInfo, buffers["cube"]);
    drawScene(gl, programInfo, buffers["triangularprism"]);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
  
}
