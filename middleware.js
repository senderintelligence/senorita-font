import { next } from '@vercel/functions';

export const config = {
  matcher: '/fonts/:path*',
};

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

export default function middleware(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        ...cors,
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  return next({
    headers: cors,
  });
}
