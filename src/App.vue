<template>
  <Layout>
    <div class="container flex flex-col gap-8 md:gap-16">
      <div class="row content-between gap-y-14">
        <div class="hidden lg:block lg:col-1"></div>
        <div
          class="col-12 md:col-8 lg:col-6 xl:col-5 flex flex-col items-start justify-center gap-8">
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tighter text-left">
            dhemeira
            <div>
              {{ ' ' }}
              <span
                class="bg-gradient-to-br from-dark-secondary dark:from-dark-primary dark:to-dark-accent to-light-accent text-transparent bg-clip-text inline-block">
                front-end
              </span>
              {{ ' ' }}
              developer
            </div>
          </h1>
          <div class="flex flex-col gap-4">
            <div>
              <p class="text-balance">
                CS student & front-end developer from Hungary. Passionate about software
                development, UI design, and all things tech. I love creating smooth, user-friendly
                websites and bringing innovative ideas to life.
              </p>
            </div>
          </div>
        </div>
        <div class="hidden xl:block xl:col-1"></div>
        <div class="hidden md:flex col-4 items-center justify-center">
          <div class="hero-img aspect-square w-full rounded-2xl"></div>
        </div>
        <div class="hidden lg:block lg:col-1"></div>
        <div class="col flex flex-col items-center gap-1">
          <ScrollAnim />
          <span class="text-sm">Scroll for more</span>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2 class="text-2xl mb-4 text-center">Languages and Tools</h2>
        </div>
      </div>
    </div>
    <div className="overflow-x-hidden flex flex-row blur-edges">
      <ScrollContainer />
      <ScrollContainer />
    </div>
  </Layout>
  <SeoHeader title="Home" />
</template>

<script setup lang="ts">
import ScrollAnim from './components/ScrollAnim.vue';
import Layout from './components/CLayout.vue';
import './styles/Home.css';
import ScrollContainer from './components/ScrollContainer.vue';
import SeoHeader from './components/SeoHeader.vue';
</script>
