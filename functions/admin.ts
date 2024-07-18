import { getCookieKeyValue } from './utils';

export const onRequest = async (context: {
  request: Request;
  next: () => Promise<Response>;
  env: { CFP_PASSWORD?: string };
}): Promise<Response> => {
  const { request, next, env } = context;
  const { searchParams } = new URL(request.url);
  const { error } = Object.fromEntries(searchParams);
  const cookie = request.headers.get('cookie') || '';
  const cookieKeyValue = await getCookieKeyValue(env.CFP_PASSWORD);
  if (cookie.includes(cookieKeyValue) || !env.CFP_PASSWORD) {
    // Correct hash in cookie, or no password set.
    return await next();
  } else {
    // No cookie or incorrect hash in cookie. Redirect to login.
    return Response.redirect(
      `${new URL(request.url).origin}/login` + (error === '1' ? `?error=1` : '')
    );
  }
};
