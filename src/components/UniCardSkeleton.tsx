import React from 'react';
import { clsx } from 'clsx';
import { Skeleton } from './Skeleton';

interface DateSkeletonProps {
  formattedDate: string;
}

export const UniCardSkeleton = ({ formattedDate }: DateSkeletonProps) => {
  return (
    <>
      <p className="text-sm">{formattedDate}</p>
      <div className="flex flex-col justify-center items-center pb-4 text-light-text dark:text-dark-text">
        <p className="h-20 w-20 p-2 mt-2">
          <Skeleton />
        </p>
        <p className="h-[3.158rem] w-40 py-1 my-1">
          <Skeleton />
        </p>
        <p className="h-6 w-28 py-1">
          <Skeleton />
        </p>
      </div>

      <div
        className={clsx(
          'flex flex-col justify-center items-center gap-4',
          'border-t border-t-light-text/20 dark:border-t-dark-text/20',
          'pt-4'
        )}>
        <p className="inline-flex flex-col justify-center items-center">
          <span className="text-sm">Study period</span>
          <span className="h-6 w-[14.209375rem] py-1">
            <Skeleton />
          </span>
        </p>
        <p className="inline-flex flex-col justify-center items-center gap-x-1">
          <span className="text-sm">Exam period</span>
          <span className="h-6 w-[14.209375rem] py-1">
            <Skeleton />
          </span>
        </p>
      </div>
    </>
  );
};
