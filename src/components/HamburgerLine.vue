<template>
  <div :class="`w-8 h-1 bg-dark-text rounded transition-transform ${className}`"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>
