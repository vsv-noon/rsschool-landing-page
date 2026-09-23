import styles from './icons.module.scss';

export function createCoffeeCupIcon() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');

  svg.setAttribute('viewBox', '0 0 20 20');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.classList.add(styles.coffeeCup);

  const path1 = document.createElementNS(svgNS, 'path');

  path1.setAttribute(
    'd',
    'M14.167 9.76667V11.6667C14.167 14.8883 11.5553 17.5 8.33366 17.5C5.112 17.5 2.50033 14.8883 2.50033 11.6667V9.76667C2.50033 9.4353 2.76896 9.16667 3.10033 9.16667H13.567C13.8984 9.16667 14.167 9.4353 14.167 9.76667Z'
  );

  path1.setAttribute('stroke', 'currentColor');
  path1.setAttribute('stroke-width', '1.5');
  path1.setAttribute('stroke-linecap', 'round');
  path1.setAttribute('stroke-linejoin', 'round');

  const path2 = document.createElementNS(svgNS, 'path');

  path2.setAttribute(
    'd',
    'M10.0003 7.50008C10.0003 6.66675 10.5956 5.83341 11.786 5.83341V5.83341C13.101 5.83341 14.167 4.76743 14.167 3.45246V2.91675'
  );

  path2.setAttribute('stroke', 'currentColor');
  path2.setAttribute('stroke-width', '1.5');
  path2.setAttribute('stroke-linecap', 'round');
  path2.setAttribute('stroke-linejoin', 'round');

  const path3 = document.createElementNS(svgNS, 'path');

  path3.setAttribute(
    'd',
    'M6.66634 7.5V7.08333C6.66634 5.70262 7.78563 4.58333 9.16634 4.58333V4.58333C10.0868 4.58333 10.833 3.83714 10.833 2.91667V2.5'
  );

  path3.setAttribute('stroke', 'currentColor');
  path3.setAttribute('stroke-width', '1.5');
  path3.setAttribute('stroke-linecap', 'round');
  path3.setAttribute('stroke-linejoin', 'round');

  const path4 = document.createElementNS(svgNS, 'path');

  path4.setAttribute(
    'd',
    'M13.333 9.16675H15.4163C16.5669 9.16675 17.4997 10.0995 17.4997 11.2501C17.4997 12.4007 16.5669 13.3334 15.4163 13.3334H14.1663'
  );

  path4.setAttribute('stroke', 'currentColor');
  path4.setAttribute('stroke-width', '1.5');
  path4.setAttribute('stroke-linecap', 'round');
  path4.setAttribute('stroke-linejoin', 'round');

  svg.append(path1, path2, path3, path4);

  return svg;
}
