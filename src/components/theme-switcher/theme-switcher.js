import { createSunIcon } from './sun-icon';
import { createMoonIcon } from './moon-icon';
import styles from './theme-switcher.module.scss';

export function createThemeSwitcher() {
  const themeSwitcher = document.createElement('div');
  themeSwitcher.className = styles.themeSwitcher;

  const sun = createSunIcon();
  const sunContainer = document.createElement('div');
  sunContainer.append(sun);
  sunContainer.className = styles.sunContainer;

  const moon = createMoonIcon();
  const moonContainer = document.createElement('div');
  moonContainer.append(moon);
  moonContainer.className = styles.moonContainer;

  themeSwitcher.append(sunContainer, moonContainer);

  return themeSwitcher;
}
