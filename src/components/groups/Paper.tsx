import { Text } from "@react-three/drei";

import { paperStore } from "../../stores";
import { DefaultText } from "../models";

const Paper = () => {
  //refactor later : set initial positions for all group
  //constant options
  const HEAD_SPACE = 20;
  const DEFAULT_HEIGHT = 40;
  const X_SPACE = 10;
  const Y_SPACE = 15;

  //stores
  const { line, paper } = paperStore();

  return (
    <group key="paper" position={[0, 70 + (paper.length * Y_SPACE) / 2, -20]}>
      <mesh>
        <boxGeometry args={[100, DEFAULT_HEIGHT + paper.length * Y_SPACE, 0.05]} />
      </mesh>
      <group key="contents" position={[-40, 5 + (paper.length * Y_SPACE) / 2, 0]}>
        <group key="prev-lines">
          {paper.map((ln, y_idx) => {
            return (
              <group key={`prev-line-${y_idx}`}>
                {ln.map((char, x_idx) => (
                  <DefaultText
                    key={`${x_idx} of ${y_idx} line`}
                    position={[x_idx * X_SPACE, -y_idx * Y_SPACE, 0.4]}
                    scale={0.5}
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
              scale={0.5}
              size={char.size}
              value={char.value}
            />
          ))}
        </group>
      </group>
    </group>
  );
};

export default Paper;
