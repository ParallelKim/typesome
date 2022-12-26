import { useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function Key({ text }: { text?: string }) {
  const materials = useLoader(MTLLoader, "materials/Typewriter_Key.mtl");
  const obj = useLoader(OBJLoader, "models/Typewriter_Key.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return (
    <primitive object={obj} scale={2.5}>
      <Text>{text ?? ""}</Text>
    </primitive>
  );
}
