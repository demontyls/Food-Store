import {Metadata, NextPage} from 'next';
import React from 'react';
import BasketContent from '@/pages/page-basket/page-basket';

export const metadata: Metadata = {
  title: 'Food Store | Basket',
  description: 'Page with selected products',
}
const BasketPage: NextPage<any> = async () => {
  return (
    <div>
      <h2 className="h2 mb-3">Корзина</h2>
        <BasketContent/>
    </div>
  )
}
export default BasketPage;