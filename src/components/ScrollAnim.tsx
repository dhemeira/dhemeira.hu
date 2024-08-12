import '../styles/ScrollAnim.css';
import React, { memo } from 'react';

const containerStyles =
  'w-6 h-11 rounded-full border-2 border-light-text dark:border-dark-text flex justify-center items-start pt-2';
const wheelStyles = 'scroll-wheel w-2 h-2 rounded-full bg-light-text dark:bg-dark-text';

export const ScrollAnim = memo(() => {
  return (
    <div className={containerStyles}>
      <div className={wheelStyles}></div>
    </div>
  );
});
