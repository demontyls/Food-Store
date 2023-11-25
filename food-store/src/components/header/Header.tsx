import React from 'react';
import './style.scss'
import Navlink from "@/components/nav-link/nav-link";
import BasketLink from "@/components/basket-link/basket-link";

const Header = () => {
  return (
    <header className="header">
      <div>ЛОГО</div>
      <BasketLink />
    </header>
  );
};

export default Header;