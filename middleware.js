import { NextResponse, NextRequest } from "next/server";
import { Store } from "@/Redux/Store";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  /* const requestHeaders = new Headers(request.headers);
  requestHeaders.set("User", "Client");

  const respose = NextResponse.next({
    request:{
      headers: requestHeaders
    }
  }) */
  const currentUser = Store.getState().Usuario.currentUser;
  const isLogin = Store.getState().Usuario.isLogin;
  if (!isLogin && currentUser.us_ro_iden === 1) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/Admin/:path*"],
};
