import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";

const Model3D = ({ model, scale }) => {
  function FetchModel() {
    const { scene } = useGLTF("/earth.glb");
    return <primitive object={scene} scale={1} />
  }

  useEffect(() => {}, [scale]);

  return (
    <Canvas style={{ height: "1000px", width: "700px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 10]} intensity={1} />
      <pointLight position={[5, 5, 5]} />
      <FetchModel />
      <OrbitControls />
    </Canvas>
  );
};

export default Model3D;
