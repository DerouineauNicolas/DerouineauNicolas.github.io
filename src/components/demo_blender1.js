import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';
import '../index.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'))

const closebuttonStyle = {
  textAlign: "right",
};

const Demo = () => {

  const mountRef = useRef(null);

  useEffect(() => {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    const currentMount = mountRef.current;
    currentMount.appendChild(renderer.domElement);

    var controls = new OrbitControls(camera, renderer.domElement);
    controls.maxDistance = 80;

    camera.position.z = 1;
    camera.position.y = 22;
    camera.position.x = 29;
    controls.update();

    // Instantiate a loader
    var loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      '/demo/Test.glb',
      // called when the resource is loaded
      function (gltf) {
        var model = gltf.scene;

        scene.add(model);
      },
      // called while loading is progressing
      function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

      },
      // called when loading has errors
      function (error) {

        console.log('An error happened');
        console.log(error);

      }
      );

    var light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    const color = 0xFFFFFF;
    const intensity = 1;

    const light2 = new THREE.DirectionalLight(color, intensity);
    light2.position.set(0, 10, 50);
    light2.target.position.set(0, 0, 0);
    scene.add(light2);
    scene.add(light2.target);


    var animate = function () {
      requestAnimationFrame(animate);
      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      console.log(camera.position);
    }

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize, false);

    animate();

    return () => currentMount.removeChild(renderer.domElement);
  }, []);

  return (
    <div ref={mountRef}>

    </div>
  );
}

export default function BlenderDemo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const div3Dref = React.useRef(null);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        type="button"
        className="btn-card btn-card-primary"
        onClick={openModal}
        style={{ border: "none", cursor: "pointer" }}
      >
        <i className="fa fa-cube"></i> Launch 3D Scene
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Demo GLB"
        id="theIdHere"
      >
        <button style={closebuttonStyle} onClick={closeModal}>Close</button>
        <div ref={div3Dref} id="canvas"></div>
        <Demo />
      </Modal>
    </div>
  );
}