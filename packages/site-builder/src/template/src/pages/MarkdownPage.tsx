import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { TableOfContents } from '../components/TableOfContents';
import { CodeBlock } from '../components/CodeBlock';
import { MermaidDiagram } from '../components/MermaidDiagram';
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
            ]}
            components={{
              h1: ({ node, children, ...props }: any) => (
                <h1 className="text-4xl font-bold text-foreground mb-4 mt-8 first:mt-0" {...props}>
                  {children}
                </h1>
              ),
              h2: ({ node, children, ...props }: any) => (
                <h2 className="text-3xl font-bold text-foreground mb-3 mt-6 border-b border-border pb-2" {...props}>
                  {children}
                </h2>
              ),
              h3: ({ node, children, ...props }: any) => (
                <h3 className="text-2xl font-semibold text-foreground mb-2 mt-5" {...props}>
                  {children}
                </h3>
              ),
              h4: ({ node, children, ...props }: any) => (
                <h4 className="text-xl font-semibold text-foreground mb-2 mt-4" {...props}>
                  {children}
                </h4>
              ),
              p: ({ node, ...props }) => <p className="text-foreground mb-4 leading-7" {...props} />,
              a: ({ node, ...props }) => (
                <a className="text-primary hover:underline font-medium" {...props} />
              ),
              pre: ({ node, children, ...props }: any) => {
                // Check if this pre contains a code block with mermaid
                const codeChild = children?.props;
                if (codeChild?.className?.includes('language-mermaid')) {
                  // Recursively extract string from children
                  const extractText = (child: any): string => {
                    if (!child) return '';
                    if (typeof child === 'string') return child;
                    if (typeof child === 'number') return String(child);
                    if (Array.isArray(child)) {
                      return child.map(c => extractText(c)).join('');
                    }
                    if (typeof child === 'object' && 'props' in child && child.props) {
                      if (typeof child.props.children === 'string') {
                        return child.props.children;
                      }
                      if (Array.isArray(child.props.children)) {
                        return child.props.children.map((c: any) => extractText(c)).join('');
                      }
                      if (child.props.children) {
                        return extractText(child.props.children);
                      }
                    }
                    return '';
                  };

                  const code = extractText(codeChild.children).replace(/\n$/, '');
                  return <MermaidDiagram chart={code} />;
                }

                // Otherwise just render the children
                return <>{children}</>;
              },
              code: ({ node, inline, className, children, ...props }: any) => {
                // Recursively extract string from children - handle React elements and nested structures
                const extractText = (child: any): string => {
                  if (!child) return '';
                  if (typeof child === 'string') return child;
                  if (typeof child === 'number') return String(child);

                  if (Array.isArray(child)) {
                    return child.map(c => extractText(c)).join('');
                  }

                  if (typeof child === 'object') {
                    // Handle React elements with props.children
                    if ('props' in child && child.props) {
                      if (typeof child.props.children === 'string') {
                        return child.props.children;
                      }
                      if (Array.isArray(child.props.children)) {
                        return child.props.children.map((c: any) => extractText(c)).join('');
                      }
                      if (child.props.children) {
                        return extractText(child.props.children);
                      }
                    }
                  }

                  return '';
                };

                const code = extractText(children).replace(/\n$/, '');
                const language = className?.replace(/language-/, '') || '';

                return (
                  <CodeBlock
                    inline={inline}
                    className={className}
                    language={language}
                  >
                    {code}
                  </CodeBlock>
                );
              },
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
              thead: ({ node, ...props }) => <thead {...props} />,
              th: ({ node, ...props }) => (
                <th className="border border-border px-4 py-2 text-left font-semibold text-foreground" {...props} />
              ),
              td: ({ node, children, ...props }: any) => {
                // Helper function to extract text from code elements and strip styling
                const extractTextFromChild = (child: any): string | React.ReactNode => {
                  if (!child) return child;
                  if (typeof child === 'string') return child;
                  if (typeof child === 'number') return String(child);
                  if (Array.isArray(child)) {
                    return child.map(c => extractTextFromChild(c)).join('');
                  }

                  // If it's a code element, extract its text content recursively
                  if (child?.type === 'code' || (typeof child === 'object' && child?.props?.className?.includes('language-'))) {
                    const codeChildren = child.props?.children;
                    if (typeof codeChildren === 'string') {
                      return codeChildren;
                    } else if (Array.isArray(codeChildren)) {
                      return codeChildren.map(c => extractTextFromChild(c)).join('');
                    } else if (codeChildren && typeof codeChildren === 'object') {
                      return extractTextFromChild(codeChildren);
                    }
                    return '';
                  }

                  // Handle nested React elements
                  if (typeof child === 'object' && child?.props?.children) {
                    const nested = child.props.children;
                    if (typeof nested === 'string') return nested;
                    if (Array.isArray(nested)) return nested.map(c => extractTextFromChild(c)).join('');
                    return extractTextFromChild(nested);
                  }

                  return child;
                };

                const processedChildren = extractTextFromChild(children);

                return (
                  <td className="border border-border px-4 py-2 text-foreground" {...props}>
                    <span className="font-mono text-foreground">{processedChildren}</span>
                  </td>
                );
              },
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
