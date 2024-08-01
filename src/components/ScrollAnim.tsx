import './ScrollAnim.css';
import React from 'react';

export const ScrollAnim = () => {
  return (
    <div className="w-6 h-11 rounded-full border-2 border-light-text dark:border-dark-text flex justify-center items-start pt-2">
      <div className="scroll-wheel w-2 h-2 rounded-full bg-light-text dark:bg-dark-text"></div>
    </div>
  );
};
