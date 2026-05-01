import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Matikan proteksi sementara dengan langsung mengembalikan NextResponse.next()
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};