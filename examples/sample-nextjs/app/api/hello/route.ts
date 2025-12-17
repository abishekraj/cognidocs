/**
 * @response 200 {string} Returns hello message
 */
export async function GET(request: Request) {
  return new Response('Hello, Next.js!');
}
