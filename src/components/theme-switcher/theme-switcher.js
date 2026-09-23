import { createSunIcon } from './sun-icon';
import { createMoonIcon } from './moon-icon';
import styles from './theme-switcher.module.scss';

export function createThemeSwitcher() {
  const themeSwitcher = document.createElement('div');
  themeSwitcher.className = styles.themeSwitcher;

  const sun = createSunIcon();
  const sunButton = document.createElement('button');
  sunButton.type = 'button';
  sunButton.className = styles.sunButton;

  sunButton.append(sun);

  sunButton.addEventListener('click', () => {
    const theme = 'light';

    setTheme(theme);
    updateButton(theme);
  });

  const moon = createMoonIcon();
  const moonButton = document.createElement('button');
  moonButton.type = 'button';
  moonButton.className = styles.moonButton;
  moonButton.append(moon);

  moonButton.addEventListener('click', () => {
    const theme = 'dark';

    setTheme(theme);
    updateButton(theme);
  });

  const currentTheme = getTheme();

  function updateButton(theme) {
    if (theme === 'dark') {
      moonButton.classList.add(styles.disableClicks);
      sunButton.classList.remove(styles.disableClicks);
    } else {
      moonButton.classList.remove(styles.disableClicks);
      sunButton.classList.add(styles.disableClicks);
    }
  }

  updateButton(currentTheme);

  themeSwitcher.append(sunButton, moonButton);

  return themeSwitcher;
}

export function getTheme() {
  const savedTheme = localStorage.getItem('theme');

  return savedTheme;
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}
