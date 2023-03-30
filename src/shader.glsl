struct myStruct {
  float x;
  float y;
};

attribute vec3 position; // Getting from JS, defined in Vertex shaders, Geometry
uniform mat4 projectionMatrix; // Getting from JS too, but in material
uniform mat4 modelViewMatrix;


void main() {
  float myVal = 1.0;
  vec3 vec = vec3(1, 1, 1);
  int a = 1;
  myStruct aa = myStruct(1.0, 1.0);
  aa.x = 7.9;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
