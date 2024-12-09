<template>
  <div :class="containerStyles">
    <div :class="wheelStyles"></div>

  </div>
</template>

<script setup lang="ts">
import '../styles/ScrollAnim.css';
const containerStyles =
  'w-6 h-11 rounded-full border-2 border-light-text dark:border-dark-text flex justify-center items-start pt-2';
const wheelStyles = 'scroll-wheel w-2 h-2 rounded-full bg-light-text dark:bg-dark-text';

</script>