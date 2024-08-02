import clsx from 'clsx';
import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from 'gatsby';
import { HamburgerLine } from './HamburgerLine';

interface DropdownMenuProps {
  pages: { name: string; path: string }[];
  className?: string;
}

const DropdownMenu = ({ pages, className }: DropdownMenuProps) => {
  return (
    <Menu>
      <MenuButton
        aria-label="Navigation Menu"
        className={clsx(
          'w-8',
          'h-8',
          'flex',
          'flex-col',
          'justify-center',
          'items-center',
          'gap-1',
          className
        )}>
        {({ active }) => (
          <>
            <HamburgerLine className={active ? 'rotate-45 translate-y-2' : ''} />
            <HamburgerLine className={active ? 'rotate-45' : ''} />
            <HamburgerLine className={active ? '-rotate-45 -translate-y-2' : ''} />
          </>
        )}
      </MenuButton>
      <MenuItems
        anchor="top"
        transition
        className={clsx(
          'origin-top',
          'transition',
          'duration-200',
          'ease-out',
          'data-[closed]:scale-75',
          'data-[closed]:opacity-0',
          'bg-black/75',
          'shadow',
          'z-50',
          'flex',
          'flex-col',
          'px-4',
          'pt-8',
          'pb-24',
          'mt-[11px]',
          'outline-none',
          'divide-y',
          'backdrop-blur-xl',
          'text-center',
          'h-[calc(100vh-50px)]',
          'w-screen',
          'max-w-full',
          className
        )}>
        {pages.map((page) => (
          <MenuItem key={page.path}>
            <Link
              getProps={({ isCurrent }) => {
                return {
                  className: `p-4 text-base/8 ${isCurrent ? 'text-dark-text font-semibold' : 'text-dark-text/70 font-medium hover:text-dark-text'}`,
                };
              }}
              to={page.path || '/'}>
              {page.name}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
