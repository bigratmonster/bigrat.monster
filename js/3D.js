// Main three.js library
import * as THREE from 'three';
// Addons for three.js (fps monitor, camera controls, model loader)
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Uncomment appendChild function call to get fps monitor (click the monitor to find other monitors)
const stats = new Stats();
stats.showPanel(0);
// document.body.appendChild(stats.dom);

// Create the WEBGL renderer with proper sizing
const renderer = new THREE.WebGLRenderer({});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// Add renderer to the webpage
document.body.appendChild(renderer.domElement);

// Create the 3D scene
const scene = new THREE.Scene();

// Create the camera (first value is the FOV)
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 999999);

// Start the camera a quarter of the way around to get full bigrat profile
const initialAngle = Math.PI / 2;
const radius = 50;
camera.position.set(radius * Math.sin(initialAngle), 10, radius * Math.cos(initialAngle));
camera.lookAt(new THREE.Vector3(-20, 0, 0));

// Initialize the camera controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.maxDistance = 500

// Create a grid for the scene, uncomment for position / rotation debugging
// const gridHelper = new THREE.GridHelper(1000, 50);
// scene.add(gridHelper);

// Scale modifier for the model
const ratScale = 75;

// Load GLTF model
const loader = new GLTFLoader();
loader.load(
    '../media/bigrat_model/scene.gltf',
    (gltf) => {
        const model = gltf.scene;

        // Scale the model according to ratScale
        model.scale.set(ratScale, ratScale, ratScale);

        // The model is slightly off center and rotated, so this reverts that
        model.position.set(-20, 0, 0);
        model.rotation.z = -0.25;

        // Add the model to the scene
        scene.add(model);
        console.log('Bigrat loaded successfully!');
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded...');
    },
    (error) => {
        console.error('Bigrat failed to load :(', error);
    }
);

// Create ambient lighting
const ambientLight = new THREE.AmbientLight(0x404040, 100);
scene.add(ambientLight);

// Add event listeners to detect user interaction
let isUserInteracting = false;
controls.addEventListener('start', () => {
    isUserInteracting = true;
});

// Main animation loop
let clock = new THREE.Clock();
function animate() {
    // Begin performance profiling
    stats.begin();

    // Tell the browser you want to animate
    requestAnimationFrame(animate);

    // Initial rotation of camera around bigrat, stops when user interacts
    if (!isUserInteracting) {
        let delta = clock.getDelta();
        let angularSpeed = 0.5; // Radians per second
        let angle = initialAngle + angularSpeed * clock.getElapsedTime();

        camera.position.x = radius * Math.sin(angle);
        camera.position.z = radius * Math.cos(angle);
        camera.lookAt(new THREE.Vector3(-20, 0, 0));
    }

    // Update camera position based on user controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);

    // End performance profiling
    stats.end();
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
