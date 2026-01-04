import { NextRequest, NextResponse } from 'next/server';
import type { Post, PaginatedResponse, ApiResponse } from '../../../lib/types';

/**
 * GET handler for fetching paginated blog posts
 *
 * Returns a paginated list of blog posts with filtering options.
 * Supports query parameters for pagination and filtering by status.
 *
 * @param request - Next.js request object
 * @returns Paginated list of posts
 *
 * @response 200 {PaginatedResponse<Post>} Successfully retrieved posts
 * @response 400 {ApiResponse} Invalid query parameters
 * @response 500 {ApiResponse} Internal server error
 *
 * @example
 * ```typescript
 * // Fetch first page
 * fetch('/api/posts?page=1&pageSize=10')
 *
 * // Fetch published posts only
 * fetch('/api/posts?status=published')
 * ```
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);
    const status = searchParams.get('status');

    // Validate pagination parameters
    if (page < 1 || pageSize < 1 || pageSize > 100) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid pagination parameters',
          details: {
            page: 'Must be >= 1',
            pageSize: 'Must be between 1 and 100',
          },
        } satisfies ApiResponse,
        { status: 400 }
      );
    }

    // Mock data - in production this would query a database
    const mockPosts: Post[] = [
      {
        id: '1',
        title: 'Getting Started with Next.js',
        content: 'Learn the basics of Next.js...',
        slug: 'getting-started-nextjs',
        author: {
          id: 'u1',
          email: 'john@example.com',
          name: 'John Doe',
          role: 'admin',
          createdAt: new Date('2023-01-01'),
        },
        status: 'published',
        tags: ['nextjs', 'tutorial'],
        views: 1250,
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-16'),
        publishedAt: new Date('2024-01-16'),
      },
      // Add more mock posts as needed
    ];

    // Filter by status if provided
    const filteredPosts = status
      ? mockPosts.filter((post) => post.status === status)
      : mockPosts;

    const totalItems = filteredPosts.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const items = filteredPosts.slice(startIndex, endIndex);

    const response: PaginatedResponse<Post> = {
      items,
      meta: {
        page,
        pageSize,
        totalItems,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        details: { message: error instanceof Error ? error.message : 'Unknown error' },
      } satisfies ApiResponse,
      { status: 500 }
    );
  }
}

/**
 * POST handler for creating a new blog post
 *
 * Creates a new blog post with the provided data.
 * Validates required fields and returns the created post.
 *
 * @param request - Next.js request object with post data in body
 * @returns The created post
 *
 * @response 201 {ApiResponse<Post>} Successfully created post
 * @response 400 {ApiResponse} Validation error
 * @response 401 {ApiResponse} Unauthorized
 * @response 500 {ApiResponse} Internal server error
 *
 * @example
 * ```typescript
 * fetch('/api/posts', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     title: 'My New Post',
 *     content: 'Post content...',
 *     tags: ['javascript', 'web']
 *   })
 * })
 * ```
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: {
            title: !body.title ? 'Title is required' : undefined,
            content: !body.content ? 'Content is required' : undefined,
          },
        } satisfies ApiResponse,
        { status: 400 }
      );
    }

    // In production, create post in database
    // For now, return mock created post
    const newPost: Post = {
      id: Math.random().toString(36).substring(7),
      title: body.title,
      content: body.content,
      slug: body.title.toLowerCase().replace(/\s+/g, '-'),
      author: {
        id: 'u1',
        email: 'john@example.com',
        name: 'John Doe',
        role: 'admin',
        createdAt: new Date('2023-01-01'),
      },
      status: 'draft',
      tags: body.tags || [],
      views: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json(
      {
        success: true,
        data: newPost,
      } satisfies ApiResponse<Post>,
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        details: { message: error instanceof Error ? error.message : 'Unknown error' },
      } satisfies ApiResponse,
      { status: 500 }
    );
  }
}
