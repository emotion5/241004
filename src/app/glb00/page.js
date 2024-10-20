// App.js
'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

function Model() {
    const gltf = useLoader(GLTFLoader, '/models/cyl.glb'); // GLB 파일 경로
    return <primitive object={gltf.scene} />;
}

function App() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls />
        </Canvas>
      </div>
    );
}

export default App;