import { getCookieKeyValue } from '../utils';

export const onRequest = async (context: {
  request: Request;
  next: () => Promise<Response>;
  env: { CFP_PASSWORD?: string; CFP_USERNAME?: string; data: KVNamespace };
}): Promise<Response> => {
  const { request, env } = context;

  const cookie = request.headers.get('cookie') || '';
  const cookieKeyValue = await getCookieKeyValue(env.CFP_USERNAME, env.CFP_PASSWORD);

  if (cookie.includes(cookieKeyValue) || !env.CFP_PASSWORD || !env.CFP_USERNAME) {
    // Correct hash in cookie, or no password set.
    const formData = await request.formData();

    const regex = new RegExp('[0-9]{4}. [0-9]{2}. [0-9]{2}.');

    const dates = await fetch(`${new URL(request.url).origin}/api/date`);
    const res = await dates.json();
    for (const [key, value] of formData.entries()) {
      if (value !== '' && regex.test(value)) {
        await env.data.put(key, value);
        res[key] = value;
      }
    }

    return new Response(JSON.stringify(res), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
      },
    });
  } else {
    // No cookie or incorrect hash in cookie.
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
  }
};
