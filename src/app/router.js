import { createHomePage } from '@/features/home-page/home-page';
import { createMenuPage } from '@/features/menu-page/menu-page';

const routes = [
  {
    path: '/',
    render: createHomePage,
  },
  {
    path: '/menu',
    render: createMenuPage,
  },
];

export function router() {
  const app = document.querySelector('#app');

  if (!app) {
    throw new Error('App element not found');
  }

  const route = routes.find((route) => route.path === location.pathname);

  if (!route) {
    app.innerHTML = '<h1>404 - Page not found</h1>';
    return;
  }

  app.replaceChildren(route.render());
}

export function setupRouter() {
  document.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLAnchorElement)) {
      return;
    }

    console.log(target)

    event.preventDefault();

    const url = target.getAttribute('href');

    if (!url) {
      return;
    }

    history.pushState({}, '', url);

    router();
  });

  addEventListener('popstate', router);
}
