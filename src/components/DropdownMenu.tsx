import clsx from 'clsx';
import React from 'react';
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop, Portal } from '@headlessui/react';
import { Link } from 'gatsby';
import { HamburgerLine } from './HamburgerLine';

interface DropdownMenuProps {
  pages: { name: string; path: string }[];
  className?: string;
}

const DropdownMenu = ({ pages, className }: DropdownMenuProps) => {
  return (
    <Popover>
      <PopoverButton
        aria-label="Navigation Menu"
        className={clsx(
          'w-8',
          'h-8',
          'flex',
          'flex-col',
          'justify-center',
          'items-center',
          'outline-none',
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
      </PopoverButton>
      <Portal>
        <PopoverBackdrop className="fixed inset-0 bg-black/15" />
      </Portal>
      <PopoverPanel
        transition
        anchor="top end"
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
          <Link
            key={page.path}
            to={page.path || '/'}
            activeClassName="text-dark-text font-semibold"
            className="p-4 text-base/8 text-dark-text/70 font-medium hover:text-dark-text">
            {page.name}
          </Link>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default DropdownMenu;
