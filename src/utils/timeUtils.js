// src/utils/timeUtils.js

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  // Şimdilik hep aynı listeyi döndür, ileride date'e göre güncelleme yapılabilir
  return initializeTimes();
};
