import { createThemeSwitcher } from '@/components/theme-switcher/theme-switcher';
import { createBurgerButton } from '../burger-menu/burger-menu';
import { createCoffeeCupIcon } from '@/icons/coffee-cup';
import { createLogoIcon } from '@/icons/logo';
import styles from './header.module.scss';

const navigationItems = [
  { label: 'Favorite coffee', href: '/#favorite-coffee' },
  { label: 'About', href: '/#about' },
  { label: 'Mobile app', href: '/#mobile-app' },
  { label: 'Contact us', href: '#contact-us' },
];

export function createHeader() {
  const header = document.createElement('header');
  header.classList = styles.header;

  const logo = document.createElement('a');
  logo.className = styles.logo;
  logo.href = '/';

  const logoImg = createLogoIcon();

  logo.append(logoImg);

  const nav = document.createElement('nav');
  nav.className = styles.nav;
  nav.setAttribute('aria-label', 'Main navigation');

  const list = document.createElement('ul');
  list.className = styles.list;

  for (const item of navigationItems) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.className = styles.link;
    link.href = item.href;
    link.textContent = item.label;

    listItem.append(link);
    list.append(listItem);
  }

  nav.append(list);

  const themeSwitcher = createThemeSwitcher();
  const coffeeCupIcon = createCoffeeCupIcon();

  const menuLink = document.createElement('a');
  menuLink.className = styles.menuLink;
  menuLink.href = '/menu';

  const menuText = document.createElement('span');
  menuText.className = styles.menuText;
  menuText.textContent = 'Menu';

  menuLink.append(menuText, coffeeCupIcon);

  const actions = document.createElement('div');
  actions.className = styles.actions;

  const burger = createBurgerButton();
  actions.append(themeSwitcher, menuLink, burger);

  header.append(logo, nav, actions);
  return header;
}
