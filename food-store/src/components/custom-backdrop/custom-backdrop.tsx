'use client'
import React, { useContext } from 'react';
import { DrawerContext, IDrawerProvider } from '@/providers/DrawerProviders';
import './style.scss';
const CustomBackdrop = ({}) =>{
  const {  showLeftDrawer, setShowLeftDrawer} = useContext<IDrawerProvider>(DrawerContext);
    return (
      <>
        {showLeftDrawer && <div className="custom-backdrop" onClick={()=> setShowLeftDrawer(false) }/>}
      </>
    );

}
export default CustomBackdrop;