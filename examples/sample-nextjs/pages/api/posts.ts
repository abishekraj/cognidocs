import type { NextApiRequest, NextApiResponse } from 'next';

export type Post = {
  id: number;
  title: string;
};

/**
 * Handles posts API requests.
 * Supports GET and POST methods.
 *
 * @param req - The Next.js API request
 * @param res - The Next.js API response
 * @response 200 {Post[]} Returns list of posts
 * @response 201 {object} Post created successfully
 * @response 405 {object} Method Not Allowed
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | { message: string }>
) {
  if (req.method === 'GET') {
    res.status(200).json([
      { id: 1, title: 'First Post' },
      { id: 2, title: 'Second Post' },
    ]);
  } else if (req.method === 'POST') {
    res.status(201).json({ message: 'Post created' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
