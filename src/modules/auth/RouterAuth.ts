import React from "react";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Register",
    component: React.lazy(() => import("./views/Register")),
  },
  {
    path: "/register",
    exact: true,
    name: "Register",
    component: React.lazy(() => import("./views/Register")),
  },
  {
    path: "/login",
    name: "Details",
    component: React.lazy(() => import("./views/Login")),
  },
];

export default routes;
