import React from "react";
import Button from "../Button";
import LogoImgSvg from "../../images/svg/LogoImgSvg";
import LogoTextSvg from "../../images/svg/LogoTextSvg";

const Header = () => {
  return (
    <header className="header">
      <div className="outer-container">
        <div className="header__menu">
          <div className="header__logo">
            <LogoImgSvg />
            <LogoTextSvg />
          </div>
          <div className="header__buttons">
            <Button text="Users" />
            <Button text="Sign up" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
