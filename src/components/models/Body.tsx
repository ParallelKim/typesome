import { useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function Body() {
  const materials = useLoader(MTLLoader, "materials/Typewriter_Body.mtl");
  const obj = useLoader(OBJLoader, "models/Typewriter_Body.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return <primitive object={obj} scale={5} />;
}
