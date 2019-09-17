import React from "react";

//style
import { Navbar, NavItem } from "react-materialize";
import style from "../../assets/css/Layout.module.css";

const Nav = () => {
  return (
    <Navbar className={style.navBar} alignLinks="left">
      <NavItem>PROMOTIONS</NavItem>
    </Navbar>
  );
};

export default Nav;
