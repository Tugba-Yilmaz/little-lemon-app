// src/utils/timeUtils.js

export const initializeTimes = () => {
  const today = new Date();
  if (typeof window.fetchAPI === "function") {
    console.log("initializeTimes çalıştı:", today.toDateString());
    return window.fetchAPI(today);
  } else {
    console.error("fetchAPI is not defined!");
    return [];
  }
};

export const updateTimes = (state, action) => {
  if (action.type === "update") {
    const selectedDate = new Date(action.date);
    if (typeof window.fetchAPI === "function") {
      console.log("updateTimes çalıştı:", selectedDate.toDateString());
      return window.fetchAPI(selectedDate);
    } else {
      console.error("fetchAPI is not defined!");
      return state;
    }
  }

  return state;
};
