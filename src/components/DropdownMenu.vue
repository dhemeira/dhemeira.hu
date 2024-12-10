<template>
  <Menu as="div">
    <MenuButton
      v-slot="{ open }"
      aria-label="Navigation Menu"
      class="w-8 h-8 flex-col justify-center items-center gap-1 inline-flex sm:hidden">
      <HamburgerLine :class="open ? 'rotate-45 translate-y-2' : ''" />
      <HamburgerLine :class="open ? 'rotate-45' : ''" />
      <HamburgerLine :class="open ? '-rotate-45 -translate-y-2' : ''" />
    </MenuButton>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-75 opacity-0"
      enter-to-class=""
      leave-active-class="transition duration-200 ease-out"
      leave-from-class=""
      leave-to-class="transform scale-75 opacity-0">
      <MenuItems
        :class="[
          'absolute right-0 origin-top z-50',
          'divide-y flex sm:hidden flex-col',
          'bg-black/75 shadow backdrop-blur-xl',
          'pt-8 pb-24 px-4 mt-[11px] outline-none text-center',
          'w-screen max-w-full h-[calc(100vh-50px)]',
        ]">
        <MenuItem
          v-for="page in pages"
          :key="page.path">
          <RouterLink
            class="p-4 text-base/8 menu-item"
            :to="page.path || '/'">
            {{ page.name }}
          </RouterLink>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import HamburgerLine from './HamburgerLine.vue';

defineProps<{
  pages: { name: string; path: string }[];
}>();
</script>

<style scoped>
.menu-item.router-link-active {
  @apply text-dark-text font-semibold;
}

.menu-item:not(.router-link-active):hover {
  @apply text-dark-text/70 font-medium hover:text-dark-text;
}
</style>
