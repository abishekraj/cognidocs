export * from './CoverageCalculator';
import { CoverageCalculator, CoverageReport } from './CoverageCalculator';
import type { ParseResult } from '@cognidocs/types';

export function calculateCoverage(results: ParseResult[]): CoverageReport {
  const calculator = new CoverageCalculator(results);
  return calculator.calculate();
}
