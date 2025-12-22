import type { PropEditorConfig } from '@cognidocs/types';

export interface NumberEditorProps {
  config: PropEditorConfig;
  value: number | string;
  onChange: (value: number) => void;
  error?: string;
}

/**
 * Number input editor component
 */
export const NumberEditor: React.FC<NumberEditorProps> = ({
  config,
  value,
  onChange,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const val = target.value;
    if (val === '') {
      onChange(0);
    } else {
      const num = Number(val);
      if (!isNaN(num)) {
        onChange(num);
      }
    }
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
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={config.required ? 'Required' : '0'}
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
