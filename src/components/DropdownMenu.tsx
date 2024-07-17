import clsx from 'clsx';
import { NavLink, RouteObject } from 'react-router-dom';
import { HamburgerLine } from './HamburgerLine';
interface DropdownMenuProps {
  pages: RouteObject[];
  className?: string;
}

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Fragment } from 'react/jsx-runtime';

export const DropdownMenu = ({ pages, className }: DropdownMenuProps) => {
  return (
    <Menu>
      <MenuButton as={Fragment}>
        {({ active }) => (
          <label
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
            )}
            htmlFor="hamburger">
            <HamburgerLine className={active ? 'rotate-45 translate-y-2' : ''} />
            <HamburgerLine className={active ? 'rotate-45' : ''} />
            <HamburgerLine className={active ? '-rotate-45 -translate-y-2' : ''} />
          </label>
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
            <NavLink
              to={page.path || '/'}
              className={({ isActive }) =>
                `p-4 text-base/8 ${
                  isActive
                    ? 'text-dark-text font-semibold'
                    : 'text-dark-text/70 font-medium hover:text-dark-text'
                }`
              }>
              {page.id}
            </NavLink>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
