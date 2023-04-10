import React from "react";
import Style from "./navbar.module.scss";

const navbar = () => {
  return (
    <div className={Style.Container}>
      <div className={Style.Logo}></div>
      <div className={Style.NavItems}>
        <div className={Style.NavItem}>Helmet</div>
        <div className={Style.NavItem}>Armband</div>
      </div>
    </div>
  );
};

export default navbar;
