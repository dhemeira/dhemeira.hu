import React from 'react';
import { Button } from '@headlessui/react';
import { ButtonOrLinkProps } from './PrimaryButton.d';

const PrimaryButton = ({ children, as, className, ...props }: ButtonOrLinkProps) => {
  const classList = [
    'bg-light-primary dark:bg-dark-primary',
    'text-light-text text-base/9 font-semibold',
    'inline-block rounded-lg px-8 py-2',
    'group relative overflow-hidden',
    'border-dark-primary dark:border-light-primary border-2',
  ].join(' ');
  return (
    <Button
      as={as}
      {...props}
      className={classList + ' ' + className}>
      {children}
      <div className="group-hover:bg-light-text/10 absolute inset-0 pointer-events-none" />
    </Button>
  );
};

export default PrimaryButton;
