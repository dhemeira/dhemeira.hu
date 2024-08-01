import { FormEvent, useEffect, useState } from 'react';
import { cookieValue } from '../utils';
import { AcademicCalendar } from '../utils/academicCalendar';
import { clsx } from 'clsx';
import { navigate } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

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
        <div className="flex">
          <form
            className="flex flex-col gap-4"
            onSubmit={fetchDataPost}>
            <div className="flex gap-2 justify-between">
              <label htmlFor="semester_start_date">Semester start date</label>
              <input
                type="text"
                pattern="[0-9]{4}. [0-9]{2}. [0-9]{2}."
                placeholder={dates.semester_start_date}
                name="semester_start_date"
                id="semester_start_date"
                aria-label="Semester start date"
              />
            </div>
            <div className="flex gap-2 justify-between">
              <label htmlFor="semester_end_date">Semester end date</label>
              <input
                type="text"
                pattern="[0-9]{4}. [0-9]{2}. [0-9]{2}."
                placeholder={dates.semester_end_date}
                name="semester_end_date"
                id="semester_end_date"
                aria-label="Semester end date"
              />
            </div>
            <div className="flex gap-2 justify-between">
              <label htmlFor="exam_start_date">Exam start date</label>
              <input
                type="text"
                pattern="[0-9]{4}. [0-9]{2}. [0-9]{2}."
                placeholder={dates.exam_start_date}
                name="exam_start_date"
                id="exam_start_date"
                aria-label="Exam start date"
              />
            </div>
            <div className="flex gap-2 justify-between">
              <label htmlFor="exam_end_date">Exam end date</label>
              <input
                type="text"
                pattern="[0-9]{4}. [0-9]{2}. [0-9]{2}."
                placeholder={dates.exam_end_date}
                name="exam_end_date"
                id="exam_end_date"
                aria-label="Exam end date"
              />
            </div>
            <button type="submit">Update</button>
          </form>

          <form
            method="get"
            action="/api/logout">
            <button type="submit">Logout</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Admin Panel" />;

export default Admin;
