import { createContainer } from '@/components/container/container';
import styles from './hero.module.scss';
import { createMenuLink } from '@/components/menu-link-button/menu-link-button';

export function createHero() {
  const hero = document.createElement('section');
  hero.className = styles.hero;

  const container = createContainer();
  container.classList.add(styles.heroContainer);

  const h1 = document.createElement('h1');
  h1.className = styles.h1;
  h1.textContent = 'Coffee House';

  const textContainer = document.createElement('div');
  textContainer.className = styles.textContainer;

  const h2 = document.createElement('h2');
  const span = document.createElement('span');
  h2.className = styles.h2;
  span.textContent = 'Enjoy';
  span.className = styles.span;
  h2.textContent = ' premium coffee at our charming cafe';
  h2.prepend(span);

  const p = document.createElement('p');
  p.className = styles.p;
  p.textContent =
    'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.';

  const menuLink = createMenuLink();
  menuLink.classList.add(styles.heroMenuLink);

  textContainer.append(h1, h2, p, menuLink);
  container.append(textContainer);
  hero.append(container);

  return hero;
}
