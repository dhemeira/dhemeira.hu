import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import clsx from 'clsx';
import { useLocation } from '@reach/router';
import PrimaryButton from '../components/PrimaryButton';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <Layout>
      <div
        className={clsx(
          'container',
          'flex',
          'flex-col',
          'gap-8',
          'justify-center',
          'items-center',
          'text-center'
        )}>
        <div className="row">
          <div className="col">
            <h1 className="text-5xl sm:text-[6rem] font-bold tracking-tighter">404</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">{`The following page doesn't exists: ${location.pathname}`}</div>
        </div>
        <div className="row">
          <div className="col">Check out the home page to find what you are looking for</div>
        </div>
        <div className="row">
          <div className="col">
            <PrimaryButton>Back to home</PrimaryButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="404 Not Found" />;

export default NotFoundPage;
