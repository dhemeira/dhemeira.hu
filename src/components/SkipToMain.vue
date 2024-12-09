<template>
  <a
    href="#main"
    :class="[
      'fixed left-0 top-24 z-[100] p-5 pl-8 rounded-r-full',
      'bg-light-secondary/30 text-light-text text-center dark:bg-dark-secondary/30 dark:text-dark-text',
      'opacity-0 -translate-x-72 transition-all',
      'focus:opacity-100 focus:translate-x-0',
      'focus:outline-none focus:ring dark:focus:ring-dark-accent focus:ring-light-accent',
    ]">
    Skip to main
    <br />
    content
  </a>
</template>
