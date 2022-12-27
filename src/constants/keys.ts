type KEY = {
  TYPE: "FUNCTION" | "SPECIAL" | "CHAR";
  VALUE: string;
  SHIFT?: string;
};

const KEYS: KEY[][] = [
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

export default KEYS;

// 2nd Draft
// const KEYS: KEY[][] = [
//   [
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "`", SHIFT: "~" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "1", SHIFT: "!" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "2", SHIFT: "@" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "3", SHIFT: "#" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "4", SHIFT: "$" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "5", SHIFT: "%" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "6", SHIFT: "^" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "7", SHIFT: "&" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "8", SHIFT: "*" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "9", SHIFT: "(" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "0", SHIFT: ")" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "-", SHIFT: "_" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "=", SHIFT: "+" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Back", SHIFT: "Back" } },
//   ],
//   [
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Tab" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅂ", SHIFT: "ㅃ" }, EN: { DEFAULT: "q", SHIFT: "Q" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅈ", SHIFT: "ㅉ" }, EN: { DEFAULT: "w", SHIFT: "W" } },
//     { type: "CHAR", KO: { DEFAULT: "ㄷ", SHIFT: "ㄸ" }, EN: { DEFAULT: "e", SHIFT: "E" } },
//     { type: "CHAR", KO: { DEFAULT: "ㄱ", SHIFT: "ㄲ" }, EN: { DEFAULT: "r", SHIFT: "R" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅅ", SHIFT: "ㅆ" }, EN: { DEFAULT: "t", SHIFT: "T" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅛ" }, EN: { DEFAULT: "y", SHIFT: "Y" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅕ" }, EN: { DEFAULT: "u", SHIFT: "U" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅑ" }, EN: { DEFAULT: "i", SHIFT: "I" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅐ", SHIFT: "ㅒ" }, EN: { DEFAULT: "o", SHIFT: "O" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅔ", SHIFT: "ㅖ" }, EN: { DEFAULT: "p", SHIFT: "P" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "[", SHIFT: "{" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "]", SHIFT: "}" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "\\", SHIFT: "|" } },
//   ],
//   [
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Caps" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅁ" }, EN: { DEFAULT: "a", SHIFT: "A" } },
//     { type: "CHAR", KO: { DEFAULT: "ㄴ" }, EN: { DEFAULT: "s", SHIFT: "S" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅇ" }, EN: { DEFAULT: "d", SHIFT: "D" } },
//     { type: "CHAR", KO: { DEFAULT: "ㄹ" }, EN: { DEFAULT: "f", SHIFT: "F" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅎ" }, EN: { DEFAULT: "g", SHIFT: "G" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅗ" }, EN: { DEFAULT: "h", SHIFT: "H" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅓ" }, EN: { DEFAULT: "j", SHIFT: "J" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅏ" }, EN: { DEFAULT: "k", SHIFT: "K" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅣ" }, EN: { DEFAULT: "l", SHIFT: "L" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: ";", SHIFT: ":" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "'", SHIFT: '"' } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Enter" } },
//   ],
//   [
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Shift" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅋ" }, EN: { DEFAULT: "z", SHIFT: "Z" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅌ" }, EN: { DEFAULT: "x", SHIFT: "X" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅊ" }, EN: { DEFAULT: "c", SHIFT: "C" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅍ" }, EN: { DEFAULT: "v", SHIFT: "V" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅠ" }, EN: { DEFAULT: "b", SHIFT: "B" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅜ" }, EN: { DEFAULT: "n", SHIFT: "N" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅡ" }, EN: { DEFAULT: "m", SHIFT: "M" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: ",", SHIFT: "<" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: ".", SHIFT: ">" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "/", SHIFT: "?" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Shift" } },
//   ],
//   [
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Up" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Down" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Space" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Lang" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Bold" } },
//   ],
// ];
