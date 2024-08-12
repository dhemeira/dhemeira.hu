import { Link } from 'gatsby';
import { Suspense, useEffect, useState, useCallback } from 'react';
import React from 'react';
import { lazy } from 'react';

const DropdownMenu = lazy(() => import('./DropdownMenu'));

interface HeaderProps {
  siteTitle: string;
}
interface ProgressContainerProps {
  children: React.ReactNode;
}
interface ProgressBarProps {
  width: number;
}

const ProgressContainer = React.memo(({ children }: ProgressContainerProps) => {
  return <div className="w-full translate-y-px">{children}</div>;
});

const ProgressBar = React.memo(({ width }: ProgressBarProps) => {
  return (
    <div
      className="h-0.5 bg-light-accent dark:bg-dark-accent"
      style={{ width: `${width}%` }}></div>
  );
});

const pages = [
  { name: 'Home', path: '/' },
  { name: 'University', path: '/uni' },
] as { name: string; path: string }[];

export const Header = React.memo(({ siteTitle }: HeaderProps) => {
  const [progressWidth, setProgressWidth] = useState(0);

  const handleScroll = useCallback(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (isNaN(scrolled)) setProgressWidth(0);
    else if (scrolled > 100) setProgressWidth(100);
    else setProgressWidth(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className="fixed top-0 w-full bg-black/75 z-50 backdrop-blur-xl text-dark-text border-b-white/20 border-b">
      <div className="flex justify-between px-[5%] md:px-[10%] py-2">
        <Link
          to="/"
          className="font-medium px-2 text-base/8">
          {siteTitle}
        </Link>
        <nav className="flex gap-4 justify-end items-center">
          {pages.map((page) => (
            <Link
              getProps={({ isCurrent }) => {
                return {
                  className: `font-medium px-4 text-base/8 hidden sm:block ${isCurrent ? 'text-dark-text border-b-2 border-b-light-accent dark:border-b-dark-accent' : 'text-dark-text/70 hover:text-dark-text'}`,
                };
              }}
              key={page.path}
              to={page.path || '/'}>
              {page.name}
            </Link>
          ))}
          <Suspense>
            <DropdownMenu
              className="block sm:hidden"
              pages={pages}
            />
          </Suspense>
        </nav>
      </div>
      <ProgressContainer>
        <ProgressBar width={progressWidth} />
      </ProgressContainer>
    </header>
  );
});
