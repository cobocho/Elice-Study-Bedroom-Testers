function $(selector) {
  return document.querySelector(selector);
}

function getRandom(min, max, digit) {
  return (Math.random() * (max - min) + min).toFixed(digit);
}

export { $, getRandom };
