import React, { useEffect, useState } from 'react';
import Seo from '../components/seo';
import clsx from 'clsx';
import { useLocation } from '@reach/router';
import { StyledButton } from '../components/StyledButton';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  const loc = useLocation();
  const [locationPathname, setLocationPathname] = useState('');

  useEffect(() => {
    if (loc?.pathname) {
      setLocationPathname(loc.pathname);
    }
  }, [loc]);

  return (
    <div
      className={clsx('container text-center', 'flex flex-col justify-center items-center gap-8')}>
      <div className="row">
        <div className="col">
          <h1 className="text-5xl sm:text-[6rem] font-bold tracking-tighter">404</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {locationPathname && `The following page doesn't exist: ${locationPathname}`}
        </div>
      </div>
      <div className="row">
        <div className="col">Check out the home page to find what you are looking for</div>
      </div>
      <div className="row">
        <div className="col">
          <StyledButton
            as={Link}
            to="/">
            Back to home
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <Seo title="Not Found" />;

export default NotFoundPage;
