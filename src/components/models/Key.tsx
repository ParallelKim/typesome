import { useMemo, useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { ThreeEvent, useLoader, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

import { sum3lengthArray } from "../../utils";
import { PSEUDO_VECTOR3 } from "../../types";
import { animStore } from "../../stores";

interface KeyProps {
  text: string;
  position: PSEUDO_VECTOR3;
  onClick?: (e: ThreeEvent<MouseEvent>) => void;
}

type ANIM_STATE = "idle" | "down" | "up";

const Key = ({ text = "", position = [0, 0, 0], onClick = () => {} }: KeyProps) => {
  const KEY_SIZE = 5;
  const MESH_ORIGIN: PSEUDO_VECTOR3 = [0, 20, 30];
  const MESH_ROTATION: PSEUDO_VECTOR3 = [0, Math.PI, 0];
  const TEXT_ORIGIN: PSEUDO_VECTOR3 = [0, 0.25, 0.4];
  const TEXT_ROTATION: PSEUDO_VECTOR3 = [Math.PI * 0.5, Math.PI, 0];
  const TEXT_SCALE: PSEUDO_VECTOR3 = [10, 10, 10];

  const materials = useLoader(MTLLoader, "materials/Typewriter_Key.mtl");
  const obj = useLoader(OBJLoader, "models/Typewriter_Key.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const instance = useMemo(() => obj.clone(), [obj]);

  const mesh = useRef<Group>(null);
  const [animState, setAnimState] = useState<ANIM_STATE>("idle");
  const leftAnimationNumber = animStore((state) => state[text]);
  const { removeAnim } = animStore();
  const keyDownAnim = () => {
    if (mesh.current!.rotation.x > -Math.PI * 0.1) {
      return (mesh.current!.rotation.x -= 0.1);
    } else {
      return setAnimState("up");
    }
  };
  const keyUpAnim = () => {
    if (mesh.current!.rotation.x < 0) {
      return (mesh.current!.rotation.x += 0.1);
    } else {
      mesh.current!.rotation.x = 0;
      removeAnim(text);
      return setAnimState("idle");
    }
  };
  useFrame(() => {
    if (leftAnimationNumber > 0) {
      if (animState === "idle") return setAnimState("down");
      if (animState === "up") return keyUpAnim();
      return keyDownAnim();
    } else {
      mesh.current!.rotation.x = 0;
    }
  });

  return (
    <mesh position={sum3lengthArray(MESH_ORIGIN, position)} rotation={MESH_ROTATION} onClick={onClick}>
      <group ref={mesh} position={[0, -10, 30]}>
        <primitive object={instance} position={[0, 10, -30]} scale={KEY_SIZE / 2}>
          <Text position={TEXT_ORIGIN} rotation={TEXT_ROTATION} scale={TEXT_SCALE} color={"black"} anchorX="center" anchorY="top">
            {text}
          </Text>
        </primitive>
      </group>
    </mesh>
  );
};

export default Key;
