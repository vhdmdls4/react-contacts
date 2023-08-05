import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AddContact from "../pages/AddContact";
import ContactDetails from "../pages/ContactDetails";

function AppRouter() {
  /* If I needed to implement authentication,
  I would add PublicRoute and PrivateRoute components
  here with some rolesAllowed, but I didn't have time.
  However, I know how to proceed if needed. */

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/details/:id" element={<ContactDetails />} />
    </Routes>
  );
}

export default AppRouter;
