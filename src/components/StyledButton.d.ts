import { ElementType } from 'react';
import { Link } from 'gatsby';

interface ButtonProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  variant?: 'primary' | 'secondary';
}

type ButtonType = ButtonProps & {
  as: 'button'; // Specify the condition for 'as' being 'button'
  type: 'button' | 'submit' | 'reset'; // Make 'type' required
  to?: never;
};

type LinkType = ButtonProps & {
  as: typeof Link;
  to: string;
  type?: never;
};

export type ButtonOrLinkProps = ButtonType | LinkType;
