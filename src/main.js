import * as THREE from 'three';

// 1. Scene Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1a1a1a');

// 2. Camera Setup
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);
camera.position.z = 5;

// 3. Renderer Setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Add a Simple Object (A Cube for your TTT game)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: '#ff4757' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 5. Lighting (Necessary for StandardMaterial)
const light = new THREE.DirectionalLight(0xffffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffffff, 0.5));

// 6. Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Optional: Add some rotation to see it's working
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// 7. Handle Window Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();