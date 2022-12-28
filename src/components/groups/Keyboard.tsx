import { useState } from "react";
import { KEYS, KEY_TYPE } from "../../constants";
import { Key } from "../models";

type CHARACTER = {
  value: string;
  size: number;
  bold: boolean;
};

type ACTION_MAP_TYPE = {
  FUNCTION: { [key: string]: () => void };
  CHAR: undefined;
  SPECIAL: undefined;
};

export const Keyboard = () => {
  //constant option
  const KEYSPACE = 5 + 2;
  const KEYHEIGHT = 2;

  //state
  //   const [lang, setLang] = useState<"EN" | "KO">("EN");
  const [caps, setCaps] = useState<"OFF" | "ONCE" | "LOCK">("ONCE");
  const [paper, setPaper] = useState<CHARACTER[][]>([]);
  const [currentFont, setCurrentFont] = useState<CHARACTER>({ value: "", size: 16, bold: false });
  const isShift = caps === "OFF" ? "VALUE" : "SHIFT";

  const ACTION_MAP: ACTION_MAP_TYPE = {
    FUNCTION: {
      Tab: () => {},
      Caps: () => {
        setCaps((caps) => {
          if (caps === "LOCK") return "OFF";
          return "LOCK";
        });
      },
      Shift: () => {
        console.log("SHIFT PRESSED!!!");
        setCaps((caps) => {
          if (caps === "ONCE") return "OFF";
          return "ONCE";
        });
      },
      Up: () => {},
      Down: () => {},
      Back: () => {},
      Enter: () => {},
      Space: () => {},
    },
    CHAR: undefined,
    SPECIAL: undefined,
  };
  const onClick = (el: KEY_TYPE) => {
    console.log(el, ACTION_MAP[el.TYPE]?.[el.VALUE]);
    ACTION_MAP[el.TYPE]?.[el.VALUE]() ?? // it would show undefined for all index and make default function work
      console.log(el.VALUE);
  };

  return (
    <group key="keys" position={[-4, 8, -15]} scale={0.9}>
      {KEYS.map((line, y) => {
        return (
          <group position={[-line.length * 3, -y * KEYHEIGHT, y * KEYSPACE]} key={`line-${y}`}>
            {line.map((el, x) => {
              const value = el[isShift] ?? el["VALUE"];
              return <Key key={`${x}-${value}`} text={value} position={[x * KEYSPACE, 0, 0]} onClick={(e) => onClick(el)} />;
            })}
          </group>
        );
      })}
    </group>
  );
};
