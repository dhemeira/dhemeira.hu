import { getCookieKeyValue } from './utils';

export const onRequest = async (context: {
  request: Request;
  next: () => Promise<Response>;
  env: { CFP_USERNAME?: string; CFP_PASSWORD?: string };
}): Promise<Response> => {
  const { request, next, env } = context;
  const { searchParams } = new URL(request.url);
  const { error } = Object.fromEntries(searchParams);
  const cookie = request.headers.get('cookie') || '';
  const cookieKeyValue = await getCookieKeyValue(env.CFP_USERNAME, env.CFP_PASSWORD);
  if (cookie.includes(cookieKeyValue) || !env.CFP_PASSWORD || !env.CFP_USERNAME) {
    // Correct hash in cookie, or no password set.
    return await next();
  } else {
    // No cookie or incorrect hash in cookie. Redirect to login.
    return new Response('', {
      status: 302,
      headers: {
        'Cache-Control': 'no-cache',
        'Location': `/login${error === '1' ? `?error=1` : ''}`,
      },
    });
  }
};
