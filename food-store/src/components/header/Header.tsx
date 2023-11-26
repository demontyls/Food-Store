import React from 'react';
import './style.scss'
import BasketLink from '@/components/basket-link/basket-link';
import Burger from '@/components/burger/burger';
import Logo from "@/components/logo/logo";

const Header = () => {
    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Burger />
                    <Logo/>
                </div>
                <BasketLink />
            </div>
        </header>
    );
};

export default Header;