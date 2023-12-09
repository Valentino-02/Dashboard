import { withAuth } from 'next-auth/middleware'

export const config = {
    matcher: ['/', '/:path*', '/auth/:path*']
};

export default withAuth({
    pages: {
      signIn: "/auth/signin",
      error: "/auth/error", 
    },
  });