<template>
  <Head>
    <title>{{ defaultTitle ? `${title} | ${defaultTitle}` : title }}</title>
    <meta
      name="description"
      :content="description" />
    <meta
      name="author"
      :content="site.siteMetadata?.author || ``" />
    <meta
      name="application-name"
      :content="defaultTitle" />
    <meta
      property="og:title"
      :content="defaultTitle ? `${title} | ${defaultTitle}` : title" />
    <meta
      property="og:description"
      :content="description" />
    <meta
      property="og:site_name"
      :content="defaultTitle" />
    <meta
      property="og:image"
      :content="`${site.siteMetadata?.siteUrl}/dark-hero-img.png`" />
    <meta
      property="og:image:secure_url"
      :content="`${site.siteMetadata?.siteUrl}/dark-hero-img.png`" />
    <meta
      property="og:url"
      :content="site.siteMetadata?.siteUrl" />
    <meta
      property="og:image:alt"
      :content="`${defaultTitle} logo`" />
    <meta
      name="robots"
      :content="index" />
    <meta
      name="theme-color"
      :content="site.pwa.theme_color" />
    <link
      rel="apple-touch-icon"
      :href="site.pwa.icon"
      sizes="512x512" />
  </Head>
</template>

<script setup lang="ts">
import site from '../utils/metaData.json';
import { Head } from '@unhead/vue/components';
defineProps({
  description: {
    type: String,
    default: site.siteMetadata.description,
  },
  title: {
    type: String,
    default: 'dhemeira',
  },
  index: {
    type: String,
    default: 'index, follow',
  },
});

const defaultTitle = site.siteMetadata?.title;
</script>
