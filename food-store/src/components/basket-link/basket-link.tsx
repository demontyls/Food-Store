'use client'
import React, {FC, useContext} from 'react';
import Navlink from "@/components/nav-link/nav-link";
import {IStoreProvider, StoreContext} from "@/providers/StoreProvider";
import './style.scss';

interface IBasketLink {

}

const BasketLink: FC<IBasketLink> = () => {
  const { basket } = useContext<IStoreProvider>(StoreContext);
  return (
    <div className="d-flex align-items-center">
      <Navlink path={'/basket'} name={'Корзина'}/>
      {Boolean(basket.length) &&
        <div className="counter bg-primary">
          {basket.length > 9 ? `9+` : basket.length}
        </div>
      }
    </div>
  );
};

export default BasketLink;