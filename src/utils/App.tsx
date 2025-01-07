import React from "react";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import MainLayout from "../layout/MainLayout";
import WithPageTitle from "../hocs/WithPageTitle";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
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
