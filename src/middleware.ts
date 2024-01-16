export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/projects/create',
    '/user/:path*/settings',
  ],
};
