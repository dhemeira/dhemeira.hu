import { CFP_COOKIE_KEY } from './constants';

export const sha256 = async (str: string): Promise<string> => {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.prototype.map
    .call(new Uint8Array(buf), (x) => ('00' + x.toString(16)).slice(-2))
    .join('');
};

export const getCookieKeyValue = async (username?: string, password?: string): Promise<string> => {
  const hash = await sha256(`${username}${password}`);
  return `${CFP_COOKIE_KEY}=${hash}`;
};
