import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  console.log("Visitando", request.nextUrl.pathname);
  const cookieAuth = cookies().get("mi_Cookie_Usuario");
  console.log(cookieAuth);
   /* if(cookieAuth === undefined || cookieAuth.value === "false"){
     return NextResponse.redirect(new URL('/Login', request.url))
    } */
   
}
 
export const config = {
  matcher: '/Admin/:path*',
}