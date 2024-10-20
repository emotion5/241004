import React from 'react';

const Box = ({ width, height, depth, color }) => {
  return (
    <mesh castShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export { Box };
