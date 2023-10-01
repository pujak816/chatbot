import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat";
import "react-chatbot-kit/build/main.css";
import EnrollmentConfirmation from "./pages/EnrollmentConfirmation";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/confirmationpage",
    element: <EnrollmentConfirmation />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
