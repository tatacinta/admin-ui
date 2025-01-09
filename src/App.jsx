import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import { ThemeProvider } from "./component/context/ThemeContext"; // Make sure the import path is correct
import { AuthProvider } from "./component/context/AuthContext";

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

// Wrap the App component with ThemeProvider
const Root = () => (
  <AuthProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>
);

export default Root;
