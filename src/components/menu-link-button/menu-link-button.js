import { createCoffeeCupIcon } from '@/icons/coffee-cup';
import styles from './menu-link-button.module.scss';

export function createMenuLink() {
  const menuLink = document.createElement('a');
  menuLink.className = styles.menuLink;
  menuLink.href = '/menu';

  const menuText = document.createElement('span');
  menuText.className = styles.menuText;
  menuText.textContent = 'Menu';

  const coffeeCupIcon = createCoffeeCupIcon();
  coffeeCupIcon.classList.add(styles.coffeeCupIcon);

  menuLink.append(menuText, coffeeCupIcon);

  return menuLink;
}
