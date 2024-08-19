// validators.ts

import { InvalidColorError, InvalidUnitError } from "./errors";

export const colorRegex = "^#([0-9A-Fa-f]{3}){1,2}$"; // Hex color code with 3 or 6 digits
export const unitRegex = "^[0-9]*\\.?[0-9]+(px|rem|em|vw|vh|%)$"; // Allows decimal values

export const isValidCSSValue = (
  value: string,
  unitRegex: string,
  isColor = false
): boolean => {
  if (typeof value !== "string") {
    return false;
  }

  if (isColor) {
    const colorRegExp = new RegExp(colorRegex);
    if (value === "inherit" || colorRegExp.test(value)) {
      return true;
    } else {
      throw new InvalidColorError(value);
    }
  } else {
    const unitRegExp = new RegExp(unitRegex);
    if (value === "auto" || value === "initial" || unitRegExp.test(value)) {
      return true;
    } else {
      throw new InvalidUnitError(value);
    }
  }
};
