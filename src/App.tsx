import React from "react";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import MainLayout from "./layout/MainLayout";
import WithPageTitle from "./hocs/WithPageTitle";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route
          path="/"
          index
          element={
            <WithPageTitle title="Deliveroo">
              <LandingPage />
            </WithPageTitle>
          }
        ></Route>
        <Route
          path="/menu"
          element={
            <WithPageTitle title="Tossed">
              <HomePage />
            </WithPageTitle>
          }
        ></Route>
        <Route
          path="/SignPage"
          element={
            <WithPageTitle title="Sign Up">
              <SignUpPage />
            </WithPageTitle>
          }
        ></Route>
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
