import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { AuthContextProvider } from "./context/AuthContext";
import Card from "./components/Card";
import CardList from "./components/CardList";
import Dashboard from "./components/DashboardMain";
import TodoView from "./components/TodoView";
import { DateContextProvider } from "./context/DateContext";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import CreateTodo from "./components/CreateTodo";
import { UserContextProvider } from "./context/UserContext";
import DashboardMain from "./components/DashboardMain";
import TodoPage from "./components/Pages/TodoPage";
import DashboardPage from "./components/Pages/DashboardPage";
import SignInPage from "./components/Pages/SignInPage";
import SignUpPage from "./components/Pages/SignUpPage";
import CreateTodoPage from "./components/Pages/CreateTodoPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/sign-in",
      element: <SignInPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/todos",
      element: <TodoPage />,
    },
    {
      path: "/create-todo",
      element: <CreateTodoPage />,
    },
  ]);

  return (
    <AuthContextProvider>
      <DateContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </DateContextProvider>
    </AuthContextProvider>
  );
}

export default App;
