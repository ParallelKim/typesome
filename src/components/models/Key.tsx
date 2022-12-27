import { useGraph, useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useMemo, useRef } from "react";
//

interface KeyProps {
  text?: string;
  position?: [number, number, number];
}

export default function Key({ text, position }: KeyProps) {
  //constant option
  const KEY_SIZE = 5;

  //state
  const [x, y, z] = position ?? [0, 0, 0];
  const materials = useLoader(MTLLoader, "materials/Typewriter_Key.mtl");
  const obj = useLoader(OBJLoader, "models/Typewriter_Key.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const instance = useMemo(() => obj.clone(), [obj]);

  return (
    <mesh position={[0 + x, 20 + y, 30 + z]} rotation={[0, Math.PI, 0]}>
      <primitive object={instance} scale={KEY_SIZE / 2} roatation={[0, 0, 0]}>
        <Text position={[0, 0.25, 0.4]} scale={[10, 10, 10]} rotation={[Math.PI * 0.5, Math.PI, 0]} color={"black"} anchorX="center" anchorY="top">
          {text ?? ""}
        </Text>
      </primitive>
    </mesh>
  );
}
