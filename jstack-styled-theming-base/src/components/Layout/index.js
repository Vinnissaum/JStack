import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Route from "../../Routes";
import { Nav } from "./styles";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </Nav>
      <Route />
      <Footer />
    </BrowserRouter>
  );
}
