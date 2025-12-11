import React from 'react';
import { AlertCircle, Info, Lightbulb, AlertTriangle } from 'lucide-react';

export type CalloutType = 'info' | 'warning' | 'tip' | 'danger';

interface CalloutProps {
  type: CalloutType;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-200 dark:border-blue-800',
    iconColor: 'text-blue-600 dark:text-blue-400',
    textColor: 'text-blue-900 dark:text-blue-100',
    title: 'Info',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-yellow-50 dark:bg-yellow-950/30',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    textColor: 'text-yellow-900 dark:text-yellow-100',
    title: 'Warning',
  },
  tip: {
    icon: Lightbulb,
    bgColor: 'bg-green-50 dark:bg-green-950/30',
    borderColor: 'border-green-200 dark:border-green-800',
    iconColor: 'text-green-600 dark:text-green-400',
    textColor: 'text-green-900 dark:text-green-100',
    title: 'Tip',
  },
  danger: {
    icon: AlertCircle,
    bgColor: 'bg-red-50 dark:bg-red-950/30',
    borderColor: 'border-red-200 dark:border-red-800',
    iconColor: 'text-red-600 dark:text-red-400',
    textColor: 'text-red-900 dark:text-red-100',
    title: 'Danger',
  },
};

export const Callout: React.FC<CalloutProps> = ({ type, children, className = '' }) => {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} ${config.textColor} border-l-4 rounded-r-lg p-4 my-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`${config.iconColor} h-5 w-5 flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          <div className="font-semibold mb-1">{config.title}</div>
          <div className="text-sm leading-relaxed prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
