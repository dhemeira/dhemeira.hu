import { ElementType } from 'react';
import { Link } from 'gatsby';

interface PrimaryButtonProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
}

type ButtonType = PrimaryButtonProps & {
  as: 'button'; // Specify the condition for 'as' being 'button'
  type: 'button' | 'submit' | 'reset'; // Make 'type' required
  to?: never;
};

type LinkType = PrimaryButtonProps & {
  as: Link;
  to: string;
  type?: never;
};

export type ButtonOrLinkProps = ButtonType | LinkType;
