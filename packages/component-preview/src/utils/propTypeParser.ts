import type { PropEditorType, PropEditorConfig, PropertyMetadata } from '@cognidocs/types';

/**
 * Parse TypeScript type string to determine the appropriate editor type
 *
 * @param typeString - TypeScript type as string (e.g., "string", "'primary' | 'secondary'", "number")
 * @returns PropEditorType
 */
export function parseTypeString(typeString: string | undefined): PropEditorType {
  if (!typeString) {
    return 'string';
  }

  const normalized = typeString.trim();

  // Check for React node types
  if (
    normalized.includes('React.ReactNode') ||
    normalized.includes('ReactNode') ||
    normalized.includes('JSX.Element')
  ) {
    return 'react-node';
  }

  // Check for function types
  if (
    normalized.includes('=>') ||
    normalized.startsWith('(') ||
    normalized.includes('Function')
  ) {
    return 'function';
  }

  // Check for array types
  if (normalized.endsWith('[]') || normalized.startsWith('Array<')) {
    return 'array';
  }

  // Check for union types (enums)
  if (normalized.includes('|')) {
    return 'enum';
  }

  // Check for object/interface types
  if (normalized.startsWith('{') || normalized.startsWith('interface')) {
    return 'object';
  }

  // Primitive types
  if (normalized === 'string') return 'string';
  if (normalized === 'number') return 'number';
  if (normalized === 'boolean') return 'boolean';

  // Default to string for unknown types
  return 'string';
}

/**
 * Extract enum values from union type string
 *
 * @param typeString - Union type string (e.g., "'primary' | 'secondary' | 'danger'")
 * @returns Array of enum values
 */
export function extractEnumValues(typeString: string): string[] {
  if (!typeString.includes('|')) {
    return [];
  }

  return typeString
    .split('|')
    .map((value) => value.trim())
    .map((value) => {
      // Remove quotes from string literals
      if ((value.startsWith("'") && value.endsWith("'")) ||
          (value.startsWith('"') && value.endsWith('"'))) {
        return value.slice(1, -1);
      }
      return value;
    })
    .filter(Boolean);
}

/**
 * Convert PropertyMetadata to PropEditorConfig
 *
 * @param prop - PropertyMetadata from parser
 * @returns PropEditorConfig for editor rendering
 */
export function propertyToPropEditorConfig(prop: PropertyMetadata): PropEditorConfig {
  const editorType = parseTypeString(prop.type);
  const enumValues = editorType === 'enum' && prop.type
    ? extractEnumValues(prop.type)
    : undefined;

  return {
    name: prop.name,
    type: editorType,
    defaultValue: prop.defaultValue,
    enumValues,
    required: prop.required ?? !prop.optional,
    description: prop.description,
  };
}

/**
 * Parse default value string to appropriate type
 *
 * @param defaultValue - Default value as string
 * @param editorType - The editor type
 * @returns Parsed value
 */
export function parseDefaultValue(
  defaultValue: string | undefined,
  editorType: PropEditorType
): unknown {
  if (!defaultValue) {
    return getDefaultForType(editorType);
  }

  try {
    switch (editorType) {
      case 'boolean':
        return defaultValue === 'true';

      case 'number':
        return Number(defaultValue);

      case 'array':
      case 'object':
        // Try to parse as JSON
        return JSON.parse(defaultValue);

      case 'function':
        // Return function placeholder
        return undefined;

      case 'react-node':
        // Return string for React nodes
        return defaultValue.replace(/['"]/g, '');

      case 'string':
      case 'enum':
      default:
        // Remove quotes if present
        return defaultValue.replace(/^['"]|['"]$/g, '');
    }
  } catch {
    return getDefaultForType(editorType);
  }
}

/**
 * Get default value for a given editor type
 *
 * @param editorType - The editor type
 * @returns Default value
 */
export function getDefaultForType(editorType: PropEditorType): unknown {
  switch (editorType) {
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'boolean':
      return false;
    case 'enum':
      return '';
    case 'array':
      return [];
    case 'object':
      return {};
    case 'function':
      return undefined;
    case 'react-node':
      return '';
    default:
      return '';
  }
}

/**
 * Validate prop value against its type
 *
 * @param value - The value to validate
 * @param config - Editor configuration
 * @returns Validation result with error message if invalid
 */
export function validatePropValue(
  value: unknown,
  config: PropEditorConfig
): { valid: boolean; error?: string } {
  // Required field validation
  if (config.required && (value === undefined || value === null || value === '')) {
    return { valid: false, error: `${config.name} is required` };
  }

  // Type-specific validation
  switch (config.type) {
    case 'number':
      if (typeof value === 'string' && value !== '') {
        const num = Number(value);
        if (isNaN(num)) {
          return { valid: false, error: 'Must be a valid number' };
        }
      }
      break;

    case 'enum':
      if (config.enumValues && value && !config.enumValues.includes(String(value))) {
        return {
          valid: false,
          error: `Must be one of: ${config.enumValues.join(', ')}`
        };
      }
      break;

    case 'array':
      if (typeof value === 'string') {
        try {
          const parsed = JSON.parse(value);
          if (!Array.isArray(parsed)) {
            return { valid: false, error: 'Must be a valid JSON array' };
          }
        } catch {
          return { valid: false, error: 'Must be valid JSON' };
        }
      }
      break;

    case 'object':
      if (typeof value === 'string') {
        try {
          JSON.parse(value);
        } catch {
          return { valid: false, error: 'Must be valid JSON' };
        }
      }
      break;
  }

  return { valid: true };
}
