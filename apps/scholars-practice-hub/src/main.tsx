import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './utils/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(router)} />
    </Provider>
  </StrictMode>
);
