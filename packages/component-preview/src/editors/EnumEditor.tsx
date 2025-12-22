import type { PropEditorConfig } from '@cognidocs/types';

export interface EnumEditorProps {
  config: PropEditorConfig;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

/**
 * Enum/Union type select dropdown editor component
 */
export const EnumEditor: React.FC<EnumEditorProps> = ({
  config,
  value,
  onChange,
  error,
}) => {
  const options = config.enumValues || [];

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

      <select
        id={`prop-${config.name}`}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '8px 12px',
          fontSize: '14px',
          border: error ? '1px solid #ef4444' : '1px solid #d1d5db',
          borderRadius: '6px',
          outline: 'none',
          backgroundColor: '#fff',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
        }}
      >
        {!config.required && (
          <option value="">-- Select --</option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#ef4444' }}>
          {error}
        </p>
      )}

      {options.length === 0 && (
        <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#f59e0b' }}>
          No options available
        </p>
      )}
    </div>
  );
};
