import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import store from './store/index.ts';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main } from './pages/Main/index.tsx';
import { Pictures } from './pages/Pictures/index.tsx';
import { CrosswordPage } from './pages/CrosswordPage/index.tsx';
import { AddNewCrossword } from './pages/AddNewCrossword/index.tsx';
import { ErrorPage } from './pages/ErrorPage/index.tsx';
import { HowToSolve } from './pages/HowToSolve/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'main-page',
        element: <Main />,
      },
      {
        path: 'crosswords',
        element: <Pictures />,
      },
      {
        path: 'how-to-solve',
        element: <HowToSolve />,
      },
      {
        path: 'create-crossword',
        element: <AddNewCrossword />,
      },
      {
        path: 'crossword/:id',
        element: <CrosswordPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
