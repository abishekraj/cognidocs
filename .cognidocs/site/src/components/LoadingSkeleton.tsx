export function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-10 bg-muted rounded-md w-2/3" />
        <div className="h-4 bg-muted rounded-md w-1/2" />
      </div>

      {/* Content Skeleton */}
      <div className="space-y-4">
        <div className="h-32 bg-muted rounded-lg" />
        <div className="h-24 bg-muted rounded-lg" />
        <div className="h-40 bg-muted rounded-lg" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-32 bg-muted rounded-lg" />
        <div className="h-32 bg-muted rounded-lg" />
        <div className="h-32 bg-muted rounded-lg" />
      </div>
    </div>
  );
}
