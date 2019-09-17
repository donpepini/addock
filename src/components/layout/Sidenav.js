import React from "react";

//style
import style from "../../assets/css/Layout.module.css";
import { SideNav, SideNavItem } from "react-materialize";
import addockLogo from "../../assets/img/addock-logo.svg";

const Sidenav = () => {
  return (
    <SideNav
      className={style.sideNav}
      options={{ closeOnClick: false, fixed: false }}
    >
      <SideNavItem style={{ marginTop: "30px" }}>
        <img src={addockLogo} style={{ width: "200px" }} alt="addock-logo" />
      </SideNavItem>
    </SideNav>
  );
};

export default Sidenav;
