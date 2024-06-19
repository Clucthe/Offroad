import { clerkMiddleware,createRouteMatcher  } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//     '/',
//     '/events/:id',
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing'
// ]);

export default clerkMiddleware({});

// export default authMiddleware({})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};