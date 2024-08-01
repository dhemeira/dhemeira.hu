import * as React from 'react';
import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { DropdownMenu } from './DropdownMenu';

interface HeaderProps {
  siteTitle: string;
}
interface ProgressContainerProps {
  children: React.ReactNode;
}
interface ProgressBarProps {
  width: number;
}

const ProgressContainer = ({ children }: ProgressContainerProps) => {
  return <div className="w-full translate-y-px">{children}</div>;
};

const ProgressBar = ({ width }: ProgressBarProps) => {
  return (
    <div
      className="h-0.5 bg-light-accent dark:bg-dark-accent"
      style={{ width: `${width}%` }}></div>
  );
};

export const Header = ({ siteTitle }: HeaderProps) => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'University', path: '/uni' },
  ] as { name: string; path: string }[];
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (isNaN(scrolled)) setProgressWidth(0);
      else if (scrolled > 100) setProgressWidth(100);
      else setProgressWidth(scrolled);
    };
  }, []);

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
              activeClassName="text-dark-text border-b-2 border-b-light-accent dark:border-b-dark-accent"
              key={page.path}
              to={page.path || '/'}
              className="font-medium px-4 text-base/8 hidden sm:block text-dark-text/70 hover:text-dark-text">
              {page.name}
            </Link>
          ))}
          <DropdownMenu
            className="block sm:hidden"
            pages={pages}
          />
        </nav>
      </div>
      <ProgressContainer>
        <ProgressBar width={progressWidth} />
      </ProgressContainer>
    </header>
  );
};
