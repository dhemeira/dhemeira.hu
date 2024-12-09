<template>
  <div class="flex flex-row gap-4 px-2 md:gap-8 md:px-4 sidescroller">
    <div v-for="({ icon, text }, index) in icons" :key="index" :icon="icon" :text="text">
      <div :class="[
        'flex flex-row items-center justify-center py-2 divide-x-2 divide-light-text/30 dark:divide-dark-text/80',
        'bg-light-primary/5 dark:bg-dark-primary/5',
        'from-30% bg-gradient-to-tl',
        'from-light-secondary/30 dark:from-dark-secondary/5',
        'to-light-secondary/5 dark:to-dark-secondary/30',
        'rounded-full shadow tabular-nums border-2 border-light-text/80 dark:border-dark-text/80',
        'text-light-text/80 dark:text-dark-text/80'
      ]">
        <span className="text-nowrap px-4 md:px-8">{{ text }}</span>
        <span className="px-4 md:px-8">
          <span class="w-6 h-6 md:w-8 md:h-8">{{ icon }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const icons = [
  { icon: "SiJavascript", text: 'Javascript' },
  { icon: "SiHtml5", text: 'HTML' },
  { icon: "SiCss3", text: 'CSS' },
  { icon: "SiVuedotjs", text: 'Vue.js' },
  { icon: "SiReact", text: 'React' },
  { icon: "SiGatsby", text: 'Gatsby' },
  { icon: "SiTailwindcss", text: 'Tailwind CSS' },
  { icon: "SiTypescript", text: 'TypeScript' },
  { icon: "SiGit", text: 'Git' },
  { icon: "SiGithub", text: 'GitHub' },
  { icon: "SiNodedotjs", text: 'Node.js' },
  { icon: "SiNpm", text: 'NPM' },
  { icon: "SiFigma", text: 'Figma' },
  { icon: "SiAdobephotoshop", text: 'Photoshop' },
];
</script>