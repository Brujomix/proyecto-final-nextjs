import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("Visitando", request.nextUrl.pathname);
  const auth = cookies().getAll();
   console.log(auth);
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/Admin/:path*',
}