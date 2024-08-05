import { FormEvent, useEffect, useState } from 'react';
import { cookieValue } from '../utils';
import { AcademicCalendar } from '../utils/academicCalendar';
import { clsx } from 'clsx';
import { navigate } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Fieldset } from '@headlessui/react';
import { Card } from '../components/Card';
import { InputField } from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Admin = () => {
  const [dates, setDates] = useState(new AcademicCalendar());
  const formattedDate = new Date().toLocaleDateString('hu-Hu');
  useEffect(() => {
    const fetchData = async () => {
      await fetch('/api/date', {
        method: 'GET',
      })
        .then((response) => {
          return response.json();
        })
        .then((data: AcademicCalendar) => {
          setDates(data);

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
    if (cookie) setDates(JSON.parse(cookie));
    else fetchData();
  }, [formattedDate]);

  const fetchDataPost = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // @ts-expect-error - The conversion works fine
    const searchParams = new URLSearchParams(formData);

    await fetch('/api/updateDate', {
      method: 'POST',
      body: searchParams,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        if (response.status === 401)
          navigate('/login', {
            replace: true,
          });
        if (response.headers.get('Content-Type') === 'application/json') return response.json();

        throw new Error(response.statusText);
      })
      .then((data: AcademicCalendar) => {
        setDates(data);

        form.querySelectorAll('input').forEach((input) => {
          input.value = '';
        });

        const expireDate = new Date(
          formattedDate < data.semester_end_date ? data.semester_end_date : data.exam_end_date
        );
        expireDate.setDate(expireDate.getDate() + 1);
        expireDate.setHours(0, 0, 1);

        document.cookie = `dates=${JSON.stringify(
          data
        )};expires=${expireDate.toUTCString()};sameSite=Lax`;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Admin Panel</h1>

        <Card className="p-8 sm:p-10">
          <Fieldset className="w-screen max-w-[min(24rem,calc(100vw-6rem))] space-y-2 rounded-xl flex flex-col">
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
              <PrimaryButton
                as="button"
                type="submit">
                Update
              </PrimaryButton>
            </form>
            <form
              className="flex flex-col"
              method="get"
              action="/api/logout">
              <SecondaryButton
                as="button"
                type="submit">
                Log Out
              </SecondaryButton>
            </form>
          </Fieldset>
        </Card>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Admin Panel"
    index="noindex, nofollow"
  />
);

export default Admin;
