import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { Layout } from './components/Layout';
import ReactMarkdown from 'react-markdown';

// Simple content fetcher for demo
function ContentViewer() {
  const [content, setContent] = React.useState('# Loading...');

  React.useEffect(() => {
    // Basic router logic (hash based for simplicity)
    const loadContent = async () => {
      const hash = window.location.hash.slice(2) || 'README'; // default to README
      try {
        const res = await fetch(`/content/${hash}.md`);
        if (res.ok) {
          const text = await res.text();
          setContent(text);
        } else {
          setContent('# 404 - Document Not Found');
        }
      } catch (e) {
        setContent('# Error loading content');
      }
    };

    window.addEventListener('hashchange', loadContent);
    loadContent();
    return () => window.removeEventListener('hashchange', loadContent);
  }, []);

  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ContentViewer />
      </Layout>
    </ThemeProvider>
  );
}
