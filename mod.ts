"use strict";

/** Returns a boolean that determines if a number is odd (true) or even (false) */
export function isOdd(value: number): boolean {
  const num = Math.abs(value);
  if (!Number.isInteger(num)) {
    throw new TypeError("Expected an integer number");
  }
  if (!Number.isSafeInteger(num)) {
    throw new Error("Value exceeds maximum safe integer");
  }
  return (num % 2) === 1;
}
