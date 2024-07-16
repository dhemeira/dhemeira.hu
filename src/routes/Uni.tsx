import { useEffect, useState } from 'react';
import { cookieValue } from '../helpers';
import { AcademicCalendar } from '../helpers/academicCalendar';

export const Uni = () => {
  const [dates, setDates] = useState(new AcademicCalendar());

  useEffect(() => {
    const fetchDataForPosts = async () => {
      await fetch('http://localhost:8788/date', {
        method: 'GET',
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDates(data);

          const expireDate = new Date();
          expireDate.setFullYear(
            expireDate.getFullYear(),
            expireDate.getMonth(),
            expireDate.getDate() + 1
          );
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
    if (cookie) setDates(JSON.parse(cookie));
    else fetchDataForPosts();
  }, []);

  const formattedDate = new Date().toLocaleDateString('hu-Hu');

  const typeOfWeek = () => {
    if (formattedDate < dates.semester_start_date || formattedDate > dates.exam_end_date) return '';
    return formattedDate <= dates.semester_end_date ? 'of Semester' : 'of Exam period';
  };

  const currentWeekStatus = () => {
    if (formattedDate < dates.semester_start_date || formattedDate > dates.exam_end_date)
      return 'Break';

    if (formattedDate <= dates.semester_end_date)
      return AcademicCalendar.getCurrentWeek(formattedDate, dates.semester_start_date);

    return AcademicCalendar.getCurrentWeek(formattedDate, dates.exam_start_date);
  };

  return (
    <>
      <div className="container flex flex-col gap-8 md:gap-16 justify-center items-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">University</h1>
        <div className="flex">
          <div className="flex flex-col justify-between items-center p-8 dark:bg-dark-primary/5 bg-light-primary/5 gap-8 rounded-3xl shadow">
            <p className="inline-flex flex-wrap justify-center items-center gap-x-1">
              <span>Current date:</span>
              <span>{formattedDate}</span>
            </p>
            <div className="flex flex-col justify-center items-center">
              <p className="text-3xl font-semibold">{currentWeekStatus()}</p>
              <p>{typeOfWeek()}</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="inline-flex flex-col sm:flex-row justify-center items-center gap-x-1">
                <span>Semester:</span>
                <span>
                  {dates.semester_start_date} - {dates.semester_end_date}
                </span>
              </p>
              <p className="inline-flex flex-col sm:flex-row justify-center items-center gap-x-1">
                <span>Exam period:</span>
                <span>
                  {dates.exam_start_date} - {dates.exam_end_date}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
