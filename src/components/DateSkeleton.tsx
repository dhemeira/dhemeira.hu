import React from 'react';

export const DateSkeleton = () => {
  return (
    <span
      role="status"
      aria-label="Loading..."
      className="h-3 inline-block animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 w-[6.5306rem]"
    />
  );
};
