import { useState, useCallback } from 'react';
import type { PropertyMetadata } from '@cognidocs/types';
import { propertyToPropEditorConfig, parseDefaultValue } from '../utils/propTypeParser';

export interface PropValue {
  value: unknown;
  error?: string;
}

export interface PreviewStateHook {
  /** Current prop values */
  propValues: Record<string, PropValue>;
  /** Update a single prop value */
  updateProp: (name: string, value: unknown) => void;
  /** Update multiple props at once */
  updateProps: (props: Record<string, unknown>) => void;
  /** Reset all props to defaults */
  resetProps: () => void;
  /** Get flattened prop values (without errors) */
  getValues: () => Record<string, unknown>;
  /** Check if there are any validation errors */
  hasErrors: () => boolean;
  /** Error state (initialization or validation) */
  error: Error | null;
}

/**
 * Hook for managing preview prop state
 *
 * @param props - Array of PropertyMetadata from parser
 * @param initialValues - Optional initial values for props
 * @returns PreviewStateHook
 */
export function usePreviewState(
  props: PropertyMetadata[] = [],
  initialValues?: Record<string, unknown>
): PreviewStateHook {
  const [error, setError] = useState<Error | null>(null);

  // Initialize prop values with defaults
  const getInitialState = useCallback(() => {
    try {
      const state: Record<string, PropValue> = {};

      if (!props || !Array.isArray(props)) {
        return state;
      }

      props.forEach((prop) => {
        const config = propertyToPropEditorConfig(prop);
        const initialValue = initialValues?.[prop.name];
        const defaultValue = parseDefaultValue(prop.defaultValue, config.type, prop.name);

        state[prop.name] = {
          value: initialValue ?? defaultValue,
          error: undefined,
        };
      });

      return state;
    } catch (err) {
      setError(err as Error);
      return {};
    }
  }, [props, initialValues]);

  const [propValues, setPropValues] = useState<Record<string, PropValue>>(getInitialState);

  // Update a single prop
  const updateProp = useCallback((name: string, value: unknown) => {
    setPropValues((prev) => ({
      ...prev,
      [name]: {
        value,
        error: undefined, // Clear error on update
      },
    }));
  }, []);

  // Update multiple props
  const updateProps = useCallback((newProps: Record<string, unknown>) => {
    setPropValues((prev) => {
      const updated = { ...prev };
      Object.entries(newProps).forEach(([name, value]) => {
        updated[name] = {
          value,
          error: undefined,
        };
      });
      return updated;
    });
  }, []);

  // Reset to defaults
  const resetProps = useCallback(() => {
    setPropValues(getInitialState());
  }, [getInitialState]);

  // Get values without errors
  const getValues = useCallback(() => {
    const values: Record<string, unknown> = {};
    Object.entries(propValues).forEach(([name, propValue]) => {
      values[name] = propValue.value;
    });
    return values;
  }, [propValues]);

  // Check for errors
  const hasErrors = useCallback(() => {
    return Object.values(propValues).some((propValue) => !!propValue.error);
  }, [propValues]);

  return {
    propValues,
    updateProp,
    updateProps,
    resetProps,
    getValues,
    hasErrors,
    error,
  };
}
