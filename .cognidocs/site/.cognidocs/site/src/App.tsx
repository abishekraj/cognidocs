import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { Layout } from './components/Layout';
import ReactMarkdown from 'react-markdown';
import { DependencyGraph } from '@cognidocs/graph-viz';

// Simple content fetcher for demo
function ContentViewer() {
  const [content, setContent] = React.useState('# Loading...');
  const [view, setView] = React.useState('content');
  const [graphData, setGraphData] = React.useState(null);

  React.useEffect(() => {
    // Load graph data once
    fetch('/graph.json')
      .then((res) => res.json())
      .then(setGraphData)
      .catch((e) => console.error(e));

    // Basic router logic (hash based for simplicity)
    const loadContent = async () => {
      const hash = window.location.hash.slice(2) || 'README'; // default to README

      if (hash === 'graph') {
        setView('graph');
        return;
      }

      setView('content');
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

  if (view === 'graph') {
    if (!graphData) return <div>Loading Graph...</div>;
    return (
      <div
        style={{
          height: 'calc(100vh - 40px)',
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <DependencyGraph data={graphData} />
      </div>
    );
  }

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
