import * as THREE from 'three';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5,5,5);
scene.add(light);



const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000);

camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("html-canvas"), antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const animate = () => 
    {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };
animate();