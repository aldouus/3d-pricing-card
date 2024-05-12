"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, OrthographicCamera } from "@react-three/drei";

const Model = ({ play, path }) => {

  const { nodes } = useGLTF('/models/banana.glb');

  return (
    <Canvas className="bg-none">
      <Suspense>
        <group dispose={null} scale={7} rotation={[0, 45, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geometry_0.geometry}
            material={nodes.geometry_0.material}
          />
          <directionalLight intensity={7} color="orange" position={[0, 1, 0]} castShadow />
          <ambientLight intensity={5} />
          <OrbitControls autoRotate={play} autoRotateSpeed={2} enablePan={false} enableZoom={false} enableRotate={true} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        </group>
        <OrthographicCamera
          makeDefault
          zoom={45}
          position={[0, 0, 3]}
        />
      </Suspense>
    </Canvas>
  )
}

export default Model;