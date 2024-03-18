export function scrollTo(x = 0, y = 0) {
  window.scrollTo(x, y);
}

export function isMatchWith(test1, text2) {
  return test1.toLowerCase().match(text2.toLowerCase());
}