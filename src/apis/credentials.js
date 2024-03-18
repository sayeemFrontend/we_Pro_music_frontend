import { cookies } from './cookies';
const baseUrl = import.meta.env.MODE === 'production' ? import.meta.env.VITE_APP_BASE_URL_PROD : import.meta.env.VITE_APP_BASE_URL_DEV;
const PRIVATE_KEY = import.meta.env.VITE_APP_S_KEY;

function getTokens() {
  const token = cookies.getCookies('a_t');
  const refreshToken = cookies.getCookies('a_t');
  return { token, refreshToken };
}

function setTokens(option = {}) {
  const { token, refreshToken } = option;
  const isRemembered = localStorage.getItem('isRemembered') ? 30 * 24 * 60 * 60 : null;
  cookies.setCookies('a_t', token, isRemembered);
  cookies.setCookies('a_rt', refreshToken, isRemembered);
}

function getHeaders() {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: cookies.getCookies('m_t'),
  };
  return headers;
}

export const credentials = { baseUrl, getHeaders, getTokens, setTokens, PRIVATE_KEY };
