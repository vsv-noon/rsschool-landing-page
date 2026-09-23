import { createHeader } from '@/components/header/header';
import { getTheme, setTheme } from '@/components/theme-switcher/theme-switcher';
import { createHomePage } from '@/features/home-page/home-page';
import '@/styles/index.scss';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App element not found');
}

const currentTheme = getTheme();
setTheme(currentTheme);

const header = createHeader();

const homePage = createHomePage();

app.append(header, homePage);
