import * as THREE from 'https://threejs.org/build/three.module.js';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//Bigrat cubes

const material = new THREE.TextureLoader().load('images/bigrat.png');

function bigratCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const cube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: material }));

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  cube.position.set(x, y, z);
  scene.add(cube);
}

Array(200).fill().forEach(bigratCube);

//Move controls

function animate() {
  requestAnimationFrame(animate);

  document.addEventListener('keydown', onDocumentKeyDown, false);
  function onDocumentKeyDown(event) {
    var moveamountpos = 0.004;
    var moveamountrot = 0.0002;
    event = event || window.event;
    var keycode = event.keyCode;
    switch (keycode) {
      case 65:
        camera.position.x = camera.position.x - moveamountpos;
        break;
      case 87:
        camera.position.z = camera.position.z - moveamountpos;
        break;
      case 68:
        camera.position.x = camera.position.x + moveamountpos;
        break;
      case 83:
        camera.position.z = camera.position.z + moveamountpos;
        break;

      case 37:
        camera.rotation.y = camera.rotation.y + moveamountrot;
        break;
      case 38:
        camera.rotation.x = camera.rotation.x + moveamountrot;
        break;
      case 39:
        camera.rotation.y = camera.rotation.y - moveamountrot;
        break;
      case 40:
        camera.rotation.x = camera.rotation.x - moveamountrot;
        break;

      case 69:
        camera.position.y = camera.position.y + moveamountpos;
        break;
      case 81:
        camera.position.y = camera.position.y - moveamountpos;
        break;

    }
    document.addEventListener('keyup', onDocumentKeyUp, false);
  }
  function onDocumentKeyUp(event) {
    document.removeEventListener('keydown', onDocumentKeyDown, false);
  }

  renderer.render(scene, camera);
}

animate();
