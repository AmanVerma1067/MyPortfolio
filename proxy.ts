import { createMiddleware } from '@frontman-ai/nextjs';
import { NextRequest, NextResponse } from 'next/server';

const frontman = createMiddleware({
  host: 'api.frontman.sh',
});

export async function proxy(req: NextRequest): Promise<NextResponse> {
  const response = await frontman(req);
  if (response) return response;
  return NextResponse.next();
}

export const config = {
  matcher: ['/frontman', '/frontman/:path*', '/:path*/frontman', '/:path*/frontman/'],
};
