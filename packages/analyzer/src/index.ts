export * from './graph/DependencyGraph';

import { DependencyGraph } from './graph/DependencyGraph';
import type { ParseResult } from '@cognidocs/types';

export function analyzeDependencies(results: ParseResult[]) {
  const graph = new DependencyGraph(results);
  return graph.getGraph();
}
