import React, { memo } from 'react';

interface HamburgerLineProps {
  className?: string;
}

const HamburgerLine = memo(({ className }: HamburgerLineProps) => {
  return <div className={`w-8 h-1 bg-dark-text rounded transition-transform ${className}`} />;
});

export { HamburgerLine };
