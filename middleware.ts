import { clerkMiddleware, getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const protectedPaths = [
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
];

// This also supports '/meeting/*' paths
function isProtectedPath(pathname: string) {
    if (protectedPaths.includes(pathname)) return true;
    if (pathname.startsWith('/meeting')) return true;
    return false;
}

export default clerkMiddleware(async (req: Request) => {
    // Edge-safe URL parsing
    const url = new URL(req.url, 'http://localhost'); // base needed for Edge
    const pathname = url.pathname;

    if (isProtectedPath(pathname)) {
        const { userId } = getAuth(req);

        if (!userId) {
            // Redirect unauthenticated users to sign-in page
            const signInUrl = new URL('/sign-in', 'http://localhost');
            return NextResponse.redirect(signInUrl);
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
