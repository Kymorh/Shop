import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import { Products } from './pages/Products.jsx';
import { AllProducts} from './pages/AllProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<AllProducts/>
  },
  {
    path:"/product/:id",
    element: <App/>
  },
  {
    path:"/products",
    element:<Products/>
  }

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)


