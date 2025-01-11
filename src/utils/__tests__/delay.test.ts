import { delay } from "../delay";

describe("delay", () => {
  it("should resolve after the specified time", async () => {
    const startTime = Date.now();
    await delay(1000); // 1 second delay
    const elapsedTime = Date.now() - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(1000);
    expect(elapsedTime).toBeLessThan(1100);
  });
});
