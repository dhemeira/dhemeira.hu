import React from 'react';
import { Button } from '@headlessui/react';
import { type ButtonOrLinkProps } from './StyledButton.d';

export const StyledButton = ({
  children,
  as,
  className,
  variant = 'primary',
  ...props
}: ButtonOrLinkProps) => {
  const classList = [
    'text-base/9 font-semibold',
    'inline-block rounded-lg px-8 py-2',
    'group relative overflow-hidden',
  ].join(' ');

  const classPrimary = [
    'bg-light-primary dark:bg-dark-primary',
    'text-light-text',
    'border-dark-primary dark:border-light-primary border-2',
  ].join(' ');

  const classSecondary = [
    'bg-light-secondary dark:bg-dark-secondary',
    'text-light-text dark:text-dark-text',
  ].join(' ');

  return (
    <Button
      as={as}
      {...props}
      className={[classList, variant === 'primary' ? classPrimary : classSecondary, className].join(
        ' '
      )}>
      {children}
      <div className="group-hover:bg-light-text/10 absolute inset-0 pointer-events-none" />
    </Button>
  );
};
export { ButtonOrLinkProps };
