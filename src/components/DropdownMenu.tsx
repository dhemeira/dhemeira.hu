import clsx from 'clsx';
import React, { memo, useCallback } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from 'gatsby';
import { HamburgerLine } from './HamburgerLine';

interface DropdownMenuProps {
  pages: { name: string; path: string }[];
  className?: string;
}

interface GetPropsArgs {
  isCurrent: boolean;
}

const menuButtonClassNames = 'w-8 h-8 flex-col justify-center items-center gap-1';
const menuItemsClassNames =
  'origin-top z-50 transition duration-200 ease-out data-[closed]:scale-75 data-[closed]:opacity-0 bg-black/75 shadow backdrop-blur-xl divide-y flex flex-col pt-8 pb-24 px-4 mt-[11px] outline-none text-center w-screen max-w-full h-[calc(100vh-50px)]';

const DropdownMenu = memo(({ pages, className }: DropdownMenuProps) => {
  const getProps = useCallback(
    ({ isCurrent }: GetPropsArgs) => ({
      className: `p-4 text-base/8 ${isCurrent ? 'text-dark-text font-semibold' : 'text-dark-text/70 font-medium hover:text-dark-text'}`,
    }),
    []
  );

  return (
    <Menu>
      <MenuButton
        aria-label="Navigation Menu"
        className={clsx(menuButtonClassNames, className)}>
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
        className={clsx(menuItemsClassNames, className)}>
        {pages.map((page) => (
          <MenuItem key={page.path}>
            <Link
              getProps={getProps}
              to={page.path || '/'}>
              {page.name}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
});

export default DropdownMenu;
