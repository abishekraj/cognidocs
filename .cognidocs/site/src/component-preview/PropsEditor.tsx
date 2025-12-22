import React from 'react';
import type { PropertyMetadata } from '@cognidocs/types';
import { usePreviewState, type PropValue } from './hooks/usePreviewState';
import { propertyToPropEditorConfig, validatePropValue } from './utils/propTypeParser';
import { StringEditor } from './editors/StringEditor';
import { NumberEditor } from './editors/NumberEditor';
import { BooleanEditor } from './editors/BooleanEditor';
import { EnumEditor } from './editors/EnumEditor';
import { ObjectEditor } from './editors/ObjectEditor';
import { ArrayEditor } from './editors/ArrayEditor';

export interface PropsEditorProps {
  /** Props metadata from parser */
  props: PropertyMetadata[];
  /** Initial prop values */
  initialValues?: Record<string, unknown>;
  /** Callback when props change */
  onChange?: (props: Record<string, unknown>) => void;
  /** Callback when reset button clicked */
  onReset?: () => void;
  /** Optional controlled state values */
  values?: Record<string, PropValue>;
  /** Optional controlled update function */
  onUpdateProp?: (name: string, value: unknown) => void;
  /** Optional controlled reset function */
  onResetProps?: () => void;
  /** Optional controlled hasErrors function */
  checkErrors?: () => boolean;
  /** Optional controlled getValues function */
  getPropValues?: () => Record<string, unknown>;
}

/**
 * PropsEditor - Main component for editing component props
 */
export const PropsEditor: React.FC<PropsEditorProps> = ({
  props,
  initialValues,
  onChange,
  onReset,
  values: externalValues,
  onUpdateProp: externalUpdateProp,
  onResetProps: externalResetProps,
  checkErrors: externalCheckErrors,
  getPropValues: externalGetValues,
}) => {
  // Use internal hook only if external state is NOT provided
  const internalState = usePreviewState(externalValues ? [] : props, initialValues);

  const propValues = externalValues || internalState.propValues;
  const updateProp = externalUpdateProp || internalState.updateProp;
  const resetProps = externalResetProps || internalState.resetProps;
  const getValues = externalGetValues || internalState.getValues;
  const hasErrors = externalCheckErrors || internalState.hasErrors;

  const handlePropChange = (name: string, value: unknown) => {
    updateProp(name, value);
    if (onChange) {
      // Get all values including the new one
      const allValues = getValues();
      allValues[name] = value;
      onChange(allValues);
    }
  };

  const handleReset = () => {
    resetProps();
    if (onReset) {
      onReset();
    }
    if (onChange) {
      onChange(getValues());
    }
  };

  const renderEditor = (prop: PropertyMetadata) => {
    const config = propertyToPropEditorConfig(prop);
    const propValue = propValues[prop.name];
    const value = propValue?.value;
    const validation = validatePropValue(value, config);
    const error = validation.valid ? undefined : validation.error;

    const commonProps = {
      config,
      error,
      onChange: (newValue: unknown) => handlePropChange(prop.name, newValue),
    };

    switch (config.type) {
      case 'string':
        return <StringEditor {...commonProps} value={String(value || '')} />;

      case 'number':
        return <NumberEditor {...commonProps} value={Number(value || 0)} />;

      case 'boolean':
        return <BooleanEditor {...commonProps} value={Boolean(value)} />;

      case 'enum':
        return <EnumEditor {...commonProps} value={String(value || '')} />;

      case 'object':
        return <ObjectEditor {...commonProps} value={(value as object) || {}} />;

      case 'array':
        return <ArrayEditor {...commonProps} value={(value as unknown[]) || []} />;

      case 'function':
        return (
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: 500, color: '#6b7280' }}>
              {config.name} (function)
            </label>
            <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#6b7280' }}>
              Function props are not editable
            </p>
          </div>
        );

      case 'react-node':
        return <StringEditor {...commonProps} value={String(value || '')} />;

      default:
        return <StringEditor {...commonProps} value={String(value || '')} />;
    }
  };

  if (props.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>
        <p style={{ margin: 0, fontSize: '14px' }}>No props to configure</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        maxHeight: '600px',
        overflowY: 'auto',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: '#111827' }}>Props</h3>
        <button
          type="button"
          onClick={handleReset}
          style={{
            padding: '6px 12px',
            fontSize: '13px',
            backgroundColor: '#f3f4f6',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            cursor: 'pointer',
            color: '#374151',
            fontWeight: 500,
          }}
        >
          Reset
        </button>
      </div>

      {/* Editors */}
      <div>
        {props.map((prop) => (
          <div key={prop.name}>{renderEditor(prop)}</div>
        ))}
      </div>

      {/* Validation Summary */}
      {hasErrors() && (
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '6px',
          }}
        >
          <p style={{ margin: 0, fontSize: '13px', color: '#991b1b', fontWeight: 500 }}>
            Please fix validation errors above
          </p>
        </div>
      )}
    </div>
  );
};

export default PropsEditor;
