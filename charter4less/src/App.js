
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/Landingpage/LandingPage';
import './index.css';
import CategoriesPage from './pages/Categoriespage/CategoriesPage';
import HowItWorkspage from './pages/HowItWorks/HowItWorkspage';
import Itempage from './pages/Itempage/Itempage';
import Errorpage from './pages/Errorpage/Errorpage';
import ListItempage from './pages/Listitempage/ListItempage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <Errorpage />,
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/howitworks',
    element: <HowItWorkspage />,
  },
  {
    path: '/item',
    element: <Itempage />,
    // loader: itemLoader,
  },
  {
    path: '/listitem',
    element: <ListItempage />,
  },
  {
    path: '*',
    element: <Errorpage />,
  }
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
