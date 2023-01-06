import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Environment, Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { Body } from "./components/models";
import { Keyboard, OverlayUI, Paper } from "./components/groups";
import { SoundManager } from "./components/managers";

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
        <pointLight position={[100, 100, 100]} />
        <Suspense fallback={null}>
          <mesh key="Typewriter">
            <Body />
            <Keyboard />
            <Paper />
          </mesh>
          <OrbitControls target={[0, 50, 25]} makeDefault={orbitView} enablePan={orbitView} enableZoom={orbitView} enableRotate={orbitView} />
          <PerspectiveCamera position={[0, 100, 100]} fov={50} makeDefault={!orbitView} />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
      <OverlayUI orbitView={orbitView} setOrbitView={setOrbitView} />
    </div>
  );
}

export default App;
