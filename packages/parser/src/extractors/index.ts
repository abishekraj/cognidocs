/**
 * Metadata Extractors
 * Phase 1: Foundation
 */

export class JSDocExtractor {
  extractFromComment(_comment: string): any {
    // TODO: Phase 1 - Parse JSDoc tags (@param, @returns, etc.)
    return {};
  }
}

export class TypeExtractor {
  extractTypeInfo(_type: any): string {
    // TODO: Phase 1 - Convert TypeScript types to readable strings
    return 'any';
  }
}
