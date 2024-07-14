// PrivateRoute.js
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ element: Element, allowedUserTypes, ...rest }) => {
  const { isAuthenticated, userType } = useContext(AuthContext);

  return isAuthenticated && allowedUserTypes.includes(userType) ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
