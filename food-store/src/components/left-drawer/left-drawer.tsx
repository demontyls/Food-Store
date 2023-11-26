'use client'
import React, { FC, useContext } from 'react';
import Navbar from '@/components/navbar/navbar';
import { DrawerContext, IDrawerProvider } from '@/providers/DrawerProviders';
import Logo from '@/components/logo/logo';
import './style.scss'

const LeftDrawer: FC = () => {
  const {  showLeftDrawer,  setShowLeftDrawer } = useContext<IDrawerProvider>(DrawerContext);

  return (
    <>
      {showLeftDrawer &&
        <div className="left-drawer">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Logo />
            <button className="btn" onClick={() => setShowLeftDrawer(!showLeftDrawer)}>
              x
            </button>
          </div>
          <Navbar/>
        </div>
      }
    </>
  );
}

export default LeftDrawer;