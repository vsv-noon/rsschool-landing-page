import { createHeader } from '@/components/header/header';
import { getTheme, setTheme } from '@/components/theme-switcher/theme-switcher';
import '@/styles/index.scss';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App element not found');
}

const currentTheme = getTheme();
setTheme(currentTheme);

const header = createHeader();

app.append(header);
