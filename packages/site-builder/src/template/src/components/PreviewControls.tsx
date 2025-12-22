/**
 * PreviewControls - Controls for the component preview
 * Phase 6.5: Integration with Site Builder
 */

import { Play, RotateCw, Maximize2 } from 'lucide-react';

interface PreviewControlsProps {
  onRefresh?: () => void;
  onFullscreen?: () => void;
  isLoading?: boolean;
}

export function PreviewControls({
  onRefresh,
  onFullscreen,
  isLoading = false,
}: PreviewControlsProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Refresh button */}
      <button
        onClick={onRefresh}
        disabled={isLoading}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        title="Refresh preview"
      >
        <RotateCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        Refresh
      </button>

      {/* Fullscreen button */}
      {onFullscreen && (
        <button
          onClick={onFullscreen}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          title="Fullscreen preview"
        >
          <Maximize2 className="h-4 w-4" />
          Fullscreen
        </button>
      )}

      {/* Status indicator */}
      <div className="flex items-center gap-2 ml-auto">
        {isLoading ? (
          <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Play className="h-4 w-4 animate-pulse" />
            Rendering...
          </span>
        ) : (
          <span className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            Ready
          </span>
        )}
      </div>
    </div>
  );
}
