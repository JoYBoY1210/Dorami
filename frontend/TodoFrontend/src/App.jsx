import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";
import DashboardPage from "./components/Pages/DashboardPage";
import SignInPage from "./components/Pages/SignInPage";
import SignUpPage from "./components/Pages/SignUpPage";
import TodoPage from "./components/Pages/TodoPage";
import CreateTodoPage from "./components/Pages/CreateTodoPage";
import { DateContextProvider } from "./context/DateContext";
import { UserContextProvider } from "./context/UserContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const token = Cookies.get("access_token");
    setIsAuthenticated(!!token); 
  }, []);

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/sign-in" />,
    },
    {
      path: "/sign-in",
      element: isAuthenticated ? <Navigate to="/dashboard" /> : <SignInPage />,
    },
    {
      path: "/sign-up",
      element: isAuthenticated ? <Navigate to="/dashboard" /> : <SignUpPage />,
    },
    {
      path: "/dashboard",
      element: isAuthenticated ? <DashboardPage /> : <Navigate to="/sign-in" />,
    },
    {
      path: "/todos",
      element: isAuthenticated ? <TodoPage /> : <Navigate to="/sign-in" />,
    },
    {
      path: "/create-todo",
      element: isAuthenticated ? <CreateTodoPage /> : <Navigate to="/sign-in" />,
    },
  ]);

  return (
    <DateContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </DateContextProvider>
  );
}

export default App;
