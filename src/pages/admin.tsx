import { FormEvent, useEffect, useState, useMemo, useCallback } from 'react';
import { cookieValue } from '../utils';
import { AcademicCalendar } from '../utils/academicCalendar';
import { clsx } from 'clsx';
import { navigate } from 'gatsby';
import React from 'react';
import Seo from '../components/seo';
import { Fieldset } from '@headlessui/react';
import { Card } from '../components/Card';
import { InputField } from '../components/InputField';
import { StyledButton } from '../components/StyledButton';

const Admin = () => {
  const [dates, setDates] = useState<AcademicCalendar>(new AcademicCalendar());
  const formattedDate = useMemo(() => new Date().toLocaleDateString('hu-Hu'), []);

  const setValues = useCallback(
    (data: AcademicCalendar) => {
      setDates(data);

      const expireDate = new Date(
        formattedDate < data.semester_end_date ? data.semester_end_date : data.exam_end_date
      );
      expireDate.setDate(expireDate.getDate() + 1);
      expireDate.setHours(0, 0, 1);

      document.cookie = `dates=${JSON.stringify(
        data
      )};expires=${expireDate.toUTCString()};sameSite=Lax;path=/admin`;
    },
    [formattedDate]
  );

  useEffect(() => {
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
  }, [setValues]);

  const fetchDataPost = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const searchParams = new URLSearchParams();

      formData.forEach((value, key) => {
        searchParams.append(key, value.toString());
      });

      try {
        const response = await fetch('/api/updateDate', {
          method: 'POST',
          body: searchParams,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (response.status === 401) {
          navigate('/login', { replace: true });
          return;
        }

        if (response.headers.get('Content-Type') === 'application/json') {
          const data: AcademicCalendar = await response.json();

          form.querySelectorAll('input').forEach((input) => {
            input.value = '';
          });

          setValues(data);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [setValues]
  );

  return (
    <div className={clsx('container gap-8 md:gap-16', 'flex flex-col justify-center items-center')}>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Admin Panel</h1>

      <Card className="p-8 pb-10 sm:p-10 sm:pb-12">
        <Fieldset className="w-screen max-w-[min(24rem,calc(100vw-6rem))] space-y-3 rounded-xl flex flex-col">
          <form
            className="flex flex-col space-y-6"
            method="post"
            onSubmit={fetchDataPost}>
            <InputField
              label="Semester start date"
              pattern="[0-9]{4}. [0-9]{2}. [0-9]{2}."
              name="semester_start_date"
              placeholder={dates.semester_start_date}
            />
            <InputField
              label="Semester end date"
              pattern="[0-9]{4}. [0-9]{2}. [0-9]{2}."
              name="semester_end_date"
              placeholder={dates.semester_end_date}
            />
            <InputField
              label="Exam start date"
              pattern="[0-9]{4}. [0-9]{2}. [0-9]{2}."
              name="exam_start_date"
              placeholder={dates.exam_start_date}
            />
            <InputField
              label="Exam end date"
              pattern="[0-9]{4}. [0-9]{2}. [0-9]{2}."
              name="exam_end_date"
              placeholder={dates.exam_end_date}
            />
            <p>Use the following format: YYYY. MM. DD.</p>
            <StyledButton
              as="button"
              type="submit">
              Update
            </StyledButton>
          </form>
          <form
            className="flex flex-col"
            method="get"
            action="/api/logout">
            <StyledButton
              variant="secondary"
              as="button"
              type="submit">
              Log Out
            </StyledButton>
          </form>
        </Fieldset>
      </Card>
    </div>
  );
};

export const Head = () => (
  <Seo
    title="Admin Panel"
    index="noindex, nofollow"
  />
);

export default Admin;
