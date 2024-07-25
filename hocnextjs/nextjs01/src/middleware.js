//NextRequest
//NextResponse
import { NextResponse } from "next/server";
export const middleware = (request) => {
  const isAuthenticated = true;
  const pathname = request.nextUrl.pathname;
  if (pathname === "/lien-he") {
    return NextResponse.rewrite(new URL("/contact", request.url));
    //http://localhost:3000/contact
  }
  if (pathname === "/contact") {
    return NextResponse.redirect(new URL("/lien-he", request.url));
  }
  if (pathname.startsWith("/products") && !isAuthenticated) {
    return Response.redirect(new URL("/auth/login", request.url));
    //http://localhost:3000/auth/login
    // return Response.json({ message: "Lỗi rồi" });
  }
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-api-key", "ahihi");
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  //   const name = request.cookies.get("name");
  //   console.log(name);
  //   response.cookies.set("age", 32, {
  //     path: "/",
  //     maxAge: 600,
  //     httpOnly: true,
  //   });
  response.cookies.delete("email");
  return response;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // "/products/:path*",
  ],
};
