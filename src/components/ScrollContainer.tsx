import React from 'react';
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

export const ScrollContainer = () => (
  <div className={`flex flex-row gap-4 px-2 md:gap-8 md:px-4 sidescroller`}>
    <IconElement
      icon={SiJavascript}
      text="Javascript"
    />
    <IconElement
      icon={SiHtml5}
      text="HTML"
    />
    <IconElement
      icon={SiCss3}
      text="CSS"
    />
    <IconElement
      icon={SiVuedotjs}
      text="Vue.js"
    />
    <IconElement
      icon={SiReact}
      text="React"
    />
    <IconElement
      icon={SiGatsby}
      text="Gatsby"
    />
    <IconElement
      icon={SiTailwindcss}
      text="Tailwind CSS"
    />
    <IconElement
      icon={SiTypescript}
      text="TypeScript"
    />
    <IconElement
      icon={SiGit}
      text="Git"
    />
    <IconElement
      icon={SiGithub}
      text="GitHub"
    />
    <IconElement
      icon={SiNodedotjs}
      text="Node.js"
    />
    <IconElement
      icon={SiNpm}
      text="NPM"
    />
    <IconElement
      icon={SiFigma}
      text="Figma"
    />
    <IconElement
      icon={SiAdobephotoshop}
      text="Photoshop"
    />
  </div>
);
