import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CollapsibleContextValue {
  isOpen: boolean;
  toggle: () => void;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | undefined>(
  undefined
);

const useCollapsible = () => {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error('useCollapsible must be used within a Collapsible');
  }
  return context;
};

interface CollapsibleProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Collapsible = ({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: CollapsibleProps) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const toggle = React.useCallback(() => {
    const newValue = !isOpen;
    if (!isControlled) {
      setInternalOpen(newValue);
    }
    onOpenChange?.(newValue);
  }, [isOpen, isControlled, onOpenChange]);

  return (
    <CollapsibleContext.Provider value={{ isOpen, toggle }}>
      <div>{children}</div>
    </CollapsibleContext.Provider>
  );
};

interface CollapsibleTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  CollapsibleTriggerProps
>(({ children, className, asChild, ...props }, ref) => {
  const { isOpen, toggle } = useCollapsible();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: toggle,
      'aria-expanded': isOpen,
    });
  }

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'flex w-full items-center justify-between',
        className
      )}
      onClick={toggle}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <ChevronRight
        className={cn(
          'h-4 w-4 transition-transform duration-200',
          isOpen && 'rotate-90'
        )}
      />
    </button>
  );
});
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ children, className, ...props }, ref) => {
    const { isOpen } = useCollapsible();

    return (
      <div
        ref={ref}
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'animate-accordion-down' : 'animate-accordion-up hidden',
          className
        )}
        {...props}
      >
        {isOpen && children}
      </div>
    );
  }
);
CollapsibleContent.displayName = 'CollapsibleContent';

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
