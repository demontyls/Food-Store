'use client'
import React, {FC, useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import {IProduct} from '@/services/services';
import CustomImage from "@/components/custom-Image/Custom-image";
import './style.scss'
import {IStoreProvider, StoreContext, StoreProvider} from "@/providers/StoreProvider";

interface ICard {
  data: IProduct;
  path: string
}


const Card: FC<ICard> = ({ data, path }) => {
  const { basket, setBasket } = useContext<IStoreProvider>(StoreContext);
  const detailsPath: string = `${path}/${data.id}`;
  const price: string = `${Math.trunc(+data.price)}₽`;
  const btnClassName = 'btn btn-warning btn-sm rounded-5 text-white';
  const hasProducts = basket.filter(elem => elem.prodId === data.prodId );
  const addToBasket = (e:any, product: IProduct) => {
    e.preventDefault();
    setBasket([...basket, product]);
  }
  
  const removeFromBasket = (product: IProduct) => {
    const indexElem = basket.findIndex(elem => elem.prodId === product.prodId);
    basket.splice(indexElem, 1);
    console.log(basket);
    setBasket([...basket]);
  }
  
  return (
    <div className="product-card">
        <Link href={detailsPath} >
          <div className="img-wrapper">
            <CustomImage alt={data.name} src={data.avatar} width={100} />
            {data.isNew && <div className="badge">new</div>}
          </div>
        </Link>
        <div className="content-card">
          <div>
            <h5 className="h6 text-truncate">
              {data.name}
            </h5>
          </div>
          <p className="text-truncate mb-2">
            {data.description}
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <div className="price">
              {price}
            </div>
            {hasProducts.length >= 1 ?
               <div className="product-counter">
                  <button className={btnClassName} onClick={() => removeFromBasket(data)}>-</button>
                    <span>{hasProducts.length}</span>
                  <button className={btnClassName} onClick={e => addToBasket(e, data)}>+</button>
               </div> :
              <button className={btnClassName} onClick={e => addToBasket(e,data)}>
                В корзину
              </button>
            }
          </div>
        </div>
      
    </div>
  );
};

export default Card;