import * as React from 'react';
import { useState } from 'react';
import {
  Search,
  FileCode,
  Layers,
  BookOpen,
  Network,
  Home,
  BarChart3,
  Eye,
  FileText,
} from 'lucide-react';
import { cn } from './lib/utils';
import { Input } from './components/ui/input';
import { ScrollArea } from './components/ui/scroll-area';
import { Separator } from './components/ui/separator';
import { NavigationSection } from './components/NavigationSection';
import { NavigationItem } from './components/NavigationItem';
import { ThemeSwitcher } from './components/ThemeSwitcher';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchIndex, setSearchIndex] = useState<any>(null);
  const [store, setStore] = useState<any[]>([]);
  const [manifest, setManifest] = useState<any[]>([]);
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const sidebarRef = React.useRef<HTMLElement>(null);

  // Load Search Index and Manifest
  React.useEffect(() => {
    const basePath = import.meta.env.BASE_URL || '/';
    Promise.all([
      fetch(`${basePath}content/search-index.json`).then((res) => res.json()),
      fetch(`${basePath}content/search-data.json`).then((res) => res.json()),
      fetch(`${basePath}content/manifest.json`).then((res) => res.json()),
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

  // Handle Escape key to close sidebar and focus management
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the sidebar when opened for screen reader navigation
      sidebarRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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

  const isSearching = searchTerm.length > 0;

  // Recursive helper to render manifest tree
  const renderTree = (items: any[]) => {
    return items.map((item: any) => {
      if (item.type === 'directory') {
        return (
          <NavigationSection key={item.path} title={item.name} icon={Layers} defaultOpen={false}>
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
          sourcePath={item.sourcePath}
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
        aria-hidden="true"
      />

      {/* Sidebar Container */}
      <aside
        ref={sidebarRef}
        id="mobile-sidebar"
        className={cn(
          'sidebar z-50 transition-transform duration-300 bg-background border-r border-border',
          isOpen ? 'open' : ''
        )}
        aria-label="Main navigation"
        tabIndex={-1}
      >
        {/* Header Area */}
        <div className="sticky top-0 z-10 bg-background border-b border-border">
          {/* Title and Theme Switcher Row */}
          <div className="px-4 pt-4 pb-3 border-b border-border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                CogniDocs
              </h2>
            </div>
            {/* Theme Switcher - Full Width */}
            <ThemeSwitcher />
          </div>

          {/* Search Input Section */}
          <div className="px-4 py-3">
            <div className="relative">
              <Search
                className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
                aria-hidden="true"
              />
              <Input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 h-9 text-sm"
                aria-label="Search documentation"
                role="searchbox"
              />
            </div>
            <div className="mt-2 flex items-center px-0.5">
              <span className="text-[11px] text-muted-foreground">
                Press{' '}
                <kbd className="pointer-events-none inline-flex h-4 select-none items-center gap-0.5 rounded border bg-muted px-1 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-[11px]">⌘</span>K
                </kbd>{' '}
                for advanced search
              </span>
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <ScrollArea className="flex-1 pl-3 pr-2 py-4">
          {isSearching ? (
            <div className="space-y-1" role="list" aria-label="Search results">
              {searchResults.length === 0 ? (
                <div className="px-3 py-2 text-sm text-muted-foreground" role="status">
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
            <nav className="space-y-4 pr-1" aria-label="Documentation navigation">
              {/* Overview Section */}
              <NavigationSection title="Overview" icon={Home} defaultOpen={true}>
                <NavigationItem
                  label="Introduction"
                  href="#/README"
                  icon={BookOpen}
                  isActive={
                    currentPath === '#/README' || currentPath === '' || currentPath === '#/'
                  }
                />
                <NavigationItem
                  label="Project Overview"
                  href="#/overview"
                  icon={BarChart3}
                  isActive={currentPath === '#/overview'}
                />
                <NavigationItem
                  label="Dependency Graph"
                  href="#/graph"
                  icon={Network}
                  isActive={currentPath === '#/graph'}
                />
              </NavigationSection>

              <Separator className="my-2" />

              {/* API Routes - Separate Section */}
              {manifest.find((item: any) => item.name === 'api-routes') && (
                <>
                  <NavigationSection title="API Routes" icon={Network} defaultOpen={true}>
                    {renderTree(
                      manifest.find((item: any) => item.name === 'api-routes')?.children || []
                    )}
                  </NavigationSection>
                  <Separator className="my-2" />
                </>
              )}

              {/* Guides / Additional Documentation */}
              {manifest.find((item: any) => item.name === 'additional-documentation') && (
                <>
                  <NavigationSection title="Guides" icon={BookOpen} defaultOpen={true}>
                    {renderTree(
                      manifest.find((item: any) => item.name === 'additional-documentation')
                        ?.children || []
                    )}
                  </NavigationSection>
                  <Separator className="my-2" />
                </>
              )}

              {/* Documentation */}
              {manifest.filter(
                (item: any) =>
                  item.name !== 'additional-documentation' && item.name !== 'api-routes'
              ).length > 0 && (
                <NavigationSection
                  title="Documentation"
                  icon={FileCode}
                  count={
                    manifest.filter(
                      (item: any) =>
                        item.name !== 'additional-documentation' && item.name !== 'api-routes'
                    ).length
                  }
                  defaultOpen={true}
                >
                  {renderTree(
                    manifest.filter(
                      (item: any) =>
                        item.name !== 'additional-documentation' && item.name !== 'api-routes'
                    )
                  )}
                </NavigationSection>
              )}
            </nav>
          )}
        </ScrollArea>
      </aside>
      {/* Hidden div to force Eye and FileText icons into bundle for ComponentDetailPage tabs */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <Eye />
        <FileText />
      </div>
    </>
  );
}
