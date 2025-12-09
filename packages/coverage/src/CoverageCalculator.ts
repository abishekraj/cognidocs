import type { ParseResult } from '@cognidocs/types';

export interface CoverageScore {
  total: number;
  documented: number;
  percentage: number;
}

export interface FileCoverage {
  filePath: string;
  score: CoverageScore;
  components: CoverageScore;
  functions: CoverageScore;
  classes: CoverageScore;
  interfaces: CoverageScore;
}

export interface CoverageReport {
  overall: CoverageScore;
  files: FileCoverage[];
}

export class CoverageCalculator {
  constructor(private results: ParseResult[]) {}

  public calculate(): CoverageReport {
    const fileCoverages: FileCoverage[] = this.results.map((result) =>
      this.calculateFileCoverage(result)
    );

    const overallTotal = fileCoverages.reduce((sum, fc) => sum + fc.score.total, 0);
    const overallDocumented = fileCoverages.reduce((sum, fc) => sum + fc.score.documented, 0);

    return {
      overall: {
        total: overallTotal,
        documented: overallDocumented,
        percentage: overallTotal > 0 ? (overallDocumented / overallTotal) * 100 : 100,
      },
      files: fileCoverages,
    };
  }

  private calculateFileCoverage(result: ParseResult): FileCoverage {
    // We treat "Components" as extracted via ReactParser and attached to result if present,
    // or we might need to look at 'components' property if it exists in the extended type.
    // Assuming ParseResult was extended or we check result.components which CLI attaches.
    // result type in types package might need 'components'.
    // For Phase 1 we saw CLI attaching 'components' property to result.
    // We should cast or update types if needed.

    const components = (result as any).components || [];

    const compScore = this.calculateScore(components);
    const funcScore = this.calculateScore(result.functions);
    const classScore = this.calculateScore(result.classes);
    const ifaceScore = this.calculateScore(result.interfaces);

    const total = compScore.total + funcScore.total + classScore.total + ifaceScore.total;
    const documented =
      compScore.documented + funcScore.documented + classScore.documented + ifaceScore.documented;

    return {
      filePath: result.filePath,
      score: {
        total,
        documented,
        percentage: total > 0 ? (documented / total) * 100 : 100,
      },
      components: compScore,
      functions: funcScore,
      classes: classScore,
      interfaces: ifaceScore,
    };
  }

  private calculateScore(items: Array<{ description?: string }>): CoverageScore {
    const total = items.length;
    const documented = items.filter(
      (item) => !!item.description && item.description.trim().length > 0
    ).length;

    return {
      total,
      documented,
      percentage: total > 0 ? (documented / total) * 100 : 100,
    };
  }
}
