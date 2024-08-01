import { BsGithub } from 'react-icons/bs';
import * as React from 'react';
export const Footer = () => {
  return (
    <footer className="bg-black w-full px-[5%] md:px-[10%] py-2 flex justify-between items-center text-dark-text border-t-white/20 border-t">
      <span>
        © 2023-{new Date().getFullYear()} | <a href="https://dhemeira.hu">www.dhemeira.hu</a> -
        Péter Lakics
      </span>
      <a
        href="https://github.com/dhemeira"
        aria-label="GitHub"
        title="GitHub"
        target="_blank">
        <BsGithub className="w-5 h-5" />
      </a>
    </footer>
  );
};
