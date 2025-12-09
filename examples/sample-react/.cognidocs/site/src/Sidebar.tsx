import * as React from 'react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';
import {
  Search,
  Sun,
  Moon,
  FileCode,
  Box,
  Layers,
  BookOpen,
  Network,
  Home,
} from 'lucide-react';
import { cn } from './lib/utils';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { ScrollArea } from './components/ui/scroll-area';
import { Separator } from './components/ui/separator';
import { NavigationSection } from './components/NavigationSection';
import { NavigationItem } from './components/NavigationItem';

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
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  // Load Search Index and Manifest
  React.useEffect(() => {
    Promise.all([
      fetch('/content/search-index.json').then((res) => res.json()),
      fetch('/content/search-data.json').then((res) => res.json()),
      fetch('/content/manifest.json').then((res) => res.json()),
    ])
      .then(async ([idxData, data, manifestData]) => {
        const lunr = await import('lunr').then((m) => m.default || m);
        const idx = lunr.Index.load(idxData);
        setSearchIndex(idx);
        setStore(data);
        setManifest(manifestData);
      })
      .catch((e) => console.warn('Search index/manifest not found', e));
  }, []);

  // Track current path for active states
  React.useEffect(() => {
    const handleHashChange = () => setCurrentPath(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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

  const nodes = graph?.nodes || [];
  const isSearching = searchTerm.length > 0;

  // Recursive helper to render manifest tree
  const renderTree = (items: any[]) => {
    return items.map((item: any) => {
      if (item.type === 'directory') {
        return (
          <NavigationSection
            key={item.path}
            title={item.name}
            icon={Layers}
            defaultOpen={false}
          >
            {renderTree(item.children)}
          </NavigationSection>
        );
      }
      const href = `#/content/${item.path.replace('.md', '')}`;
      return (
        <NavigationItem
          key={item.path}
          label={item.name}
          href={href}
          isActive={currentPath === href}
          icon={FileCode}
        />
      );
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside
        className={cn(
          'sidebar z-50 transition-transform duration-300 bg-background border-r border-border',
          isOpen ? 'open' : ''
        )}
      >
        {/* Header Area */}
        <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              CogniDocs
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
        </div>

        {/* Navigation List */}
        <ScrollArea className="flex-1 px-3 py-4">
          {isSearching ? (
            <div className="space-y-1">
              {searchResults.length === 0 ? (
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  No results found
                </div>
              ) : (
                searchResults.map((res: any) => (
                  <NavigationItem
                    key={res.id}
                    label={res.title}
                    href={`#/content/${res.id}`}
                    icon={FileCode}
                    isActive={currentPath === `#/content/${res.id}`}
                  />
                ))
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Overview Section */}
              <NavigationSection title="Overview" icon={Home} defaultOpen={true}>
                <NavigationItem
                  label="Introduction"
                  href="#/README"
                  icon={BookOpen}
                  isActive={currentPath === '#/README' || currentPath === '' || currentPath === '#/'}
                />
                <NavigationItem
                  label="Dependency Graph"
                  href="#/graph"
                  icon={Network}
                  isActive={currentPath === '#/graph'}
                />
              </NavigationSection>

              <Separator className="my-2" />

              {/* Additional Documentation */}
              {manifest.length > 0 && (
                <>
                  <NavigationSection
                    title="Documentation"
                    icon={FileCode}
                    count={manifest.length}
                    defaultOpen={true}
                  >
                    {renderTree(manifest)}
                  </NavigationSection>
                  <Separator className="my-2" />
                </>
              )}

              {/* Components Section */}
              {nodes.length > 0 && (
                <NavigationSection
                  title="Components"
                  icon={Box}
                  count={nodes.length}
                  defaultOpen={true}
                >
                  {nodes.map((node: any) => (
                    <NavigationItem
                      key={node.id}
                      label={node.name}
                      href={`#/component/${node.id}`}
                      icon={Box}
                      isActive={currentPath === `#/component/${node.id}`}
                    />
                  ))}
                </NavigationSection>
              )}
            </div>
          )}
        </ScrollArea>
      </aside>
    </>
  );
}
