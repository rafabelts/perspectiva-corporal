/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 Hombre-9.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Man9(props) {
  const { nodes, materials } = useGLTF("/Hombre-9.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cuerpo_Masculino_9.geometry}
        material={materials["initialShadingGroup.010"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Hombre-9.glb");