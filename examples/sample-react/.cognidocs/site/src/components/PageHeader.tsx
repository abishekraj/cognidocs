import React, { useEffect, useState } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { RouteMatch } from '../Router';

interface PageHeaderProps {
  route: RouteMatch;
}

interface ProjectConfig {
  name?: string;
  description?: string;
}

export function PageHeader({ route }: PageHeaderProps) {
  const [projectConfig, setProjectConfig] = useState<ProjectConfig>({
    name: 'CogniDocs',
    description: 'Documentation',
  });

  useEffect(() => {
    // Load project configuration from data.json
    fetch('/content/data.json')
      .then((res) => res.json())
      .then((data) => {
        // You could extend this to read from package.json or config
        setProjectConfig({
          name: 'Sample React Project',
          description: 'Component Documentation',
        });
      })
      .catch(() => {
        // Use default
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
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
          <Home className="h-4 w-4 text-muted-foreground" />
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
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

        {/* Project Branding */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Powered by</span>
          <span className="text-sm font-bold text-primary">CogniDocs</span>
        </div>
      </div>
    </div>
  );
}
