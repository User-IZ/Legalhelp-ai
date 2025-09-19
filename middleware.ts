import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth-token")?.value;

  console.log("Middleware checking:", pathname);

  // Allow all API routes to pass through without checks
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Public routes that don't require authentication
  const publicPaths = ["/", "/auth"];
  const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

  // Protected routes that require authentication AND VKYC
  const vkycRequiredPaths = [
    "/chatbot",
    "/library",
    "/consult",
    "/document-processor",
    "/publish-report",
    "/profile",
  ];
  const isVKYCRequiredPath = vkycRequiredPaths.some((path) =>
    pathname.startsWith(path)
  );

  // VKYC route (requires auth but not VKYC completion)
  const isVKYCPath = pathname === "/vkyc";

  console.log("Route analysis:", {
    pathname,
    isPublicPath,
    isVKYCRequiredPath,
    isVKYCPath,
    hasToken: !!token,
  });

  // If public route, allow
  if (isPublicPath) {
    return NextResponse.next();
  }

  // If no token and accessing protected routes, redirect to auth
  if (!token && (isVKYCRequiredPath || isVKYCPath)) {
    console.log("No token, redirecting to auth");
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // If token exists, validate it
  if (token && (isVKYCRequiredPath || isVKYCPath)) {
    try {
      const validateResponse = await fetch(
        new URL("/api/auth/validate", request.url),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }
      );

      const { valid } = await validateResponse.json();

      if (!valid) {
        throw new Error("Invalid token");
      }

      console.log("Token validated successfully");
    } catch (error) {
      console.log("Token validation failed:", error);
      const response = NextResponse.redirect(new URL("/auth", request.url));
      response.cookies.delete("auth-token");
      return response;
    }
  }

  console.log("Allowing request to proceed");
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
