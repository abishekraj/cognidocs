import { useState } from 'react';
import { Link, Check } from 'lucide-react';

interface HeadingWithLinkProps {
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export function HeadingWithLink({ id, level, children }: HeadingWithLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}${window.location.hash.split('#')[0]}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeClasses = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-semibold',
    4: 'text-xl font-semibold',
    5: 'text-lg font-semibold',
    6: 'text-base font-semibold',
  };

  return (
    <Tag
      id={id}
      className={`group scroll-mt-20 flex items-center gap-2 ${sizeClasses[level]} text-foreground mt-8 mb-4`}
    >
      {children}
      <button
        onClick={handleCopyLink}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Copy link to this heading"
        title="Copy link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Link className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </Tag>
  );
}
