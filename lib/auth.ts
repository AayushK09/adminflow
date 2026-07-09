import { cookies } from 'next/headers';

const CREDENTIALS = { username: 'admin', password: 'admin12345' };
const SESSION_COOKIE = 'session';

export async function signIn(username: string, password: string, rememberMe = false): Promise<boolean> {
  if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      ...(rememberMe && { maxAge: 60 * 60 * 24 * 30 })
    });
    return true;
  }
  return false;
}

export async function signOut() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function auth() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  return session?.value === 'authenticated' ? { user: { name: 'Admin' } } : null;
}
