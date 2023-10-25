import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shopping from "./Shopping";
import Cart from "./Cart"
import Payment from "./Payment";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "Shopping",
      element: <Shopping/>,
    },
    {
    path: "Payment",
    element: <Payment></Payment>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;