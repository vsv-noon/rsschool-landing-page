import { createHeader } from '@/components/header/header';
import { createFooter } from '@/components/footer/footer';
import { router, setupRouter } from './router';
import { getTheme, setTheme } from '@/components/theme-switcher/theme-switcher';
import '@/styles/index.scss';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App element not found');
}

const currentTheme = getTheme();
setTheme(currentTheme);

const header = createHeader();
const footer = createFooter();

app.before(header);
app.after(footer);

setupRouter();
router();
