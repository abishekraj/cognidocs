import { NextRequest, NextResponse } from 'next/server';
import type { Post, ApiResponse } from '../../../../lib/types';

/**
 * Route parameters for individual post endpoints
 */
interface RouteParams {
  params: {
    id: string;
  };
}

/**
 * GET handler for fetching a single blog post by ID
 *
 * Retrieves detailed information about a specific blog post.
 * Increments the view count when fetched.
 *
 * @param request - Next.js request object
 * @param params - Route parameters containing post ID
 * @returns The requested post
 *
 * @response 200 {ApiResponse<Post>} Successfully retrieved post
 * @response 404 {ApiResponse} Post not found
 * @response 500 {ApiResponse} Internal server error
 */
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    // In production, fetch from database
    // For now, return mock data
    const mockPost: Post = {
      id,
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
      views: 1251, // Incremented
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-16'),
      publishedAt: new Date('2024-01-16'),
    };

    return NextResponse.json(
      {
        success: true,
        data: mockPost,
      } satisfies ApiResponse<Post>,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      } satisfies ApiResponse,
      { status: 500 }
    );
  }
}

/**
 * PATCH handler for updating a blog post
 *
 * Updates specific fields of an existing blog post.
 * Only provided fields will be updated.
 *
 * @param request - Next.js request object with update data
 * @param params - Route parameters containing post ID
 * @returns The updated post
 *
 * @response 200 {ApiResponse<Post>} Successfully updated post
 * @response 400 {ApiResponse} Validation error
 * @response 404 {ApiResponse} Post not found
 * @response 500 {ApiResponse} Internal server error
 */
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;
    const body = await request.json();

    // Validate at least one field is provided
    if (Object.keys(body).length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'No fields provided for update',
        } satisfies ApiResponse,
        { status: 400 }
      );
    }

    // In production, update in database
    const updatedPost: Post = {
      id,
      title: body.title || 'Getting Started with Next.js',
      content: body.content || 'Learn the basics of Next.js...',
      slug: 'getting-started-nextjs',
      author: {
        id: 'u1',
        email: 'john@example.com',
        name: 'John Doe',
        role: 'admin',
        createdAt: new Date('2023-01-01'),
      },
      status: body.status || 'published',
      tags: body.tags || ['nextjs', 'tutorial'],
      views: 1251,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date(), // Updated timestamp
      publishedAt: new Date('2024-01-16'),
    };

    return NextResponse.json(
      {
        success: true,
        data: updatedPost,
      } satisfies ApiResponse<Post>,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      } satisfies ApiResponse,
      { status: 500 }
    );
  }
}

/**
 * DELETE handler for removing a blog post
 *
 * Permanently deletes a blog post by ID.
 * This action cannot be undone.
 *
 * @param request - Next.js request object
 * @param params - Route parameters containing post ID
 * @returns Success confirmation
 *
 * @response 200 {ApiResponse} Successfully deleted post
 * @response 404 {ApiResponse} Post not found
 * @response 500 {ApiResponse} Internal server error
 */
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    // In production, delete from database
    // For now, just return success

    return NextResponse.json(
      {
        success: true,
        data: { id, deleted: true },
      } satisfies ApiResponse<{ id: string; deleted: boolean }>,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      } satisfies ApiResponse,
      { status: 500 }
    );
  }
}
