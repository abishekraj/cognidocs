import React, { useEffect, useState } from 'react';
import { DependencyGraph } from '@cognidocs/graph-viz';

export function GraphPage() {
  const [graphData, setGraphData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const basePath = import.meta.env.BASE_URL || '/';
    fetch(`${basePath}content/graph.json`)
      .then((res) => res.json())
      .then((data) => {
        setGraphData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load graph data', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading dependency graph...</div>
      </div>
    );
  }

  if (!graphData) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-destructive">Failed to load graph data</div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-180px)]">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-foreground mb-2">Dependency Graph</h1>
        <p className="text-muted-foreground">
          Visualize the relationships between your project's components and modules
        </p>
      </div>
      <div
        className="border border-border rounded-lg overflow-hidden"
        style={{ height: 'calc(100% - 100px)' }}
      >
        <DependencyGraph data={graphData} />
      </div>
    </div>
  );
}
