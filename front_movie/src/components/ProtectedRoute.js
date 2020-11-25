import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function ProtectedRoute({ component: Comp, ...props }) {
  return (
    <div>
      <Route
        {...props}
        render={props =>
          isAuthenticated() ? <Comp {...props} /> : <Redirect to="/login" />
        }
      />
    </div>
  );
}