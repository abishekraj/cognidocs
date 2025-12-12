import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Sidebar'; // We will move Sidebar to components or adjust path
import { CommandPalette } from './CommandPalette';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [graph, setGraph] = useState<any>(null);
  const [searchIndex, setSearchIndex] = useState<any>(null);
  const [store, setStore] = useState<any[]>([]);
  const [manifest, setManifest] = useState<any[]>([]);

  useEffect(() => {
    // Fetch all data needed for search and navigation
    Promise.all([
      fetch('/content/graph.json').then((res) => res.json()),
      fetch('/content/search-index.json').then((res) => res.json()),
      fetch('/content/search-data.json').then((res) => res.json()),
      fetch('/content/manifest.json').then((res) => res.json()),
    ])
      .then(async ([graphData, idxData, storeData, manifestData]) => {
        setGraph(graphData);
        setStore(storeData);
        setManifest(manifestData);

        // Load lunr index
        const lunr = await import('lunr').then((m) => m.default || m);
        const idx = lunr.Index.load(idxData);
        setSearchIndex(idx);
      })
      .catch((err) => console.error('Failed to load data', err));
  }, []);

  return (
    <div className="container">
      {/* Command Palette with Cmd+K */}
      <CommandPalette searchIndex={searchIndex} store={store} manifest={manifest} graph={graph} />

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="main-content">
        {/* Mobile Header Toggle */}
        <div className="md:hidden flex items-center mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-3 mr-2 rounded-md hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Open navigation menu"
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-sidebar"
          >
            <Menu size={24} className="text-foreground" />
          </button>
          <span className="font-bold">CogniDocs</span>
        </div>

        {children}
      </div>
    </div>
  );
}
