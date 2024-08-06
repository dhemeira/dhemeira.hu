import React from 'react';

export const DateSkeleton = () => {
  return (
    <div
      role="status"
      aria-label="Loading..."
      className="h-2.5 inline-block animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 w-[6.5306rem]"
    />
  );
};
