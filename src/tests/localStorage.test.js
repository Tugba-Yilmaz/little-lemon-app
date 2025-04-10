import { describe, test, expect, vi } from "vitest";

describe("LocalStorage - write test", () => {
  test("writes reservation data to localStorage", () => {
    const mockData = {
      date: "2025-04-10",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    };

    // clear & write
    localStorage.clear();
    localStorage.setItem("reservations", JSON.stringify([mockData]));

    const result = JSON.parse(localStorage.getItem("reservations"));
    expect(result).toEqual([mockData]);
  });
});
describe("LocalStorage - read test", () => {
  test("reads reservation data from localStorage", () => {
    const mockData = {
      date: "2025-04-11",
      time: "21:00",
      guests: 3,
      occasion: "Anniversary",
    };

    localStorage.setItem("reservations", JSON.stringify([mockData]));

    const readData = JSON.parse(localStorage.getItem("reservations"));
    expect(readData[0].time).toBe("21:00");
    expect(readData[0].guests).toBe(3);
  });
});
