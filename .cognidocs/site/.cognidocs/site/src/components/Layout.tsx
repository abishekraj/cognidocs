import React, { useState, useEffect } from 'react';
import { Sidebar } from '../Sidebar'; // We will move Sidebar to components or adjust path
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [graph, setGraph] = useState<any>(null);

  useEffect(() => {
    // Fetch graph data (simulated for now or fetched from generated file)
    fetch('/content/graph.json') // Assuming SiteBuilder copies graph here
      .then((res) => res.json())
      .then((data) => setGraph(data))
      .catch((err) => console.error('Failed to load graph', err));
  }, []);

  return (
    <div className="container">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} graph={graph} />

      <div className="main-content">
        {/* Mobile Header Toggle */}
        <div className="md:hidden flex items-center mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 mr-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu size={24} />
          </button>
          <span className="font-bold">CogniDocs</span>
        </div>

        {children}
      </div>
    </div>
  );
}
