import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
interface HeaderProps {
  changeTheme: () => void;
}
interface ProgressContainerProps {
  children: React.ReactNode;
}
interface ProgressBarProps {
  width: number;
}

function ProgressContainer({ children }: ProgressContainerProps) {
  return <div className="w-full h-2 ">{children}</div>;
}

function ProgressBar({ width }: ProgressBarProps) {
  return (
    <div
      className="h-1 bg-light-primary dark:bg-dark-primary"
      style={{ width: `${width}%` }}></div>
  );
}

export const Header = ({ changeTheme }: HeaderProps) => {
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
    <header className="fixed top-0 w-full bg-light-surface dark:bg-dark-surface">
      <nav className="flex gap-2 justify-end">
        {pages.map((page) => (
          <NavLink
            key={page.path}
            to={page.path}
            className={({ isActive, isPending }) =>
              `${isActive ? 'border-b' : isPending ? 'italic' : ''}`
            }>
            {page.name}
          </NavLink>
        ))}
        <button onClick={changeTheme}>Set Theme</button>
      </nav>
      <ProgressContainer>
        <ProgressBar width={progressWidth} />
      </ProgressContainer>
    </header>
  );
};
