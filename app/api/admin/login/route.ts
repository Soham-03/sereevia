import { NextRequest, NextResponse } from 'next/server';
import { isValidAdmin, ADMIN_COOKIE } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!isValidAdmin(username, password)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, 'authenticated', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });

  return response;
}