export type CHAR_TYPE = {
  value: string;
  size: number;
  bold: boolean;
};

export type KEY_TYPE = {
  TYPE: "FUNCTION" | "SPECIAL" | "CHAR";
  VALUE: string;
  SHIFT?: string;
};

export type PSEUDO_VECTOR3 = [number, number, number];
