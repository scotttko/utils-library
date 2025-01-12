import { compactNumber } from "../compactNumber";

describe("compactNumber", () => {
  test("should format numbers in the trillions (T)", () => {
    expect(compactNumber(1e12)).toBe("1T");
    expect(compactNumber(1.5e12)).toBe("1.5T");
    expect(compactNumber(1234567890123)).toBe("1.2T");
  });

  test("should format numbers in the billions (B)", () => {
    expect(compactNumber(1e9)).toBe("1B");
    expect(compactNumber(2.3e9)).toBe("2.3B");
    expect(compactNumber(9876543210)).toBe("9.9B");
  });

  test("should format numbers in the millions (M)", () => {
    expect(compactNumber(1e6)).toBe("1M");
    expect(compactNumber(7.89e6)).toBe("7.9M");
    expect(compactNumber(1234567)).toBe("1.2M");
  });

  test("should format numbers in the thousands (K)", () => {
    expect(compactNumber(1000)).toBe("1K");
    expect(compactNumber(2345)).toBe("2.3K");
    expect(compactNumber(999)).toBe("999");
  });

  test("should handle numbers below 1000", () => {
    expect(compactNumber(999)).toBe("999");
    expect(compactNumber(42)).toBe("42");
    expect(compactNumber(0)).toBe("0");
  });

  test("should handle invalid inputs gracefully", () => {
    expect(compactNumber("not a number")).toBe("NaN");
  });

  test("should handle string inputs correctly", () => {
    expect(compactNumber("1000")).toBe("1K");
    expect(compactNumber("12345678")).toBe("12.3M");
    expect(compactNumber("123")).toBe("123");
  });
});
