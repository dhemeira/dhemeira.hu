import React, { memo } from 'react';
import { clsx } from 'clsx';
import { Skeleton } from './Skeleton';

interface DateSkeletonProps {
  formattedDate: string;
}

const SkeletonText = memo(({ className }: { className: string }) => (
  <p className={className}>
    <Skeleton />
  </p>
));

const SkeletonSection = memo(({ title }: { title: string }) => (
  <p className="inline-flex flex-col justify-center items-center">
    <span className="text-sm">{title}</span>
    <span className="h-6 w-[14.209375rem] py-1">
      <Skeleton />
    </span>
  </p>
));

export const UniCardSkeleton = memo(({ formattedDate }: DateSkeletonProps) => {
  return (
    <>
      <p className="text-sm">{formattedDate}</p>
      <div className="flex flex-col justify-center items-center pb-4 text-light-text dark:text-dark-text">
        <SkeletonText className="h-20 w-20 p-2 mt-2" />
        <SkeletonText className="h-[3.158rem] w-40 py-1 my-1" />
        <SkeletonText className="h-6 w-28 py-1" />
      </div>

      <div
        className={clsx(
          'flex flex-col justify-center items-center gap-4',
          'border-t border-t-light-text/20 dark:border-t-dark-text/20',
          'pt-4'
        )}>
        <SkeletonSection title="Study period" />
        <SkeletonSection title="Exam period" />
      </div>
    </>
  );
});
