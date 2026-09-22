import styles from './header.module.scss';

export function createHeader() {
  const header = document.createElement('header');
  header.classList = styles.header;

  return header;
}
