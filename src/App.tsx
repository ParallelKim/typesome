import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import "./App.css";

import { Keyboard, OverlayUI, Paper } from "./components/groups";
import { SoundManager } from "./components/managers";
import { Body } from "./components/models";

function App() {
  const [orbitView, setOrbitView] = useState(true);

  return (
    <div id="page">
      <SoundManager />
      <Canvas
        camera={{
          position: [0, 50, 100],
          fov: 75,
        }}
      >
        <group key="lights">
          <pointLight position={[0, 100, 0]} intensity={5} />
          <pointLight position={[100, 25, 0]} intensity={3} />
          <pointLight position={[-100, 25, 0]} intensity={3} />
        </group>
        <Suspense fallback={null}>
          <mesh key="Typewriter">
            <Body />
            <Keyboard />
            <Paper />
          </mesh>
          <OrbitControls
            target={[0, 50, 25]}
            makeDefault={orbitView}
            enablePan={orbitView}
            enableZoom={orbitView}
            enableRotate={orbitView}
          />
          <PerspectiveCamera
            position={[0, 100, 100]}
            fov={75}
            makeDefault={!orbitView}
            getObjectByProperty={undefined}
          />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
      <OverlayUI orbitView={orbitView} setOrbitView={setOrbitView} />
    </div>
  );
}

export default App;
