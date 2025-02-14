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
import AllRestaurantsPage from "./pages/AllRestaurantsPage";
import FilteredRestaurantsPage from "./pages/FilteredRestaurantsPage";
import NewSignUpPage from "./pages/NewSignUpPage";
import SignPageLayout from "./layout/SignPageLayout";
import LoginPage from "./pages/LoginPage";

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
          path="/restaurants/:orgId/menu"
          element={
            <WithPageTitle title="Tossed">
              <HomePage />
            </WithPageTitle>
          }
        ></Route>
        <Route path="/SignPage" element={<SignPageLayout />}>
          <Route
            index
            element={
              <WithPageTitle title="Account">
                <SignUpPage />
              </WithPageTitle>
            }
          ></Route>
          <Route
            path="SignUp"
            element={
              <WithPageTitle title="SignUp">
                <NewSignUpPage />
              </WithPageTitle>
            }
          ></Route>
          <Route
            path="LogIn"
            element={
              <WithPageTitle title="Login">
                <LoginPage />
              </WithPageTitle>
            }
          ></Route>
        </Route>
        <Route
          path="/restaurants"
          element={
            <WithPageTitle title="All-Restaurants">
              <AllRestaurantsPage />
            </WithPageTitle>
          }
        ></Route>
        <Route
          path="/filtered-restaurants"
          element={
            <WithPageTitle title="Filt-Restaurants">
              <FilteredRestaurantsPage />
            </WithPageTitle>
          }
        ></Route>
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
