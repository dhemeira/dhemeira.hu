import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { cookieValue } from '../helpers/index';

export function Root() {
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.cookie = `theme=${newTheme};sameSite=Lax`;
    document.documentElement.style.colorScheme = newTheme;
  };

  const navigation = useNavigation();

  const _themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let _theme = cookieValue('theme');
  if (!_theme) _theme = _themeQuery.matches ? 'dark' : 'light';

  const [theme, setTheme] = useState(_theme);
  document.documentElement.style.colorScheme = theme;

  if (theme === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');

  useEffect(() => {
    /** If in development, prints debug information */
    if (process.env.NODE_ENV) {
      import('../helpers/debugUtils').then((e) => e.logActiveElement());
    }
  });
  return (
    <div className="bg-neutral dark:bg-dark-neutral text-dark-neutral dark:text-neutral">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive ? 'underline' : isPending ? 'italic' : ''
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/about`}
                className={({ isActive, isPending }) =>
                  isActive ? 'underline' : isPending ? 'italic' : ''
                }>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <button onClick={changeTheme}>Set Theme</button>
      </header>
      <main className={navigation.state === 'loading' ? 'bg-pink-400' : ''}>
        <Outlet />
      </main>
    </div>
  );
}
