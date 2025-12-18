import { useEffect, useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  FileCode,
  Box,
  Layers,
  GitBranch,
  Package,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Clock,
  Zap,
  BarChart3,
  BookOpen,
  Code2,
  FileJson,
  Network,
} from 'lucide-react';

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
  results?: Array<{
    functions: Array<{ description?: string }>;
    classes: Array<{ description?: string }>;
    interfaces: Array<{ description?: string }>;
    types: Array<{ description?: string }>;
    components?: Array<{ description?: string }>;
  }>;
}

interface CoverageMetrics {
  documentedFunctions: number;
  totalFunctions: number;
  documentedClasses: number;
  totalClasses: number;
  documentedInterfaces: number;
  totalInterfaces: number;
  documentedTypes: number;
  totalTypes: number;
  documentedComponents: number;
  totalComponents: number;
  overallCoverage: number;
}

export function OverviewPage() {
  const [data, setData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [coverage, setCoverage] = useState<CoverageMetrics | null>(null);

  useEffect(() => {
    fetch('/content/data.json')
      .then((res) => res.json())
      .then((d) => {
        setData(d);

        // Calculate documentation coverage
        if (d.results) {
          const metrics = calculateCoverage(d.results, d.stats);
          setCoverage(metrics);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load project data', err);
        setLoading(false);
      });
  }, []);

  const calculateCoverage = (results: any[], stats: any): CoverageMetrics => {
    let documentedFunctions = 0;
    let documentedClasses = 0;
    let documentedInterfaces = 0;
    let documentedTypes = 0;
    let documentedComponents = 0;

    results.forEach((result) => {
      if (result.functions) {
        documentedFunctions += result.functions.filter((f: any) => f.description).length;
      }
      if (result.classes) {
        documentedClasses += result.classes.filter((c: any) => c.description).length;
      }
      if (result.interfaces) {
        documentedInterfaces += result.interfaces.filter((i: any) => i.description).length;
      }
      if (result.types) {
        documentedTypes += result.types.filter((t: any) => t.description).length;
      }
      if (result.components) {
        documentedComponents += result.components.filter((c: any) => c.description).length;
      }
    });

    const totalDocumented =
      documentedFunctions +
      documentedClasses +
      documentedInterfaces +
      documentedTypes +
      documentedComponents;
    const totalItems =
      stats.functions + stats.classes + stats.interfaces + stats.types + stats.components;
    const overallCoverage = totalItems > 0 ? Math.round((totalDocumented / totalItems) * 100) : 0;

    return {
      documentedFunctions,
      totalFunctions: stats.functions,
      documentedClasses,
      totalClasses: stats.classes,
      documentedInterfaces,
      totalInterfaces: stats.interfaces,
      documentedTypes,
      totalTypes: stats.types,
      documentedComponents,
      totalComponents: stats.components,
      overallCoverage,
    };
  };

  const getCoverageColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getCoverageBadgeVariant = (
    percentage: number
  ): 'default' | 'secondary' | 'destructive' | 'outline' => {
    if (percentage >= 80) return 'default';
    if (percentage >= 50) return 'secondary';
    return 'destructive';
  };

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
      bgColor: 'bg-blue-100 dark:bg-blue-950',
    },
    {
      label: 'Components',
      value: data.stats.components,
      icon: Box,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-950',
    },
    {
      label: 'Functions',
      value: data.stats.functions,
      icon: FileCode,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-950',
    },
    {
      label: 'Interfaces',
      value: data.stats.interfaces,
      icon: Layers,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-950',
    },
    {
      label: 'Classes',
      value: data.stats.classes,
      icon: Package,
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-950',
    },
    {
      label: 'Types',
      value: data.stats.types,
      icon: GitBranch,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-100 dark:bg-cyan-950',
    },
  ];

  // Calculate API Route stats
  let apiRoutesCount = 0;
  if (data.results) {
    data.results.forEach((file) => {
      if (file.components) {
        file.components.forEach((comp: any) => {
          if (comp.isApiRoute) {
            apiRoutesCount++;
          }
        });
      }
    });
  }

  if (apiRoutesCount > 0) {
    stats.push({
      label: 'API Routes',
      value: apiRoutesCount,
      icon: Network,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100 dark:bg-pink-950',
    });
  }

  const totalCodeElements =
    data.stats.components +
    data.stats.functions +
    data.stats.classes +
    data.stats.interfaces +
    data.stats.types;

  return (
    <div className="space-y-6 min-w-0">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Project Overview</h1>
        <p className="text-muted-foreground flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Documentation generated on {new Date(data.metadata.generatedAt).toLocaleString()}
        </p>
      </div>

      {/* Key Metrics Summary */}
      {coverage && (
        <Card className="p-6 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Documentation Health
              </h2>
              <p className="text-sm text-muted-foreground">
                Overall documentation coverage and quality metrics
              </p>
            </div>
            <Badge
              variant={getCoverageBadgeVariant(coverage.overallCoverage)}
              className="text-lg px-4 py-2"
            >
              {coverage.overallCoverage}% Coverage
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            <div className="text-center p-4 rounded-lg bg-background/50 border border-primary/20">
              <div className={`text-3xl font-bold ${getCoverageColor(coverage.overallCoverage)}`}>
                {coverage.overallCoverage}%
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-semibold">Overall</div>
              <div className="text-xs text-muted-foreground">
                {coverage.documentedFunctions +
                  coverage.documentedClasses +
                  coverage.documentedInterfaces +
                  coverage.documentedTypes +
                  coverage.documentedComponents}
                /{totalCodeElements}
              </div>
            </div>

            {coverage.totalComponents > 0 && (
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div
                  className={`text-3xl font-bold ${getCoverageColor(Math.round((coverage.documentedComponents / coverage.totalComponents) * 100))}`}
                >
                  {Math.round((coverage.documentedComponents / coverage.totalComponents) * 100)}%
                </div>
                <div className="text-xs text-muted-foreground mt-1">Components</div>
                <div className="text-xs text-muted-foreground">
                  {coverage.documentedComponents}/{coverage.totalComponents}
                </div>
              </div>
            )}

            {coverage.totalFunctions > 0 && (
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div
                  className={`text-3xl font-bold ${getCoverageColor(Math.round((coverage.documentedFunctions / coverage.totalFunctions) * 100))}`}
                >
                  {Math.round((coverage.documentedFunctions / coverage.totalFunctions) * 100)}%
                </div>
                <div className="text-xs text-muted-foreground mt-1">Functions</div>
                <div className="text-xs text-muted-foreground">
                  {coverage.documentedFunctions}/{coverage.totalFunctions}
                </div>
              </div>
            )}

            {coverage.totalClasses > 0 && (
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div
                  className={`text-3xl font-bold ${getCoverageColor(Math.round((coverage.documentedClasses / coverage.totalClasses) * 100))}`}
                >
                  {Math.round((coverage.documentedClasses / coverage.totalClasses) * 100)}%
                </div>
                <div className="text-xs text-muted-foreground mt-1">Classes</div>
                <div className="text-xs text-muted-foreground">
                  {coverage.documentedClasses}/{coverage.totalClasses}
                </div>
              </div>
            )}

            {coverage.totalInterfaces > 0 && (
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div
                  className={`text-3xl font-bold ${getCoverageColor(Math.round((coverage.documentedInterfaces / coverage.totalInterfaces) * 100))}`}
                >
                  {Math.round((coverage.documentedInterfaces / coverage.totalInterfaces) * 100)}%
                </div>
                <div className="text-xs text-muted-foreground mt-1">Interfaces</div>
                <div className="text-xs text-muted-foreground">
                  {coverage.documentedInterfaces}/{coverage.totalInterfaces}
                </div>
              </div>
            )}

            {coverage.totalTypes > 0 && (
              <div className="text-center p-4 rounded-lg bg-background/50">
                <div
                  className={`text-3xl font-bold ${getCoverageColor(Math.round((coverage.documentedTypes / coverage.totalTypes) * 100))}`}
                >
                  {Math.round((coverage.documentedTypes / coverage.totalTypes) * 100)}%
                </div>
                <div className="text-xs text-muted-foreground mt-1">Types</div>
                <div className="text-xs text-muted-foreground">
                  {coverage.documentedTypes}/{coverage.totalTypes}
                </div>
              </div>
            )}
          </div>

          {/* Coverage Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Documentation Progress</span>
              <span>{coverage.overallCoverage}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  coverage.overallCoverage >= 80
                    ? 'bg-green-500'
                    : coverage.overallCoverage >= 50
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                }`}
                style={{ width: `${coverage.overallCoverage}%` }}
              />
            </div>
          </div>
        </Card>
      )}

      {/* Stats Grid */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Project Statistics
        </h2>
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
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Project Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Configuration */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FileJson className="h-5 w-5" />
            Configuration
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground min-w-[120px]">Entry Point:</span>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                {data.metadata.config.entry}
              </code>
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

        {/* Quality Insights */}
        {coverage && (
          <Card className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quality Insights
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                {coverage.overallCoverage >= 80 ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                )}
                <div>
                  <div className="text-sm font-medium">Documentation Coverage</div>
                  <div className="text-xs text-muted-foreground">
                    {coverage.overallCoverage >= 80
                      ? 'Excellent! Your project has great documentation coverage.'
                      : coverage.overallCoverage >= 50
                        ? 'Good start! Consider documenting more code elements.'
                        : 'Consider adding more documentation to improve clarity.'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Code Elements</div>
                  <div className="text-xs text-muted-foreground">
                    {totalCodeElements} total code elements across {data.stats.files} files
                  </div>
                </div>
              </div>

              {data.stats.components > 0 && (
                <div className="flex items-start gap-3">
                  <Box className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Component Library</div>
                    <div className="text-xs text-muted-foreground">
                      {data.stats.components} reusable component
                      {data.stats.components !== 1 ? 's' : ''} detected
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>

      {/* Quick Links */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a
            href="#/README"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Go to Introduction page"
          >
            <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <div className="font-medium">Introduction</div>
              <div className="text-xs text-muted-foreground">Read the README</div>
            </div>
          </a>
          <a
            href="#/graph"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Go to Dependency Graph page"
          >
            <GitBranch className="h-5 w-5 text-primary" aria-hidden="true" />
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
