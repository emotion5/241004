"use client";

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Box = ({ width, height, depth }) => {
  return (
    <mesh>
      <boxGeometry args={[width, height, depth]} /> {/* 너비, 높이, 깊이 */}
      <meshStandardMaterial color="blue" /> {/* 파란색 재질 */}
    </mesh>
  );
};

const Scene = ({ width, height, depth }) => {
  return (
    <>
      <ambientLight /> {/* 주변광 */}
      <pointLight position={[10, 10, 10]} /> {/* 포인트 광원 */}
      <Box width={width} height={height} depth={depth} /> {/* 박스 컴포넌트 */}
    </>
  );
};

const App = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [depth, setDepth] = useState(1);

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
      </div>
      <Canvas style={{ width: '100%', height: '100vh' }}> {/* 전체 화면 높이 설정 */}
        <Scene width={width} height={height} depth={depth} /> {/* 씬 컴포넌트 */}
        <OrbitControls /> {/* 카메라 조작을 위한 컨트롤 */}
      </Canvas>
    </div>
  );
};

export default App;
