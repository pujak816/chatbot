import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat";
import "react-chatbot-kit/build/main.css";
import EnrollmentConfirmation from "./pages/EnrollmentConfirmation";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

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
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
