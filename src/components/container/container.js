import styles from './container.module.scss';

export function createContainer() {
  const container = document.createElement('div');
  container.className = styles.container;

  return container;
}
