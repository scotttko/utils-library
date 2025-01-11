import { toHex } from "../toHex";

describe("toHex", () => {
  it("should convert a number to hex string", () => {
    expect(toHex(255)).toBe("0xff");
  });

  it("should convert a BigInt to hex string", () => {
    expect(toHex(1234567890123456789n)).toBe("0x112210f47de98115");
  });
});
