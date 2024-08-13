import React from 'react';
import clsx from 'clsx';

function Skeleton({
  className,
  show = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  show?: boolean;
}) {
  if (!show) return props.children;
  return (
    <span
      className={clsx(
        'relative block h-6 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700',
        props.children && 'h-auto *:invisible',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
