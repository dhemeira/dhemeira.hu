import React from 'react';
import { Button } from '@headlessui/react';
import { ButtonOrLinkProps } from './PrimaryButton.d';

const PrimaryButton = ({ children, as, className, ...props }: ButtonOrLinkProps) => {
  const classList = [
    'bg-light-primary',
    'dark:bg-dark-primary',
    'px-8',
    'py-2',
    'text-light-text',
    'rounded-lg',
    'text-base/9',
    'inline-block',
    'group',
    'relative',
    'overflow-hidden',
    'font-semibold',
  ].join(' ');
  return (
    <Button
      as={as}
      {...props}
      className={classList + className}>
      {children}
      <div className="group-hover:bg-light-text/10 absolute inset-0 pointer-events-none" />
    </Button>
  );
};

export default PrimaryButton;
