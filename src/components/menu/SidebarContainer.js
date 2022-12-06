import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";

const SidebarContainer = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link href="../../index3.html" className="brand-link">
          <img
            src="../../dist/img/AdminLTELogo.png"
            alt="IGD  Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">
            IGD-Prop. Horizontal
          </span>
        </Link>
        <div className="sidebar">
          

          <Menu />
        </div>
      </aside>
    </div>
  );
};

export default SidebarContainer;
