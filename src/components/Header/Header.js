import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import BaseButton from "../Button/Button";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
const Header = () => {
  return (
    <header className="container">
      <Logo />
      <HeaderMenu />
      <div className="header-right">
        <BaseButton type="text" value="Log in" />
        <BaseButton type="primary" value="Sign up" />
      </div>
    </header>
  );
};

export default Header;
