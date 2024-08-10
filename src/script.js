import * as THREE from 'three'

var canvas = document.querySelector('canvas.webgl');
var scene = new THREE.Scene();

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 'red'});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

var sizes = {
	width: 800,
	height: 600
};

var camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

var renderer = new THREE.WebGLRenderer({
	canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);