import { createHero } from './components/hero/hero';
import styles from './home-page.module.scss';

export function createHomePage() {
  const page = document.createElement('main');
  page.className = styles.home;

  const hero = createHero();

  page.append(hero);

  return page;
}
