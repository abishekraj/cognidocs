import React, { useEffect, useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { FileCode, Box, Layers, GitBranch, Package, FileText } from 'lucide-react';

interface ProjectData {
  metadata: {
    generatedAt: string;
    config: {
      entry: string;
      theme: string;
      frameworks: string[];
    };
  };
  stats: {
    files: number;
    components: number;
    functions: number;
    classes: number;
    interfaces: number;
    types: number;
  };
}

export function OverviewPage() {
  const [data, setData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/data.json')
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load project data', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading project overview...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-destructive">Failed to load project data</div>
      </div>
    );
  }

  const stats = [
    {
      label: 'Files',
      value: data.stats.files,
      icon: FileText,
      color: 'text-blue-500',
    },
    {
      label: 'Components',
      value: data.stats.components,
      icon: Box,
      color: 'text-green-500',
    },
    {
      label: 'Functions',
      value: data.stats.functions,
      icon: FileCode,
      color: 'text-purple-500',
    },
    {
      label: 'Interfaces',
      value: data.stats.interfaces,
      icon: Layers,
      color: 'text-orange-500',
    },
    {
      label: 'Classes',
      value: data.stats.classes,
      icon: Package,
      color: 'text-red-500',
    },
    {
      label: 'Types',
      value: data.stats.types,
      icon: GitBranch,
      color: 'text-cyan-500',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Project Overview</h1>
        <p className="text-muted-foreground">
          Documentation generated on {new Date(data.metadata.generatedAt).toLocaleString()}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Project Configuration */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <FileCode className="h-6 w-6" />
          Configuration
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground min-w-[120px]">Entry Point:</span>
            <code className="text-sm bg-muted px-2 py-1 rounded">{data.metadata.config.entry}</code>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground min-w-[120px]">Theme:</span>
            <Badge variant="outline">{data.metadata.config.theme}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground min-w-[120px]">Frameworks:</span>
            <div className="flex gap-2">
              {data.metadata.config.frameworks.map((fw) => (
                <Badge key={fw} variant="secondary">
                  {fw}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Links */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a
            href="#/README"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Introduction</div>
              <div className="text-xs text-muted-foreground">Read the README</div>
            </div>
          </a>
          <a
            href="#/graph"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <GitBranch className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">Dependency Graph</div>
              <div className="text-xs text-muted-foreground">Visualize dependencies</div>
            </div>
          </a>
        </div>
      </Card>
    </div>
  );
}
