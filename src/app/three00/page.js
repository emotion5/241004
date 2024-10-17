"use client";

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Box = ({ width, height, depth, color }) => {
  return (
    <mesh>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Scene = ({ width, height, depth, color }) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box width={width} height={height} depth={depth} color={color} />
    </>
  );
};

const App = () => {
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  const [depth, setDepth] = useState(2);
  const [color, setColor] = useState("white");

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
