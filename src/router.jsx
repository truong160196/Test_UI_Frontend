import React from 'react';

import * as Types from './constants/ActionTypes';

// import page
import HomePage from './components/page/home/Home';
import NotFoundPage from './components/page/exception/NotFoundPage';

const routes = [
  {
    path: Types.ROUTER_DEFAULT,
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
