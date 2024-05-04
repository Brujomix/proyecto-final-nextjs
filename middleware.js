import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
   const auth = cookies().get("mi_Cookie_Usuario");
   console.log(auth);
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/Admin/:path*',
}