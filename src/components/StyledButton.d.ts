import { ElementType } from 'react';
import { Link } from 'gatsby';

type BaseProps = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  variant?: 'primary' | 'secondary';
};

type ButtonProps = BaseProps & {
  as: 'button';
  type: 'button' | 'submit' | 'reset';
  to?: never;
};

type LinkProps = BaseProps & {
  as: typeof Link;
  to: string;
  type?: never;
};

export type ButtonOrLinkProps = ButtonProps | LinkProps;
