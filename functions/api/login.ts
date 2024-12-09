import { CFP_COOKIE_MAX_AGE } from '../constants';
import { sha256, getCookieKeyValue } from '../utils';

export const onRequestPost = async (context: {
  request: Request;
  env: { CFP_USERNAME?: string; CFP_PASSWORD?: string };
}): Promise<Response> => {
  const { request, env } = context;
  const body = await request.formData();
  const { password, username } = Object.fromEntries(body);
  const hashedPassword = await sha256(password.toString());
  const hashedCfpPassword = await sha256(env.CFP_PASSWORD);
  const hashedUsername = await sha256(username.toString());
  const hashedCfpUsername = await sha256(env.CFP_USERNAME);

  if (hashedPassword === hashedCfpPassword && hashedUsername === hashedCfpUsername) {
    const cookieKeyValue = await getCookieKeyValue(env.CFP_USERNAME, env.CFP_PASSWORD);

    return new Response('', {
      status: 302,
      headers: {
        'Set-Cookie': `${cookieKeyValue}; Max-Age=${CFP_COOKIE_MAX_AGE}; Path=/; HttpOnly; Secure`,
        'Cache-Control': 'no-cache',
        'Location': '/admin',
      },
    });
  } else {
    // Invalid password. Redirect to login page with error.
    return new Response('', {
      status: 302,
      headers: {
        'Cache-Control': 'no-cache',
        'Location': `/login?error=1`,
      },
    });
  }
};
