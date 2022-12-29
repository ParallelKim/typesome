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
  FUNCTION: { [key: string]: () => true };
  CHAR: undefined;
  SPECIAL: undefined;
};

export const Keyboard = () => {
  //constant options
  const KEYSPACE = 5 + 2;
  const KEYHEIGHT = 2;

  //states
  //   const [lang, setLang] = useState<"EN" | "KO">("EN"); // not implemented yet
  const [caps, setCaps] = useState<CAPS_AVAILABLE>("ONCE");
  const [line, setLine] = useState<CHARACTER[]>([]);
  const [lineWidth, setLineWidth] = useState(0);
  const [paper, setPaper] = useState<CHARACTER[][]>([]);
  const [font, setFont] = useState<CHARACTER>({ value: "", size: 16, bold: false });

  //functions
  const typewrite: (value: string, space?: number) => true = (value, space = 1) => {
    console.log(value);
    setLine([...line, { value, size: font.size, bold: font.bold }]);
    setLineWidth((lineWidth) => lineWidth + font.size * space);
    return true;
  };

  const newLine: () => true = () => {
    //add sound effect
    setPaper((paper) => [...paper, line]);
    setLine([]);
    return true;
  };

  const changeFontSize: (change: number) => true = (change) => {
    if (font.size <= 8) return true;
    if (font.size >= 30) return true;
    setFont((font) => ({ ...font, size: font.size + change }));
    return true;
  };

  const SHIFT_MAP: { [key: string]: CAPS_AVAILABLE } = {
    LOCK: "LOCK",
    ONCE: "OFF",
    OFF: "ONCE",
  };

  const ACTION_MAP: ACTION_MAP_TYPE = {
    FUNCTION: {
      Tab: () => typewrite("    ", 4),
      Caps: () => {
        setCaps(() => {
          if (caps === "LOCK") return "OFF";
          return "LOCK";
        });
        return true;
      },
      Shift: () => {
        setCaps(SHIFT_MAP[caps]);
        return true;
      },
      Up: () => changeFontSize(+2),
      Down: () => changeFontSize(-2),
      Back: () => {
        if (line.length === 0) return true;
        const temp = [...line];
        temp[temp.length - 1].value = "OVERWROTE";
        setLine(temp);
        return true;
      },
      Enter: newLine,
      Space: () => typewrite(" "),
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
              const value = el[caps === "OFF" ? "VALUE" : "SHIFT"] ?? el["VALUE"];
              return <Key key={`${x}-${value}`} text={value} position={[x * KEYSPACE, 0, 0]} onClick={(e) => onClick(e, el)} />;
            })}
          </group>
        );
      })}
    </group>
  );
};
