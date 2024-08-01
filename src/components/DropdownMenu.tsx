import clsx from 'clsx';
import * as React from 'react';
import { HamburgerLine } from './HamburgerLine';
interface DropdownMenuProps {
  pages: { name: string; path: string }[];
  className?: string;
}

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Fragment } from 'react/jsx-runtime';
import { Link } from 'gatsby';

export const DropdownMenu = ({ pages, className }: DropdownMenuProps) => {
  return (
    <Menu>
      <MenuButton as={Fragment}>
        {({ active }) => (
          <button
            className={clsx(
              'w-8',
              'h-8',
              'flex',
              'flex-col',
              'justify-center',
              'items-center',
              'gap-1',
              'cursor-pointer',
              className
            )}>
            <HamburgerLine className={active ? 'rotate-45 translate-y-2' : ''} />
            <HamburgerLine className={active ? 'rotate-45' : ''} />
            <HamburgerLine className={active ? '-rotate-45 -translate-y-2' : ''} />
          </button>
        )}
      </MenuButton>
      <MenuItems
        anchor="top end"
        transition
        className={clsx(
          'origin-top',
          'transition',
          'duration-200',
          'ease-out',
          'data-[closed]:scale-95',
          'data-[closed]:opacity-0',
          'bg-black/75',
          'shadow',
          'z-50',
          'flex',
          'flex-col',
          'px-4',
          'rounded-xl',
          'mt-4',
          'outline-none',
          'divide-y',
          'backdrop-blur-xl',
          'text-center'
        )}>
        {pages.map((page) => (
          <MenuItem key={page.path}>
            <Link
              to={page.path || '/'}
              activeClassName="text-dark-text font-semibold"
              className="p-4 text-base/8 text-dark-text/70 font-medium hover:text-dark-text">
              {page.name}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
