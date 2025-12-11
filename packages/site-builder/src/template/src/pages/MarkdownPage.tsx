import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { TableOfContents } from '../components/TableOfContents';
import { CodeBlock } from '../components/CodeBlock';
import 'highlight.js/styles/github-dark.css';

interface MarkdownPageProps {
  path: string;
}

interface Heading {
  level: number;
  text: string;
  id: string;
}

export function MarkdownPage({ path }: MarkdownPageProps) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const filePath = `/content/${path}.md`;
    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then((text) => {
        // Remove frontmatter from markdown content
        const contentWithoutFrontmatter = removeFrontmatter(text);
        setContent(contentWithoutFrontmatter);
        // Extract headings for TOC
        const extractedHeadings = extractHeadings(contentWithoutFrontmatter);
        setHeadings(extractedHeadings);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load markdown', err);
        setContent('# Document Not Found\n\nThe requested document could not be loaded.');
        setLoading(false);
      });
  }, [path]);

  const removeFrontmatter = (markdown: string): string => {
    // Remove YAML frontmatter (---\n...\n---)
    const frontmatterRegex = /^---\n[\s\S]*?\n---\n*/;
    return markdown.replace(frontmatterRegex, '');
  };

  const extractHeadings = (markdown: string): Heading[] => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const extracted: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      extracted.push({ level, text, id });
    }

    return extracted;
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showTOC = headings.length > 3;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading document...</div>
      </div>
    );
  }

  return (
    <div className="flex gap-6">
      {/* Main Content */}
      <div className={`flex-1 ${showTOC ? 'max-w-4xl' : 'max-w-5xl'}`}>
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeHighlight,
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-4xl font-bold text-foreground mb-4 mt-8 first:mt-0" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-bold text-foreground mb-3 mt-6 border-b border-border pb-2" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-semibold text-foreground mb-2 mt-5" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-xl font-semibold text-foreground mb-2 mt-4" {...props} />
              ),
              p: ({ node, ...props }) => <p className="text-foreground mb-4 leading-7" {...props} />,
              a: ({ node, ...props }) => (
                <a className="text-primary hover:underline font-medium" {...props} />
              ),
              code: ({ node, inline, className, children, ...props }: any) => {
                // Extract string from children - handle React elements properly
                let code = '';
                if (Array.isArray(children)) {
                  code = children.map(child => {
                    if (typeof child === 'string') return child;
                    if (typeof child === 'number') return String(child);
                    if (child && typeof child === 'object' && 'props' in child && child.props?.children) {
                      // React element - extract text from props.children
                      return String(child.props.children);
                    }
                    return '';
                  }).join('');
                } else if (typeof children === 'string' || typeof children === 'number') {
                  code = String(children);
                } else if (children && typeof children === 'object' && 'props' in children && children.props?.children) {
                  // React element - extract text from props.children
                  code = String(children.props.children);
                } else {
                  code = '';
                }
                code = code.replace(/\n$/, '');

                return (
                  <CodeBlock
                    inline={inline}
                    className={className}
                    language={className?.replace(/language-/, '')}
                  >
                    {code}
                  </CodeBlock>
                );
              },
              pre: ({ node, children, ...props }: any) => (
                <>{children}</>
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
              li: ({ node, ...props }) => <li className="text-foreground" {...props} />,
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-border" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => <thead className="bg-muted" {...props} />,
              th: ({ node, ...props }) => (
                <th className="border border-border px-4 py-2 text-left font-semibold" {...props} />
              ),
              td: ({ node, ...props }) => <td className="border border-border px-4 py-2" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>

      {/* Table of Contents Sidebar */}
      {showTOC && (
        <aside className="hidden lg:block flex-shrink-0">
          <TableOfContents content={content} sticky={true} />
        </aside>
      )}
    </div>
  );
}
