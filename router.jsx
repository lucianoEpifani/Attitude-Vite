import App from './src/App';
import Products from './src/components/Products/Products';
import Product from './src/components/Product/Product';
import {
  createHashRouter,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/products/:id",
    element: <Product/>,
  },
]);

export default router;