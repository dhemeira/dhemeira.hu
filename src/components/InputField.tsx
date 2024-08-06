import { Field, Label, Input } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  autoFocus?: boolean;
  className?: string;
  required?: boolean;
  pattern?: string;
}

export const InputField = ({
  label,
  name,
  type,
  required,
  placeholder,
  autoFocus,
  className,
  pattern,
}: InputFieldProps) => {
  return (
    <Field>
      <Label className="text-base/6 font-medium">{label}</Label>
      <Input
        type={type || 'text'}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        aria-label={label}
        required={required}
        autoFocus={autoFocus}
        className={clsx(
          'mt-3 block w-full rounded-lg border-none bg-white/70 py-1.5 px-3 placeholder:text-light-text/70 text-light-text',
          'focus:outline-none focus:ring focus:ring-light-text dark:focus:ring-dark-text',
          className
        )}
      />
    </Field>
  );
};
