var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

var renderer = new THREE.WebGLRenderer({antialias: true, shadowMap: true});

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 200, 200, 200);
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
var cubes = [];

for (var i = 0; i < 5; i++) {
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.set(i * 500, i, i);
  cubes.push(cube);
}

camera.position.z = 200;

function render() {
  requestAnimationFrame( render );

  for (var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    if (i % 2 === 0) {
      cube.rotation.x += 0.01;
      cube.position.x += -5;
    } else {
      cube.rotation.x += 0.05;
      cube.position.x += 1;
    }
    cube.rotation.y += 0.01;
    cube.position.y += -1;
    cube.position.z += -2;
  }


  camera.position.z += 15;
  renderer.render( scene, camera );
}
render();
