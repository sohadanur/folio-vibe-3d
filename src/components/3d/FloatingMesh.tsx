import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingMeshProps {
  position: [number, number, number];
  delay?: number;
}

const FloatingMesh = ({ position, delay = 0 }: FloatingMeshProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial 
        color="#22d3ee" 
        metalness={0.7}
        roughness={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export default FloatingMesh;