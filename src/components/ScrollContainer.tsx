import React, { memo } from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiReact,
  SiGatsby,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiNpm,
  SiFigma,
  SiAdobephotoshop,
} from 'react-icons/si';
import { IconElement } from './IconElement';

const icons = [
  { icon: SiJavascript, text: 'Javascript' },
  { icon: SiHtml5, text: 'HTML' },
  { icon: SiCss3, text: 'CSS' },
  { icon: SiVuedotjs, text: 'Vue.js' },
  { icon: SiReact, text: 'React' },
  { icon: SiGatsby, text: 'Gatsby' },
  { icon: SiTailwindcss, text: 'Tailwind CSS' },
  { icon: SiTypescript, text: 'TypeScript' },
  { icon: SiGit, text: 'Git' },
  { icon: SiGithub, text: 'GitHub' },
  { icon: SiNodedotjs, text: 'Node.js' },
  { icon: SiNpm, text: 'NPM' },
  { icon: SiFigma, text: 'Figma' },
  { icon: SiAdobephotoshop, text: 'Photoshop' },
];

export const ScrollContainer = memo(() => (
  <div className={`flex flex-row gap-4 px-2 md:gap-8 md:px-4 sidescroller`}>
    {icons.map(({ icon, text }, index) => (
      <IconElement
        key={index}
        icon={icon}
        text={text}
      />
    ))}
  </div>
));
