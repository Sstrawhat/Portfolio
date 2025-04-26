import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  showedMenu: string;
  parentState:string
}

const Geometry: React.FC<Props> = ({ showedMenu, parentState}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const showedMenuRef = useRef<string>(showedMenu); // keeps updated value

  useEffect(() => {
    showedMenuRef.current = showedMenu; 
    const container = containerRef.current;
    if (!container) return;

    console.log(showedMenuRef.current);

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
    container.appendChild(renderer.domElement);

    const particleCount = 2000;
    const radius = (showedMenuRef.current == "experience") ? 2 : 3;
    const geometry = new THREE.BufferGeometry();
    const spiralArms = 3;

    const coneHeight = 5;
    const coneRadius = 2;
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3); // RGB colors for each particle

      // Define pyramid dimensions
      const height = 4;
      const halfSize = 2; // half base width

                // Diamond dimensions
    let i = 0;
    const gridStep = 0.2;
  
      // Apex of pyramid
      const apex = new THREE.Vector3(0, height / 2, 0);

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;
      positions[index] = (Math.random() - 0.5) * 30;
      positions[index + 1] = (Math.random() - 0.5) * 30;
      positions[index + 2] = (Math.random() - 0.5) * 30;
    }
    
    if(showedMenuRef.current == "contact"){


    // Helper to fill one pyramid (upward or downward)
    const createPyramid = (direction = 1) => {
      const apexY = (height / 2) * direction;
      const centerY = 0;

      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 20) {
        for (let r = 0; r <= radius; r += 0.1) {
          for (let y = centerY; direction > 0 ? y <= apexY : y >= apexY; y += direction * 0.1) {
            if (i >= particleCount) return;

            const scale = (apexY - y) / (apexY - centerY);
            const x = r * scale * Math.cos(angle);
            const z = r * scale * Math.sin(angle);

            const index = i * 3;
            targetPositions[index] = x;
            targetPositions[index + 1] = y;
            targetPositions[index + 2] = z;

            colors[index] = 0.8 + Math.random() * 0.2;
            colors[index + 1] = 1.0;
            colors[index + 2] = 1.0;
            i++;
          }
        }
      }
    };

    // Create top and bottom pyramids
    createPyramid(1);  // Top
    createPyramid(-1); // Bottom

    }
else if(showedMenuRef.current == "project"){
  let i = 0;
  const gridStep = 0.2;

  // Base particles (XZ plane)
  for (let x = -halfSize; x <= halfSize; x += gridStep) {
    for (let z = -halfSize; z <= halfSize; z += gridStep) {
      if (i >= particleCount) break;
      const index = i * 3;
      positions[index] = x;
      positions[index + 1] = -height / 2;
      positions[index + 2] = z;

      colors[index] = 1.0;
      colors[index + 1] = 0.6;
      colors[index + 2] = 0.2;
      i++;
    }
  }

  // Side faces: 4 triangles from base edges to apex
  const corners = [
    new THREE.Vector3(-halfSize, -height / 2, -halfSize),
    new THREE.Vector3(halfSize, -height / 2, -halfSize),
    new THREE.Vector3(halfSize, -height / 2, halfSize),
    new THREE.Vector3(-halfSize, -height / 2, halfSize),
  ];

  for (let c = 0; c < 4; c++) {
    const next = (c + 1) % 4;
    const from = corners[c];
    const to = corners[next];

    for (let step = 0; step <= 1; step += 0.05) {
      for (let h = 0; h <= 1 - step; h += 0.05) {
        if (i >= particleCount) break;
        const edge1 = new THREE.Vector3().lerpVectors(from, to, step);
        const point = new THREE.Vector3().lerpVectors(edge1, apex, h);

        const index = i * 3;
        targetPositions[index] = point.x;
        targetPositions[index + 1] = point.y;
        targetPositions[index + 2] = point.z;

        colors[index] = 1.0;
        colors[index + 1] = 1.0;
        colors[index + 2] = 0.3;
        i++;
      }
    }
  }
}
else if(showedMenuRef.current == "skills"){
        // Generate particles along the cone surface
        let i = 0;
        for (let theta = 0; theta < Math.PI * 2; theta += Math.PI / 20) {
          for (let h = 0; h <= coneHeight; h += coneHeight / 20) {
            const index = i * 3;
    
            const radiusAtHeight = (coneHeight - h) / coneHeight * coneRadius; // radius decreases as we move up the cone
            const x = radiusAtHeight * Math.cos(theta);
            const y = radiusAtHeight * Math.sin(theta);
            const z = h; // height of the cone
    
            targetPositions[index] = x;
            targetPositions[index + 1] = y;
            targetPositions[index + 2] = z;
    
            // Random color for each particle
            colors[index] = Math.random() * 0.5 + 0.5;
            colors[index + 1] = Math.random() * 0.5 + 0.5;
            colors[index + 2] = Math.random() * 0.5 + 0.5;
    
            i++;
            if (i >= particleCount) break;
          }
        }
}
else if(showedMenuRef.current == "experience")       {
    for (let i = 0; i < particleCount; i++) {
        const index = i * 3;

        // Randomly assign particles to one of the 6 faces of the cube
        const face = Math.floor(Math.random() * 6);

        // Random position on the selected face
        const x = (Math.random() - 0.5) * 2 * radius;  // Random x position
        const y = (Math.random() - 0.5) * 2 * radius;  // Random y position
        const z = (Math.random() - 0.5) * 2 * radius;  // Random z position

        if (face === 0) {
          // Front face (z = radius)
          targetPositions[index + 2] = radius;
          targetPositions[index] = x;
          targetPositions[index + 1] = y;
        } else if (face === 1) {
          // Back face (z = -radius)
          targetPositions[index + 2] = -radius;
          targetPositions[index] = x;
          targetPositions[index + 1] = y;
        } else if (face === 2) {
          // Top face (y = radius)
          targetPositions[index + 1] = radius;
          targetPositions[index] = x;
          targetPositions[index + 2] = z;
        } else if (face === 3) {
          // Bottom face (y = -radius)
          targetPositions[index + 1] = -radius;
          targetPositions[index] = x;
          targetPositions[index + 2] = z;
        } else if (face === 4) {
          // Left face (x = -radius)
          targetPositions[index] = -radius;
          targetPositions[index + 1] = y;
          targetPositions[index + 2] = z;
        } else if (face === 5) {
          // Right face (x = radius)
          targetPositions[index] = radius;
          targetPositions[index + 1] = y;
          targetPositions[index + 2] = z;
        }
      }
    }else{

      for (let i = 0; i < particleCount * 10; i++) {
        const index = i * 3;
        const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
  
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
  
        targetPositions[index] = x;
        targetPositions[index + 1] = y;
        targetPositions[index + 2] = z;
      }

    }



  


    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: "#48DAFA",
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    function animate() {
      requestAnimationFrame(animate);

    setParticles();
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.001;
      renderer.render(scene, camera);
    }


    function setParticles(){
      const posAttr = geometry.getAttribute("position");
      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;
        posAttr.array[index] += (targetPositions[index] - posAttr.array[index]) * 0.02;
        posAttr.array[index + 1] += (targetPositions[index + 1] - posAttr.array[index + 1]) * 0.02;
        posAttr.array[index + 2] += (targetPositions[index + 2] - posAttr.array[index + 2]) * 0.02;
      }
      posAttr.needsUpdate = true;
    }
    
      

    animate();

    window.addEventListener("resize", () => {
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Cleanup
    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [showedMenu]);

  return <div ref={containerRef} />;
};

export default Geometry;
