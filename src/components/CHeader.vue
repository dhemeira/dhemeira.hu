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
    <ProgressContainer>
      <ProgressBar width="{progressWidth}" />
    </ProgressContainer>
  </header>
</template>

<script setup lang="ts">
defineProps({
  siteTitle: String,
});
</script>
