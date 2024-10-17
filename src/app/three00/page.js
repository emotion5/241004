"use client";

import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import * as THREE from 'three';

const Box = ({ width, height, depth, color }) => {
  return (
    <mesh castShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Scene = ({ width, height, depth, color }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
      {/* <pointLight position={[10, 10, 10]} color="white" intensity={1} castShadow /> */}
      <directionalLight 
        position={[8, 5, 5]} 
        color="white" 
        intensity={0.4} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
        shadow-camera-near={0.5} 
        shadow-camera-far={50} 
        shadow-camera-left={-10} 
        shadow-camera-right={10} 
        shadow-camera-top={10} 
        shadow-camera-bottom={-10} 
      />
      <directionalLight 
        position={[-5, 10, -5]} // 반대쪽에서 오는 조명
        color="white" 
        intensity={0.7} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
        shadow-camera-near={0.5} 
        shadow-camera-far={50} 
        shadow-camera-left={-10} 
        shadow-camera-right={10} 
        shadow-camera-top={10} 
        shadow-camera-bottom={-10} 
      />
      <Box width={width} height={height} depth={depth} color={color} />
    </>
  );
};

const App = () => {
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  const [depth, setDepth] = useState(2);
  const [color, setColor] = useState("white");

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true; // 그림자 활성화
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    camera.position.set(0, 5, 10); // 카메라 위치 설정
    camera.lookAt(0, 0, 0); // 카메라가 바라보는 방향 설정

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
    
    outlinePass.visibleEdgeColor.set('black'); // 아웃라인 색상 설정
    outlinePass.hiddenEdgeColor.set('black'); // 숨겨진 엣지 색상 설정
    outlinePass.edgeStrength = 3.0; // 아웃라인 두께 조정

    composer.addPass(renderPass);
    composer.addPass(outlinePass);

    const animate = () => {
      requestAnimationFrame(animate);
      composer.render(); // composer로 렌더링
    };

    animate();
  }, []); // 의존성 배열에 width, height, depth, color 추가

  return (
    <div>
      <div style={{ margin: '10px' }}>
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
            step="0.1"
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            step="0.1"
          />
        </label>
        <label>
          Depth:
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(parseFloat(e.target.value))}
            step="0.1"
          />
        </label>
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
      <Canvas style={{ width: '100%', height: '100vh' }}>
        <Scene width={width} height={height} depth={depth} color={color} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
