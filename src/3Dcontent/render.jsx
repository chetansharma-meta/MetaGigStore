import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeAssetCard = ({ asset }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 200 / 150, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 250);
    canvasRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader(); // Instantiate GLTFLoader
    loader.load(
      asset,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading 3D asset:', error);
      }
    );

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
    };
  }, [asset]);

  return (
    <div className="bg-gray-100 rounded-md p-2">
      <div ref={canvasRef} />
    </div>
  );
};

export default ThreeAssetCard;
