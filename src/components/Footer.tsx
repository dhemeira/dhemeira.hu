import { BsGithub } from 'react-icons/bs';
import React, { memo } from 'react';

const footerClassNames =
  'bg-black/75 w-full px-[5%] md:px-[10%] py-2 flex justify-between items-end text-dark-text border-t-white/20 border-t';
const spanClassNames = 'flex flex-col';
const linkClassNames = 'p-1';
const iconClassNames = 'w-5 h-5';

const currentYear = new Date().getFullYear();

export const Footer = memo(() => {
  return (
    <footer className={footerClassNames}>
      <span className={spanClassNames}>
        <a href="https://dhemeira.hu">www.dhemeira.hu</a>
        <span>© 2023-{currentYear} | dhemeira</span>
      </span>
      <a
        className={linkClassNames}
        href="https://github.com/dhemeira"
        aria-label="GitHub"
        title="GitHub"
        rel="noreferrer"
        target="_blank">
        <BsGithub className={iconClassNames} />
      </a>
    </footer>
  );
});
