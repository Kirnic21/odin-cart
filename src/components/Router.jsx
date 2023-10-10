import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shopping from "./Shopping";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "Shopping",
      element: <Shopping />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;