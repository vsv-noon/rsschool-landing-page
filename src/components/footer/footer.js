import styles from './footer.module.scss';
import { createContainer } from '../container/container';
import clock from '@/assets/icons/clock.svg';
import phone from '@/assets/icons/phone.svg';
import pinAlt from '@/assets/icons/pin-alt.svg';
import { createTwitterIcon } from '@/icons/twitter';
import { createEnvelopeIcon } from '@/icons/envelope';
import { createSkypeIcon } from '@/icons/skype';

const contactItems = [
  {
    label: '8558 Green Rd., LA',
    svg: pinAlt,
    href: "https://www.google.com/maps/place/Parkers'+Lighthouse/@33.7637611,-118.188721,16.01z/data=!4m6!3m5!1s0x80dd3125a85f8ef3:0x13a546608196176c!8m2!3d33.7598611!4d-118.1917967!16s%2Fg%2F12ht41c8v?entry=ttu",
  },
  {
    label: '+1 (603) 555-0123',
    svg: phone,
    href: 'tel:+16035550123',
  },
  { label: 'Mon-Sat: 9:00 – 23:00', svg: clock },
];

const socialItems = [
  { svg: createTwitterIcon(), href: '#' },
  { svg: createEnvelopeIcon(), href: '#' },
  { svg: createSkypeIcon(), href: '#' },
];

export function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'contact-us';
  footer.className = styles.footer;

  const container = createContainer();
  container.classList.add(styles.footerContainer);

  const h2 = document.createElement('h2');
  h2.className = styles.h2;

  const span = document.createElement('span');
  span.className = styles.span;

  h2.textContent = 'Sip, Savor, Smile.';
  span.textContent = " It's coffee time!";
  h2.append(span);

  const leftColumn = document.createElement('div');
  leftColumn.className = styles.leftColumn;
  const rightColumn = document.createElement('div');
  rightColumn.className = styles.rightColumn;

  const socialList = document.createElement('ul');
  socialList.className = styles.socialList;

  for (const item of socialItems) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');

    link.className = styles.socialLink;
    link.href = item.href;
    link.target = '_blank';
    link.append(item.svg);

    listItem.append(link);
    socialList.append(listItem);
  }

  const h3 = document.createElement('h3');
  h3.className = styles.h3;
  h3.textContent = 'Contact us';

  const contactsList = document.createElement('ul');
  contactsList.className = styles.contacts;

  for (const item of contactItems) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    const image = document.createElement('img');

    image.src = item.svg;
    link.className = styles.contactsLink;
    link.href = item.href;
    link.target = '_blank';
    link.textContent = item.label;
    link.prepend(image);

    listItem.append(link);
    contactsList.append(listItem);
  }

  leftColumn.append(h2, socialList);
  rightColumn.append(h3, contactsList);

  container.append(leftColumn, rightColumn);

  footer.append(container);

  return footer;
}
