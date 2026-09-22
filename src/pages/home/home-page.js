import styles from './home-page.module.scss';

export function createHomePage() {
  const page = document.createElement('main');

  page.className = styles.home;

  return page;
}
