import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles authentication requests.
 * Supports dynamic routes for NextAuth.js.
 *
 * @param req - The incoming request
 * @param params - Route parameters
 */
export async function GET(req: NextRequest, { params }: { params: { nextauth: string[] } }) {
  return NextResponse.json({
    message: 'Auth handler',
    provider: params.nextauth[0],
  });
}

/**
 * Handles POST authentication requests.
 */
export async function POST(req: NextRequest) {
  return NextResponse.json({ message: 'Auth action' });
}
