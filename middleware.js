import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("User", "Client");

  const respose = NextResponse.next({
    request:{
      headers: requestHeaders
    }
  })

  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher:[
    "/Admin/:path*"
  ]
}