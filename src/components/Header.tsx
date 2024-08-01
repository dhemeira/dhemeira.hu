import { useEffect, useState } from 'react';
import { NavLink, useMatches } from 'react-router-dom';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { routes } from '../main';
import { DropdownMenu } from './DropdownMenu';
interface HeaderProps {
  changeTheme: () => void;
  theme: string;
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

export const Header = ({ changeTheme, theme }: HeaderProps) => {
  const pages = routes.filter((route) => route.id);
  const [progressWidth, setProgressWidth] = useState(0);
  const matches = useMatches();

  useEffect(() => {
    const isRouteWithId: boolean = routes
      .filter((route) => route.id)
      .some((route) => route.id === matches[matches.length - 1].id);
    const isRouteMatchesPath: boolean = routes
      .filter((route) => route.path)
      .some((route) => route.path === matches[matches.length - 1].pathname);

    if (isRouteWithId) document.title = `${matches[matches.length - 1].id} | dhemeira`;
    else if (isRouteMatchesPath) document.title = `dhemeira`;
    else document.title = '404 | dhemeira';
  }, [matches]);

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
        <NavLink
          className="font-medium px-2 text-base/8"
          to="/">
          dhemeira
        </NavLink>
        <nav className="flex gap-4 justify-end items-center">
          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path || '/'}
              className={({ isActive }) =>
                `font-medium px-4 text-base/8 hidden sm:block ${
                  isActive
                    ? 'text-dark-text border-b-2 border-b-light-accent dark:border-b-dark-accent'
                    : 'text-dark-text/70 hover:text-dark-text'
                }`
              }>
              {page.id}
            </NavLink>
          ))}
          <button
            className="w-9 h-9 flex justify-center items-center text-dark-text/70 hover:text-dark-text"
            onClick={changeTheme}>
            {theme === 'light' ? (
              <BsSunFill className="w-6 h-6" />
            ) : (
              <BsFillMoonStarsFill className="w-6 h-6" />
            )}
          </button>
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
