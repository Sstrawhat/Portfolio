// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

// const Home = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     // Set up the scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color("#23272F");

//     // Set up the camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     // Set up the renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     container.appendChild(renderer.domElement);

//     // Set up light
//     const pointLight = new THREE.PointLight(0x00ff99, 2, 100);
//     pointLight.position.set(10, 10, 25);
//     scene.add(pointLight);

//     const light = new THREE.AmbientLight(0xffffff, 1);
//     scene.add(light);

//     //geometry
//     const loader = new FontLoader();
//     loader.load('/font/Asap_Bold.json', (font) => {
//       const geometry = new TextGeometry("Ash Fajardo", {
//         font: font,
//         size: 0.5, 
//         depth: 0.1, // Correct way to add depth (thickness)
//         bevelEnabled: true,
//         bevelThickness: 0.2,    // thinner bevel
//         bevelSize: 0.02,         // small bevel offset
//         bevelSegments: 10,  
//       });   

//       // Center the text
//       geometry.center();

//       const textMesh = new THREE.Mesh(geometry, [
//         new THREE.MeshPhongMaterial({color : 0xF6F6F6}),
//         new THREE.MeshPhongMaterial({color: 0xA4A4A4}),
//       ]);

//       textMesh.rotation.y = 0.50;
//       textMesh.rotation.x = 0.30;
//       scene.add(textMesh);

//       const animate = () => {
//         requestAnimationFrame(animate);



//         renderer.render(scene, camera);
//       };
//       animate();

//     });



//   }, []);

//   return (
//     <div>
//       <div ref={containerRef}></div>
//     </div>
//   );
// };

// export default Home;
