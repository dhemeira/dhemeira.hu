import { useEffect, useState, useMemo } from 'react';
import { cookieValue } from '../utils';
import { AcademicCalendar, TypeOfWeek } from '../utils/academicCalendar';
import { Card } from '../components/Card';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { UniCardSkeleton } from '../components/UniCardSkeleton';
import { UniCardContent } from '../components/UniCardContent';

const Uni = () => {
  const [dates, setDates] = useState<AcademicCalendar | null>(null);
  const [type, setType] = useState(TypeOfWeek.Break);
  const formattedDate = useMemo(() => new Date().toLocaleDateString('hu-Hu'), []);

  useEffect(() => {
    const setValues = (data: AcademicCalendar) => {
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
    };

    const fetchData = async () => {
      try {
        const response = await fetch('/api/date', { method: 'GET' });
        const data: AcademicCalendar = await response.json();
        setValues(data);
      } catch (error) {
        console.error('Date fetch failed', error);
      }
    };

    const cookie = cookieValue('dates');
    if (cookie) setValues(JSON.parse(cookie));
    else fetchData();
  }, [formattedDate]);

  return (
    <Layout>
      <div className="container flex flex-col justify-center items-center gap-8 md:gap-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">University</h1>
        <div className="flex">
          <Card className="text-center flex flex-col justify-between items-center gap-2 px-10 md:px-14 pt-4 pb-6">
            {dates ? (
              <UniCardContent
                key="uni-card"
                formattedDate={formattedDate}
                type={type}
                dates={dates}
              />
            ) : (
              <UniCardSkeleton
                key="uni-card"
                formattedDate={formattedDate}
              />
            )}
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="University" />;

export default Uni;
