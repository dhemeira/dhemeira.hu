import React from 'react';

export const Skeleton = () => {
  return (
    <span
      role="status"
      aria-label="Loading..."
      className="h-full w-full inline-block animate-pulse bg-gray-200 rounded-full dark:bg-gray-700"
    />
  );
};
