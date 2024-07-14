import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
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

function ProgressContainer({ children }: ProgressContainerProps) {
  return <div className="w-full translate-y-[1px]">{children}</div>;
}

function ProgressBar({ width }: ProgressBarProps) {
  return (
    <div
      className="h-0.5 bg-light-primary dark:bg-dark-primary"
      style={{ width: `${width}%` }}></div>
  );
}

export const Header = ({ changeTheme, theme }: HeaderProps) => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];
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
    <header className="fixed top-0 w-full bg-black/75 z-50 text-dark-text border-b-white/20 border-b">
      <div className="flex justify-between px-[7%] py-2 ">
        <p className="font-medium px-2 text-base/8">Logo</p>
        <nav className="flex gap-4 justify-end items-center">
          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                `font-medium px-4 text-base/8 ${
                  isActive
                    ? 'text-dark-text border-b-2 border-b-light-accent dark:border-b-dark-accent'
                    : 'text-dark-text/70 hover:text-dark-text'
                }`
              }>
              {page.name}
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
        </nav>
      </div>
      <ProgressContainer>
        <ProgressBar width={progressWidth} />
      </ProgressContainer>
    </header>
  );
};
