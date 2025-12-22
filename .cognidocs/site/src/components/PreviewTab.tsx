/**
 * PreviewTab - Live Component Preview with Interactive Props Editor
 * Phase 6: Component Previews
 */

import { useMemo } from 'react';
import { PreviewRenderer } from '../component-preview/PreviewRenderer';
import { PropsEditor } from '../component-preview/PropsEditor';
import { usePreviewState } from '../component-preview/hooks/usePreviewState';
import { AlertCircle, Eye } from 'lucide-react';

interface ComponentData {
  name: string;
  type: 'function' | 'class';
  description?: string;
  props: Array<{
    name: string;
    type: string;
    required?: boolean;
    description?: string;
  }>;
  hooks?: string[];
  filePath: string;
  line: number;
  framework: string;
  isExported: boolean;
}

interface PreviewTabProps {
  component: ComponentData;
  componentSource?: string;
}

export function PreviewTab({ component, componentSource }: PreviewTabProps) {
  // DEBUG: Log what we receive
  console.log('[PreviewTab] Component name:', component.name);
  console.log('[PreviewTab] Component source available:', !!componentSource);
  console.log('[PreviewTab] Component source length:', componentSource?.length);
  console.log('[PreviewTab] Component source preview:', componentSource?.substring(0, 100));

  // Check if source is available
  if (!componentSource) {
    return (
      <div className="flex flex-col h-full min-h-[600px]">
        <div className="border-b border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Live Preview: {component.name}
          </h2>
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <AlertCircle className="mx-auto h-16 w-16 text-amber-500" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Component Source Not Available
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              The source code for this component could not be loaded. Make sure the component is
              exported and the file path is correct.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Ensure props is always an array
  const safeProps = component.props || [];

  // Initialize preview state (usePreviewState expects raw PropertyMetadata[])
  const { propValues, updateProp, resetProps, hasErrors, getValues, error } =
    usePreviewState(safeProps);

  // Memoize current prop values - this will update when propValues changes
  const currentProps = useMemo(() => getValues(), [propValues, getValues]);

  return (
    <div className="flex flex-col h-full min-h-[600px]">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Live Preview: {component.name}
          </h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Edit props to see live updates • Changes are sandboxed and safe
        </p>
      </div>

      {/* Main Content - Split View */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Props Editor - Left Side */}
        <div className="w-full lg:w-2/5 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Props Editor
            </h3>
            <PropsEditor
              props={safeProps}
              values={propValues}
              onUpdateProp={updateProp}
              onResetProps={resetProps}
              checkErrors={hasErrors}
              getPropValues={getValues}
            />
          </div>
        </div>

        {/* Preview Renderer - Right Side */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-950">
          <div className="p-6">
            <PreviewRenderer
              metadata={{
                componentName: component.name,
                filePath: component.filePath,
                props: safeProps.map((p) => ({
                  name: p.name,
                  type: p.type,
                  required: p.required || false,
                  description: p.description,
                })),
                dependencies: [],
                framework: component.framework as 'react' | 'nextjs' | 'vue' | 'svelte',
                source: componentSource,
              }}
              initialProps={currentProps}
            />
          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-red-800 dark:text-red-300">
                Preview Error
              </h4>
              <p className="text-sm text-red-700 dark:text-red-400 mt-1">{error.message}</p>
              {error.stack && (
                <pre className="text-xs text-red-600 dark:text-red-500 mt-2 overflow-x-auto">
                  {error.stack}
                </pre>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
