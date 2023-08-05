// Layout.js
import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { Container } from "reactstrap";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <main className="mt-5">{children}</main>
      </Container>

      <Footer />
    </div>
  );
}

export default Layout;
