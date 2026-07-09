import { signIn } from '@/lib/auth';

export async function POST(request: Request) {
  const { username, password, rememberMe } = await request.json();
  const success = await signIn(username, password, rememberMe);
  if (success) {
    return new Response(null, { status: 200 });
  }
  return new Response('Unauthorized', { status: 401 });
}
