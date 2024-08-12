import React from 'react';
import { AcademicCalendar, TypeOfWeek } from '../utils/academicCalendar';
import { clsx } from 'clsx';

interface UniCardContentProps {
  formattedDate: string;
  type: TypeOfWeek;
  dates: AcademicCalendar;
}

export const UniCardContent = ({ formattedDate, type, dates }: UniCardContentProps) => {
  return (
    <>
      <p className="text-sm">{formattedDate}</p>
      <div className="flex flex-col justify-center items-center pb-4 text-light-text dark:text-dark-text">
        <p className="text-5xl">{AcademicCalendar.weekEmoji(type)}</p>
        <p className="text-4xl font-semibold leading-tight">
          {AcademicCalendar.weekTitle(formattedDate, dates, type)}
        </p>
        <p>{AcademicCalendar.weekType(type)}</p>
      </div>

      <div
        className={clsx(
          'flex flex-col justify-center items-center gap-4',
          'border-t border-t-light-text/20 dark:border-t-dark-text/20',
          'pt-4'
        )}>
        <p className="inline-flex flex-col justify-center items-center">
          <span className="text-sm">Study period</span>
          <span className="inline-flex flex-row gap-1 justify-center items-center">
            {dates.semester_start_date}
            <span>-</span>
            {dates.semester_end_date}
          </span>
        </p>
        <p className="inline-flex flex-col justify-center items-center gap-x-1">
          <span className="text-sm">Exam period</span>
          <span className="inline-flex flex-row gap-1 justify-center items-center">
            {dates.exam_start_date}
            <span>-</span>
            {dates.exam_end_date}
          </span>
        </p>
      </div>
    </>
  );
};
