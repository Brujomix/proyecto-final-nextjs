import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  /* const requestHeaders = new Headers(request.headers);
  requestHeaders.set("key", "value");

  const respose = NextResponse.next({
    request:{
      headers: requestHeaders
    }
  }) */
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
  
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher:[
    "/about/:path*"
  ]
}