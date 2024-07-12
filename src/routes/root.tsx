import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../components/Header';
import { cookieValue } from '../helpers/index';

const checkForTheme = () => {
  const _themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let _theme = cookieValue('theme');
  if (!_theme) _theme = _themeQuery.matches ? 'dark' : 'light';
  return _theme;
};

export function Root() {
  const _theme = checkForTheme();

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.cookie = `theme=${newTheme};sameSite=Lax`;
    document.documentElement.style.colorScheme = newTheme;
  };

  const [theme, setTheme] = useState(_theme);
  document.documentElement.style.colorScheme = theme;

  if (theme === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');

  return (
    <>
      <Header changeTheme={changeTheme} />
      <main className="bg-light-surfaceContainerLowest min-h-screen dark:bg-dark-surfaceContainerLowest text-light-onSurface dark:text-dark-onSurface pt-16 pb-8 px-16">
        <Outlet />
      </main>
    </>
  );
}
