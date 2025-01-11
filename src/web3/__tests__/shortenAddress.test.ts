import { shortenAddress } from "../../web3/shortenAddress";

describe("shortenAddress", () => {
  it("should shorten a valid Ethereum address", () => {
    const address = "0x1234567890abcdef1234567890abcdef12345678";
    const shortened = shortenAddress(address);
    expect(shortened).toBe("0x1234...5678");
  });

  it("should return the address as-is if not valid or too short", () => {
    const invalid = "0x123";
    expect(shortenAddress(invalid)).toBe("0x123");
  });
});
