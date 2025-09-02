import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import FloatingMesh from './FloatingMesh';

interface Scene3DProps {
  className?: string;
  meshCount?: number;
  enableControls?: boolean;
  sizeRange?: [number, number];
}

const Scene3D = ({ className = '', meshCount = 12, enableControls = true, sizeRange = [0.6, 1] }: Scene3DProps) => {
  return (
    <div className={`scene-3d ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          {Array.from({ length: meshCount }).map((_, i) => {
            const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
            // Create more scattered positioning for better spread
            const spread = meshCount <= 8 ? 12 : 8;
            return (
              <FloatingMesh 
                key={i} 
                position={[
                  (Math.random() - 0.5) * spread,
                  (Math.random() - 0.5) * (spread * 0.75), 
                  (Math.random() - 0.5) * spread
                ]}
                delay={i * 1.2}
                size={size}
              />
            );
          })}
          
          {enableControls && (
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
