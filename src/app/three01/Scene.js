import React from 'react';
import {Box} from './Box';

const Scene = ({ width, height, depth, color }) => {
  return (
    <>
      <ambientLight intensity={0.3} />
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
        position={[-5, 10, -5]} 
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

export default Scene;
