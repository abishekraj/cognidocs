import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { RouteMatch } from '../Router';

interface PageHeaderProps {
  route: RouteMatch;
}

interface ProjectConfig {
  name?: string;
  description?: string;
  version?: string;
  author?: string;
  homepage?: string;
  repository?: string;
  license?: string;
}

export function PageHeader({ route }: PageHeaderProps) {
  const [projectConfig, setProjectConfig] = useState<ProjectConfig>({
    name: 'Documentation',
    description: 'Project Documentation',
  });

  useEffect(() => {
    // Load project metadata from project.json
    fetch('/content/project.json')
      .then((res) => res.json())
      .then((data) => {
        setProjectConfig(data);
      })
      .catch(() => {
        // Use default if project.json doesn't exist
        console.warn('Failed to load project metadata, using defaults');
      });
  }, []);

  const getBreadcrumbs = () => {
    const crumbs: Array<{ label: string; href?: string }> = [
      { label: projectConfig.name || 'Documentation', href: '#/' },
    ];

    switch (route.type) {
      case 'overview':
        crumbs.push({ label: 'Overview' });
        break;
      case 'introduction':
        crumbs.push({ label: 'Introduction' });
        break;
      case 'component':
        crumbs.push({ label: 'Components', href: '#/' });
        crumbs.push({ label: route.id || 'Unknown' });
        break;
      case 'function':
        crumbs.push({ label: 'Functions', href: '#/' });
        crumbs.push({ label: route.id || 'Unknown' });
        break;
      case 'interface':
        crumbs.push({ label: 'Interfaces', href: '#/' });
        crumbs.push({ label: route.id || 'Unknown' });
        break;
      case 'type':
        crumbs.push({ label: 'Types', href: '#/' });
        crumbs.push({ label: route.id || 'Unknown' });
        break;
      case 'class':
        crumbs.push({ label: 'Classes', href: '#/' });
        crumbs.push({ label: route.id || 'Unknown' });
        break;
      case 'content':
        crumbs.push({ label: 'Documentation', href: '#/' });
        if (route.id) {
          const parts = route.id.split('/');
          crumbs.push({ label: parts[parts.length - 1] });
        }
        break;
      case 'graph':
        crumbs.push({ label: 'Dependency Graph' });
        break;
      default:
        break;
    }

    return crumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Project Name & Breadcrumb Navigation */}
        <div className="flex items-center gap-4">
          {/* Project Name/Logo */}
          <a
            href="#/"
            className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
          >
            {/* TODO: Add custom logo support - check for /content/logo.png or logo.svg */}
            <span>{projectConfig.name || 'Documentation'}</span>
          </a>

          {/* Breadcrumb separator and navigation (only if not on home) */}
          {route.type !== 'overview' && (
            <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
              {breadcrumbs.slice(1).map((crumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>

        {/* Right: Version & CogniDocs Branding */}
        <div className="flex items-center gap-4">
          {projectConfig.version && (
            <span className="text-sm text-muted-foreground">v{projectConfig.version}</span>
          )}
          <div className="flex items-center gap-2 border-l pl-4 border-border">
            <span className="text-xs font-medium text-muted-foreground">Powered by</span>
            <span className="text-xs font-bold text-primary">CogniDocs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
