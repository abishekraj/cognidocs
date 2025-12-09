import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface ManifestItem {
  type: 'file' | 'directory';
  name: string;
  path: string;
  children?: ManifestItem[];
}

function App() {
  const [manifest, setManifest] = useState<ManifestItem[]>([]);
  const [currentFile, setCurrentFile] = useState<string>('README.md');
  const [content, setContent] = useState<string>('# Loading...');

  useEffect(() => {
    fetch('/content/manifest.json')
      .then((res) => res.json())
      .then((data) => setManifest(data))
      .catch((err) => console.error('Failed to load manifest', err));
  }, []);

  useEffect(() => {
    fetch(`/content/${currentFile}`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => setContent('# Error loading file'));
  }, [currentFile]);

  const renderSidebar = (items: ManifestItem[]) => {
    return (
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.type === 'directory' ? (
              <details open>
                <summary>{item.name}</summary>
                {item.children && renderSidebar(item.children)}
              </details>
            ) : (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentFile(item.path);
                }}
                style={{ fontWeight: currentFile === item.path ? 'bold' : 'normal' }}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="layout">
      <nav className="sidebar">
        <h3>CogniDocs</h3>
        {renderSidebar(manifest)}
      </nav>
      <main className="content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </div>
  );
}

export default App;
