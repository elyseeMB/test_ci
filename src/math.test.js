import { describe, it, expect } from "vitest";
import { add } from "./math.js";

describe("add", () => {
  it("add tow positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
