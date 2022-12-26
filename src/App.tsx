import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Body, Key } from "./components/models";
import { Suspense, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  const [lang, setLang] = useState("en");
  const [viewControll, setViewControll] = useState(true);

  return (
    <div id="canvas">
      <Canvas>
        <pointLight position={[100, 100, 100]} />
        <Suspense fallback={null}>
          <mesh>
            <Body />
            <mesh position={[0, 20, 30]} rotation={[0, Math.PI, 0]}>
              <Key text="TEST" />
            </mesh>
          </mesh>
          {viewControll && <OrbitControls />}
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
