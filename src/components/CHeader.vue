<template>
  <header
    class="fixed top-0 w-full bg-black/75 z-50 backdrop-blur-xl text-dark-text border-b-white/20 border-b">
    <div class="flex justify-between px-[5%] md:px-[10%] py-2">
      <RouterLink
        to="/"
        class="font-medium px-2 text-base/8">
        {{ siteTitle }}
      </RouterLink>
      <nav class="flex gap-4 justify-end items-center">
        <RouterLink
          v-for="page in pages"
          :key="page.path"
          :to="page.path || '/'"
          class="font-medium px-4 text-base/8 hidden sm:block menu-item">
          {{ page.name }}
        </RouterLink>
        <DropdownMenu :pages="pages" />
      </nav>
    </div>
    <div class="w-full translate-y-px">
      <div
        class="h-0.5 bg-light-accent dark:bg-dark-accent"
        :style="`width: ${progressWidth}%`"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DropdownMenu from './DropdownMenu.vue';
import { RouterLink } from 'vue-router';

const progressWidth = ref(0);
defineProps({
  siteTitle: {
    type: String,
    default: 'Title',
  },
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (isNaN(scrolled)) progressWidth.value = 0;
  else if (scrolled > 100) progressWidth.value = 1000;
  else progressWidth.value = scrolled;
};

const pages = [
  { name: 'Home', path: '/' },
  { name: 'University', path: '/uni' },
] as { name: string; path: string }[];
</script>

<style scoped>
.menu-item.router-link-active {
  @apply text-dark-text border-b-2 border-b-light-accent dark:border-b-dark-accent;
}

.menu-item:not(.router-link-active) {
  @apply text-dark-text/70 hover:text-dark-text;
}
</style>
