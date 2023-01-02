import { KEY_TYPE } from "../types";

const KEY_LIST: KEY_TYPE[][] = [
  [
    { TYPE: "SPECIAL", VALUE: "`", SHIFT: "~" },
    {
      TYPE: "SPECIAL",
      VALUE: "1",
      SHIFT: "!",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "2",
      SHIFT: "@",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "3",
      SHIFT: "#",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "4",
      SHIFT: "$",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "5",
      SHIFT: "%",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "6",
      SHIFT: "^",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "7",
      SHIFT: "&",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "8",
      SHIFT: "*",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "9",
      SHIFT: "(",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "0",
      SHIFT: ")",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "-",
      SHIFT: "_",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "=",
      SHIFT: "+",
    },
    {
      TYPE: "FUNCTION",
      VALUE: "Back",
    },
  ],
  [
    {
      TYPE: "FUNCTION",
      VALUE: "Tab",
    },
    {
      TYPE: "CHAR",
      VALUE: "q",
      SHIFT: "Q",
    },
    {
      TYPE: "CHAR",
      VALUE: "w",
      SHIFT: "W",
    },
    {
      TYPE: "CHAR",
      VALUE: "e",
      SHIFT: "E",
    },
    {
      TYPE: "CHAR",
      VALUE: "r",
      SHIFT: "R",
    },
    {
      TYPE: "CHAR",
      VALUE: "t",
      SHIFT: "T",
    },
    {
      TYPE: "CHAR",
      VALUE: "y",
      SHIFT: "Y",
    },
    {
      TYPE: "CHAR",
      VALUE: "u",
      SHIFT: "U",
    },
    {
      TYPE: "CHAR",
      VALUE: "i",
      SHIFT: "I",
    },
    {
      TYPE: "CHAR",
      VALUE: "o",
      SHIFT: "O",
    },
    {
      TYPE: "CHAR",
      VALUE: "p",
      SHIFT: "P",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "[",
      SHIFT: "{",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "]",
      SHIFT: "}",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "\\",
      SHIFT: "|",
    },
  ],
  [
    {
      TYPE: "FUNCTION",
      VALUE: "Caps",
    },
    {
      TYPE: "CHAR",
      VALUE: "a",
      SHIFT: "A",
    },
    {
      TYPE: "CHAR",
      VALUE: "s",
      SHIFT: "S",
    },
    {
      TYPE: "CHAR",
      VALUE: "d",
      SHIFT: "D",
    },
    {
      TYPE: "CHAR",
      VALUE: "f",
      SHIFT: "F",
    },
    {
      TYPE: "CHAR",
      VALUE: "g",
      SHIFT: "G",
    },
    {
      TYPE: "CHAR",
      VALUE: "h",
      SHIFT: "H",
    },
    {
      TYPE: "CHAR",
      VALUE: "j",
      SHIFT: "J",
    },
    {
      TYPE: "CHAR",
      VALUE: "k",
      SHIFT: "K",
    },
    {
      TYPE: "CHAR",
      VALUE: "l",
      SHIFT: "L",
    },
    {
      TYPE: "SPECIAL",
      VALUE: ";",
      SHIFT: ":",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "'",
      SHIFT: '"',
    },
    {
      TYPE: "FUNCTION",
      VALUE: "Enter",
    },
  ],
  [
    {
      TYPE: "FUNCTION",
      VALUE: "Shift",
    },
    {
      TYPE: "CHAR",
      VALUE: "z",
      SHIFT: "Z",
    },
    {
      TYPE: "CHAR",
      VALUE: "x",
      SHIFT: "X",
    },
    {
      TYPE: "CHAR",
      VALUE: "c",
      SHIFT: "C",
    },
    {
      TYPE: "CHAR",
      VALUE: "v",
      SHIFT: "V",
    },
    {
      TYPE: "CHAR",
      VALUE: "b",
      SHIFT: "B",
    },
    {
      TYPE: "CHAR",
      VALUE: "n",
      SHIFT: "N",
    },
    {
      TYPE: "CHAR",
      VALUE: "m",
      SHIFT: "M",
    },
    {
      TYPE: "SPECIAL",
      VALUE: ",",
      SHIFT: "<",
    },
    {
      TYPE: "SPECIAL",
      VALUE: ".",
      SHIFT: ">",
    },
    {
      TYPE: "SPECIAL",
      VALUE: "/",
      SHIFT: "?",
    },
    {
      TYPE: "FUNCTION",
      VALUE: "Shift",
    },
  ],
  [
    { TYPE: "FUNCTION", VALUE: "Up" },
    { TYPE: "FUNCTION", VALUE: "Down" },
    { TYPE: "FUNCTION", VALUE: "Space" },
    // { TYPE: "FUNCTION", VALUE: "Alt" },
    { TYPE: "FUNCTION", VALUE: "Bold" },
  ],
];

export const KEY_MAP: { [key: string]: KEY_TYPE } = {};

for (const row of KEY_LIST) {
  for (const key of row) {
    KEY_MAP[key.VALUE] = key;
    KEY_MAP[key.SHIFT ?? ""] = key;
  }
}

export default KEY_LIST;
