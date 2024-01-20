import { NextResponse } from 'next/server'
import { db } from 'app/api/db.js'
 
export async function middleware(req) {
    // await db.initialize();
    // console.log('request', req.nextUrl.href);
    // const about = new URL('/about', req.url)
    // return NextResponse.redirect(about)
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/dashboard/:path*','/login','/register'],
}