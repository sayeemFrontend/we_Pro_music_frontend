function setCookies(key, value, expired = 60 * 60 * 24 * 365) {
  const isSession = expired ?? null;
  if (isSession === null) {
    document.cookie = `${key}=${value};`;
  } else {
    const date = new Date();
    date.setTime(date.getTime() + expired * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `${key}=${value};expires=${expires};`;
  }
}

function getCookies(key) {
  let prevCookiesAsArray = [];
  if (document.cookie) {
    prevCookiesAsArray = document.cookie.split(';').map((it) => it.split('='));
  }
  const prevCookiesAsMap = new Map(prevCookiesAsArray);
  if (key) return prevCookiesAsMap.get(key);
  return prevCookiesAsMap;
}

function clearCookies(key) {
  if (key) {
    setCookies(key, '', 0);
  } else {
    const cookiesAsMap = getCookies();
    for (let [k] of cookiesAsMap) {
      setCookies(k, '', 0);
    }
  }
}
export const cookies = { setCookies, getCookies, clear: clearCookies };
