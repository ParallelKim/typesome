import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Body, Key } from "./components/models";
import { Suspense, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { KEYS, SIZE } from "./constants";

function App() {
  const KEYSPACE = SIZE.KEY.SMALL + SIZE.SPACE;

  const [lang, setLang] = useState("en");
  const [viewControll, setViewControll] = useState(true);
  const [current, setCurrent] = useState();

  return (
    <div id="canvas">
      <Canvas>
        <pointLight position={[100, 100, 100]} />
        <Suspense fallback={null}>
          <mesh>
            <Body />
            <group key="keys">
              {["a", "b", "c", "d", "e"].map((el, idx) => {
                return <Key position={[idx * KEYSPACE, 0, 0]} text={el} key={el} />;
              })}
            </group>
          </mesh>
          {viewControll && <OrbitControls />}
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
