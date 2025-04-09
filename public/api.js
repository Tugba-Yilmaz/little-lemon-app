const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];

  let seed =
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  let random = seededRandom(seed);

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  console.log("Available times loaded:", result);
  return result;
};
const submitAPI = function (formData) {
  return true;
};

window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;
