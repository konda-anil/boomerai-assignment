import React from "react";
import { NAV_ITEMS } from "./Constants";
import { NavItemsContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  console.log("path: ", window.location.pathname);

  return (
    <NavItemsContainer>
      {NAV_ITEMS.map((navItem) => (
        <li key={navItem.title}>
          <NavLink to={navItem.link}>
            <FontAwesomeIcon icon={navItem.icon} />
            <span className="title">{navItem.title}</span>
          </NavLink>
        </li>
      ))}
    </NavItemsContainer>
  );
};

export default NavbarComponent;
