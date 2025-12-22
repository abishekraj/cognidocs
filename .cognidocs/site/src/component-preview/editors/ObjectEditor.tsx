import { useState } from 'react';
import type { PropEditorConfig } from '@cognidocs/types';

export interface ObjectEditorProps {
  config: PropEditorConfig;
  value: object | string;
  onChange: (value: object) => void;
  error?: string;
}

/**
 * Object/JSON editor component with validation
 */
export const ObjectEditor: React.FC<ObjectEditorProps> = ({
  config,
  value,
  onChange,
  error,
}) => {
  const [jsonString, setJsonString] = useState(() =>
    typeof value === 'string' ? value : JSON.stringify(value, null, 2)
  );
  const [parseError, setParseError] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setJsonString(newValue);

    // Try to parse JSON
    try {
      const parsed = JSON.parse(newValue);
      setParseError(undefined);
      onChange(parsed);
    } catch (err) {
      setParseError('Invalid JSON');
    }
  };

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonString);
      const formatted = JSON.stringify(parsed, null, 2);
      setJsonString(formatted);
      setParseError(undefined);
      onChange(parsed);
    } catch {
      setParseError('Cannot format invalid JSON');
    }
  };

  const displayError = error || parseError;

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <label
          htmlFor={`prop-${config.name}`}
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#374151',
          }}
        >
          {config.name}
          {config.required && <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>}
        </label>

        <button
          type="button"
          onClick={handleFormat}
          style={{
            padding: '4px 8px',
            fontSize: '11px',
            backgroundColor: '#f3f4f6',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#374151',
          }}
        >
          Format JSON
        </button>
      </div>

      {config.description && (
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#6b7280' }}>
          {config.description}
        </p>
      )}

      <textarea
        id={`prop-${config.name}`}
        value={jsonString}
        onChange={handleChange}
        placeholder='{ "key": "value" }'
        rows={6}
        style={{
          width: '100%',
          padding: '8px 12px',
          fontSize: '13px',
          fontFamily: 'monospace',
          border: displayError ? '1px solid #ef4444' : '1px solid #d1d5db',
          borderRadius: '6px',
          outline: 'none',
          resize: 'vertical',
          transition: 'border-color 0.2s',
        }}
      />

      {displayError && (
        <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#ef4444' }}>
          {displayError}
        </p>
      )}
    </div>
  );
};
