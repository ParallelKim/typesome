import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import { KEYS, KEY_TYPE } from "../../constants";
import { Key } from "../models";

type CHARACTER = {
  value: string;
  size: number;
  bold: boolean;
};

type CAPS_AVAILABLE = "OFF" | "ONCE" | "LOCK";

type ACTION_MAP_TYPE = {
  FUNCTION: { [key: string]: Function };
  CHAR: undefined;
  SPECIAL: undefined;
};

export const Keyboard = () => {
  //constant option
  const KEYSPACE = 5 + 2;
  const KEYHEIGHT = 2;

  //state
  //   const [lang, setLang] = useState<"EN" | "KO">("EN");
  const [caps, setCaps] = useState<CAPS_AVAILABLE>("ONCE");
  const [paper, setPaper] = useState<CHARACTER[][]>([]);
  const [currentFont, setCurrentFont] = useState<CHARACTER>({ value: "", size: 16, bold: false });
  const isShift = caps === "OFF" ? "VALUE" : "SHIFT";

  //function
  const typewrite = (value: string) => {
    console.log(value);
  };

  const newLine = () => {
    //add sound effect
    setPaper((paper) => [...paper, []]);
  };

  const SHIFT_MAP: { [key: string]: CAPS_AVAILABLE } = {
    LOCK: "LOCK",
    ONCE: "OFF",
    OFF: "ONCE",
  };

  const ACTION_MAP: ACTION_MAP_TYPE = {
    FUNCTION: {
      Tab: () => {},
      Caps: () => {
        setCaps((caps) => {
          if (caps === "LOCK") return "OFF";
          return "LOCK";
        });
        return true;
      },
      Shift: () => {
        setCaps((caps) => {
          return SHIFT_MAP[caps];
        });
        return true;
      },
      Up: () => {},
      Down: () => {},
      Back: () => {},
      Enter: newLine,
      Space: () => {},
    },
    CHAR: undefined,
    SPECIAL: undefined,
  };

  const onClick = (e: ThreeEvent<MouseEvent>, el: KEY_TYPE) => {
    e.stopPropagation();
    //add sound effect
    ACTION_MAP[el.TYPE]?.[el.VALUE]() ?? typewrite(el.VALUE); // it would show undefined for all character and make default function work
  };

  return (
    <group key="keys" position={[-4, 8, -15]} scale={0.9}>
      {KEYS.map((line, y) => {
        return (
          <group position={[-line.length * 3, -y * KEYHEIGHT, y * KEYSPACE]} key={`line-${y}`}>
            {line.map((el, x) => {
              const value = el[isShift] ?? el["VALUE"];
              return <Key key={`${x}-${value}`} text={value} position={[x * KEYSPACE, 0, 0]} onClick={(e) => onClick(e, el)} />;
            })}
          </group>
        );
      })}
    </group>
  );
};
