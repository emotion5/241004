'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function RotatingBox() {
  // mesh 객체에 대한 참조 생성
  const meshRef = useRef()

  // 매 프레임마다 실행되는 함수
  useFrame((state, delta) => {
    // meshRef를 통해 mesh 객체에 접근하여 회전 적용
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Scene() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RotatingBox />
      </Canvas>
    </div>
  )
}