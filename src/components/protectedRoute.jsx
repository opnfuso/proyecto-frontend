import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { checkRole } from "../api/auth.api";

export const ProtectedRoute = ({ component, rol }) => {
  const Component = withAuthenticationRequired(component, {
    claimCheck(claim) {
      const check = async (claim) => {
        const res = await checkRole(claim.sub, rol);
        if (!res.data.containsRole) {
          window.location.assign("/");
        }
      };
      check(claim);
      return true;
    },
    returnTo: "/",
  });

  return <Component />;
};
