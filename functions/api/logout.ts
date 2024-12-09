import { CFP_COOKIE_KEY } from '../constants';

export const onRequest = () => {
  return new Response('', {
    status: 302,
    headers: {
      'Set-Cookie': `${CFP_COOKIE_KEY}=; Max-Age=0; Path=/; HttpOnly; Secure`,
      'Cache-Control': 'no-cache',
      'Location': '/login',
    },
  });
};
