<template>
  <footer
    :class="[
      'bg-black/75 w-full px-[5%] md:px-[10%] py-2 flex justify-between items-end text-dark-text border-t-white/20 border-t',
    ]">
    <span class="flex flex-col">
      <a href="https://dhemeira.hu">www.dhemeira.hu</a>
      <span>© 2023-{{ currentYear }} | dhemeira</span>
    </span>
    <a
      class="p-1"
      href="https://github.com/dhemeira"
      aria-label="GitHub"
      title="GitHub"
      rel="noreferrer"
      target="_blank">
      Github icon placeholder
    </a>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
