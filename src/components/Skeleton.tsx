import React, { memo } from 'react';

const skeletonClassNames =
  'h-full w-full inline-block animate-pulse bg-gray-200 rounded-full dark:bg-gray-700';

export const Skeleton = memo(() => {
  return (
    <span
      role="status"
      aria-label="Loading..."
      className={skeletonClassNames}
    />
  );
});
