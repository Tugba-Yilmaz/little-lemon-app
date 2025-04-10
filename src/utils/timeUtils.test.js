/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { initializeTimes, updateTimes } from "../utils/timeUtils";

beforeEach(() => {
  // fetchAPI fonksiyonunu sahte olarak tanımlıyoruz
  window.fetchAPI = vi.fn((date) => {
    return ["17:00", "18:00", "19:00"];
  });
});

describe("initializeTimes", () => {
  it("fetchAPI çağrıldığında saatleri döndürür", () => {
    const times = initializeTimes();

    expect(window.fetchAPI).toHaveBeenCalled();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });
});

describe("updateTimes", () => {
  it("should call fetchAPI with provided date", () => {
    const action = { type: "update", date: "2025-04-10" };
    const result = updateTimes([], action);

    expect(window.fetchAPI).toHaveBeenCalledWith(new Date("2025-04-10"));
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(["17:00", "18:00", "19:00"]); // mock sonucu
  });
});
