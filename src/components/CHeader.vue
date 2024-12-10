<template>
  <header
    className="fixed top-0 w-full bg-black/75 z-50 backdrop-blur-xl text-dark-text border-b-white/20 border-b">
    <div className="flex justify-between px-[5%] md:px-[10%] py-2">
      <a
        href="/"
        className="font-medium px-2 text-base/8">
        {{ siteTitle }}
      </a>
      <nav className="flex gap-4 justify-end items-center">Work in Progress</nav>
    </div>
    <div className="w-full translate-y-px">
      <div
        className="h-0.5 bg-light-accent dark:bg-dark-accent"
        :style="`width: ${progressWidth}%`"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
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
</script>
