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
    'inline-block rounded-lg px-8 py-2 border-2',
    'hover:bg-transparent transition hover:scale-105 hover:shadow-lg',
  ].join(' ');

  const classPrimary = [
    'bg-light-primary dark:bg-dark-primary',
    'text-light-text',
    'dark:hover:text-dark-text border-light-primary dark:border-dark-primary ',
  ].join(' ');

  const classSecondary = [
    'bg-light-secondary dark:bg-dark-secondary',
    'text-light-text dark:text-dark-text',
    'border-light-secondary dark:border-dark-secondary',
  ].join(' ');

  return (
    <Button
      as={as}
      {...props}
      className={[classList, variant === 'primary' ? classPrimary : classSecondary, className].join(
        ' '
      )}>
      {children}
    </Button>
  );
};
export { ButtonOrLinkProps };
