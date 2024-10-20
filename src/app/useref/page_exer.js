'use client'

import {useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { DirectionalLight } from 'three'

function RotatingBox () {
  const meshRef = useRef()

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function Scene() {
  return (
  <div>
    <Canvas>
      <ambientLight />
      <DirectionalLight position={[10,10,10]} />
      <RotatingBox />
    </Canvas>
  </div>
  )
}
















