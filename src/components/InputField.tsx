import { Field, Label, Input } from '@headlessui/react';
import clsx from 'clsx';
import React, { memo } from 'react';

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

const InputField = memo(
  ({
    label,
    name,
    type = 'text',
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
          type={type}
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
  }
);

export { InputField };
