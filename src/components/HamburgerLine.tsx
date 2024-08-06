import React from 'react';

interface HamburgerLineProps {
  className?: string;
}

export const HamburgerLine = ({ className }: HamburgerLineProps) => {
  return <div className={`w-8 h-1 bg-dark-text rounded transition-transform ${className}`} />;
};
