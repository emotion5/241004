'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box({ position }) {
  // useRef 훅을 사용하여 mesh 객체에 대한 참조를 생성
  // 이 참조를 통해 직접 mesh의 속성을 조작할 수 있음
  const meshRef = useRef()

  // useFrame 훅을 사용하여 애니메이션 로직을 정의
  // 이 훅은 매 프레임마다 호출되며, 현재 상태와 경과 시간(delta)를 매개변수로 받음
  useFrame((state, delta) => {
    // meshRef.current를 통해 mesh 객체에 접근
    // delta를 이용해 회전 속도를 조절하여 부드러운 애니메이션 구현
    meshRef.current.rotation.x += delta  // x축 기준 회전
    meshRef.current.rotation.y += delta * 0.5  // y축 기준 회전 (x축 회전의 절반 속도)
  })

  return (
    // ref 속성에 meshRef를 할당하여 Three.js의 mesh 객체와 연결
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <Box position={[0, 0, 0]} />
    </>
  )
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <directionalLight position={[-10, 10, 10]} />
    </>
  )
}

export default function ThreeDemoPage() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <Scene />
        <Lights />
        <OrbitControls />
      </Canvas>
    </div>
  )
}