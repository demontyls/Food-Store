'use client'
import React, { FC, useContext } from 'react';
import { DrawerContext, type IDrawerProvider } from '@/providers/DrawerProviders';
import './style.scss';

const Burger:FC = () => {
    const {  showLeftDrawer,  setShowLeftDrawer } = useContext<IDrawerProvider>(DrawerContext);
    return (
        <button className="btn burger mr-2" onClick={() => setShowLeftDrawer(!showLeftDrawer)}>
            <i className="icon-burger"/>
        </button>
    );
}

export default Burger;