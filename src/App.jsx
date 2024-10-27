import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />, // Main page
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />, // Login page
    },
    {
      path: "/register",
      element: <SignUpPage />, // Register page
    },

    {
      path: "/balance",
      element: <BalancePage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;
