import { ThreeEvent, useLoader, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useMemo, useRef } from "react";
import { sum3lengthArray } from "../../utils";
import { PSEUDO_VECTOR3 } from "../../types";

interface KeyProps {
  text: string;
  position: PSEUDO_VECTOR3;
  onClick?: (e: ThreeEvent<MouseEvent>) => void;
}

const Key = ({ text = "", position = [0, 0, 0], onClick }: KeyProps) => {
  //constant option
  const KEY_SIZE = 5;
  const meshOrigin: PSEUDO_VECTOR3 = [0, 20, 30];
  const meshRotation: PSEUDO_VECTOR3 = [0, Math.PI, 0];
  const textOrigin: PSEUDO_VECTOR3 = [0, 0.25, 0.4];
  const textRotation: PSEUDO_VECTOR3 = [Math.PI * 0.5, Math.PI, 0];
  const textScale: PSEUDO_VECTOR3 = [10, 10, 10];

  //state

  //load model and make instance
  const materials = useLoader(MTLLoader, "materials/Typewriter_Key.mtl");
  const obj = useLoader(OBJLoader, "models/Typewriter_Key.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const instance = useMemo(() => obj.clone(), [obj]);

  return (
    <mesh position={sum3lengthArray(meshOrigin, position)} rotation={meshRotation} onClick={onClick}>
      <primitive object={instance} scale={KEY_SIZE / 2} roatation={[0, 0, 0]}>
        <Text position={textOrigin} scale={textScale} rotation={textRotation} color={"black"} anchorX="center" anchorY="top">
          {text}
        </Text>
      </primitive>
    </mesh>
  );
};

export default Key;
