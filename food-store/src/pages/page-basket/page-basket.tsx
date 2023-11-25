'use client'
import React, {useContext, useState} from 'react';
import { IStoreProvider, StoreContext } from '@/providers/StoreProvider';
import ListCards from '@/components/list-cards/list-cards';
import Filters from "@/components/filters/filters";
import TileCards from "@/components/tile-cards/tail-cards";

const BasketContent = () => {
  const { basket, setBasket } = useContext<IStoreProvider>(StoreContext);
  const [ viewList, setViewList] = useState(true);
  const uniqueProducts = basket.filter((elem, index) => index === basket.findIndex((x) => x.prodId === elem.prodId ));
  const isEmpty: boolean = !Boolean(basket.length);
  const clearCart = (): void => {
    setBasket([]);
  }
  
  return (
    <div className="bg-white p-4 rounded-3 shadow-sm">
      <div className={`d-flex align-items-center flex-wrap justify-content-between ${!isEmpty && 'mb-3'} `}>
         <h5 className="h5">{isEmpty ? 'Здесь ничего нет' : 'Ваш заказ' }</h5>
        <div className="d-flex align-items-center flex-wrap gap-2">
          <button className="btn btn-sm btn-secondary" onClick={() => setViewList(!viewList)} >{viewList ? 'Показать плитки' : 'Показать список' } </button>
          <button className="btn btn-sm btn-primary" disabled={isEmpty}>Заказать</button>
          <button className="btn btn-sm btn-danger" disabled={isEmpty} onClick={clearCart}>Удалить все</button>
        </div>
      </div>
      {!isEmpty &&
        viewList ?
        <ListCards products={uniqueProducts} />
        :
        <TileCards products={uniqueProducts} />
      }
    </div>
  );
};

export default BasketContent;