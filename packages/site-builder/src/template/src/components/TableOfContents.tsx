import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  /**
   * The markdown content to extract headings from
   */
  content?: string;
  /**
   * Or provide headings directly
   */
  headings?: TocItem[];
  /**
   * Whether to make the TOC sticky
   */
  sticky?: boolean;
  /**
   * Custom className
   */
  className?: string;
}

export function TableOfContents({
  content,
  headings: providedHeadings,
  sticky = true,
  className = '',
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>(providedHeadings || []);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (content && !providedHeadings) {
      // Extract headings from markdown content
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const extractedHeadings: TocItem[] = [];
      let match;

      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        // Generate ID from heading text (same as markdown-it-anchor)
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');

        extractedHeadings.push({ id, text, level });
      }

      setHeadings(extractedHeadings);
    }
  }, [content, providedHeadings]);

  useEffect(() => {
    if (headings.length === 0) return;

    // Observe heading elements and update active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 1,
      }
    );

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const stickyClass = sticky ? 'sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto' : '';

  return (
    <nav className={`w-64 ${stickyClass} ${className}`} aria-label="Table of Contents">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
        <BookOpen className="h-4 w-4 text-muted-foreground" />
        <h4 className="text-sm font-semibold text-foreground">On This Page</h4>
      </div>

      <ul className="space-y-2 text-sm">
        {headings.map(({ id, text, level }) => {
          const isActive = activeId === id;
          const indent = (level - 1) * 12; // 12px per level

          return (
            <li
              key={id}
              style={{ paddingLeft: `${indent}px` }}
              className="transition-all duration-200"
            >
              <a
                href={`#${id}`}
                className={`
                  block py-1 px-2 rounded transition-colors
                  ${
                    isActive
                      ? 'text-primary font-medium bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(id);
                  if (element) {
                    // Scroll with offset for fixed header
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    // Update URL hash
                    window.history.pushState(null, '', `#${id}`);
                    setActiveId(id);
                  }
                }}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
