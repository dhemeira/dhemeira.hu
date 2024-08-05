import React, { Suspense, useEffect, useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PrimaryButton from '../components/PrimaryButton';
import { Fieldset } from '@headlessui/react';
import clsx from 'clsx';
import { Card } from '../components/Card';
import { InputField } from '../components/InputField';

const Login = () => {
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
  useEffect(() => {
    setSearchParams(new URLSearchParams(window.location.search));
  }, []);
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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Login</h1>

        <Card className="p-8 sm:p-10">
          <form
            method="post"
            action="/api/login">
            <Fieldset className="w-screen max-w-[min(24rem,calc(100vw-6rem))] space-y-6 rounded-xl flex flex-col">
              <InputField
                label="Username"
                name="username"
                placeholder="Username"
                required
                autoFocus
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <Suspense>
                {searchParams?.get('error') ? (
                  <p className="bg-red-600 text-dark-text rounded-lg py-1.5 px-3">
                    Incorrect username or password, please try again.
                  </p>
                ) : (
                  ''
                )}
              </Suspense>
              <PrimaryButton
                as="button"
                type="submit">
                Login
              </PrimaryButton>
            </Fieldset>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Login"
    index="noindex, nofollow"
  />
);

export default Login;
