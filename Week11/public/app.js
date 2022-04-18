const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const getCameraPositionZ = () => {
  if (window.innerWidth < 992) {
    return 10;
  } else if (window.innerWidth < 1400) {
    return 4.5;
  } else {
    return 3;
  }
};

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const color = 0xffffff;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

const geometry1 = new THREE.TorusGeometry(1,.5,55,100);
const material1 = new THREE.MeshPhongMaterial({color: 123413});
const toruse = new THREE.Mesh(geometry1,material1);
toruse.position.x = 5;
scene.add(toruse);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({ color: 330662 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.015;
  cube.rotation.z += 0.011;

  toruse.rotation.x += 0.01;
  toruse.rotation.y += 0.01;
  toruse.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate();

document.onmousemove = function (e) {
  var centerX = window.innerWidth * 0.5;
  var centerY = window.innerHeight * 0.5;

  camera.position.x = (centerX - e.clientX ) * 0.01;
  camera.position.y = (e.clientY - centerY) * 0.01;
};

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.position.z = getCameraPositionZ();
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
