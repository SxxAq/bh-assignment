import { NextRequest, NextResponse } from 'next/server';
import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy = createProxyMiddleware({
  target: process.env.API_URL || 'http://localhost:8000',
  changeOrigin: true,
  pathRewrite: {
    '^/api/': '/api/', // Rewrite URL paths if needed
  },
});

export async function middleware(request: NextRequest) {
  // Apply proxy to requests matching the '/api' route
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return apiProxy(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*', // Only apply this middleware to API routes
};
