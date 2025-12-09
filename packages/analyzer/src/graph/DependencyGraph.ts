import * as path from 'path';
import type { ParseResult, ImportMetadata } from '@cognidocs/types';

export interface DependencyNode {
  id: string; // filePath
  imports: string[]; // filePaths of imported modules
  exports: string[]; // exported symbols
  circular: boolean;
  externalImports: string[]; // numpy, react, etc.
}

export interface GraphResult {
  nodes: Record<string, DependencyNode>;
  circularCount: number;
}

export class DependencyGraph {
  private nodes: Map<string, DependencyNode> = new Map();

  constructor(private parseResults: ParseResult[]) {
    this.buildGraph();
  }

  private buildGraph() {
    // Initialize nodes
    for (const result of this.parseResults) {
      this.nodes.set(result.filePath, {
        id: result.filePath,
        imports: [],
        exports: result.exports || [],
        circular: false,
        externalImports: [],
      });
    }

    // Connect edges
    for (const result of this.parseResults) {
      const node = this.nodes.get(result.filePath)!;

      for (const imp of result.imports) {
        // Resolve import to absolute path or mark as external
        const resolvedPath = this.resolveImport(imp, result.filePath);

        if (resolvedPath && this.nodes.has(resolvedPath)) {
          node.imports.push(resolvedPath);
        } else {
          node.externalImports.push(imp.source);
        }
      }
    }

    // Detect cycles
    this.detectCycles();
  }

  private resolveImport(imp: ImportMetadata, currentFile: string): string | null {
    // Only handle relative imports for internal graph
    if (imp.source.startsWith('.')) {
      const dir = path.dirname(currentFile);
      const absolutePath = path.resolve(dir, imp.source);

      // 1. Try exact match
      if (this.nodes.has(absolutePath)) return absolutePath;

      // 2. Try extensions
      const extensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx'];
      for (const ext of extensions) {
        const pathWithExt = absolutePath + ext;
        if (this.nodes.has(pathWithExt)) return pathWithExt;
      }

      // 3. Try directory index (e.g. ./utils -> ./utils/index.ts)
      for (const ext of extensions) {
        const indexPath = path.join(absolutePath, 'index' + ext);
        if (this.nodes.has(indexPath)) return indexPath;
      }
    }

    return null;
  }

  private detectCycles() {
    const visited = new Set<string>();
    const recursionStack = new Set<string>();

    for (const nodeId of this.nodes.keys()) {
      // Clear stack for distinct connected components
      if (!visited.has(nodeId)) {
        this.detectCycleUtil(nodeId, visited, recursionStack);
      }
    }
  }

  private detectCycleUtil(
    nodeId: string,
    visited: Set<string>,
    recursionStack: Set<string>
  ): boolean {
    if (recursionStack.has(nodeId)) {
      this.nodes.get(nodeId)!.circular = true;
      return true;
    }
    if (visited.has(nodeId)) return false;

    visited.add(nodeId);
    recursionStack.add(nodeId);

    const node = this.nodes.get(nodeId);
    let cycleFound = false;

    if (node) {
      for (const neighbor of node.imports) {
        if (this.detectCycleUtil(neighbor, visited, recursionStack)) {
          node.circular = true;
          cycleFound = true;
        }
      }
    }

    recursionStack.delete(nodeId);
    return cycleFound;
  }

  public getGraph(): GraphResult {
    const nodesRecord: Record<string, DependencyNode> = {};
    let circularCount = 0;

    this.nodes.forEach((node, id) => {
      nodesRecord[id] = node;
      if (node.circular) circularCount++;
    });

    return {
      nodes: nodesRecord,
      circularCount,
    };
  }
}
