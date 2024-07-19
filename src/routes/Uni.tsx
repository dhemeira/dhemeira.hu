import { useEffect, useState } from 'react';
import { cookieValue } from '../utils';
import { AcademicCalendar, TypeOfWeek } from '../utils/academicCalendar';
import { Card } from '../components/Card';
import { clsx } from 'clsx';

export const Uni = () => {
  const [dates, setDates] = useState(new AcademicCalendar());
  const [type, setType] = useState(TypeOfWeek.Break);
  const formattedDate = new Date().toLocaleDateString('hu-Hu');

  useEffect(() => {
    const setValues = (dates: AcademicCalendar) => {
      setDates(dates);
      setType(AcademicCalendar.typeOfWeek(formattedDate, dates));
    };

    const fetchData = async () => {
      await fetch('/api/date', {
        method: 'GET',
      })
        .then((response) => {
          return response.json();
        })
        .then((data: AcademicCalendar) => {
          setValues(data);

          const expireDate = new Date(
            formattedDate < data.semester_end_date ? data.semester_end_date : data.exam_end_date
          );
          expireDate.setDate(expireDate.getDate() + 1);
          expireDate.setHours(0, 0, 1);

          document.cookie = `dates=${JSON.stringify(
            data
          )};expires=${expireDate.toUTCString()};sameSite=Lax`;
        })
        .catch(() => {
          console.error('Date fetch failed');
        });
    };

    const cookie = cookieValue('dates');
    if (cookie) {
      setValues(JSON.parse(cookie));
    } else fetchData();
  }, [formattedDate]);

  return (
    <div
      className={clsx(
        'container',
        'flex',
        'flex-col',
        'gap-8',
        'md:gap-16',
        'justify-center',
        'items-center'
      )}>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">University</h1>
      <div className="flex">
        <Card>
          <>
            <p className="text-sm">{formattedDate}</p>
            <div className="flex flex-col justify-center items-center pb-4 text-light-text dark:text-dark-text">
              <p className="text-5xl">{AcademicCalendar.weekEmoji(type)}</p>
              <p className="text-4xl font-semibold leading-tight">
                {AcademicCalendar.weekTitle(formattedDate, dates, type)}
              </p>
              <p className="">{AcademicCalendar.weekType(type)}</p>
            </div>

            <div
              className={clsx(
                'flex flex-col',
                'justify-center',
                'items-center',
                'gap-4',
                'border-t',
                'border-t-light-text/20',
                'dark:border-t-dark-text/20',
                'pt-4'
              )}>
              <p className="inline-flex flex-col justify-center items-center">
                <span className="text-sm">Study period</span>
                <span>
                  {dates.semester_start_date} - {dates.semester_end_date}
                </span>
              </p>
              <p className="inline-flex flex-col justify-center items-center gap-x-1">
                <span className="text-sm">Exam period</span>
                <span>
                  {dates.exam_start_date} - {dates.exam_end_date}
                </span>
              </p>
            </div>
          </>
        </Card>
      </div>
    </div>
  );
};
