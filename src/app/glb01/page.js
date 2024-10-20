// App.js
'use client'
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Color } from 'three'; // Color 클래스를 추가합니다.

function Model() {
    const gltf = useLoader(GLTFLoader, '/models/cyl.glb'); // GLB 파일 경로

    useEffect(() => {
        // 메시의 색상을 빨간색으로 변경합니다.
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.color = new Color(1, 1, 0); // 빨간색
            }
        });
    }, [gltf]); // gltf가 변경될 때마다 실행

    return <primitive object={gltf.scene} />;
}

function App() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model />
            <OrbitControls />
        </Canvas>
      </div>
    );
}

export default App;
