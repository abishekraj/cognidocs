import type { PropEditorConfig } from '@cognidocs/types';

export interface StringEditorProps {
  config: PropEditorConfig;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

/**
 * String input editor component
 */
export const StringEditor: React.FC<StringEditorProps> = ({
  config,
  value,
  onChange,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    onChange(target.value);
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        htmlFor={`prop-${config.name}`}
        style={{
          display: 'block',
          marginBottom: '6px',
          fontSize: '13px',
          fontWeight: 500,
          color: '#374151',
        }}
      >
        {config.name}
        {config.required && <span style={{ color: '#ef4444', marginLeft: '4px' }}>*</span>}
      </label>

      {config.description && (
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#6b7280' }}>
          {config.description}
        </p>
      )}

      <input
        id={`prop-${config.name}`}
        type="text"
        value={value || ''}
        onChange={handleChange}
        placeholder={config.required ? 'Required' : 'Optional'}
        style={{
          width: '100%',
          padding: '8px 12px',
          fontSize: '14px',
          border: error ? '1px solid #ef4444' : '1px solid #d1d5db',
          borderRadius: '6px',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
      />

      {error && (
        <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#ef4444' }}>
          {error}
        </p>
      )}
    </div>
  );
};
