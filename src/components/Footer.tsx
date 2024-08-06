import { BsGithub } from 'react-icons/bs';
import React from 'react';
export const Footer = () => {
  return (
    <footer className="bg-black/75 w-full px-[5%] md:px-[10%] py-2 flex justify-between items-end text-dark-text border-t-white/20 border-t">
      <span className="flex flex-col">
        <a href="https://dhemeira.hu">www.dhemeira.hu</a>
        <span>© 2023-{new Date().getFullYear()} | Péter Lakics</span>
      </span>
      <a
        className="p-1"
        href="https://github.com/dhemeira"
        aria-label="GitHub"
        title="GitHub"
        rel="noreferrer"
        target="_blank">
        <BsGithub className="w-5 h-5" />
      </a>
    </footer>
  );
};
