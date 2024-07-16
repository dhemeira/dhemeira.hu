import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../components/Header';
import { cookieValue } from '../helpers/index';
import classNames from 'classnames';
import { Footer } from '../components/Footer';

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
      <Header
        changeTheme={changeTheme}
        theme={theme}
      />
      <main
        className={classNames(
          'bg-light-background',
          'min-h-screen',
          'dark:bg-dark-background',
          'text-light-text',
          'dark:text-dark-text',
          'pt-24',
          'md:pt-32',
          'pb-12',
          'bg-top-gradient'
        )}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
