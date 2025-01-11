import { removeTrailingZero } from "../removeTrailingZero";

describe("removeTrailingZero", () => {
  it("should remove trailing zeros from decimal numbers", () => {
    expect(removeTrailingZero("123.4500")).toBe("123.45");
    expect(removeTrailingZero(123.45)).toBe("123.45");
    expect(removeTrailingZero("0.000")).toBe("0");
    expect(removeTrailingZero(0.0)).toBe("0");
  });

  it("should not modify numbers without trailing zeros", () => {
    expect(removeTrailingZero("123.45")).toBe("123.45");
    expect(removeTrailingZero(123.45)).toBe("123.45");
    expect(removeTrailingZero("100")).toBe("100");
    expect(removeTrailingZero(100)).toBe("100");
  });

  it("should return the original input if it is not a number or does not contain a decimal point", () => {
    expect(removeTrailingZero("hello")).toBe("hello");
    expect(removeTrailingZero("123abc")).toBe("123abc");
    expect(removeTrailingZero("123")).toBe("123");
    expect(removeTrailingZero(123)).toBe("123");
  });

  it("should handle edge cases", () => {
    expect(removeTrailingZero("0.")).toBe("0");
    expect(removeTrailingZero(".0")).toBe("0");
    expect(removeTrailingZero("0")).toBe("0");
    expect(removeTrailingZero("")).toBe("");
  });
});
