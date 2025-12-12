import * as React from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command';
import {
  FileCode,
  Box,
  Layers,
  BookOpen,
  Network,
  Home,
  Clock,
  Hash,
  ArrowRight,
} from 'lucide-react';
import { Badge } from './ui/badge';

interface SearchResult {
  id: string;
  title: string;
  content?: string;
  category: 'component' | 'documentation' | 'overview';
  icon: React.ComponentType<any>;
  href: string;
  filePath?: string;
  lineNumber?: number;
  preview?: string;
}

interface CommandPaletteProps {
  searchIndex: any;
  store: any[];
  manifest: any[];
  graph: any;
}

const RECENT_SEARCHES_KEY = 'cognidocs-recent-searches';
const MAX_RECENT_SEARCHES = 5;

export function CommandPalette({ searchIndex, store, manifest, graph }: CommandPaletteProps) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [recentSearches, setRecentSearches] = React.useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // Load recent searches from localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Failed to load recent searches', e);
    }
  }, []);

  // Save recent search
  const saveRecentSearch = React.useCallback((query: string) => {
    if (!query.trim()) return;

    setRecentSearches((prev) => {
      const updated = [query, ...prev.filter((q) => q !== query)].slice(0, MAX_RECENT_SEARCHES);
      try {
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save recent search', e);
      }
      return updated;
    });
  }, []);

  // Cmd+K / Ctrl+K keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Build search results from all sources
  const buildSearchResults = React.useCallback(
    (query: string): SearchResult[] => {
      if (!query.trim()) return [];

      const results: SearchResult[] = [];

      // Search documentation using Lunr index
      if (searchIndex && store) {
        try {
          const lunrResults = searchIndex.search(query);
          lunrResults.slice(0, 10).forEach((r: any) => {
            const doc = store.find((s: any) => s.id === r.ref);
            if (doc) {
              results.push({
                id: doc.id,
                title: doc.title,
                content: doc.content,
                category: 'documentation',
                icon: FileCode,
                href: `#/content/${doc.id}`,
                preview: doc.content ? doc.content.substring(0, 120) + '...' : undefined,
              });
            }
          });
        } catch (e) {
          console.warn('Lunr search failed, falling back to fuzzy search', e);
        }
      }

      // Search components from graph
      if (graph?.nodes) {
        const lowerQuery = query.toLowerCase();
        graph.nodes
          .filter((node: any) => node.name.toLowerCase().includes(lowerQuery))
          .slice(0, 10)
          .forEach((node: any) => {
            results.push({
              id: node.id,
              title: node.name,
              category: 'component',
              icon: Box,
              href: `#/component/${node.id}`,
              filePath: node.filePath,
              lineNumber: node.line,
              preview: node.description,
            });
          });
      }

      // Search manifest (directory structure)
      if (manifest) {
        const lowerQuery = query.toLowerCase();
        const searchManifest = (items: any[]): void => {
          items.forEach((item: any) => {
            if (item.name.toLowerCase().includes(lowerQuery)) {
              if (item.type === 'file') {
                results.push({
                  id: item.path,
                  title: item.name,
                  category: 'documentation',
                  icon: FileCode,
                  href: `#/content/${item.path.replace('.md', '')}`,
                  filePath: item.path,
                });
              } else if (item.type === 'directory') {
                results.push({
                  id: item.path,
                  title: item.name,
                  category: 'documentation',
                  icon: Layers,
                  href: `#/content/${item.path}`,
                  filePath: item.path,
                });
              }
            }
            if (item.children) {
              searchManifest(item.children);
            }
          });
        };
        searchManifest(manifest);
      }

      // Add overview items if query matches
      const lowerQuery = query.toLowerCase();
      if ('introduction'.includes(lowerQuery) || 'readme'.includes(lowerQuery)) {
        results.push({
          id: 'readme',
          title: 'Introduction',
          category: 'overview',
          icon: BookOpen,
          href: '#/README',
          preview: 'Project documentation and getting started guide',
        });
      }
      if ('graph'.includes(lowerQuery) || 'dependency'.includes(lowerQuery)) {
        results.push({
          id: 'graph',
          title: 'Dependency Graph',
          category: 'overview',
          icon: Network,
          href: '#/graph',
          preview: 'Interactive visualization of component dependencies',
        });
      }

      // Remove duplicates and filter by category
      const uniqueResults = Array.from(new Map(results.map((r) => [r.id, r])).values());

      if (selectedCategory === 'all') {
        return uniqueResults;
      }

      return uniqueResults.filter((r) => r.category === selectedCategory);
    },
    [searchIndex, store, graph, manifest, selectedCategory]
  );

  const searchResults = React.useMemo(
    () => buildSearchResults(searchQuery),
    [searchQuery, buildSearchResults]
  );

  // Group results by category
  const groupedResults = React.useMemo(() => {
    const grouped: Record<string, SearchResult[]> = {
      overview: [],
      component: [],
      documentation: [],
    };

    searchResults.forEach((result) => {
      grouped[result.category].push(result);
    });

    return grouped;
  }, [searchResults]);

  // Handle item selection
  const handleSelect = React.useCallback(
    (result: SearchResult) => {
      saveRecentSearch(searchQuery);
      window.location.hash = result.href;
      setOpen(false);
      setSearchQuery('');
    },
    [searchQuery, saveRecentSearch]
  );

  // Handle recent search selection
  const handleRecentSearch = React.useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'overview':
        return Home;
      case 'component':
        return Box;
      case 'documentation':
        return FileCode;
      default:
        return FileCode;
    }
  };

  // Get category badge color
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'overview':
        return 'default';
      case 'component':
        return 'secondary';
      case 'documentation':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search documentation, components, and more..."
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>
          <div className="py-6 text-center">
            <p className="text-sm text-muted-foreground">No results found.</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Try searching for components, documentation, or topics.
            </p>
          </div>
        </CommandEmpty>

        {/* Recent Searches */}
        {!searchQuery && recentSearches.length > 0 && (
          <>
            <CommandGroup heading="Recent Searches">
              {recentSearches.map((query, index) => (
                <CommandItem
                  key={`recent-${index}`}
                  onSelect={() => handleRecentSearch(query)}
                  className="cursor-pointer"
                >
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{query}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}

        {/* Category Filters (shown when searching) */}
        {searchQuery && searchResults.length > 0 && (
          <>
            <CommandGroup heading="Filter by Category">
              <CommandItem onSelect={() => setSelectedCategory('all')} className="cursor-pointer">
                <Hash className="mr-2 h-4 w-4" />
                <span>All Results</span>
                <Badge variant="outline" className="ml-auto">
                  {searchResults.length}
                </Badge>
              </CommandItem>
              {Object.entries(groupedResults).map(([category, items]) => {
                if (items.length === 0) return null;
                const Icon = getCategoryIcon(category);
                return (
                  <CommandItem
                    key={category}
                    onSelect={() => setSelectedCategory(category)}
                    className="cursor-pointer"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span className="capitalize">{category}</span>
                    <Badge variant="outline" className="ml-auto">
                      {items.length}
                    </Badge>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}

        {/* Overview Results */}
        {groupedResults.overview.length > 0 && (
          <CommandGroup heading="Overview">
            {groupedResults.overview.map((result) => {
              const Icon = result.icon;
              return (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="cursor-pointer"
                >
                  <Icon className="mr-2 h-4 w-4 text-primary" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{result.title}</span>
                      <Badge variant={getCategoryBadge(result.category)}>{result.category}</Badge>
                    </div>
                    {result.preview && (
                      <p className="text-xs text-muted-foreground truncate mt-1">
                        {result.preview}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4 text-muted-foreground" />
                </CommandItem>
              );
            })}
          </CommandGroup>
        )}

        {/* Component Results */}
        {groupedResults.component.length > 0 && (
          <CommandGroup heading="Components">
            {groupedResults.component.map((result) => {
              const Icon = result.icon;
              return (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="cursor-pointer"
                >
                  <Icon className="mr-2 h-4 w-4 text-primary" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{result.title}</span>
                      <Badge variant={getCategoryBadge(result.category)}>component</Badge>
                    </div>
                    {result.preview && (
                      <p className="text-xs text-muted-foreground truncate mt-1">
                        {result.preview}
                      </p>
                    )}
                    {result.filePath && (
                      <p className="text-xs text-muted-foreground truncate mt-0.5">
                        {result.filePath}
                        {result.lineNumber ? `:${result.lineNumber}` : ''}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4 text-muted-foreground" />
                </CommandItem>
              );
            })}
          </CommandGroup>
        )}

        {/* Documentation Results */}
        {groupedResults.documentation.length > 0 && (
          <CommandGroup heading="Documentation">
            {groupedResults.documentation.map((result) => {
              const Icon = result.icon;
              return (
                <CommandItem
                  key={result.id}
                  onSelect={() => handleSelect(result)}
                  className="cursor-pointer"
                >
                  <Icon className="mr-2 h-4 w-4 text-primary" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{result.title}</span>
                    </div>
                    {result.preview && (
                      <p className="text-xs text-muted-foreground truncate mt-1">
                        {result.preview}
                      </p>
                    )}
                    {result.filePath && (
                      <p className="text-xs text-muted-foreground truncate mt-0.5">
                        {result.filePath}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4 text-muted-foreground" />
                </CommandItem>
              );
            })}
          </CommandGroup>
        )}

        {/* Quick Actions (shown when no search query) */}
        {!searchQuery && (
          <CommandGroup heading="Quick Actions">
            <CommandItem
              onSelect={() => {
                window.location.hash = '#/README';
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Go to Introduction</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.location.hash = '#/graph';
                setOpen(false);
              }}
              className="cursor-pointer"
            >
              <Network className="mr-2 h-4 w-4" />
              <span>View Dependency Graph</span>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
