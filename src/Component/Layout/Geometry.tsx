import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  showedMenu: string;
  parentState: string;
}

const Geometry: React.FC<Props> = ({ showedMenu, parentState }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const THREERef = useRef<{
    points: THREE.Points;
    material: THREE.PointsMaterial;
  } | null>(null);

  const targetPositionsRef = useRef<Float32Array>(new Float32Array(0));
  const particleCount = 2000;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const aspect = window.innerWidth / window.innerHeight;
    const viewSize = 10;
    const camera = new THREE.OrthographicCamera(
      -aspect * viewSize / 2,
      aspect * viewSize / 2,
      viewSize / 2,
      -viewSize / 2,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0E0E0E, 1);

    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;
      positions[index] = (Math.random() - 0.5) * 30;
      positions[index + 1] = (Math.random() - 0.5) * 30;
      positions[index + 2] = (Math.random() - 0.5) * 30;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ size: 0.05, color : '#48DAFA'});
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    THREERef.current = {
      points: particles,
      material: material
    };


    generateTargetPositions(showedMenu);

    function animate() {
      requestAnimationFrame(animate);
      updateParticles();
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.001
      renderer.render(scene, camera);
    }

    function updateParticles() {
      const posAttr = particles.geometry.attributes.position as THREE.BufferAttribute;
      const current = posAttr.array as Float32Array;
      const target = targetPositionsRef.current;

      for (let i = 0; i < particleCount * 3; i++) {
        current[i] += (target[i] - current[i]) * 0.05;
      }

      posAttr.needsUpdate = true;
    }

    animate();

    window.addEventListener("resize", () => {
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    generateTargetPositions(showedMenu);
  }, [showedMenu]);

  function generateTargetPositions(menu: string) {
    const targets = new Float32Array(particleCount * 3);;

    if (!THREERef.current) return;                      
    const material = THREERef.current.material;

    const colors = ['#FFD700','#41C7E4','#A2FD38','#EE550E','#F62F81','#07EAB2'];
    material.color.set(colors[Math.floor(Math.random() * 5)]);

    //Spehere 
    const radius = 3;
    if (menu === "home") {


      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;
        targets[index] = (Math.random() - 0.5) * 30;
        targets[index + 1] = (Math.random() - 0.5) * 30;
        targets[index + 2] = (Math.random() - 0.5) * 30;
      }

    } 
    else if (menu === "experience") {
           for (let i = 0; i < particleCount; i++) {
             const index = i * 3;
             const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
             const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
     
             targets[index] = radius * Math.sin(phi) * Math.cos(theta);
             targets[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
             targets[index + 2] = radius * Math.cos(phi);
           }
    } 
    else if (menu === "skills") {
           for (let i = 0; i < (particleCount * 10); i++) {
             const index = i * 3;
             const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
             const theta = Math.PI * (1 + Math.sqrt(10)) * (i + 0.5);
     
             targets[index] = radius * Math.sin(phi) * Math.cos(theta);
             targets[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
             targets[index + 2] = radius * Math.cos(phi);
           }

    }
    else if(menu === "project"){

        for (let i = 0; i < (particleCount * 10); i++) {
          const index = i * 3;
          const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
          const theta = Math.PI * (2 * Math.sqrt(50)) * (i + 0.5);
  
          targets[index] = radius * Math.sin(phi) * Math.cos(theta);
          targets[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
          targets[index + 2] = radius * Math.cos(phi);
        }

    } 
    else if (menu === "contact"){

      for (let i = 0; i < (particleCount * 10); i++) {
        const index = i * 3;
        const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
        const theta = Math.PI * (Math.random() * Math.sqrt(5)) * (i + 0.5);

        targets[index] = radius * Math.sin(phi) * Math.cos(theta);
        targets[index + 1] = radius * Math.sin(phi) * Math.sin(theta);
        targets[index + 2] = radius * Math.cos(phi);
      }
    }
    else {
      // Default random scatter
      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;
        targets[index] = (Math.random() - 0.5) * 5;
        targets[index + 1] = (Math.random() - 0.5) * 5;
        targets[index + 2] = (Math.random() - 0.5) * 5;
      }
    }

    targetPositionsRef.current = targets;
  }

  return <div ref={containerRef} className="mesh-geometry" />;
};

export default Geometry;
