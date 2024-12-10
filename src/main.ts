import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import './styles/global.css';
import '@fontsource-variable/inter/index.css';
import App from './App.vue';

const head = createHead();

createApp(App).use(head).mount('#app');
