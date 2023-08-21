import App from './src/App';
import Products from './src/components/Products/Products';
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
]);

export default router;