import React, { Suspense, useEffect, useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import clsx from 'clsx';
import { useLocation, WindowLocation } from '@reach/router';
import PrimaryButton from '../components/PrimaryButton';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  const [location, setLocation] = useState<WindowLocation | null>(null);
  const loc = useLocation();
  useEffect(() => {
    setLocation(loc);
  }, [loc]);
  return (
    <Layout>
      <div
        className={clsx(
          'container text-center',
          'flex flex-col justify-center items-center gap-8'
        )}>
        <div className="row">
          <div className="col">
            <h1 className="text-5xl sm:text-[6rem] font-bold tracking-tighter">404</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Suspense>
              {location ? `The following page doesn't exists: ${location.pathname}` : ''}
            </Suspense>
          </div>
        </div>
        <div className="row">
          <div className="col">Check out the home page to find what you are looking for</div>
        </div>
        <div className="row">
          <div className="col">
            <PrimaryButton
              as={Link}
              to="/">
              Back to home
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="404 Not Found" />;

export default NotFoundPage;
