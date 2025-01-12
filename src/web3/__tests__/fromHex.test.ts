import { fromHex } from "../fromHex";

describe("fromHex", () => {
  it("should convert a hex string to BigInt", () => {
    const bigVal = fromHex("0x112210f47de98115");
    expect(bigVal).toBe(1234567890123456789n);
  });
});
