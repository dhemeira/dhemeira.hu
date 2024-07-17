import clsx from 'clsx';

interface HamburgerLineProps {
  className?: string;
}

export const HamburgerLine = ({ className }: HamburgerLineProps) => {
  return (
    <div
      className={clsx('w-8', 'bg-dark-text', 'h-1', 'rounded', 'transition-transform', className)}
    />
  );
};
