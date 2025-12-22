import type { PropEditorConfig } from '@cognidocs/types';

export interface BooleanEditorProps {
  config: PropEditorConfig;
  value: boolean;
  onChange: (value: boolean) => void;
}

/**
 * Boolean checkbox editor component
 */
export const BooleanEditor: React.FC<BooleanEditorProps> = ({
  config,
  value,
  onChange,
}) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        htmlFor={`prop-${config.name}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 500,
          color: '#374151',
        }}
      >
        <input
          id={`prop-${config.name}`}
          type="checkbox"
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
          style={{
            width: '16px',
            height: '16px',
            cursor: 'pointer',
            accentColor: '#3b82f6',
          }}
        />
        <span>{config.name}</span>
        {config.required && <span style={{ color: '#ef4444', marginLeft: '-4px' }}>*</span>}
      </label>

      {config.description && (
        <p style={{ margin: '6px 0 0 24px', fontSize: '12px', color: '#6b7280' }}>
          {config.description}
        </p>
      )}
    </div>
  );
};
