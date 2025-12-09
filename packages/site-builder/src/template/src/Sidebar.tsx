import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from './ThemeContext.js'; // Ensure extension for ESM
import { Search, Sun, Moon } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  graph: any; // TODO: Type this properly with shared types
}

export function Sidebar({ isOpen, onClose, graph }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchIndex, setSearchIndex] = useState<any>(null);
  const [store, setStore] = useState<any[]>([]);
  const [manifest, setManifest] = useState<any[]>([]);

  // Load Search Index and Manifest
  React.useEffect(() => {
    Promise.all([
      fetch('/content/search-index.json').then((res) => res.json()),
      fetch('/content/search-data.json').then((res) => res.json()),
      fetch('/content/manifest.json').then((res) => res.json()),
    ])
      .then(async ([idxData, data, manifestData]) => {
        // Import lunr dynamically or from global if script loaded
        const lunr = await import('lunr').then((m) => m.default || m);
        const idx = lunr.Index.load(idxData);
        setSearchIndex(idx);
        setStore(data);
        setManifest(manifestData);
      })
      .catch((e) => console.warn('Search index/manifest not found', e));
  }, []);

  // Perform Search
  React.useEffect(() => {
    if (!searchTerm || !searchIndex) {
      setSearchResults([]);
      return;
    }
    const results = searchIndex.search(searchTerm);
    const mapped = results.map((r: any) => {
      const doc = store.find((s: any) => s.id === r.ref);
      return { ...doc, score: r.score };
    });
    setSearchResults(mapped);
  }, [searchTerm, searchIndex, store]);

  // Group nodes by directory or type for Navigation
  const nodes = graph?.nodes || [];
  const isSearching = searchTerm.length > 0;

  // Recursive helper to render manifest tree
  const renderTree = (items: any[]) => {
    return items.map((item: any) => {
      if (item.type === 'directory') {
        return (
          <li key={item.path} style={{ marginBottom: '4px' }}>
            <span
              style={{ fontWeight: 'bold', fontSize: '0.85rem', color: 'var(--text-secondary)' }}
            >
              {item.name}
            </span>
            <ul style={{ listStyle: 'none', paddingLeft: '12px', margin: 0 }}>
              {renderTree(item.children)}
            </ul>
          </li>
        );
      }
      return (
        <li key={item.path} style={{ marginBottom: '4px' }}>
          <a
            href={`#/content/${item.path.replace('.md', '')}`}
            style={{ display: 'block', padding: '4px 0', fontSize: '0.95rem' }}
          >
            {item.name}
          </a>
        </li>
      );
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside
        className={clsx('sidebar z-50 transition-transform duration-300', isOpen ? 'open' : '')}
      >
        {/* Header Area */}
        <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>CogniDocs</h2>
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
              }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-secondary)',
              }}
            />
            <input
              type="text"
              placeholder="Type to search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 8px 8px 32px',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
              }}
            />
          </div>
        </div>

        {/* Navigation List */}
        <nav style={{ padding: '16px' }}>
          {isSearching ? (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {searchResults.length === 0 ? (
                <li style={{ padding: '8px', color: 'gray' }}>No results found</li>
              ) : null}
              {searchResults.map((res: any) => (
                <li key={res.id} style={{ marginBottom: '4px' }}>
                  <a
                    href={`#/content/${res.id}`}
                    style={{ display: 'block', padding: '4px 0', fontSize: '0.95rem' }}
                  >
                    {res.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {/* Documentation Section */}
              <li
                style={{
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  marginBottom: '8px',
                }}
              >
                Documentation
              </li>
              {renderTree(manifest)}

              <hr style={{ borderColor: 'var(--border-color)', margin: '16px 0' }} />

              {/* Components Section */}
              <li
                style={{
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  marginBottom: '8px',
                }}
              >
                Components ({nodes.length})
              </li>

              {nodes.map((node: any) => (
                <li key={node.id} style={{ marginBottom: '4px' }}>
                  <a
                    href={`#/component/${node.id}`}
                    style={{ display: 'block', padding: '4px 0', fontSize: '0.95rem' }}
                  >
                    {node.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </aside>
    </>
  );
}
