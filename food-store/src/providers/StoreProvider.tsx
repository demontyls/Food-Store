'use client'
import {createContext, ReactNode, useEffect, useState} from "react";
import {IProduct} from '@/services/services';

const defaultValue = {};

export interface IStoreProvider {
  basket: IProduct[],
  setBasket: (value: IProduct[]) => void
}

export const StoreContext = createContext<IStoreProvider>(defaultValue as IStoreProvider);

export const StoreProvider = ({children}: { children: ReactNode }) => {
   return (
     <StoreContext.Provider value={useStoreProvider()}>
       {children}
     </StoreContext.Provider>
   )
}

export const useStoreProvider = ():IStoreProvider => {
  const [basket, setBasket] = useState<IProduct[]>([]);
  
  useEffect(()=> {
    if(localStorage.getItem('FoodStore')) {
        setBasket(JSON.parse(localStorage.getItem('FoodStore') ?? ''))
    }
  },[])
  
  useEffect(()=>{
    if (basket.length) {
        localStorage.setItem('FoodStore', JSON.stringify(basket));
    }
  }, [basket]);
  
  return {
    basket,
    setBasket
  }
}

