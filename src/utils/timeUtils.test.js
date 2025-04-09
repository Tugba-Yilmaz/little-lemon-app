/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { initializeTimes, updateTimes } from "./timeUtils";

describe("initializeTimes", () => {
  it("should return the initial time slots", () => {
    const times = initializeTimes();
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});

describe("updateTimes", () => {
  it("should return the same time slots regardless of date", () => {
    const initialState = initializeTimes();
    const action = { type: "update", date: "2025-04-10" };

    const updated = updateTimes(initialState, action);
    expect(updated).toEqual(initialState);
  });
});
