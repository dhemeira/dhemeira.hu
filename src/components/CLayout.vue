<template>
  <div
    className="min-h-screen flex flex-col bg-light-background dark:bg-dark-background bg-top-gradient">
    <SkipToMain />
    <Header site-title="dhemeira" />
    <main
      id="main"
      :class="['text-light-text dark:text-dark-text', 'pt-24 md:pt-32 pb-12 flex-1']">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './CHeader.vue';
import Footer from './CFooter.vue';
import SkipToMain from './SkipToMain.vue';
</script>
