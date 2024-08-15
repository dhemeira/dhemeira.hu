import { useEffect, useState, useMemo, useCallback, memo } from 'react';
import { cookieValue } from '../utils';
import { AcademicCalendar, TypeOfWeek } from '../utils/academicCalendar';
import { Card } from '../components/Card';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import clsx from 'clsx';
import { Skeleton } from '../components/Skeleton';

const Uni = () => {
  const [dates, setDates] = useState<AcademicCalendar>(new AcademicCalendar());
  const [type, setType] = useState(TypeOfWeek.Loading);
  const formattedDate = useMemo(() => new Date().toLocaleDateString('hu-Hu'), []);

  const setValues = useCallback(
    (data: AcademicCalendar) => {
      setDates(data);
      setType(AcademicCalendar.typeOfWeek(formattedDate, data));

      const expireDate = new Date(
        formattedDate < data.semester_end_date ? data.semester_end_date : data.exam_end_date
      );
      expireDate.setDate(expireDate.getDate() + 1);
      expireDate.setHours(0, 0, 1);

      document.cookie = `dates=${JSON.stringify(
        data
      )};expires=${expireDate.toUTCString()};sameSite=Lax`;
    },
    [formattedDate]
  );

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/date', { method: 'GET' });
      const data: AcademicCalendar = await response.json();
      setValues(data);
    } catch (error) {
      console.error('Date fetch failed', error);
    }
  }, [setValues]);

  useEffect(() => {
    const cookie = cookieValue('dates');
    if (cookie) setValues(JSON.parse(cookie));
    else fetchData();
  }, [fetchData, setValues]);

  return (
    <Layout>
      <div className="container flex flex-col justify-center items-center gap-8 md:gap-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">University</h1>
        <div className="flex">
          <Card
            className="text-center flex flex-col justify-between items-center gap-2 px-10 md:px-14 pt-4 pb-6"
            data-testid="uniCard">
            <>
              <span className="text-sm">{formattedDate}</span>
              <div className="flex flex-col justify-center items-center gap-1 pb-4 text-light-text dark:text-dark-text">
                <Skeleton show={type === TypeOfWeek.Loading}>
                  <span
                    className="text-5xl"
                    data-testid="weekEmoji">
                    {AcademicCalendar.weekEmoji(type)}
                  </span>
                </Skeleton>
                <Skeleton show={type === TypeOfWeek.Loading}>
                  <span
                    className="text-4xl font-semibold leading-none"
                    data-testid="weekTitle">
                    {AcademicCalendar.weekTitle(formattedDate, dates, type)}
                  </span>
                </Skeleton>
                <Skeleton show={type === TypeOfWeek.Loading}>
                  <span data-testid="weekType">{AcademicCalendar.weekType(type)}</span>
                </Skeleton>
              </div>

              <div
                className={clsx(
                  'flex flex-col justify-center items-center gap-4',
                  'border-t border-t-light-text/20 dark:border-t-dark-text/20',
                  'pt-4'
                )}>
                <span className="inline-flex flex-col justify-center items-center">
                  <span className="text-sm">Study period</span>
                  <Skeleton show={type === TypeOfWeek.Loading}>
                    <span className="inline-flex flex-row gap-1 justify-center items-center">
                      {dates?.semester_start_date}
                      <span>-</span>
                      {dates?.semester_end_date}
                    </span>
                  </Skeleton>
                </span>
                <span className="inline-flex flex-col justify-center items-center gap-x-1">
                  <span className="text-sm">Exam period</span>
                  <Skeleton show={type === TypeOfWeek.Loading}>
                    <span className="inline-flex flex-row gap-1 justify-center items-center">
                      {dates?.exam_start_date}
                      <span>-</span>
                      {dates?.exam_end_date}
                    </span>
                  </Skeleton>
                </span>
              </div>
            </>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="University" />;

export default memo(Uni);
