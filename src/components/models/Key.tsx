import { useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function Key({ text, position }: { text?: string; position?: [number, number, number] }) {
  const materials = useLoader(MTLLoader, "materials/Typewriter_Key.mtl");
  const obj = useLoader(OBJLoader, "models/Typewriter_Key.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return (
    <primitive object={obj} position={position ?? [0, 0, 0]} scale={2.5} roatation={[0, 0, 0]}>
      <Text position={[0, 0.25, 0.4]} scale={[10, 10, 10]} rotation={[Math.PI * 0.5, Math.PI, 0]} color={"black"} anchorX="center" anchorY="top">
        {text ?? ""}
      </Text>
    </primitive>
  );
}
