import { Text } from "@react-three/drei";

import { paperStore } from "../../stores";
import { DefaultText } from "../models";

const Paper = () => {
  //refactor later : set initial positions for all group

  const DEFAULT_HEIGHT = 40;
  const X_SPACE = 10;
  const Y_SPACE = 15;

  const { line, paper } = paperStore();

  return (
    <mesh key="position" position={[34, 58, -5]} rotation={[-Math.PI * 0.1, 0, 0]} scale={[0.7, 0.7, 0.7]}>
      <group key="paper" position={[-(line.length + 1) * 9, (paper.length * Y_SPACE) / 2, -80]}>
        <mesh>
          <boxGeometry args={[100, DEFAULT_HEIGHT + paper.length * Y_SPACE, 0.05]} />
        </mesh>
        <group key="contents" position={[-40, 5 + (paper.length * Y_SPACE) / 2, 0]} scale={[0.9, 1, 0.9]}>
          <group key="prev-lines">
            {paper.map((ln, y_idx) => {
              return (
                <group key={`prev-line-${y_idx}`}>
                  {ln.map((char, x_idx) => (
                    <DefaultText
                      key={`${x_idx} of ${y_idx} line`}
                      position={[x_idx * X_SPACE, -y_idx * Y_SPACE, 0.4]}
                      scale={0.45}
                      size={char.size}
                      value={char.value}
                    />
                  ))}
                </group>
              );
            })}
          </group>
          <group key="current-line">
            {line.map((char, idx) => (
              <DefaultText
                key={`${idx} char of current line`}
                position={[idx * X_SPACE, -paper.length * Y_SPACE, 0.4]}
                scale={0.45}
                size={char.size}
                value={char.value}
              />
            ))}
          </group>
        </group>
      </group>
    </mesh>
  );
};

export default Paper;
