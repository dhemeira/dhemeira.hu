import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import './styles/global.css';
import '@fontsource-variable/inter/index.css';
import App from './App.vue';

import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

const head = createHead();

const routes = [
  { path: '/', component: HomeView },
  { path: '/uni', component: AboutView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).use(head).mount('#app');
