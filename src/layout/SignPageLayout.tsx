import React from "react";
import WithPageTitle from "../hocs/WithPageTitle";
import { Outlet } from "react-router-dom";

const SignPageLayout = () => {
  return (
    <WithPageTitle title="SignPage">
      <Outlet />
    </WithPageTitle>
  );
};

export default SignPageLayout;
